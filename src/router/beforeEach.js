import localforage from "localforage"
import router from './index'
import { filterAsyncRoutes } from '@/utils/permission'

const needAuth = route => route.meta.requiresAuth !== false

const beforeEach = async (to, from, next) => {
  /**
   * Otherwise  if authentication is required login.
   */

  if (to.path.indexOf('auth') > 0) {
    localforage.clear()
    next()
  } else {

    const token = await localforage.getItem('token')

    if (needAuth(to) && token === null && to.path.indexOf('auth') < 0) {
      next({ name: 'auth.login'})
    } else{
      let is_filtered = await localforage.getItem('is_filtered')

      if (is_filtered) {
        next()
      } else {
        const asyncRoutes = await filterAsyncRoutes()

        router.addRoutes(asyncRoutes)
        localforage.setItem('is_filtered', true)
        next({ ...to, replace: true })
      }
    }

  }
}

export default beforeEach

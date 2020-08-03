import localforage from "localforage"

const needAuth = route => route.meta.requiresAuth !== false

const beforeEach = (to, from, next) => {
  /**
   * Otherwise  if authentication is required login.
   */

   if (to.path.indexOf('auth') > 0) localforage.clear()

  localforage
    .getItem('token')
    .then((token) => {

      if (needAuth(to) && token === null && to.path.indexOf('auth') < 0) next({ name: 'auth.login'})
      else next()

    })
    .catch(() => {
      next({ name: 'auth.login' })
    })
}

export default beforeEach

import localforage from "localforage"
import { asyncRoutes } from '@/router'

/**
 * 根据权限过滤异步路由
 */
export async function filterAsyncRoutes() {
  const permissionRoutes = await localforage.getItem('permissions');
  const routes = [];

  permissionRoutes.map(route => {
    let routeName = route.name.split('/').filter(item => item)
    routeName[0] = routeName[0].padStart(routeName[0].length + 1, '/')

    let routeObject = getRoutesByPermissionName(routeName, asyncRoutes, route.actions)

    let parentRoute = routes.find(route => route.path === routeObject.path)
    if (parentRoute !== undefined) {
      parentRoute.children.push(routeObject.children[0])
    } else {
      routes.push(routeObject)
    }
  })

  routes.push({ path: '*', redirect: '/404' })
  return routes;
}

/**
 * 根据权限路由地址获取 vue 路由
 *
 * @param {array} nameArr
 * @param {array} routes
 * @param {array} actions
 */
function getRoutesByPermissionName(nameArr, routes, actions) {
  let route = {}
  nameArr.forEach(name => {
    let item = routes.find(item => item.path === name)
    route = {...item}
    route.children = []

    if (nameArr.length === 1) {

      item.children.forEach(children => {
        let listBool = children.meta.actions === 'list'
        let includeActionsBool = actions.includes(children.meta.actions)

        if (listBool || includeActionsBool) route.children.push(children)
      })

    } else {

      let childrenRoute = getRoutesByPermissionName(nameArr.splice(1, 1), item.children, actions)

      route.children.push(childrenRoute)
    }
  })

  return route
}

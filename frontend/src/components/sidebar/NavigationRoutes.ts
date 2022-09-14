export interface INavigationRoute {
  name: string
  displayName: string
  meta: { icon: string }
  children?: INavigationRoute[]
}

export default {
  root: {
    name: '/',
    displayName: 'navigationRoutes.home',
  },
  routes: [
    {
      name: 'dashboard',
      displayName: '나의 금융정보 불러오기',
      meta: {
        // icon: 'vuestic-iconset-dashboard',
      },
    },
    {
      name: 'dashboard',
      displayName: '세금 예측',
      meta: {
        // icon: 'vuestic-iconset-dashboard',
      },
    },    
    {
      name: 'dashboard',
      displayName: '전세 솔루션',
      meta: {
        // icon: 'vuestic-iconset-dashboard',
      },
    },      
    {
      name: 'dashboard',
      displayName: '사이트 정보',
      meta: {
        // icon: 'vuestic-iconset-dashboard',
      },
    },     
  ] as INavigationRoute[],
}

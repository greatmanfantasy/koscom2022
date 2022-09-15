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
      displayName: '정보입력',
      meta: {
        icon: 'vuestic-iconset-dashboards',
      },
    },
    {
      name: 'dashboard',
      displayName: '금융정보 불러오기',
      meta: {
        icon: 'vuestic-iconset-dashboards',
      },
    },    
    {
      name: 'dashboard',
      displayName: '세액 계산',
      meta: {
        icon: 'vuestic-iconset-dashboards',
      },
    },      
    {
      name: 'dashboard',
      displayName: '절세 솔루션',
      meta: {
        icon: 'vuestic-iconset-dashboards',
      },
    },     
    {
      name: 'dashboard',
      displayName: '사이트 정보',
      meta: {
        icon: 'vuestic-iconset-dashboards',
      },
    },         
  ] as INavigationRoute[],
}

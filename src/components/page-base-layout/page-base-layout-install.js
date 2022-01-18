import mainBaseLayout from '@/components/page-base-layout/main-base-layout'
import createAndUpdateBaseLayout from '@/components/page-base-layout/create-and-update-base-layout'

export default (app) => {
  app.component('MainBaseLayout', mainBaseLayout)
  app.component('CreateAndUpdateBaseLayout', createAndUpdateBaseLayout)
}

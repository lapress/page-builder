import { createModule } from 'lapress-frontend-core/src/utils/helpers';

import Modules from './src/components/modules'

export const KEY = 'pages';
export default createModule({
  key: KEY,
  config: {
    navigation: {
      title: 'Strona główna',
      subtitle: 'Ustawienia sekcji na stronie głównej',
    },
    modules: Modules
  },
  register(Vue, options = { modules: [] }) {
    Vue.component('LpPageBuilder', () => import(/* webpackChunkName: "lp-page-builder" */ './src/components/LpPageBuilder'));
    // Vue.prototype.$lapress[KEY].modules = Object.assign(Modules, options.modules)
  },
});

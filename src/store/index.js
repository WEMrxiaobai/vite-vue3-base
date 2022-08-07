import Vuex from 'vuex'
import themes from './modules/Themes';

const store = new Vuex.Store({
  modules: {
    themes
  }
})

export default store
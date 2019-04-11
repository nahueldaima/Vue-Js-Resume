import { shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import Home from './../../../src/views/Home'
import Vuex from 'vuex'
import definedStore from './../../../src/store/modules/cv'
import Vuetify from 'vuetify'

describe('Home.vue', () => {
  Vue.use(Vuetify)
  Vue.use(Vuex)

  let wrapper
  let actions
  let store

  beforeEach(() => {
    actions = {
      POPULATE_DATA: jest.fn()
    }
    store = new Vuex.Store({
      state: definedStore.state,
      getters: definedStore.getters,
      actions
    })
    wrapper = shallowMount(Home, { store })
  })

  it('renders without erros', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})

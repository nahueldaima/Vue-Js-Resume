import { shallowMount } from '@vue/test-utils'
import Demographics from '../../../../src/components/display/Demographics'

import Vue from 'vue'
import Vuetify from 'vuetify'

describe('Demographics.vue', () => {
  Vue.use(Vuetify)
  it('renders without erros', () => {
    let wrapper = shallowMount(Demographics)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('should output default prop content if prop were no set', () => {
    let wrapper = shallowMount(Demographics)
    expect(wrapper.props('phone', 'email', 'address')).toBeDefined()
  })
})

import { shallowMount } from '@vue/test-utils'
import FormalEducation from '../../../../src/components/display/FormalEducation'

import Vue from 'vue'
import Vuetify from 'vuetify'

describe('FormalEducation.vue', () => {
  Vue.use(Vuetify)
  let items = [
    { order: 1, title: 'Title 1', institution: 'Test Institution', dateFrom: '14 February', dateTo: '15 March' },
    { order: 2, title: 'Title 2', institution: 'Test Institution2', dateFrom: '24 February', dateTo: '17 March' }
  ]

  it('renders without erros', () => {
    let wrapper = shallowMount(FormalEducation)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('should output default prop content if prop were no set', () => {
    let wrapper = shallowMount(FormalEducation)
    expect(wrapper.props('items')).toBeDefined()
  })

  it('should render the same amount of items in the DOM as elements in the prop items', () => {
    let wrapper = shallowMount(FormalEducation, { propsData: { items } })
    expect(wrapper.findAll('v-timeline-item-stub').length).toBe(items.length)
  })
})

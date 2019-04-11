import { shallowMount } from '@vue/test-utils'
import WorkExperienceTimeline from '../../../../src/components/display/WorkExperienceTimeline'

import Vue from 'vue'
import Vuetify from 'vuetify'

describe('WorkExperienceTimeline.vue', () => {
  Vue.use(Vuetify)
  Vue.filter('uppercase', function (value) {
    if (!value) return ''
    value = value.toString()
    return value.toUpperCase()
  })

  let history = [
    { order: 1, role: 'Role 1', companyName: 'Test company Name', dateFrom: '14 February', dateTo: '15 March' },
    { order: 2, role: 'Role 2', companyName: 'Test company Name 2', dateFrom: '24 February', dateTo: '17 March' }
  ]

  it('renders without erros', () => {
    let wrapper = shallowMount(WorkExperienceTimeline)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('should output default prop content if prop were no set', () => {
    let wrapper = shallowMount(WorkExperienceTimeline)
    expect(wrapper.props('history')).toBeDefined()
  })

  it('should render the same amount of items in the DOM as elements in the prop items', () => {
    let wrapper = shallowMount(WorkExperienceTimeline, { propsData: { history } })
    expect(wrapper.findAll('v-timeline-item-stub').length).toBe(history.length)
  })

  it('should set class dense to true on xs column breakpoint', () => {
    let wrapper = shallowMount(WorkExperienceTimeline,
      {
        mocks: {
          $vuetify: {
            breakpoint: {
              name: 'xs'
            }
          }
        },
        propsData: { history }
      }
    )
    expect(wrapper.find('v-timeline-stub').attributes().dense).toBe('true')
  })
})

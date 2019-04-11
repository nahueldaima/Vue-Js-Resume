import { shallowMount } from '@vue/test-utils'
import Courses from '../../../../src/components/display/Courses'

import Vue from 'vue'
import Vuetify from 'vuetify'

describe('Courses.vue', () => {
  Vue.use(Vuetify)
  let courses = [{ name: 'Test 1', imageUrl: '#', institution: 'Test Institution', certificationUrl: 'someotherurl' }, { name: 'Test 2', imageUrl: '#', institution: 'Test Institution 2', certificationUrl: '#' }]

  it('renders without erros', () => {
    let wrapper = shallowMount(Courses)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('should output default prop content if prop were no set', () => {
    let wrapper = shallowMount(Courses)
    expect(wrapper.props('courses')).toBeDefined()
  })

  it('should render the same amount of items in the DOM as items in the prop courses', () => {
    let wrapper = shallowMount(Courses, { propsData: { courses } })
    expect(wrapper.findAll('v-card-stub:first-of-type').length).toBe(courses.length)
  })

  it('should hide certificate button on link equals to #', () => {
    let wrapper = shallowMount(Courses, {
      propsData: {
        courses: [{ name: 'Test 1', imageUrl: '#', institution: 'Test Institution', certificationUrl: '#' }]
      }
    })
    expect(wrapper.contains('v-btn-stub')).toBe(false)
  })
  it('should toggle classes on xs column breakpoint', () => {
    let wrapper = shallowMount(Courses,
      {
        mocks: {
          $vuetify: {
            breakpoint: {
              xs: true
            }
          }
        },
        propsData: {
          courses: [{ name: 'Test 1', imageUrl: '#', institution: 'Test Institution', certificationUrl: 'https://test.com' }]
        }
      }
    )
    expect(wrapper.find('v-btn-stub').attributes().class).toBe('center')
  })
})

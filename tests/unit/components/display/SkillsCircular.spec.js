import { shallowMount } from '@vue/test-utils'
import SkillsCircular from '../../../../src/components/display/SkillsCircular'

import Vue from 'vue'
import Vuetify from 'vuetify'

describe('SkillsCircular.vue', () => {
  Vue.use(Vuetify)
  let skills = [{ name: 'Test 1', value: 90 }, { name: 'Test 2', value: 50 }]

  it('renders without erros', () => {
    let wrapper = shallowMount(SkillsCircular)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('should output default prop content if prop were no set', () => {
    let wrapper = shallowMount(SkillsCircular)
    expect(wrapper.props('skills')).toBeDefined()
  })

  it('should render the same amount of items in the DOM as items in the prop skills', () => {
    let wrapper = shallowMount(SkillsCircular, { propsData: { skills } })
    expect(wrapper.findAll('v-progress-circular-stub').length).toBe(skills.length)
  })
})

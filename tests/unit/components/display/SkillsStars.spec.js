import { shallowMount } from '@vue/test-utils'
import SkillsStars from '../../../../src/components/display/SkillsStars'

import Vue from 'vue'
import Vuetify from 'vuetify'

describe('SkillsStars.vue', () => {
  Vue.use(Vuetify)
  let skills = [{ name: 'Test 1', value: 90 }, { name: 'Test 2', value: 50 }]

  it('renders without erros', () => {
    let wrapper = shallowMount(SkillsStars)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('should output default prop content if prop were no set', () => {
    let wrapper = shallowMount(SkillsStars)
    expect(wrapper.props('skills')).toBeDefined()
  })

  it('should render the same amount of items in the DOM as items in the prop skills', () => {
    let wrapper = shallowMount(SkillsStars, { propsData: { skills } })
    expect(wrapper.findAll('v-rating-stub').length).toBe(skills.length)
  })
})

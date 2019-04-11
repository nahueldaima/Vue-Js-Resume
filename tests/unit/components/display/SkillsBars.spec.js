import { shallowMount } from '@vue/test-utils'
import SkillsBars from '../../../../src/components/display/SkillsBars'

import Vue from 'vue'
import Vuetify from 'vuetify'

describe('SkillsBars.vue', () => {
  Vue.use(Vuetify)
  let skills = [{ name: 'Test 1', value: 90, color: '#456589' }, { name: 'Test 2', value: 50, color: '#ff6589' }]

  it('renders without erros', () => {
    let wrapper = shallowMount(SkillsBars)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('should output default prop content if prop were no set', () => {
    let wrapper = shallowMount(SkillsBars)
    expect(wrapper.props('skills')).toBeDefined()
  })

  it('should render the same amount of items in the DOM as items in the prop skills', () => {
    let wrapper = shallowMount(SkillsBars, { propsData: { skills } })
    expect(wrapper.findAll('v-layout-stub').length).toBe(skills.length)
  })
})

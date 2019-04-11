import { shallowMount } from '@vue/test-utils'
import Header from '../../../src/components/Header'
import { uppercase } from '../../../src/filters/uppercase'
import Vue from 'vue'
import Vuetify from 'vuetify'

describe('Header.vue', () => {
  Vue.use(Vuetify)
  Vue.filter('uppercase', uppercase)
  let social = [
    {
      icon: 'fab fa-github',
      url: 'https://github.com/nahueldaima',
      value: 'GitHub'
    },
    {
      icon: 'fab fa-linkedin-in',
      url: 'https://linkedin.com/nahueldaima',
      value: 'LinkedIn'
    }
  ]

  it('renders without erros', () => {
    let wrapper = shallowMount(Header)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('should output default prop content if prop were no set', () => {
    let wrapper = shallowMount(Header)
    expect(wrapper.props('title', 'full_name', 'cvUrl', 'social')).toBeDefined()
  })

  it('should render the same amount of social buttons in the DOM as items in the prop social with url defined', () => {
    let wrapper = shallowMount(Header, { propsData: { social } })
    expect(wrapper.findAll('span.social').length).toBe(social.length)
  })

  it('should hide social icon if link equals to ""', () => {
    let wrapper = shallowMount(Header, {
      propsData: {
        social: [{
          icon: 'fab fa-github',
          url: '',
          value: 'GitHub'
        }]
      }
    })
    expect(wrapper.findAll('span.social').length).toBe(0)
  })
  it('should hide pdf icon if cvUrl equals to ""', () => {
    let wrapper = shallowMount(Header, {
      propsData: { cvUrl: '' }
    })
    expect(wrapper.findAll('span.pdf').length).toBe(0)
  })
})

import { shallowMount } from '@vue/test-utils'
import Bio from '../../../../src/components/display/Bio'

import Vue from 'vue'
import Vuetify from 'vuetify'

describe('Bio.vue', () => {
  Vue.use(Vuetify)

  it('should output props content on html', () => {
    let bio = 'Examples of Bio Text'
    let imageUrl = 'https://nahueldaima.com/img/nahuel_daima.jpg'
    let wrapper = shallowMount(Bio, { propsData: { imageUrl, bio } })
    expect(wrapper.find('v-img-stub').attributes('src')).toBe(imageUrl)
    expect(wrapper.find('p').text()).toBe(bio)
    // expect(wrapper.props().imageUrl).toBe(imageUrl);
    // expect(wrapper.find('v-img-stub').attributes('src')).toBe("https://nahueldaima.com/img/nahuel_daima.jpg");
    // expect(wrapper.find("p").text()).toBe(bio);
    // expect(wrapper.find("img").getAttribute('src')).toBe(imageUrlExample);
  })

  it('should output default props content if props were no set', () => {
    let wrapper = shallowMount(Bio)
    expect(wrapper.find('v-img-stub').attributes('src')).toBeDefined()
    expect(wrapper.find('p').text()).toBeDefined()
  })

  it('should bind class "column=true" if breakpoint is xs', () => {
    let wrapper = shallowMount(Bio,
      {
        mocks: {
          $vuetify: {
            breakpoint: {
              xs: true
            }
          }
        }
      }
    )
    expect(wrapper.find('v-layout-stub').attributes('column')).toBe('true')
  })
})

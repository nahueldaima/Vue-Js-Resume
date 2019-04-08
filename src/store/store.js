import Vue from 'vue'
import Vuex from 'vuex'
import cv from './modules/cv'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    availableSocialMedia: [
      {
        id: '001',
        displayName: 'Facebook',
        iconUrl: '',
        iconFontAwesome: 'facebook-square'
      },
      {
        id: '002',
        displayName: 'GitHub',
        iconUrl: '',
        iconFontAwesome: 'github-square'
      },
      {
        id: '003',
        displayName: 'LinkedIn',
        iconUrl: '',
        iconFontAwesome: 'linkedin'
      },
      {
        id: '004',
        displayName: 'Twitter',
        iconUrl: '',
        iconFontAwesome: 'twitter-square'
      }
    ],
    availableLanguages: ['English', 'Spanish', 'Italian', 'French', 'Portuguese', 'German', 'Chinesse', 'Other']
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    GET_AVAILABLE_SOCIAL_MEDIA (state) {
      return state.availableSocialMedia
    },
    GET_AVAILABLE_LANGUAGES (state) {
      return state.availableLanguages
    }
  },
  modules: {
    cv
  }
})

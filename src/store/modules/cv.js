import axios from '../../axios'

const state = {
  softSkills: [],
  hardSkills: [],
  workExperience: [],
  formalEducation: [],
  owner: {},
  social: [],
  language: [],
  courses: []
}

const mutations = {
  SET_STATE (state, databaseInfo) {
    ('softSkills' in databaseInfo) ? state.softSkills = databaseInfo.softSkills : state.softSkills = [];
    ('hardSkills' in databaseInfo) ? state.hardSkills = databaseInfo.hardSkills : state.hardSkills = [];
    ('workExperience' in databaseInfo) ? state.workExperience = databaseInfo.workExperience : state.workExperience = [];
    ('formalEducation' in databaseInfo) ? state.formalEducation = databaseInfo.formalEducation : state.formalEducation = [];
    ('owner' in databaseInfo) ? state.owner = databaseInfo.owner : state.owner = {};
    ('social' in databaseInfo) ? state.social = databaseInfo.social : state.social = [];
    ('language' in databaseInfo) ? state.language = databaseInfo.language : state.language = [];
    ('courses' in databaseInfo) ? state.courses = databaseInfo.courses : state.courses = []
  }
}

const actions = {
  POPULATE_DATA ({ commit }) {
    axios.get('/data.json')
      .then(res => {
        let databaseData = res
        commit('SET_STATE', databaseData)
      })
      .catch(e => {
        console.log(e)
      })
  }
}

const getters = {
  GET_CV_SOFT_SKILLS (state) {
    return state.softSkills
  },
  GET_CV_HARD_SKILLS (state) {
    return state.hardSkills
  },
  GET_CV_WORK_EXPERIENCE (state) {
    return state.workExperience
  },
  GET_CV_FORMAL_EDUCATION (state) {
    return state.formalEducation
  },
  GET_CV_OWNER_PROFILE (state) {
    return state.owner
  },
  GET_CV_SOCIAL (state) {
    return state.social
  },
  GET_CV_LANGUAGE (state) {
    return state.language
  },
  GET_CV_COURSES (state) {
    return state.courses
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}

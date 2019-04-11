import store from '../../../../src/store/modules/cv'

describe('store.cv.getters.js', () => {
  let state = {
    softSkills: ['test'],
    hardSkills: ['test'],
    workExperience: ['test'],
    formalEducation: ['test'],
    owner: { test: 'test' },
    social: ['test'],
    language: ['test'],
    courses: ['test']
  }

  it('GET_CV_SOFT_SKILLS should return softSkills from state', () => {
    let getterResult = store.getters.GET_CV_SOFT_SKILLS(state)
    expect(state.softSkills).toBe(getterResult)
  })
  it('GET_CV_HARD_SKILLS should return hardSkills from state', () => {
    let getterResult = store.getters.GET_CV_HARD_SKILLS(state)
    expect(state.hardSkills).toBe(getterResult)
  })
  it('GET_CV_WORK_EXPERIENCE should return workExperience from state', () => {
    let getterResult = store.getters.GET_CV_WORK_EXPERIENCE(state)
    expect(state.workExperience).toBe(getterResult)
  })
  it('GET_CV_FORMAL_EDUCATION should return formalEducation from state', () => {
    let getterResult = store.getters.GET_CV_FORMAL_EDUCATION(state)
    expect(state.formalEducation).toBe(getterResult)
  })
  it('GET_CV_OWNER_PROFILE should return owner from state', () => {
    let getterResult = store.getters.GET_CV_OWNER_PROFILE(state)
    expect(state.owner).toBe(getterResult)
  })
  it('GET_CV_SOCIAL should return social from state', () => {
    let getterResult = store.getters.GET_CV_SOCIAL(state)
    expect(state.social).toBe(getterResult)
  })
  it('GET_CV_LANGUAGE should return language from state', () => {
    let getterResult = store.getters.GET_CV_LANGUAGE(state)
    expect(state.language).toBe(getterResult)
  })
  it('GET_CV_COURSES should return courses from state', () => {
    let getterResult = store.getters.GET_CV_COURSES(state)
    expect(state.courses).toBe(getterResult)
  })
})

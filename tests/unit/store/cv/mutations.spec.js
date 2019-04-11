import store from '../../../../src/store/modules/cv'

describe('store.cv.mutations.js', () => {
  let state = {
    softSkills: [],
    hardSkills: [],
    workExperience: [],
    formalEducation: [],
    owner: {},
    social: [],
    language: [],
    courses: []
  }

  it('SET_STATE should add softSkills to store when commited', () => {
    store.mutations.SET_STATE(state, { softSkills: ['test'] })
    expect(state.softSkills.length).toBe(1)
  })
  it('SET_STATE should add hardSkills to store when commited', () => {
    store.mutations.SET_STATE(state, { hardSkills: ['test'] })
    expect(state.hardSkills.length).toBe(1)
  })
  it('SET_STATE should add workExperiences to store when commited', () => {
    store.mutations.SET_STATE(state, { workExperience: ['test'] })
    expect(state.workExperience.length).toBe(1)
  })
  it('SET_STATE should add formalEducation to store when commited', () => {
    store.mutations.SET_STATE(state, { formalEducation: ['test'] })
    expect(state.formalEducation.length).toBe(1)
  })
  it('SET_STATE should add socials to store when commited', () => {
    store.mutations.SET_STATE(state, { social: ['test'] })
    expect(state.social.length).toBe(1)
  })
  it('SET_STATE should add languages to store when commited', () => {
    store.mutations.SET_STATE(state, { language: ['test'] })
    expect(state.language.length).toBe(1)
  })
  it('SET_STATE should add courses to store when commited', () => {
    store.mutations.SET_STATE(state, { courses: ['test'] })
    expect(state.courses.length).toBe(1)
  })
  it('SET_STATE should add courses to store when commited', () => {
    store.mutations.SET_STATE(state, { courses: ['test'] })
    expect(state.courses.length).toBe(1)
  })
  it('SET_STATE should add owner data to store when commited', () => {
    store.mutations.SET_STATE(state, { owner: { test: 'test' } })
    expect(state.owner.test).toBe('test')
  })
})

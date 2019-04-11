import { uppercase } from '../../../src/filters/uppercase'

describe('uppercase.js', () => {
  it('filter should transform value passed to uppercase', () => {
    let someText = 'HelloWorld'
    expect(uppercase(someText)).toMatch('HELLOWORLD')
  })
})

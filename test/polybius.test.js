// Write your tests here!
const polybiusModule = require('../src/polybius')
const expect = require('chai').expect
const polybius = polybiusModule.polybius

describe('polybius', () => {
    it('should return string in polybius code', () => {
        let input = 'thinkful'
        let encode = true
        const expected = '4432423352125413'
        const actual = polybius(input, encode)
        expect(actual).to.equal(expected)
    })
    it('should return characters in polybius code if letter in upper case and maintaining spaces', () => {
        let input = 'Hello world'
        let encode = true
        const expected = '3251131343 2543241341'
        const actual = polybius(input, encode)
        expect(actual).to.equal(expected)
    })
    it('should return polybius code as a string', () => {
        let input = '3251131343 2543241341'
        let encode = false
        const expected = 'hello world'
        const actual = polybius(input, encode)
        expect(actual).to.equal(expected)
    })
    it('should return polybius code as a string with both i and j', () => {
        let input = '4432423352125413'
        let encode = false
        const expected = 'th(i/j)nkful'
        const actual = polybius(input, encode)
        expect(actual).to.equal(expected)
    })
    it('should return false if odd amount of polybius code', () => {
        let input = '44324233521254134'
        let encode = false
        const expected = false
        const actual = polybius(input, encode)
        expect(actual).to.equal(expected)
    })
})
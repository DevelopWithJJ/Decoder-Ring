// Write your tests here!
const substitutionModule = require('../src/substitution')
const expect = require('chai').expect
const substitution = substitutionModule.substitution

describe('substitution', () => {
    it('should return characters in string with substituted alphabet', () => {
        let input = 'thinkful'
        let alphabet = 'xoyqmcgrukswaflnthdjpzibev'
        let encode = true
        const expected = 'jrufscpw'
        const actual = substitution(input, alphabet, encode)
        expect(actual).to.equal(expected)
    })
    it('should return characters in string with substituted alphabet, maintaining spaces', () => {
        let input = 'You are an excellent spy'
        let alphabet = 'xoyqmcgrukswaflnthdjpzibev'
        let encode = true
        const expected = 'elp xhm xf mbymwwmfj dne'
        const actual = substitution(input, alphabet, encode)
        expect(actual).to.equal(expected)
    })
    it('should return characters in string with normal alphabet', () => {
        let input = 'jrufscpw'
        let alphabet = 'xoyqmcgrukswaflnthdjpzibev'
        let encode = false
        const expected = 'thinkful'
        const actual = substitution(input, alphabet, encode)
        expect(actual).to.equal(expected)
    })
    
    it('should return characters in string with substituted alphabet, if substituted alphabet has special characters', () => {
        let input = 'message'
        let alphabet = '$wae&zrdxtfcygvuhbijnokmpl'
        let encode = true
        const expected = 'y&ii$r&'
        const actual = substitution(input, alphabet, encode)
        expect(actual).to.equal(expected)
    })
    it('should return characters in string with normal alphabet, if substituted alphabet has special characters', () => {
        let input = 'y&ii$r&'
        let alphabet = '$wae&zrdxtfcygvuhbijnokmpl'
        let encode = false
        const expected = 'message'
        const actual = substitution(input, alphabet, encode)
        expect(actual).to.equal(expected)
    })
    it('should return false if alphabet is not 26 characters', () => {
        let input = 'thinkful'
        let alphabet = 'short'
        let encode = true
        const expected = false
        const actual = substitution(input, alphabet, encode)
        expect(actual).to.equal(expected)
    })
    it('should return false if alphabet has characters that are not unique', () => {
        let input = 'thinkful'
        let alphabet = 'abcabcabcabcabcabcabcabcyz'
        let encode = true
        const expected = false
        const actual = substitution(input, alphabet, encode)
        expect(actual).to.equal(expected)
    })
})
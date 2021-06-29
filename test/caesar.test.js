// Write your tests here!
const caesarModule = require("../src/caesar");
const expect = require("chai").expect;
const caesar = caesarModule.caesar;

describe('caesar', () => {
    it('Should return a encoded string shifted right 3 characters', () => {
        let input = 'thinkful'
        let shift = 3
        let encode = true
        const expected = 'wklqnixo'
        const actual = caesar(input, shift, encode)
        expect(actual).to.equal(expected)
    })
    it('Should return a encoded string shifted left 3 characters', () => {
        let input = 'thinkful'
        let shift = -3
        let encode = true
        const expected = 'qefkhcri'
        const actual = caesar(input, shift, encode)
        expect(actual).to.equal(expected)
    })
    it('Should return a decoded string shifted left 3 characters', () => {
        let input = 'wklqnixo'
        let shift = 3
        let encode = false
        const expected = 'thinkful'
        const actual = caesar(input, shift, encode)
        expect(actual).to.equal(expected)
    })
    it('Should return a encoded string shifted right 8 characters, maintaining spaces', () => {
        let input = 'This is a secret message!'
        let shift = 8
        let encode = true
        const expected = 'bpqa qa i amkzmb umaaiom!'
        const actual = caesar(input, shift, encode)
        expect(actual).to.equal(expected)
    })
    it('Should return a decoded string shifted left 8 characters, maintaining spaces', () => {
        let input = 'BPQA qa I amkzmb umaaiom!'
        let shift = 8
        let encode = false
        const expected = 'this is a secret message!'
        const actual = caesar(input, shift, encode)
        expect(actual).to.equal(expected)
    })
    it('Should return false if no shift provided', () => {
        let input = 'thinkful'
        const expected = false
        const actual = caesar(input)
        expect(actual).to.equal(expected)
    })
    it('Should return false if shift is greater than 99', () => {
        let input = 'thinkful'
        let shift = 99
        let encode = true
        const expected = false
        const actual = caesar(input, shift, encode)
        expect(actual).to.equal(expected)
    })
    it('Should return false if shift is less than -26', () => {
        let input = 'thinkful'
        let shift = -26
        let encode = true
        const expected = false
        const actual = caesar(input, shift, encode)
        expect(actual).to.equal(expected)
    })
})
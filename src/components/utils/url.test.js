
import { getURLParameter } from './url'

describe('getURLParameter', () => {

	beforeAll(() => {
		jsdom.reconfigure({ url: "https://www.example.com/foo/bar/?a=b%23&x=y+z&c=d%20ef%20g&i=jk;lm" });
	})

	it('should decode URI components', () => {
		expect(getURLParameter('a')).toBe('b#')
	})
	it('should interpret the + sign as a space', () => {
		expect(getURLParameter('x')).toBe('y z')
	})
	it('should interpret %20 as a space', () => {
		expect(getURLParameter('c')).toBe('d ef g')
	})
	it('should not match a semi-colon character', () => {
		expect(getURLParameter('i')).toBe('jk')	
	})
	it('should return null if there is no query string', () => {
		jsdom.reconfigure({ url: "https://www.example.com/foo/bar/" });
		expect(getURLParameter('a')).toBe(null)
	})
})


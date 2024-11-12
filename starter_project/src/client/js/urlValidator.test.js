import { validateURL } from './urlValidator';

test('validateURL returns true for valid URL', () => {
    expect(validateURL('https://example.com')).toBe(true);
    expect(validateURL('http://www.test.org')).toBe(true);
});

test('validateURL returns false for invalid URL', () => {
    expect(validateURL('example')).toBe(false);
    expect(validateURL('ftp://example.com')).toBe(false);
});

test('validateURL returns false for empty or malformed URL', () => {
    expect(validateURL('')).toBe(false);
    expect(validateURL('htp://invalid-url')).toBe(false);
});

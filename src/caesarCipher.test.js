import caesarCipher from './caesarCipher';

test('Caesar Cipher function. Normal exec', () => {
  expect(caesarCipher('Lucas', 6)).toBe('Raigy');
});

test('Caesar Cipher function. Reverse exec', () => {
  expect(caesarCipher('Lucas', -20)).toBe('Raigy');
});

test('Caesar Cipher function. Punctuation', () => {
  expect(caesarCipher('Lucas. Mazo', 6)).toBe('Raigy. Sgfu');
});

test('Caesar Cipher function. No change', () => {
  expect(caesarCipher('This is a test', 26)).toBe('This is a test');
});

import { capitalize, reverseString } from './stringManipulation';

test('Capitalize function', () => {
  expect(capitalize('lUcAS')).toBe('Lucas');
});

test('Reverse string function', () => {
  expect(reverseString('Hello world')).toBe('dlrow olleH');
});

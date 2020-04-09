import Calculator from './calculator';
import { capitalize, reverseString } from './stringManipulation';
import caesarCipher from './caesarCipher';
import analyze from './arrayAnalisis';

test('Sum function', () => {
  const sumRes = Calculator.add(2, 5);
  expect(sumRes).toBe(7);
});

test('Substraction function', () => {
  const subRes = Calculator.substract(5, 2);
  expect(subRes).toBe(3);
});

test('Multiplication function', () => {
  const mulRes = Calculator.multiply(2, 5);
  expect(mulRes).toBe(10);
});

test('Divition function', () => {
  const divRes = Calculator.divide(6, 2);
  expect(divRes).toBe(3);
});

test('Capitalize function', () => {
  expect(capitalize('lUcAS')).toBe('Lucas');
});

test('Reverse string function', () => {
  expect(reverseString('Hello world')).toBe('dlrow olleH');
});

test('Caesar Cipher function', () => {
  expect(caesarCipher('Lucas', 6)).toBe('Raigy');
});

test('Analyze function', () => {
  const myObj = {
    average: 3, min: 2, max: 4, length: 3,
  };
  expect(analyze([2, 4, 3])).toMatchObject(myObj);
});
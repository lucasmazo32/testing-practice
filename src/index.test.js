import {
  add, substract, multiply, divide,
} from './calculator';

test('Sum function', () => {
  const sumRes = add(2, 5);
  expect(sumRes).toBe(7);
});

test('Substraction function', () => {
  const subRes = substract(5, 2);
  expect(subRes).toBe(3);
});

test('Multiplication function', () => {
  const mulRes = multiply(2, 5);
  expect(mulRes).toBe(10);
});

test('Divition function', () => {
  const divRes = divide(6, 2);
  expect(divRes).toBe(3);
});
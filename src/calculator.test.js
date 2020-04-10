import Calculator from './calculator';

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
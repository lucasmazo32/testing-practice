import analyze from './arrayAnalisis';

test('Analyze function', () => {
  const myObj = {
    average: 3, min: 2, max: 4, length: 3,
  };
  expect(analyze([2, 4, 3])).toMatchObject(myObj);
});
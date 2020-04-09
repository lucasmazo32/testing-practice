const analyze = (array) => {
  const arrLength = array.length;

  const average = array.reduce((total, num) => total + num) / arrLength;

  let max = array[0];
  let min = array[0];

  array.forEach((element) => {
    if (element > max) {
      max = element;
    }
    if (element < min) {
      min = element;
    }
  });

  const myObject = {
    average,
    min,
    max,
    length: arrLength,
  };

  return myObject;
};

export default analyze;
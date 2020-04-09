const capitalize = (string) => {
  const newString = string.toLowerCase();
  return newString.replace(/^./i, newString.slice(0, 1).toUpperCase());
};

const reverseString = (string) => {
  let newString = string.split('');
  newString = newString.reverse();
  newString = newString.join('');
  return newString;
};


export { capitalize, reverseString };
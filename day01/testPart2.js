const fs = require('fs');

async function read(path) {
  try {
    let data = fs.readFileSync(path, { encoding: 'utf-8' });
    return data.split('\n');
  } catch (err) {
    console.error(err);
  }
}

read('testInput.txt').then((data) => {
  const firstNumbers = [];
  const secondNumbers = [];

  data.forEach((line) => {
    const numbers = line.trim().split(/\s+/).map(Number);
    firstNumbers.push(numbers[0]);
    secondNumbers.push(numbers[1]);
  });

  function multiplyOccurrences(firstNumbers, secondNumbers) {
    return firstNumbers.map((num) => {
      const count = secondNumbers.filter((n) => n === num).length;
      return num * count;
    });
  }
  function sumMultiplyOccurrences(firstNumbers, secondNumbers) {
    const products = multiplyOccurrences(firstNumbers, secondNumbers);
    return products.reduce((acc, cur) => acc + cur, 0);
  }

  console.log(sumMultiplyOccurrences(firstNumbers, secondNumbers));
});

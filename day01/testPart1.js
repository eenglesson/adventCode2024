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

  console.log('First numbers:', firstNumbers);
  console.log('Second numbers:', secondNumbers);

  firstNumbers.sort((a, b) => a - b);
  secondNumbers.sort((a, b) => a - b);

  let totalDistance = 0;
  for (let i = 0; i < firstNumbers.length; i++) {
    totalDistance += Math.abs(firstNumbers[i] - secondNumbers[i]);
  }

  console.log('Total distance:', totalDistance);
});

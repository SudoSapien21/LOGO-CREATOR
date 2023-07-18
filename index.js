const readline = require('readline');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function prompt(question) {
  return new Promise((resolve) => {
    rl.question(question, resolve);
  });
}

async function generateLogo() {
  try {
    const text = await prompt('Enter up to three characters: ');
    const textColor = await prompt('Enter the text color (keyword or hexadecimal number): ');

    const shapes = {
      circle: Circle,
      triangle: Triangle,
      square: Square,
    };

    const shape = await prompt(`Enter the shape (${Object.keys(shapes).join(', ')}): `);
    const shapeColor = await prompt('Enter the shape color (keyword or hexadecimal number): ');

    const ShapeClass = shapes[shape.toLowerCase()];
    if (!ShapeClass) {
      throw new Error('Invalid shape');
    }

    const shapeInstance = new ShapeClass(shapeColor, { color: textColor, text });
    const svg = shapeInstance.render();

    fs.writeFileSync('logo.svg', svg);

    console.log('Generated logo.svg');
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    rl.close();
  }
}

generateLogo();



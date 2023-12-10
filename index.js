
const fs = require('fs');
const inquirer = require('inquirer');
const { Shape, Circle, Triangle, Square } = require('./lib/shape');

const questions = [
  {
    type: 'input',
    name: 'textForLogo',
    message: 'Enter up to three characters for logo:',
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter text color (keyword or hex):',
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Select a shape for logo:',
    choices: ['Circle', 'Square', 'Triangle'],
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter shape color (keyword or hex):',
  },
];

function writeToFile(fileName, content) {
  fs.writeFile(fileName, content, (error) => {
    if (error) {
      throw error;
    }
    console.log('Your logo has been successfully created: ' + fileName);
  });
}

function generateSvgContent(answers) {
  const shape = createShapeInstance(answers);
  shape.setColor(answers.shapeColor);
  shape.setTextColor(answers.textColor);
  shape.setText(answers.textForLogo);
  return shape.render();
}

function createShapeInstance(answers) {
  switch (answers.shape) {
    case 'Circle':
      return new Circle(answers.textForLogo);
    case 'Triangle':
      return new Triangle(answers.textForLogo);
    case 'Square':
      return new Square(answers.textForLogo);
    default:
      throw new Error('Invalid shape selected');
  }
}

function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      // Generate SVG content
      const svgContent = generateSvgContent(answers);

      // File name
      const fileName = 'logo.svg';

      // Write SVG content to the file
      writeToFile(fileName, svgContent);
    })
    .catch((error) => {
      console.error(error);
    });
}

init();


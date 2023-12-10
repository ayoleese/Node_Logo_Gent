const { Shape, Circle, Triangle, Square } = require('./shape');

describe('Shape', () => {
    describe('setColor', () => {
        it('should set the color of the shape', () => {
            const shape = new Shape();
            shape.setColor('red');
            expect(shape.color).toEqual('red');
        });
    });

    describe('setTextColor', () => {
        it('should set the text color of the shape', () => {
            const shape = new Shape();
            shape.setTextColor('blue');
            expect(shape.textColor).toEqual('blue');
        });
    });

    describe('setText', () => {
        it('should set the text of the shape', () => {
            const shape = new Shape();
            shape.setText('Hello');
            expect(shape.text).toEqual('Hello');
        });
    });
});

describe('Circle', () => {
    describe('render', () => {
        it('should render a circle SVG with the correct attributes', () => {
            const circle = new Circle();
            circle.setColor('green');
            circle.setTextColor('white');
            circle.setText('Circle');
            const expectedSvg = `<svg xmlns="http://www.w3.org/2000/svg" height="200" width="300">
      <circle cx="150" cy="100" r="75" fill="green"/>
      <text x="150" y="100" font-size="20" fill="white" text-anchor="middle" alignment-baseline="middle">Circle</text>
    </svg>`;
            expect(circle.render()).toEqual(expectedSvg);
        });
    });
});
describe('Triangle', () => {
    describe('render', () => {
        it('should render a triangle SVG with the correct attributes', () => {
            const triangle = new Triangle();
            triangle.setColor('green');
            triangle.setTextColor('white');
            triangle.setText('Triangle');
            const expectedSvg = `<svg xmlns="http://www.w3.org/2000/svg" height="200" width="300">
      <polygon points="150,25 75,175 225,175" fill="green"/>
      <text x="150" y="125" font-size="20" fill="white" text-anchor="middle" alignment-baseline="middle">Triangle</text>
    </svg>`;
            expect(triangle.render()).toEqual(expectedSvg);
        });
    });
});

describe('Square', () => {
    describe('render', () => {
        it('should render a square SVG with the correct attributes', () => {
            const square = new Square();
            square.setColor('blue');
            square.setTextColor('orange');
            square.setText('Square');
            const expectedSvg = `<svg xmlns="http://www.w3.org/2000/svg" height="200" width="300">
      <rect x="75" y="50" width="150" height="150" fill="blue"/>
      <text x="150" y="125" font-size="20" fill="orange" text-anchor="middle" alignment-baseline="middle">Square</text>
    </svg>`;
            expect(square.render()).toEqual(expectedSvg);
        });
    });
});


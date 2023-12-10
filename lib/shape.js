// shape

class Shape {
  constructor() {
    this.color = '';
  }
  setColor(color) {
    this.color = color;
  }
  setTextColor(textColor) {
    this.textColor = textColor;
  }
  setText(text) {
    this.text = text;
  }
}

//Circle
class Circle extends Shape {
  render() {
      return `<svg xmlns="http://www.w3.org/2000/svg" height="200" width="300">
      <circle cx="150" cy="100" r="75" fill="${this.color}"/>
      <text x="150" y="100" font-size="20" fill="${this.textColor}" text-anchor="middle" alignment-baseline="middle">${this.text}</text>
    </svg>`;
  }
};

//Triangle
class Triangle extends Shape {
  render() {
    return `<svg xmlns="http://www.w3.org/2000/svg" height="200" width="300">
      <polygon points="150,25 75,175 225,175" fill="${this.color}"/>
      <text x="150" y="125" font-size="20" fill="${this.textColor}" text-anchor="middle" alignment-baseline="middle">${this.text}</text>
    </svg>`;
  }
}

//Square
class Square extends Shape {
  render() {
    return `<svg xmlns="http://www.w3.org/2000/svg" height="200" width="300">
      <rect x="75" y="50" width="150" height="150" fill="${this.color}"/>
      <text x="150" y="125" font-size="20" fill="${this.textColor}" text-anchor="middle" alignment-baseline="middle">${this.text}</text>
    </svg>`;
  }
}

module.exports = { Shape, Circle, Triangle, Square };
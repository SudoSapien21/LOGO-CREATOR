class Shape {
  constructor(color, text) {
    this.color = color;
    this.text = text;
  }

  render() {
    return '';
  }
}

class Circle extends Shape {
  render() {
    return `<svg width="100" height="100">
              <circle cx="50" cy="50" r="40" fill="${this.color}" />
              <text x="50" y="50" text-anchor="middle" alignment-baseline="middle" fill="${this.text.color}" font-size="24">${this.text.text}</text>
            </svg>`;
  }
}

class Triangle extends Shape {
  render() {
    return `<svg width="100" height="100">
              <polygon points="50,10 10,90 90,90" fill="${this.color}" />
              <text x="50" y="50" text-anchor="middle" alignment-baseline="middle" fill="${this.text.color}" font-size="24">${this.text.text}</text>
            </svg>`;
  }
}

class Square extends Shape {
  render() {
    return `<svg width="100" height="100">
              <rect x="10" y="10" width="80" height="80" fill="${this.color}" />
              <text x="50" y="50" text-anchor="middle" alignment-baseline="middle" fill="${this.text.color}" font-size="24">${this.text.text}</text>
            </svg>`;
  }
}

module.exports = { Shape, Circle, Triangle, Square };

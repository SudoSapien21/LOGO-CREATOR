const { Circle } = require('./shapes');

describe('Circle', () => {
  test('render() method should return the SVG string representation of a circle', () => {
    const circle = new Circle('red');
    const svg = circle.render();
    expect(svg).toContain('<circle');
    expect(svg).toContain('fill="red"');
  });
});
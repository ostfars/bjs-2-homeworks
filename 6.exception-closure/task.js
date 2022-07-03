// Task 1

const parseCount = (num) => {
  if (isNaN(Number.parseInt(num))) {
    throw new Error('Невалидное значение')
  }

  return Number.parseInt(num);
}

const validateCount = (num) => {
  try {
    parseCount(num);
  } catch(err) {
    return err
  } 
  return parseCount(num)
}

// Task 2

class Triangle {
  constructor(a, b, c) {
    if ((a + b) < c || (b + c) < a || (a + c) < b) {
      throw new Error('Треугольник с такими сторонами не существует');
    }
    this.sideA = a;
    this.sideB = b;
    this.sideC = c;
  }
  
  getPerimeter() {
    const perimeter = this.sideA + this.sideB + this.sideC
    return perimeter
  }
  
  getArea() {
    const p = this.getPerimeter() / 2
    const triangleArea = (Math.sqrt(p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC))).toFixed(3)
    return +triangleArea
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c)
  } catch(err) {
    return {
      getArea: () => 'Ошибка! Треугольник не существует',
      getPerimeter: () => 'Ошибка! Треугольник не существует'
    }
  }
}
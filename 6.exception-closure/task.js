function parseCount(num) {
    let number = Number.parseFloat(num);
    if (isNaN(number)) {
        throw new Error('Невалидное значение');
    } else {
        return number;
    }
}
function validateCount(num) {
    try {
        return parseCount(num);
    } catch(err) {
        return err;
    }
}
//Задача 2
class Triangle {
    constructor(a, b, c) {
        if (a + b < c || a + c < b || b + c < a) {
            throw new Error('Треугольник с такими сторонами не существует'); 
        } else {
            this.a = a;
            this.b = b;
            this.c = c;
        }  
    }
    getPerimeter(){
        return this.a + this.b + this.c;
    }
    getArea(){
        let p = 0.5 * this.getPerimeter();
        let result = Math.sqrt(p*(p - this.a)*(p - this.b)*(p - this.c));
        return Number(result.toFixed(3));
    }
}
function getTriangle(a, b, c) {
    try {
        return new Triangle (a, b, c);
    } catch (err) {
        return{
            getArea(){
                return "Ошибка! Треугольник не существует";
            },
            getPerimeter(){
                return "Ошибка! Треугольник не существует";
            }
        };
    }
}
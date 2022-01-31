Find the smallest integer in the array
https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}

Geometry Basics: Circle Circumference in 2D
https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript
function circleCircumference(circle) {
      return 2 * Math.PI * circle.radius;
  }

Training JS #12: loop statement --for..in and for..of
https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript
function giveMeFive(obj){
 const five = [];
  for (let key in obj) {
    if (key.length === 5) 
      five.push(key);
    if (obj[key].length === 5) 
      five.push(obj[key]);
  }
  return five;
}

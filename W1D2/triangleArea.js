const side1 = Number(process.argv[2]);
const side2 = Number(process.argv[3]);
const side3 = Number(process.argv[4]);
const perimeter = side1 + side2 + side3;
const halfp = perimeter / 2;
const area = Math.sqrt(halfp*((halfp-side1)*(halfp-side2)*(halfp-side3))); 

if (side1 <= 0 || side2 <= 0 || side3 <= 0 || side1 + side2 <= side3 || side2 + side3 <= side1 || side1 + side3 <= side2) {
    console.log('impossible triangle');
} else {
    console.log('The perimeter is: ' + perimeter);
    console.log('The area is: ' + area);
}

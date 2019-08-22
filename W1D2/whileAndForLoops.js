//print all even numbers between 0-100

// let x = 0;
// while (x <= 100) {
//     if (x % 2 === 0) {
//     console.log(x)
//     } 
// x++;
// }

// print multiples of 3 from 0-99

// for(let y = 0; y <= 99; y+= 3) {
//         console.log(y);
//     }

// 99 bottles of beer on the wall song
for (let i = 100; i >= 0; i--) {
    if (i === 1) {
        console.log([i] + ' bottle of beer on the wall, ' + [i] + ' bottle of beer. Take one down, pass it around, ' + [i-1] + ' bottles of beer on the wall.')
    } else if(i === 0) {
        console.log([i] + ' bottles of beer on the wall, ' + [i] + ' bottles of beer. cant take it down, or pass it around, there is no more beer.')
    } else {
        console.log([i] + ' bottles of beer on the wall, ' + [i] + ' bottles of beer. Take one down, pass it around, ' + [i-1] + ' bottles of beer on the wall.')
    } 
}
    
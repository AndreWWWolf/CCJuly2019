const grade = process.argv[2];

if (grade < 0 || grade > 100) {
    console.log('invalid grade');
} else if (0 < grade && grade <= 49) {
    console.log('F');
} else if (50 < grade && grade <= 59) {
    console.log('C-');
} else if (60 < grade && grade <= 66) {
    console.log('C');
} else if (67 < grade && grade <= 72) {
    console.log('C+');
} else if (73 < grade && grade <= 85) {
    console.log('B');
} else if (grade >= 86) {
    console.log('A');
}
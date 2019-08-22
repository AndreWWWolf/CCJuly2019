const password = process.argv[2];
const secretNum = 714;
const code = 'opensesame';

if (password === code) {
    console.log(secretNum);
} else if (!password) {
    console.log('password argument is required');
} else {
    console.log('wrong password!');
}

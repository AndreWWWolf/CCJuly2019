const string = process.argv[2];
let newString = '';

    for (let i = 0; i < string.length; i++) {
      if (i % 2 === 0) {
        newString += string.charAt(i);
      }else {
        newString += string.charAt(i).toUpperCase();
      }
    }
 console.log(newString);

 //  STRETCH

const args = process.argv.slice(2);
const sentence = args.join(' '); 
const words = sentence.toLowerCase(); 
let result = '';
for (let i = 0; i < words.length; i++) {
	if (i % 2 === 0) {
		result += words[i];
	} else {
		result += words[i].toUpperCase();
	}
}
console.log(result);
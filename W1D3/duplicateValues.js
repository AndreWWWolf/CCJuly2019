// function duplicates(first, last) {
// for(var i = first.charCodeAt(0); i <= last.charCodeAt(0); i++) {
// 	eval("String.fromCharCode(" + i + ")") + " ";
// }
// }
// console.log(duplicates("a", "h"));

// function getFrequency(string) {
// 	var freq = {};
// 	for (var i=0; i<string.length;i++) {
// 		var character = string.charAt(i);
// 		if (freq[character]) {
// 		   freq[character]++;
// 		} else {
// 		   freq[character] = 1;
// 		}
// 	}
	
// 	return freq;
// 	};
	
// 	console.log(getFrequency('Indivisibilities'));

	function howManyRepeated(str){
		return str.toLowerCase().split("").sort().join("").match(/(.)\1+/g).length; }
	 
	 console.log(howManyRepeated("Indivisibilities")); 
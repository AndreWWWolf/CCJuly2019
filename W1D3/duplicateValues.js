function duplicates(first, last) {
for(var i = first.charCodeAt(0); i <= last.charCodeAt(0); i++) {
	eval("String.fromCharCode(" + i + ")") + " ";
}
}
console.log(duplicates("a", "h"));
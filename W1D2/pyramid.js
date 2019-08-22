function createPyramid(rows)
{
for(var i=0; i<rows; i++) {
    var output = "";
for(var j=0; j<rows-i; j++) {
    output += " ";
}
for(var k=0; k<=i; k++) {    
    output += "# ";
}
console.log(output);  
}  
}
createPyramid(process.argv[2])
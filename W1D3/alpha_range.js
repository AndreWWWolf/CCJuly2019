function alphaRange(first, last, step = 1) {
    let a = [];
    let i = first.charCodeAt(0)
    let j = last.charCodeAt(0);
    if (i <= j) {
    for (let i = first.charCodeAt(0); i <= j; i+= step) {
        a.push(String.fromCharCode(i));
    };
} else {
    for (let j = last.charCodeAt(0); i >= j; i-= step) {
        a.push(String.fromCharCode(i));
    };
};
    return a;
};
console.log(alphaRange('a', 'f', 2));
console.log(alphaRange('d', 'h', 1));
console.log(alphaRange('x', 'b', 4));
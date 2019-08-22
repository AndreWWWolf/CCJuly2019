// OPTION 1

function reverse(s){
    return s.split("").reverse().join("");
}
console.log(reverse("hello")) // "olleh"
console.log(reverse("dog")) // "god"
console.log(reverse("codecore")) // "erocedoc"

// OPTION 2

function reverse2(s) {
    var o = [];
    for (var i = 0, len = s.length; i <= len; i++)
      o.push(s.charAt(len - i));
    return o.join('');
  }

  console.log(reverse2("hello")) // "olleh"
console.log(reverse2("dog")) // "god"
console.log(reverse2("codecore")) // "erocedoc"
//OPTION 1

function wordCounts(sentence) {
    const counter = {};
    for (let word of sentence.split(" ")) {
      if (counter[word]) {
        counter[word] += 1;
      } else {
        counter[word] = 1;
      }
    }
    return counter;
  }
  console.log(wordCounts("this is this and that is that"));



let printMulti = [[2,3,4], ["Hello CodeCore", 1, true]];

for (let value in printMulti) {
    for (let element in printMulti[value]) {
        console.log("" + printMulti[value][element]);
    }
}
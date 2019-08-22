const http = require("http")
const url = require("url")
const server = http.createServer((request, response) => {
  const params = url.parse(request.url, true).query;
  const number = parseInt(params.number);
  response.writeHead(200);
  response.write(`


<!DOCTYPE html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>Document</title>
</head>

<script type="text/javascript">
function process() {
    let NumberGrade = document.getElementById('enterGrade').value;
    let MyGrade = getMyGrade(NumberGrade);
    document.getElementById("letterGrade").innerHTML = MyGrade;
}
function getMyGrade(number) {
    if (number <= 59)
        letterGrade = "F";
    else if (number >= 60 && number <= 69)
        letterGrade = "D";
    else if (number >= 70 && number <= 72)
        letterGrade = "C-";
    else if (number >= 73 && number <= 76)
        letterGrade = "C";
    else if (number >= 77 && number <= 79)
        letterGrade = "C+";
    else if (number >= 80 && number <= 82)
        letterGrade = "B-";
    else if (number >= 83 && number <= 86)
        letterGrade = "B";
    else if (number >= 87 && number <= 89)
        letterGrade = "B+";
    else if (number >= 90 && number <= 92)
        letterGrade = "A-";
    else if (number >= 93 && number <= 96)
        letterGrade = "A";
    else if (number >= 97 && number <= 100)
        letterGrade = "A+";

    return letterGrade
}
function clearGrade() {
 document.getElementById("letterGrade").innerHTML=""
}
</script>
<body>
ENTER SCORE<input type="text" id="enterGrade" onchange="process();" onclick="clearGrade();">&nbsp;</input>
<input type =button value='Calculate Grade' onclick="process();"()></input>
<br>
<br>
GRADE<div id="letterGrade" ></div>
<br>
</body>
</html>

`)
  response.end()
})

const PORT = 4000
const ADDRESS = "0.0.0.0"

server.listen(PORT, ADDRESS, () => {
  console.log(`Server is listening on http://${ADDRESS}:${PORT}`)
})
const http = require("http")
const url = require("url")
const server = http.createServer((request, response) => {
  const parts = url.parse(request.url, true)
  response.writeHead(200)
  response.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Document</title>
    </head>
    <body>
      <h1>Convert Number Score to Letter Grade</h1>

      <form>
        <input
          type="text"
          name="grade"
          placeholder="number score"
        />
        <input type="submit" value="Submit" />
       <h1>Letter Grade:      </h1>
       </form>
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

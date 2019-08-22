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
      <h1>Convert Temp from Fahrenheit to Celcius</h1>

      <form>
        <input
          type="text"
          name="temp"
          placeholder="Temp. in degrees Fahrenheit"
        />
        <input type="submit" value="Submit" />
        <h3>Temperature in Celcius: ${(parseInt(parts.query.temp) -32) * 5/9}</h3>
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

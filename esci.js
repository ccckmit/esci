#!/usr/bin/env node

var runFile = process.argv[2]
var jsFile, htmlFile
if (runFile.indexOf('.html') < 0) {
  htmlFile = 'source/chart.html'
  jsFile = runFile
} else {
  htmlFile = runFile
  jsFile = process.argv[3]
}
console.log('argv = %j', process.argv)
var exec = require('child_process').exec
var child = exec(`electron ${__dirname} ${htmlFile} ${jsFile}`, function (err, stdout, stderr) {
  if (err) throw err
  console.log(stdout)
})

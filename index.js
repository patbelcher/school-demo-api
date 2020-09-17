const express = require('express')//importing express library
const {getStudents, getStudentByName } = require('./src/students')
const app = express()//creating an express server called "app"
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/pat', (req, res) => res.send('These are our courses!'))
app.get('/courses/:courseName', (req, res) => res.send('Hello Pat!'))
app.get('/students', getStudents)

app.get('/students/:name', getStudentByName)


//app.get('/courses/:courseName', (req, res) => {
   //let courseName = req.params.courseName;
   //let {courseName} = req.params.courseName;
   app.get('/courses/:courseName', (req, res) => {
    res.send('Here is our ' + req.params.courseName + ' course')
  })
app.listen(port, () => console.log(`Listening at http://localhost:${port}`))

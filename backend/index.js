const express = require("express")
var cors = require('cors')
const path = require("path")

const app = express();
app.use(cors())
// Statics
app.use(express.static('static'))

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// routers    
const indexRouter = require('./routes/index')
const userRouter = require('./routes/user')
const uploadRouter = require('./routes/upload_data')
const adminRouter = require('./routes/admin')

app.use(indexRouter.router)
app.use(userRouter.router)
app.use(uploadRouter.router)
app.use(adminRouter.router)

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:3000`)
})
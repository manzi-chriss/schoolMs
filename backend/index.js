const express=require(`express`)
const cors=require(`cors`)
const bodyParser=require(`body-parser`)

// creating variable of of your server
const app=express()

// configuration of middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())


// importing Routes

const staffRoutes=require('./controllers/staff')
const adminRoutes=require('./controllers/admin')
const studentRoutes=require('./controllers/student')
const homePageRoutes=require('./controllers/homepage')

// configuration of routes

app.use('/staff',staffRoutes)
app.use('/admin',adminRoutes)
app.use('/student',studentRoutes)
app.use('/home',homePageRoutes)
// configuration of port

const port=process.env.PORT || 3000
//connection to db
const {connectToDB}=require('./Modles/DBConnection')

connectToDB()


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})

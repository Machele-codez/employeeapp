const
    // Express
    express = require('express'),
    app = express(),

    // Mongo DB   
    mongoose = require('mongoose'),
    DBPassword = `A8xq06jLK9cL1UBe`,
    mongoURI = `mongodb+srv://codesmith:${DBPassword}@cluster0.xpru1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

require('./Employee');

// ? MONGODB CONNECTIONS
// employee model
const Employee = mongoose.model("employee");

// establish connection to DB
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

mongoose.connection.on('connected', () => {
    console.log("Connected to mongo DB");
})

mongoose.connection.on('error', (err) => {
    console.log("Error while connecting to mongo DB:", err);
})

// ? ROUTES
app.use(express.json())

// get all employees
app.get('/employee/all', (req, res) => {
    Employee.find({})
        .then(data => {
            console.log("all employees gotten");
            res.send(data);
        })
        .catch(err => console.log(err));
});

// create Employee route 
app.post('/employee/create', (req, res) => {
    const employee = new Employee({
        name: req.body.name,
        email: req.body.email,
        role: req.body.role,
        phone: req.body.phone,
        salary: req.body.salary,
        profilePictureURL: req.body.profilePictureURL,
    })
    employee.save()
        .then(data => {
            console.log("Created new employee");
            res.send(data);
        })

})

// update Employee route 
app.put('/employee/update', (req, res) => {
    Employee.findByIdAndUpdate(req.body.id, {
        name: req.body.name,
        email: req.body.email,
        role: req.body.role,
        phone: req.body.phone,
        salary: req.body.salary,
        profilePictureURL: req.body.profilePictureURL,
    })
        .then(data => {
            console.log(`Employee ${data._id} Updated`);
            res.send(data);
        })
        .catch(err => {
            console.log("Error while updating:", err);
            res.send(`Error: ${err}`);
        })

})

// delete employee route
app.post('/employee/delete', (req, res) => {
    Employee.findByIdAndDelete(req.body.id)
        .then(data => {
            console.log(`deleted: ${data._id}`);
            res.send(`deleted: ${data._id}`);
        })
        .catch(err => {
            console.log("Error while deleting:", err);
            res.send(`Error: ${err}`);
        })
})



app.listen(3000, () => {
    console.log("server is running");
});
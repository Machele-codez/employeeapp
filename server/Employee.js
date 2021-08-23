const mongoose = require("mongoose");

const EmployeeSchema = mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    salary: String,
    role: String,
    profilePictureURL: String,
});

mongoose.model("employee", EmployeeSchema);
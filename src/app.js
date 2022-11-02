// const mongoose = require('mongoose');
// // connection creation and and connect with the database or create a new databas
// mongoose.connect('mongodb://localhost:27017/Customers')
//     .then(() => {
//         console.log("Learning Mongoose")
//     })
//     .catch((err) => {
//         console.log(err);
//     })
// //schema 
// //The variable name should be in camelCase
// const nameList = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     age: Number,
//     location: String,
//     active: Boolean,
//     phoneNumber: Number,
//     data: {
//         type: Date,
//         default: Date.now
//     }
// })
// //collection creation
// //The variable name should be in Pascalcase 
// const Namelist = new mongoose.model("Namelist", nameList)

// //create a document or insert

// const createDocument = async () => {
//     try {
//         const add = new Namelist({
//             name: "Rohan",
//             age: 12,
//             location: "kanpur",
//             active: true,
//             phoneNumber: 22222222,
//         })
//         const add2 = new Namelist({
//             name: "Karan",
//             age: 52,
//             location: "Thane",
//             active: true,
//             phoneNumber: 12345,
//         })
//         const add3 = new Namelist({
//             name: "ketan",
//             age: 34,
//             location: "Kasara",
//             active: true,
//             phoneNumber: 1234,
//         })
//         const add4 = new Namelist({
//             name: "Aditya",
//             age: 22,
//             location: "Vangni",
//             active: true,
//             phoneNumber: 1234,
//         })
//         const add5 = new Namelist({
//             name: "Aashutosh",
//             age: 25,
//             location: "Neral",
//             active: true,
//             phoneNumber: 1234,
//         })

//         const result = await Namelist.insertMany([add, add2, add3, add4, add5]);
//         console.log(result)
//     } catch (err) {
//         console.log(err)
//     }

// }
// createDocument();


// // To read the document

// const getData = async () => {
//     try {
//         const results = await Namelist.find({ phoneNumber: 1234 })
//             .limit(1).skip(1)
//         console.log(results)
//     } catch (err) {
//         console.log(err)
//     }
// }
// getData();

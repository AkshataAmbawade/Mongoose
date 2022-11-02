const mongoose = require('mongoose');
const validator = require('validator');
mongoose.connect('mongodb://localhost:27017/ttchannel')
    .then(() => {
        console.log("Successful....")
    })
    .catch((err) => {
        console.log(err)
    })

const playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true,
        minlength: [2, "There should be atleast 2 letters in the string"],
        maxlength: [30, "String can have maximum 30 letters"]
    },
    ctype:
    {
        type: String,
        enum: ["Front End", "Back End", "DataBAse"]
    },
    videos: {

        type: Number,
        validate(value) {
            if (value < 0) {
                throw new Error("Can not accept nagative values")
            }
        }
    },
    author: String,
    active: Boolean,
    date: {
        type: Date,
        default: Date.now
    },
    email: {
        type: String,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Invalid Email')
            }
        }
    }
})

const Playlist = mongoose.model('Playlist', playlistSchema);


//Create Document

// const createDocument = async () => {
//     try {
//         const mongoPlaylist = new Playlist({
//             name: "MongoDb",
//             ctype: "DataBase",
//             videos: 10,
//             author: "Thapa Technical",
//             active: true,
//         })
//         const mongoosePlaylist = new Playlist({
//             name: "Mongoose",
//             ctype: "DataBase",
//             videos: 5,
//             author: "Thapa Technical",
//             active: true,
//         })
//         const expressPlaylist = new Playlist({
//             name: "Expressjs",
//             ctype: "Back End",
//             videos: 20,
//             author: "Thapa Technical",
//             active: true,
//         })
//         const result = await PlaylistinsertMany([mongoPlaylist, mongoosePlaylist, expressPlaylist]);
//         console.log(result)

//     } catch (err) {
//         console.log(err)
//     }
// }
// createDocument();



//Read Document

// const getDocument = async () => {
//     const result = await Playlist.find({ name: "MongoDb" })
//         .select({ name: 1, _id: 0 })
//         .limit(1)
//     // .skip(1)
//     console.log(result)
// }
// getDocument();

//Comparison operator

//nin
// const getDocument = async () => {
//     const result = await Playlist.find({ ctype: { $nin: ["Back End", "DataBase"] } })
//         .select({ name: 1, _id: 0 })
//     // .limit(1)
//     // .skip(1)
//     console.log(result)
// }
// getDocument();


//or

// const getDocument = async () => {
//     const result = await Playlist.find({ $or: [{ ctype: "Back End" }, { author: "Thapa Technical" }] })

//     console.log(result)
// }
// getDocument();

//and
// const getDocument = async () => {
//     const result = await Playlist.find({ $and: [{ ctype: "Back End" }, { author: "Thapa Technical" }] })

//     console.log(result)
// }
// getDocument();



//NOT 

// const getDocument = async () => {
//     const result = await Playlist.find({name: { $not: { $eq: "MongoDb" } } })

//     console.log(result)
// }
// getDocument();

//NOR

// const getDocument = async () => {
//     const result = await Playlist.find({ $nor: [{ ctype: "DataBase" }, { name: "MongoDb" }] })

//     console.log(result)
// }
// getDocument();




// how to count the number of the documents

// const getDocument = async () => {
//     const result = await Playlist.find({ $and: [{ name: "MongoDb" }, { author: "Thapa Technical" }] })
//         .countDocuments()
//     console.log(result)
// }
// getDocument()

//sort in ascnding to descending

// 1 ===> Sort ascending.
// -1 ===> Sort descending.


// const getDocument = async () => {
//     const result = await Playlist.find({ author: "Thapa Technical" })
//         .select({ name: 1 })
//         .sort({ name: 1 });
//     console.log(result)
// }
// getDocument();


//Update the documentsby updateOne

// const updateDocumet = async (_id) => {
//     try {
//         const result = await Playlist.updateOne({ _id }, {
//             name: "Akshata"
//         });
//         console.log(result)
//     } catch (err) {
//         console.log(err)
//     }
// }

// updateDocumet("6362060663dd2cb8aa02cfd9")

// update the document by findByIdAndUpdate

// const updateDocumet = async (_id) => {
//     try {
//         const result = await Playlist.findByIdAndUpdate({ _id }, { $set: { videos: 0 } })
//         console.log(result)
//     } catch (err) {
//         console.log(err)
//     }
// }
// updateDocumet("6362060663dd2cb8aa02cfd9")


// delete the documents  by deleteOne

// const deleteDocument = async (_id) => {
//     try {
//         const result = await Playlist.deleteOne({ _id });
//         console.log(result)
//     } catch (err) {
//         console.log(err)
//     }
// }
// deleteDocument("636238513940fe44ab25f85e");


//delete the document by findByIdAndDelete

// const deleteDocument = async (_id) => {
//     try {
//         const result = await Playlist.findByIdAndDelete({ _id })
//         console.log(result)
//     } catch (err) {
//         console.log(err)
//     }
// }
// deleteDocument("636239cc3940fe44ab25f85f");


//Validation using mongoose

//Built in validataion

//for lowercase
//first add lowercase:true in the schema
// const createDocument = async () => {
//     try {
//         const javaScript = new Playlist({
//             name: "JAVASCRIPT",
//             ctype: "Front End",
//             videos: 150,
//             author: "Thapa Technical",
//             active: true,
//         });

//         const result = await Playlist.insertMany([javaScript])
//         console.log(result)

//     } catch (err) {
//         console.log(err)
//     }
// }
// createDocument();

//if you keep anything as a unique : true then you can not create a duplicate for it

//for UPPERCASE
//first add uppercase=true in your schema

// const createDocument = async () => {
//     try {
//         const Java = new Playlist({
//             name: "java",
//             ctype: "Front End",
//             videos: 100,
//             author: "Thapa Technical",
//             active: true,
//         });
//         const result = await Playlist.insertMany([Java])
//         console.log(result)
//     } catch (err) {
//         console.log(err)
//     }
// }
// createDocument();

//for trim
// first add trim:true in your Schema it will remove the extra  outer space 
// const createDocument = async () => {
//     try {
//         const Python = new Playlist({
//             name: "                                   Python",
//             ctype: "Back End",
//             videos: 25,
//             author: "Thapa Technical",
//             active: true,
//         });
//         const result = await Playlist.insertMany([Python])
//         console.log(result)
//     } catch (err) {
//         console.log(err)
//     }
// }
// createDocument();


//for minlength and maxlength
// the string should be in between the minlength and the maxlength
// const createDocument = async () => {
//     try {
//         const clanuage = await Playlist({
//             name: "c language",
//             ctype: "Back End",
//             videos: 25,
//             author: "Thapa Technical",
//             active: true,
//         });
//         const result = await Playlist.insertMany([clanuage]);
//         console.log(result)
//     } catch (err) {
//         console.log(err)
//     }
// }

// createDocument();


//for enum it checks if the value is in the given array or not
//first add enum:[whatever you want to be in your array]

// const createDocument = async () => {
//     try {
//         const abc = await Playlist({
//             name: ".net",
//             ctype: "Back End",
//             videos: 25,
//             author: "Thapa Technical",
//             active: true,
//         })
//         const result = await Playlist.insertMany([abc]);
//         console.log(result)
//     } catch (err) {
//         console.log(err)
//     }
// }
// createDocument();

//Custom validation

// const createDocument = async () => {
//     try {
//         const php = await Playlist({
//             name: "PHP",
//             ctype: "Back End",
//             videos: -25,
//             author: "Thapa Technical",
//             active: true,
//         });
//         const result = await Playlist.insertMany([php])
//         console.log(result);
//     } catch (err) {
//         console.log(err)
//     }
// }

// createDocument();


//Npm Validation
//first install the validator by giving command npm i validator
// const createDocument = async () => {
//     try {
//         const add = await Playlist({
//             name: "jhgugjk",
//             ctype: "Back End",
//             videos: 25,
//             author: "Thapa Technical",
//             active: true,
//             email: "akshata@gmail.com"


//         })
//         const result = await Playlist.insertMany([add]);
//         console.log(result)
//     } catch (err) {
//         console.log(err.message)
//     }
// }
// createDocument()










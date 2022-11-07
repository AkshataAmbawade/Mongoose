const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Populate')
    .then(() => {
        console.log("working working....")
    })
    .catch((err) => {
        console.log(err)
    })

const studentsS = new mongoose.Schema({
    name: String,
    rollno: Number,
    email: String
})
const subjectS = new mongoose.Schema({
    name: String,
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "studentlist"
    }
})
const Studentsinfo = new mongoose.model('studentlist', studentsS);
const Subjectsname = new mongoose.model("Subjects", subjectS)

// const createDocument = async () => {
//     try {
//         const st1 = new Studentsinfo({
//             name: "Akshata",
//             rollno: 1,
//             email: "student@gmail.com"
//         })
//         const st2 = new Studentsinfo({
//             name: "Hemangi",
//             rollno: 2,
//             email: "student@gmail.com"
//         })
//         const st3 = new Studentsinfo({
//             name: "Sonia",
//             rollno: 3,
//             email: "student@gmail.com"
//         })
//         const st4 = new Studentsinfo({
//             name: "Meghana",
//             rollno: 4,
//             email: "student@gmail.com"
//         })
//         const st5 = new Studentsinfo({
//             name: "Pallavi",
//             rollno: 5,
//             email: "student@gmail.com"
//         })
//         const result = await Studentsinfo.insertMany([st1, st2, st3, st4, st5])
//         console.log(result)
//     } catch (err) {
//         console.log(err)
//     }
// }

// createDocument();



// const addDoc = async () => {
//     const sub1 = new Subjectsname({
//         name: "English",
//         student: ("63635278ef7f445dd88e3270")
//     })
//     const result = await Subjectsname.insertMany([sub1])
//     console.log(result)
// }

// addDoc();

// const findD = async () => {
//     try {
//         const result = await Subjectsname.find().populate('student')
//         console.log(result)
//     }
//     catch (err) { console.log(err.message) }
// }
// findD()

//for $lookup

const findD = async () => {
    try {
        const result = await Subjectsname.aggregate([
            {
                $lookup: {
                    from: 'studentlists',
                    localField: 'student',
                    foreignField: '_id',
                    as: 'anything'
                }
            },
            {$unwind:'$anything'}
        ])
        console.log(result)
    }
    catch (err) { console.log(err.message) }
}
findD()
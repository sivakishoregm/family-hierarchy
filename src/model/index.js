const mongoose = require('mongoose')

const familySchema = new mongoose.Schema({
    firstName: { type: String, required: true},
    lastName: { type: String, required: true},
    motherName: { type: String, required: true},
    fatherName: { type: String, required: true},
    sons: {type: Array},
    daughters: {type: Array},
    paternalGM: { type: String},
    paternalGF: { type: String},
    maternalGM: { type: String},
    maternalGF: { type: String},
})

const Person =  mongoose.model('person',familySchema)

const allPersons = async (req,res)=> {
let result = await Person.find({})
console.log("persons list", result)
res.send(result);
}


const createPerson = async (req,res) => {
    console.log("form data:",req.body)
    if(req.body.firstName && req.body.lastName && req.body.fatherName && req.body.motherName) {
        let data = await Person.create({
            firstName: req.body.firstName ,
            lastName: req.body.lastName,
            fatherName: req.body.fatherName,
            motherName: req.body.motherName
        })     
        console.log("person created", data)
        res.send("person created")
    }
    else{
        res.end('WIP');
    }
    
}

const getPerson = async (req,res)=> {
    let id = req.params.id
    let result = await Person.findById(id)
    console.log("dindByID: ",result)
    res.send(result)
}

const updatePerson = async(req,res)=> {
    let id = req.params.id;
    let update = {}
    if(req.body.firstName){ update.firstName = req.body.firstName}
    if(req.body.lastName){ update.lastName = req.body.lastName}
    if(req.body.fatherName){ update.fatherName = req.body.fatherName}
    if(req.body.motherName){ update.motherName = req.body.motherName}
    if(req.body.paternalGF){ update.paternalGF = req.body.paternalGF}
    if(req.body.paternalGM){ update.paternalGM = req.body.paternalGM}
    if(req.body.maternalGF){ update.maternalGF = req.body.maternalGF}
    if(req.body.maternalGM){ update.maternalGM = req.body.maternalGM}
    // if(req.body.sons){ update.sons = req.body.sons}
    // if(req.body.daughters){ update.daughters = req.body.daughters}

    console.log("values",update, id)

    let result = await Person.findByIdAndUpdate(id, update)
    console.log("result----",result)
    res.send("WIP update",result)
}

const removePerson = async (req,res) => {
    let id = req.params.id;
    let result = await Person.findByIdAndDelete(id)

    console.log(result)
    res.send("WIP delete")
}

module.exports = {allPersons,createPerson,getPerson,updatePerson,removePerson}

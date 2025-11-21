const express = require('express')
const router=express.Router();
const {allPersons,createPerson,getPerson,updatePerson,removePerson} = require('../model')

router.get('/',allPersons)
router.post('/',createPerson)
router.route('/:id').get(getPerson).patch(updatePerson).delete(removePerson)


module.exports = router
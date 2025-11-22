const express = require('express')
const router=express.Router();
const {allPersons,createPerson,getPerson,updatePerson,removePerson} = require('../model')

//binith is a good person studies well. 

router.get('/',allPersons)
router.post('/',createPerson)
router.route('/:id').get(getPerson).patch(updatePerson).delete(removePerson)


module.exports = router
const express = require('express'); //we need this because we want to put into a variable form all of our routes so that they can be exported
const People = require('../models/people');

const router = express.Router(); //router is the variable where will be putting in our routes. 

//this is the first route we will create
//this gets a list of ALL people and send a JSON response of ALL people
router.get('/', async (req, res) => {
    try {
        //before
        // const listofallpeople = await People.find({})
        // res.json(listofallpeople)


        //after
        res.json(await People.find({}))

    }catch(err){
        res.status(400).json(err);
    }
})

router.post('/', async (req, res) => {
    try{
        res.json(await People.create(req.body))
    } catch (err) {
        res.status(400).json(err);
    }
})

router.delete("/:id", async (req, res) => {
    try{
        res.json(await People.findByIdAndDelete(req.params.id))
    } catch (err) {
        res.status(400).json(err);
    }
})

router.get("/:id", async (req, res) => {
    try{
        res.json(await People.findById(req.params.id))
    } catch (err) {
        res.status(400).json(err);
    }
})

router.put("/:id", async (req, res) => {
    try{
        res.json(await People.findByIdAndUpdate(req.params.id, req.body))
    } catch (err) {
        res.status(400).json(err);
    }
})


module.exports = router;
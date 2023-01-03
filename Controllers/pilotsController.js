const BL = require('../BL/pilotsBL');
const express = require('express');
const router = express.Router();

router.get("/", (req,res) => {
    try {
        const data = BL.getAllPilots();
        res.json(data);
    } catch (error) {
        res.status(500).send(error.message);
    }
    
})

router.get("/withflightplan", (req,res) => {
    try {
        const data = BL.getPilotsWithFlightPlan();
        res.json(data);
    } catch (error) {
        res.status(500).send(error.message);
    }
    
})

router.get("/callsign/:callsign", (req,res) => {
    try {
        const data = BL.getPilotsByCallsign(req.params.callsign);
        res.json(data);
    } catch (error) {
        res.status(500).send(error.message);
    }
    
})

router.get("/cid/:cid", (req,res) => {
    try {
        const data = BL.getPilotByCID(req.params.cid);
        res.json(data);
    } catch (error) {
        res.status(500).send(error.message);
    }
    
})

module.exports = router;

const BL = require('../BL/pilotsBL');
const express = require('express');
const router = express.Router();

router.get("/", async (req,res) => {
    try {
        const data = await BL.getAllPilots();
        res.json(data);
    } catch (error) {
        res.status(500).send(error.message);
    }
    
})

router.get("/withflightplan", async (req,res) => {
    try {
        const data = await BL.getPilotsWithFlightPlan();
        res.json(data);
    } catch (error) {
        res.status(500).send(error.message);
    }
    
})

router.get("/callsign/:callsign", async  (req,res) => {
    try {
        const data = await BL.getPilotsByCallsign(req.params.callsign);
        res.json(data);
    } catch (error) {
        res.status(500).send(error.message);
    }
    
})

router.get("/cid/:cid", async (req,res) => {
    try {
        const data = await BL.getPilotByCID(req.params.cid);
        res.json(data);
    } catch (error) {
        res.status(500).send(error.message);
    }
    
})

module.exports = router;

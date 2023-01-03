const DAL = require('../DAL/vatsimDAL');


// will retrieve all pilots from the DAL regardless if they sent a flight plan or not
const getAllPilots = async () => {
    const data = await DAL.getVatsimData();
    return data.pilots;
}

// will retrieve all pilots from the DAL that sent a flight plan
const getPilotsWithFlightPlan = async () => {
    const data = await DAL.getVatsimData();
    return data.pilots.filter(pilot => pilot.flight_plan !== null);
}

// will retrieve a pilot by callsign
const getPilotsByCallsign = async (callsign) => {
    const data = await DAL.getVatsimData();
    return data.pilots.find(pilot => pilot.callsign === callsign);
}

// will retrieve a pilot by their CID
const getPilotByCID = async (cid) => {
    const data = await DAL.getVatsimData();
    return data.pilots.find(pilot => pilot.cid === cid);
}

module.exports = {
    getAllPilots,
    getPilotsWithFlightPlan,
    getPilotsByCallsign,
    getPilotByCID
}
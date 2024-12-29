import Destination from "../Classes/destination.js";

const destinations = [];

export function addDestination(data) {
    const newDestination = new Destination(
        data.code,
        data.name,
        data.airportName,
        data.airportUrl,
        data.imageUrl
    );

    if (newDestination.isValid()) {
        destinations.push(newDestination);
        console.log("Destination added:", newDestination);
        return true;
    } else {
        console.error("Invalid destination data.");
        return false;
    }
}

export function getDestinations() {
    return destinations;
}

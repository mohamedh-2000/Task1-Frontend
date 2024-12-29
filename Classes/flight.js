class Flight {
    constructor(flightNo, origin, destination, boarding, arrival, seats) {
        this.flightNo = flightNo;
        this.origin = origin;
        this.destination = destination;
        this.boarding = boarding;
        this.arrival = arrival;
        this.seats = seats;
    }

    isValid() {
        const currentDate = new Date();
        const boardingDate = new Date(this.boarding);
        const arrivalDate = new Date(this.arrival);

        if (boardingDate < currentDate) {
            console.error("Boarding date must be in the future.");
            return false;
        }

        if (boardingDate >= arrivalDate) {
            console.error("Boarding date must be before arrival date.");
            return false;
        }

        if (this.seats <= 0) {
            console.error("Number of seats must be greater than 0.");
            return false;
        }

        return true;
    }
}

export default Flight;

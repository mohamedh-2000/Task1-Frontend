class Booking {
    constructor(flight, passengers) {
        this.flight = flight;
        this.passengers = passengers;
    }

    isValid() {
        if (!this.flight || this.passengers.length === 0) {
            console.error("Booking must have a flight and at least one passenger.");
            return false;
        }

        const passports = new Set();
        for (const passenger of this.passengers) {
            if (!passenger.isValid()) {
                return false;
            }

            if (passports.has(passenger.passportId)) {
                console.error("Duplicate passport ID detected.");
                return false;
            }
            passports.add(passenger.passportId);
        }

        if (this.passengers.length > this.flight.seats) {
            console.error("Not enough seats available for this booking.");
            return false;
        }

        return true;
    }
}

export default Booking;

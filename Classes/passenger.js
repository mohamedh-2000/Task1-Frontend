class Passenger {
    constructor(name, passportId, email) {
        this.name = name;
        this.passportId = passportId;
        this.email = email;
    }

    isValid() {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!this.name || !this.passportId || !this.email) {
            console.error("Passenger details are invalid.");
            return false;
        }

        if (!emailPattern.test(this.email)) {
            console.error("Invalid email format.");
            return false;
        }

        return true;
    }
}

export default Passenger;

class Destination {
    constructor(code, name, airportName, airportUrl, imageUrl) {
        this.code = code;
        this.name = name;
        this.airportName = airportName;
        this.airportUrl = airportUrl;
        this.imageUrl = imageUrl;
    }

    isValid() {
        if (!this.code || !this.name || !this.airportName || !this.airportUrl || !this.imageUrl) {
            console.error("All destination fields are required.");
            return false;
        }
        return true;
    }
}

export default Destination;

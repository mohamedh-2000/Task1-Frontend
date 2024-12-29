import Flight from "../Classes/flight.js";

const flights = [];
let isAscending = true;

export function addFlight(data) {
    const newFlight = new Flight(
        data.flightNo,
        data.origin,
        data.destination,
        data.boarding,
        data.arrival,
        data.seats
    );

    if (newFlight.isValid()) {
        flights.push(newFlight);
        refreshFlightsTable();
        showMessage("Flight added successfully!", "success");
        return true;
    } else {
        showMessage("Invalid flight data.", "error");
        return false;
    }
}

export function getFlights() {
    return flights;
}

export function refreshFlightsTable() {
    const tbody = document.querySelector("#flightsTable tbody");
    tbody.innerHTML = ""; // Clear table
    flights.forEach(addFlightToTable);
}

function addFlightToTable(flight) {
    const tbody = document.querySelector("#flightsTable tbody");
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${flight.flightNo}</td>
        <td>${flight.origin}</td>
        <td>${flight.destination}</td>
        <td>${flight.boarding}</td>
        <td>${flight.arrival}</td>
        <td>${flight.seats}</td>
        <td><button onclick="selectFlight('${flight.flightNo}')">Book</button></td>
    `;

    tbody.appendChild(row);
}

export function sortTable(column) {
    flights.sort((a, b) => {
        if (isAscending) {
            return a[column] > b[column] ? 1 : -1;
        } else {
            return a[column] < b[column] ? 1 : -1;
        }
    });

    isAscending = !isAscending;
    refreshFlightsTable();
}

function showMessage(message, type) {
    const messageDiv = document.getElementById("message");
    messageDiv.textContent = message;
    messageDiv.className = `alert ${type}`;
    messageDiv.style.display = "block";

    setTimeout(() => {
        messageDiv.style.display = "none";
    }, 3000);
}

import Booking from "../Classes/booking.js";

const bookings = [];

export function addBooking(flight, passengers) {
    const newBooking = new Booking(flight, passengers);

    if (newBooking.isValid()) {
        bookings.push(newBooking);
        refreshBookingsTable();
        showMessage("Booking successful!", "success");
        return true;
    } else {
        showMessage("Invalid booking data.", "error");
        return false;
    }
}

export function getBookings() {
    return bookings;
}

function refreshBookingsTable() {
    const tbody = document.querySelector("#bookingsTable tbody");
    tbody.innerHTML = ""; // Clear table
    bookings.forEach(addBookingToTable);
}

function addBookingToTable(booking) {
    const tbody = document.querySelector("#bookingsTable tbody");
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${booking.flight.flightNo}</td>
        <td>${booking.passengers.map((p) => p.name).join(", ")}</td>
        <td>${booking.passengers.map((p) => p.passportId).join(", ")}</td>
    `;

    tbody.appendChild(row);
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

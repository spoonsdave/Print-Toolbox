let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

function updateCalendar() {
  document.getElementById("month-year").textContent =
    monthNames[currentMonth] + " " + currentYear;
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  let calendarBody = document.getElementById("calendar-body");
  calendarBody.innerHTML = "";  // Clear previous cells

  let row = document.createElement("tr");

  // Fill initial empty cells
  for (let i = 0; i < firstDay; i++) {
    let emptyCell = document.createElement("td");
    emptyCell.innerHTML = "&nbsp;";
    row.appendChild(emptyCell);
  }

  // Fill cells with dates
  for (let day = 1; day <= daysInMonth; day++) {
    if (row.children.length === 7) {  // Start a new row after Saturday
      calendarBody.appendChild(row);
      row = document.createElement("tr");
    }
    const cell = document.createElement("td");
    cell.textContent = day;
    row.appendChild(cell);
  }

  // Append the last row
  if (row.children.length > 0) {
    calendarBody.appendChild(row);
  }
}

function changeMonth(offset) {
  currentMonth += offset;
  if (currentMonth === 12) {
    currentMonth = 0;
    currentYear++;
  } else if (currentMonth === -1) {
    currentMonth = 11;
    currentYear--;
  }
  updateCalendar();
}

// Initialize calendar on load
document.addEventListener("DOMContentLoaded", updateCalendar);

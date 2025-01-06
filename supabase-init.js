const supabaseUrl = 'https://uogtvijfolnwpkojtefm.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVvZ3R2aWpmb2xud3Brb2p0ZWZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ1OTU0NDEsImV4cCI6MjA1MDE3MTQ0MX0.93D6DLhKvHal5Y7DJKf7ObkjMhWSwKXUhZEMH8BpcP8';

console.log('Initializing Supabase...');
window.supabase = supabase.createClient(supabaseUrl, supabaseKey);
console.log('Supabase initialized:', window.supabase);






document.addEventListener('DOMContentLoaded', () => {
    function initializeLogoutButton() {
        const logoutButton = document.getElementById('logout-button');

        if (logoutButton) {
            console.log('Logout button found. Adding event listener.');
            logoutButton.addEventListener('click', async () => {
                console.log('Logout button clicked');
                const { error } = await supabase.auth.signOut();

                if (error) {
                    console.error('Error during logout:', error.message);
                } else {
                    console.log('Logout successful, redirecting to login.html');
                    window.location.href = 'login.html';
                }
            });
        } else {
            console.error('Logout button not found. Watching for DOM changes...');
        }
    }

    // Use MutationObserver to detect when sidebar is loaded
    const observer = new MutationObserver(() => {
        const logoutButton = document.getElementById('logout-button');
        if (logoutButton) {
            observer.disconnect(); // Stop observing once the button is found
            initializeLogoutButton(); // Initialize the button
        }
    });

    // Start observing the body for DOM changes
    observer.observe(document.body, { childList: true, subtree: true });

    // Run initialization in case the button is already present
    initializeLogoutButton();
});

document.addEventListener("DOMContentLoaded", async () => {
    const { data: { user }, error } = await supabase.auth.getUser();

    if (user && user.email) {
        // Display the email (or replace with a custom username field if available)
        document.getElementById("username-display").textContent = user.email;
    } else {
        document.getElementById("username-display").textContent = "Guest";
    }
});



async function fetchImportantTaskCount() {
    const { data, error, count } = await supabase
        .from('tasks')
        .select('*', { count: 'exact' }) // Fetch count of all important tasks
        .eq('is_important', true);

    if (error) {
        console.error('Error fetching important tasks count:', error);
        return 0; // Fallback to 0 on error
    }

    console.log('Important tasks loaded:', data); // Debugging: log the tasks
    return count; // Use the exact count from the query
}


// Load number of tasks
document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Check if the important task count element exists
        const taskCountElement = document.getElementById('important-task-count');
        if (!taskCountElement) return;

        // Fetch the important task count
        const count = await fetchImportantTaskCount();

        // Update the DOM
        if (count > 0) {
            taskCountElement.textContent = count; // Show the count
        } else {
            const taskLink = document.getElementById('important-tasks-link');
            if (taskLink) taskLink.style.display = 'none'; // Hide the link if no tasks
        }
    } catch (error) {
        console.error('Error updating important tasks count:', error);
    }
});


// Calendar Script


let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

const monthNames = [
    "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
    "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"
];

// Function to fetch UK bank holidays
async function fetchBankHolidays() {
    const response = await fetch('https://www.gov.uk/bank-holidays.json');
    const data = await response.json();
    return data['england-and-wales'].events.map(event => ({
        date: new Date(event.date),
        name: event.title
    }));
}

// Function to update the calendar
async function updateCalendar() {
    const today = new Date();
    const isCurrentMonth = today.getFullYear() === currentYear && today.getMonth() === currentMonth;
    const todayDate = today.getDate();

    document.getElementById("month-year").textContent =
        monthNames[currentMonth] + " " + currentYear;

    // Adjust firstDay to match a Monday start
    let firstDay = new Date(currentYear, currentMonth, 1).getDay();
    firstDay = (firstDay === 0) ? 6 : firstDay - 1;

    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    let calendarBody = document.getElementById("calendar-body");
    calendarBody.innerHTML = ""; // Clear previous cells

    let holidays = await fetchBankHolidays(); // Fetch bank holidays

    let row = document.createElement("tr");
    for (let i = 0; i < firstDay; i++) {
        row.appendChild(document.createElement("td"));
    }

    for (let day = 1; day <= daysInMonth; day++) {
        if (row.children.length === 7) {
            calendarBody.appendChild(row);
            row = document.createElement("tr");
        }

        const cell = document.createElement("td");
        cell.textContent = day;

        // Highlight today's date
        if (isCurrentMonth && day === todayDate) {
            cell.style.fontWeight = "bold";
            cell.style.color = "#c0392b";
            cell.style.fontSize = "14px";
            cell.classList.add("pulse-shadow");
        }

        // Check if this day is a bank holiday
        const holiday = holidays.find(holiday =>
            holiday.date.getFullYear() === currentYear &&
            holiday.date.getMonth() === currentMonth &&
            holiday.date.getDate() === day
        );

        if (holiday) {
            cell.classList.add("holiday"); // Apply the holiday styles
            cell.title = holiday.name;    // Tooltip with holiday name
        }

        row.appendChild(cell);
    }

    calendarBody.appendChild(row); // Append the last row
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

document.addEventListener("DOMContentLoaded", updateCalendar);

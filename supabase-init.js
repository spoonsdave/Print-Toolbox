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

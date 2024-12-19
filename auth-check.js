async function checkSession() {
    const { data: { session }, error } = await supabase.auth.getSession();

    if (error) {
        console.error('Error checking session:', error);
    }

    if (!session) {
        // Redirect to login page if no session
        window.location.href = 'login.html';
    }
}

checkSession();

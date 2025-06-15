// Supabase configuration
const SUPABASE_URL = 'https://iyllmwimbslwpedfquxa.supabase.co';
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml5bGxtd2ltYnNsd3BlZGZxdXhhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk4NjgyNDMsImV4cCI6MjA2NTQ0NDI0M30.pKvm1kqK8Auy32wwPJcPhGqUDI9jzq8lSZvFdKpYnhg';
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzAkbfsKcR-urDVWZPGcVXPgRUJgDukCJjxNlkx8_sPz52OqlOAGJnh0YAGoTPjgzgM/exec';
const supabase = supabaseJs.createClient(SUPABASE_URL, SUPABASE_ANON);

// Determine current page
const path = window.location.pathname;

// Sign-in page logic
if (path.endsWith('signin.html')) {
  document.getElementById('signInBtn').onclick = () => {
    supabase.auth.signInWithOAuth({
      provider: 'github',
      options: { redirectTo: window.location.origin + '/account.html' }
    });
  };
}

// Account page logic
if (path.endsWith('account.html')) {
  supabase.auth.getSession().then(({ data: { session } }) => {
    if (session) {
      document.getElementById('userEmail').textContent = session.user.email;
    }
  });
}

// Email form submission
if (path.endsWith('index.html') || path === '/') {
  document.addEventListener('DOMContentLoaded', () => {
    const emailForm = document.getElementById('emailForm');
    emailForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const emailInput = document.getElementById('emailInput');
      const btn = emailForm.querySelector('.submit-btn');
      btn.disabled = true;
      btn.textContent = 'Joining...';
      try {
        await fetch(GOOGLE_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: emailInput.value, source: 'OSG Landing Page' })
        });
        window.location.href = 'thank-you.html';
      } catch (err) {
        console.error(err);
        alert('Submission failed. Please try again.');
        btn.disabled = false;
        btn.textContent = 'Join';
      }
    });

    // Grid animations
    document.querySelectorAll('.grid-item').forEach(item => {
      item.addEventListener('click', () => {
        item.style.transform = 'rotate(360deg) scale(1.2)';
        setTimeout(() => { item.style.transform = ''; }, 500);
      });
    });
  });
}
const SUPABASE_URL = 'https://iyllmwimbslwpedfquxa.supabase.co';
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml5bGxtd2ltYnNsd3BlZGZxdXhhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk4NjgyNDMsImV4cCI6MjA2NTQ0NDI0M30.pKvm1kqK8Auy32wwPJcPhGqUDI9jzq8lSZvFdKpYnhg';
const supabase = supabaseJs.createClient(SUPABASE_URL, SUPABASE_ANON);

// Handle OAuth sign-in/sign-out UI
const signInBtn = document.getElementById('signInBtn');
async function updateUserUI() {
  const { data: { session } } = await supabase.auth.getSession();
  if (session) {
    const email = session.user.email;
    signInBtn.textContent = email;
    signInBtn.href = '#';
    signInBtn.onclick = async () => {
      await supabase.auth.signOut();
      location.reload();
    };
  } else {
    signInBtn.textContent = 'Sign In';
    signInBtn.onclick = () => {
      supabase.auth.signInWithOAuth({
        provider: 'github',
        options: { redirectTo: window.location.origin }
      });
    };
  }
}

// Email form submission to Google Apps Script
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzAkbfsKcR-urDVWZPGcVXPgRUJgDukCJjxNlkx8_sPz52OqlOAGJnh0YAGoTPjgzgM/exec';
const emailForm = document.getElementById('emailForm');
const emailInput = document.getElementById('emailInput');
const successMessage = document.getElementById('successMessage');
emailForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const submitBtn = emailForm.querySelector('.submit-btn');
  submitBtn.disabled = true;
  submitBtn.textContent = 'Joining...';
  try {
    await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({ email: emailInput.value, source: 'OSG Landing Page' })
    });
    emailForm.style.display = 'none';
    successMessage.style.display = 'block';
    setTimeout(() => {
      emailForm.style.display = 'flex';
      successMessage.style.display = 'none';
      emailInput.value = '';
      submitBtn.disabled = false;
      submitBtn.textContent = 'Join';
    }, 5000);
  } catch (err) {
    console.error(err);
    alert('Something went wrong. Please try again.');
    submitBtn.disabled = false;
    submitBtn.textContent = 'Join';
  }
});

// Grid item click animation
const gridItems = document.querySelectorAll('.grid-item');
gridItems.forEach(item => {
  item.addEventListener('click', () => {
    item.style.transform = 'rotate(360deg) scale(1.2)';
    setTimeout(() => { item.style.transform = ''; }, 500);
  });
});
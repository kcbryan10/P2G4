async function loginHandler(event) {
  event.preventDefault();

  const email = document.getElementById('email-login').value.trim();
  const password = document.getElementById('password-login').value.trim();

  if (email && password) {
    const response = await fetch('api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('.login-form').addEventListener('submit', loginHandler);

async function signupHandler(event) {
  event.preventDefault();

  const first_name = document.getElementById('first-name-signup').value.trim();
  const last_name = document.getElementById('last-name-signup').value.trim();
  const email = document.getElementById('email-signup').value.trim();
  const password = document.getElementById('password-signup').value.trim();

  if (email && password && first_name && last_name) {
    const usersApiResponse = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    let studentApiResponse;

    if (usersApiResponse.ok) {
      studentApiResponse = await fetch('/api/students', {
        method: 'POST',
        body: JSON.stringify({ first_name, last_name }),
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (studentApiResponse.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupHandler);

const loginForm = document.querySelector('#login-section form');

loginBtn.addEventListener('click', async (event) => { 
  event.preventDefault();

  const nameInput = document.querySelector('#userNameLogin');
  const passwordInput = document.querySelector('#passwordLogin');

  const user = {
    name: nameInput.value,
    password: passwordInput.value
  };

  try {
    const response = await fetch('./rutas/usuarios', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });

    if (response.ok) {                              // Redirect the user to the appropriate page
      loginBtn.addEventListener('click', () => location.hash = '#register'); 
    } else {
      const errorMessage = await response.text();
      alert(errorMessage);
    }
  } catch (error) {
    console.error(error);
    alert('An error occurred while logging in. Please try again later.');
  }
});

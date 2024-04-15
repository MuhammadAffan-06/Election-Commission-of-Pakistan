document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.getElementById('login-form');

  loginForm.addEventListener('submit', async function (event) {
    event.preventDefault();

    const formData = new FormData(this);

    try {
      const response = await fetch('http://localhost:5001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      });

      const responseData = await response.json();

      if (response.ok) {
        console.log("Login successful", responseData.token); // Log the token to the console
        window.location.href = "../static/politicalparties/political-parties.html" // Alert the user of successful login
        // Redirect to a new page or open a new window here
      } else {
        console.error("Login failed", responseData.message);
        alert(responseData.message); // Display error message to the user
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
  });
});

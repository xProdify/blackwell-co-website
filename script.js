// Theme toggle functionality
const toggleBtn = document.getElementById('toggle-theme');
const body = document.body;

toggleBtn.addEventListener('click', () => {
  if (body.classList.contains('dark-mode')) {
    body.classList.replace('dark-mode', 'light-mode');
    toggleBtn.textContent = '☀️';
  } else {
    body.classList.replace('light-mode', 'dark-mode');
    toggleBtn.textContent = '🌙';
  }
});

// Oil price updater
const priceEl = document.getElementById('price');

function fetchOilPrice() {
  // Simulated oil price between $70-90
  const price = (70 + Math.random() * 20).toFixed(2);
  priceEl.textContent = `$${price} / barrel`;
}

// Update price every 10 seconds
fetchOilPrice();
setInterval(fetchOilPrice, 10000);

// Newsletter signup form
document.getElementById('signup-form').addEventListener('submit', async function(e) {
  e.preventDefault();
  const email = document.getElementById('email').value;

  try {
    const response = await fetch('https://gm2104.app.n8n.cloud/webhook-test/blackwell-signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email })
    });

    if (response.ok) {
      document.getElementById('form-message').textContent = "Thanks! You'll get updates soon.";
    } else {
      document.getElementById('form-message').textContent = "Oops, something went wrong.";
    }
  } catch (error) {
    document.getElementById('form-message').textContent = "Error sending your email.";
  }

  this.reset();
});

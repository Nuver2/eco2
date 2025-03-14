const http = require('http');

// Inline CSS styles
const styles = `
  body {
    margin: 0;
    font-family: 'Arial', sans-serif;
    background: linear-gradient(135deg, #f0fdf4, #dcfce7);
    color: #333;
  }
  nav {
    position: sticky;
    top: 0;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 50;
  }
  .nav-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .logo {
    font-size: 1.5rem;
    font-weight: bold;
    color: #166534;
  }
  .nav-buttons {
    display: flex;
    gap: 1rem;
  }
  .nav-button {
    color: #166534;
    background: none;
    border: none;
    font-size: 1rem;
    cursor: pointer;
    transition: color 0.3s ease, transform 0.3s ease;
  }
  .nav-button:hover {
    color: #14532d;
    transform: translateY(-2px);
  }
  section {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 2rem;
  }
  .section-content {
    max-width: 800px;
    padding: 2rem;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 15px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }
  h1, h2 {
    font-size: 3rem;
    font-weight: bold;
    color: #166534;
    animation: fade-in 1s ease-in-out;
  }
  p {
    font-size: 1.25rem;
    color: #166534;
    margin-top: 1rem;
    animation: fade-in-up 1s ease-in-out;
  }
  @keyframes fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes fade-in-up {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  #our-mission {
    background: linear-gradient(135deg, #f0fdf4, #bbf7d0);
  }
  #about-product {
    background: linear-gradient(135deg, #dcfce7, #a7f3d0);
  }
  #faq {
    background: linear-gradient(135deg, #bbf7d0, #86efac);
  }
  #contact {
    background: linear-gradient(135deg, #a7f3d0, #6ee7b7);
  }
  #models-to-purchase {
    background: linear-gradient(135deg, #86efac, #4ade80);
  }
`;

// HTML content
const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>EcoCoffeeBox - Sustainable Coffee Storage</title>
  <style>${styles}</style>
</head>
<body>
  <nav>
    <div class="nav-content">
      <div class="logo">EcoCoffeeBox</div>
      <div class="nav-buttons">
        <button class="nav-button" onclick="scrollToSection('our-mission')">Our Mission</button>
        <button class="nav-button" onclick="scrollToSection('about-product')">About Product</button>
        <button class="nav-button" onclick="scrollToSection('faq')">FAQ</button>
        <button class="nav-button" onclick="scrollToSection('contact')">Contact</button>
        <button class="nav-button" onclick="scrollToSection('models-to-purchase')">Models to Purchase</button>
      </div>
    </div>
  </nav>

  <section id="our-mission">
    <div class="section-content">
      <h1>Our Mission</h1>
      <p>To make coffee storage sustainable and eco-friendly.</p>
    </div>
  </section>

  <section id="about-product">
    <div class="section-content">
      <h2>About Product</h2>
      <p>Our eco-friendly coffee storage box is designed to keep your used coffee fresh and sustainable.</p>
    </div>
  </section>

  <section id="faq">
    <div class="section-content">
      <h2>FAQ</h2>
      <p>Frequently asked questions about our product.</p>
    </div>
  </section>

  <section id="contact">
    <div class="section-content">
      <h2>Contact</h2>
      <p>Get in touch with us for more information.</p>
    </div>
  </section>

  <section id="models-to-purchase">
    <div class="section-content">
      <h2>Models to Purchase</h2>
      <p>Explore our range of eco-friendly coffee storage boxes.</p>
    </div>
  </section>

  <script>
    function scrollToSection(id) {
      document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    }
  </script>
</body>
</html>
`;

// Create a simple HTTP server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(html);
});

// Start the server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
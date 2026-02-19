# rda
trust
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rahnuma-e-Deen Alliance (RDA) | Public Charitable Trust</title>
    <style>
        /* --- CSS Styles (Design) --- */
        :root {
            --primary-color: #004d40; /* Dark Islamic Green */
            --secondary-color: #ffffff; /* White */
            --accent-color: #000000; /* Black */
            --text-color: #333;
        }
        
        body {
            margin: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: var(--text-color);
        }

        /* Header */
        header {
            background: var(--secondary-color);
            color: var(--primary-color);
            padding: 1rem 5%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            position: sticky;
            top: 0;
            z-index: 1000;
        }

        .logo {
            font-size: 1.8rem;
            font-weight: bold;
            color: var(--primary-color);
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .logo span {
            background: var(--primary-color);
            color: white;
            padding: 2px 8px;
            border-radius: 4px;
        }

        nav ul {
            list-style: none;
            display: flex;
            gap: 20px;
        }

        nav a {
            text-decoration: none;
            color: var(--primary-color);
            font-weight: 600;
        }

        /* Hero Section */
        .hero {
            background: linear-gradient(rgba(0, 77, 64, 0.9), rgba(0, 77, 64, 0.8)), url('https://source.unsplash.com/1600x900/?mosque,islamic');
            background-size: cover;
            background-position: center;
            color: white;
            text-align: center;
            padding: 100px 20px;
        }

        .hero h1 {
            font-size: 2.5rem;
            margin-bottom: 10px;
        }

        .hero p {
            font-size: 1.2rem;
            max-width: 600px;
            margin: 0 auto 20px auto;
        }

        .btn {
            display: inline-block;
            background: white;
            color: var(--primary-color);
            padding: 10px 25px;
            text-decoration: none;
            border-radius: 5px;
            font-weight: bold;
            transition: 0.3s;
        }

        .btn:hover {
            background: #f0f0f0;
        }

        /* Sections */
        .section {
            padding: 60px 20px;
            text-align: center;
        }

        .container {
            max-width: 1100px;
            margin: auto;
        }

        h2 {
            color: var(--primary-color);
            margin-bottom: 30px;
            font-size: 2rem;
        }

        /* About & Mission */
        .features {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 30px;
            margin-top: 30px;
        }

        .feature-box {
            background: #f9f9f9;
            padding: 30px;
            border-radius: 8px;
            width: 300px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            border-top: 4px solid var(--primary-color);
        }

        /* Footer */
        footer {
            background: var(--accent-color);
            color: white;
            text-align: center;
            padding: 20px;
        }

        .footer-content p {
            margin: 5px 0;
            font-size: 0.9rem;
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
            nav ul {
                display: none; /* Mobile menu hidden for simplicity in this version */
            }
            .hero h1 {
                font-size: 2rem;
            }
        }
    </style>
</head>
<body>

    <header>
        <a href="#" class="logo"><span>RDA</span> Global</a>
        <nav>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#mission">Mission</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <section class="hero">
        <h1>RAHNUMA-E-DEEN ALLIANCE</h1>
        <p>A Public Religious & Charitable Trust dedicated to Social Welfare, Education, and Peace.</p>
        <p><em>Bandh Barji, Motipur, Muzaffarpur, Bihar – 843111</em></p>
        <a href="#contact" class="btn">Join Our Mission</a>
    </section>

    <section id="about" class="section">
        <div class="container">
            <h2>About Us</h2>
            <p>RDA is established to serve the community through religious guidance, charitable works, and educational support. We are committed to fostering unity and helping the needy in our village and beyond.</p>
        </div>
    </section>

    <section id="mission" class="section" style="background-color: #f4f4f4;">
        <div class="container">
            <h2>Our Objectives</h2>
            <div class="features">
                <div class="feature-box">
                    <h3>🤝 Social Welfare</h3>
                    <p>Helping the underprivileged, widows, and orphans with financial and moral support.</p>
                </div>
                <div class="feature-box">
                    <h3>📚 Education</h3>
                    <p>Promoting both modern and Islamic education (Madrasa) for the youth of our village.</p>
                </div>
                <div class="feature-box">
                    <h3>⚖️ Dispute Resolution</h3>
                    <p>Solving village disputes peacefully through our Peace Coordination Committee.</p>
                </div>
            </div>
        </div>
    </section>

    <footer id="contact">
        <div class="container footer-content">
            <h2>Contact Us</h2>
            <p><strong>Head Office:</strong> Bandh Barji, Motipur, Muzaffarpur, Bihar – 843111</p>
            <p><strong>Email:</strong> contact@rdaglobal.in (Example)</p>
            <p>&copy; 2026 Rahnuma-e-Deen Alliance (RDA). All Rights Reserved.</p>
            <p style="font-size: 0.8rem; margin-top: 10px; opacity: 0.7;">Reg. Public Charitable Trust</p>
        </div>
    </footer>

</body>
</html>

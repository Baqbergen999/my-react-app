import React, { useState, useEffect } from 'react';

const App = () => {
  const [isHeaderVisible, setHeaderVisible] = useState(true); // State for header visibility
  const [lastScrollY, setLastScrollY] = useState(0); // State for last scroll position

  // Header hide/show logic based on scroll direction
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setHeaderVisible(false); // Scroll down -> Hide header
      } else {
        setHeaderVisible(true); // Scroll up -> Show header
      }
      setLastScrollY(window.scrollY); // Save the last scroll position
    };

    window.addEventListener('scroll', handleScroll); // Add scroll event listener
    return () => window.removeEventListener('scroll', handleScroll); // Cleanup
  }, [lastScrollY]);

  // Smooth scroll for internal links
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the element
    }
  };

  return (
    <div style={styles.app}>
      {/* Header */}
      <header style={{ ...styles.header, top: isHeaderVisible ? 0 : '-100px' }}>
        <nav style={styles.nav}>
          <a href="#landing" onClick={() => handleScroll('landing')} style={styles.navLink}>
            Home
          </a>
          <a href="#projects" onClick={() => handleScroll('projects')} style={styles.navLink}>
            Projects
          </a>
          <a href="#contact" onClick={() => handleScroll('contact')} style={styles.navLink}>
            Contact
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.navLink}
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.navLink}
          >
            LinkedIn
          </a>
        </nav>
      </header>

      {/* Landing Section */}
      <section id="landing" style={styles.landing}>
        <img
          src="https://via.placeholder.com/150"
          alt="Avatar"
          style={styles.avatar}
        />
        <h1 style={styles.name}> Nurkadyr Aiganym </h1>
        <p style={styles.bio}>
          Hi, I'm  Aiganym ! I'm a web developer passionate about building amazing user experiences.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" style={styles.projects}>
        <h2 style={styles.sectionTitle}>Featured Projects</h2>
        <div style={styles.projectGrid}>
          {/* Project 1 - Updated with detailed information */}
          <div style={styles.projectCard}>
            <h3>Online Store Platform</h3>
            <p>
              This project is a web application for managing an online store. The platform allows users to purchase products, view purchase history, and search for products across various categories.
            </p>
            <p>
              <strong>Key Features:</strong>
              <ul>
                <li>User registration and authentication</li>
                <li>Product search and filtering</li>
                <li>Adding products to cart and checkout</li>
                <li>Admin panel for managing products</li>
              </ul>
            </p>
            <p>
              <strong>Technologies Used:</strong> React, Node.js, Express, MongoDB, Redux
            </p>
            <p>
              <strong>Links:</strong>{' '}
              <a
                href="https://github.com/yourusername/online-store"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repository
              </a>{' '}
              |{' '}
              <a
                href="https://onlinestoreexample.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            </p>
            <img
              src="https://via.placeholder.com/300"
              alt="Online Store Screenshot"
              style={{ width: '100%', borderRadius: '5px', marginTop: '10px' }}
            />
          </div>

          {/* Project 2 - Updated with detailed information */}
          <div style={styles.projectCard}>
            <h3>Blog Platform</h3>
            <p>
              This project is a platform for writing and reading blogs. Users can create their own articles, leave comments, and read articles from other authors.
            </p>
            <p>
              <strong>Key Features:</strong>
              <ul>
                <li>Create and edit articles</li>
                <li>Leave comments on articles</li>
                <li>Search and filter articles</li>
                <li>User profile management</li>
              </ul>
            </p>
            <p>
              <strong>Technologies Used:</strong> Next.js, Firebase, TailwindCSS
            </p>
            <p>
              <strong>Links:</strong>{' '}
              <a
                href="https://github.com/yourusername/blog-platform"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repository
              </a>{' '}
              |{' '}
              <a
                href="https://blogplatformexample.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            </p>
            <img
              src="https://via.placeholder.com/300"
              alt="Blog Platform Screenshot"
              style={{ width: '100%', borderRadius: '5px', marginTop: '10px' }}
            />
          </div>

          {/* Project 3 - Updated with detailed information */}
          <div style={styles.projectCard}>
            <h3>Task Manager</h3>
            <p>
              This project is a task management application that helps users organize their daily tasks. Users can add, edit, and mark tasks as completed.
            </p>
            <p>
              <strong>Key Features:</strong>
              <ul>
                <li>Add, edit, and delete tasks</li>
                <li>Mark tasks as completed</li>
                <li>Search and filter tasks</li>
                <li>Daily reminders</li>
              </ul>
            </p>
            <p>
              <strong>Technologies Used:</strong> Vue.js, Firebase, Vuetify
            </p>
            <p>
              <strong>Links:</strong>{' '}
              <a
                href="https://github.com/yourusername/task-manager"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repository
              </a>{' '}
              |{' '}
              <a
                href="https://taskmanagerexample.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            </p>
            <img
              src="https://via.placeholder.com/300"
              alt="Task Manager Screenshot"
              style={{ width: '100%', borderRadius: '5px', marginTop: '10px' }}
            />
          </div>

          {/* Project 4 - Updated with detailed information */}
          <div style={styles.projectCard}>
            <h3>Movie Platform</h3>
            <p>
              This project is a platform for exploring movies and TV shows. Users can search for movies, read descriptions, and leave reviews.
            </p>
            <p>
              <strong>Key Features:</strong>
              <ul>
                <li>Search and filter movies</li>
                <li>Detailed movie information</li>
                <li>User reviews and ratings</li>
                <li>Top-rated movies list</li>
              </ul>
            </p>
            <p>
              <strong>Technologies Used:</strong> Angular, TMDB API, Bootstrap
            </p>
            <p>
              <strong>Links:</strong>{' '}
              <a
                href="https://github.com/yourusername/movie-platform"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repository
              </a>{' '}
              |{' '}
              <a
                href="https://movieplatformexample.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            </p>
            <img
              src="https://via.placeholder.com/300"
              alt="Movie Platform Screenshot"
              style={{ width: '100%', borderRadius: '5px', marginTop: '10px' }}
            />
          </div>
        </div>
      </section>

      {/* Contact Me Section */}
      <section id="contact" style={styles.contact}>
        <h2 style={styles.sectionTitle}>Contact Me</h2>
        <form style={styles.contactForm}>
          <input
            type="text"
            placeholder="Your Name"
            style={styles.inputField}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            style={styles.inputField}
            required
          />
          <textarea
            placeholder="Your Message"
            style={{ ...styles.inputField, height: '100px' }}
            required
          />
          <button type="submit" style={styles.submitButton}>
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

// Styles
const styles = {
  app: {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    backgroundColor: '#f4f4f4',
    minHeight: '100vh',
  },
  header: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#333',
    padding: '10px 0',
    transition: 'top 0.3s',
    zIndex: 1000,
  },
  nav: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '18px',
  },
  landing: {
    paddingTop: '100px',
    paddingBottom: '50px',
    backgroundColor: '#fff',
  },
  avatar: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
  },
  name: {
    fontSize: '36px',
    margin: '10px 0',
  },
  bio: {
    fontSize: '18px',
    color: '#666',
  },
  projects: {
    padding: '50px 20px',
    backgroundColor: '#f9f9f9',
  },
  sectionTitle: {
    fontSize: '32px',
    marginBottom: '20px',
  },
  projectGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '20px',
    maxWidth: '800px',
    margin: '0 auto',
  },
  projectCard: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  contact: {
    padding: '50px 20px',
    backgroundColor: '#fff',
  },
  contactForm: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    maxWidth: '400px',
    margin: '0 auto',
  },
  inputField: {
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  submitButton: {
    padding: '10px',
    fontSize: '18px',
    backgroundColor: '#333',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default App;
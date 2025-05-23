// Set current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.mobile-menu .navbar-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
  });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Testimonial carousel
const testimonials = [
  {
    text: "TechSolutions transformed our IT infrastructure, resulting in improved efficiency and significant cost savings. Their team's expertise and dedication to our success were exceptional.",
    name: "Robert Miller",
    position: "CIO",
    company: "Global Enterprises",
    image: "robertm.jpg",
    rating: 5
  },
  {
    text: "Working with TechSolutions has been a game-changer for our business. Their cloud migration strategy helped us scale efficiently while maintaining top-notch security standards.",
    name: "Patricia Clarke",
    position: "Operations Director",
    company: "Innovate Inc.",
    image :"patricia.jpg",
    rating: 5
  },
  {
    text: "The cybersecurity solutions provided by TechSolutions have given us peace of mind knowing our sensitive data is protected. Their ongoing support has been invaluable.",
    name: "Mary Johnson",
    position: "IT Manager",
    company: "Secure Systems",
    image: "mary.jpg",
    rating: 4
  }
];

let currentIndex = 0;

// Initialize the testimonial section
function renderTestimonial() {
  const carousel = document.getElementById('testimonial-carousel');
  const dots = document.getElementById('testimonial-dots');
  
  // Clear existing content
  carousel.innerHTML = '';
  dots.innerHTML = '';
  
  // Create the current testimonial
  const testimonial = testimonials[currentIndex];
  const testimonialElement = document.createElement('div');
  testimonialElement.className = 'testimonial';
  
  // Create rating stars
  const ratingElement = document.createElement('div');
  ratingElement.className = 'rating';
  
  for (let i = 0; i < 5; i++) {
    const star = document.createElement('span');
    star.className = i < testimonial.rating ? 'star filled' : 'star';
    star.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>
    `;
    ratingElement.appendChild(star);
  }
  
  // Create testimonial content
  testimonialElement.innerHTML = `
    ${ratingElement.outerHTML}
    <p class="testimonial-text">"${testimonial.text}"</p>
    <div class="testimonial-author">
      <img src="${testimonial.image}" alt="${testimonial.name}" class="author-image">
      <div class="author-info">
        <h4>${testimonial.name}</h4>
        <p>${testimonial.position}, ${testimonial.company}</p>
      </div>
    </div>
  `;
  
  carousel.appendChild(testimonialElement);
  
  // Create dots
  testimonials.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.className = index === currentIndex ? 'dot active' : 'dot';
    dot.addEventListener('click', () => {
      currentIndex = index;
      renderTestimonial();
    });
    dots.appendChild(dot);
  });
}

// Initialize testimonials
renderTestimonial();

// Testimonial navigation
document.getElementById('next-testimonial').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % testimonials.length;
  renderTestimonial();
});

document.getElementById('prev-testimonial').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  renderTestimonial();
});

// Contact form submission
const contactForm = document.getElementById('contact-form');
const toast = document.getElementById('toast');

contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  
  // In a real application, you would send the form data to your server here
  
  // Show success message
  toast.textContent = 'Thank you for contacting us. We\'ll get back to you shortly.';
  toast.classList.add('show');
  
  // Hide toast after 5 seconds
  setTimeout(() => {
    toast.classList.remove('show');
  }, 5000);
  
  // Reset form fields
  contactForm.reset();
});

// Newsletter form submission
const newsletterForm = document.querySelector('.newsletter-form');

newsletterForm.addEventListener('submit', function(e) {
  e.preventDefault();
  
  // In a real application, you would send the form data to your server here
  
  // Show success message
  toast.textContent = 'Thank you for subscribing to our newsletter!';
  toast.classList.add('show');
  
  // Hide toast after 5 seconds
  setTimeout(() => {
    toast.classList.remove('show');
  }, 5000);
  
  // Reset form field
  newsletterForm.reset();
});


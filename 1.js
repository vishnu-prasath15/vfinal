document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section"); // Get all sections
    
    window.addEventListener("scroll", () => {
      let current = ""; // Initialize variable to store current section ID
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop; // Top position of section
        const sectionHeight = section.clientHeight; // Height of section
        
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute("id"); // Get ID of current section
        }
      });
      
      // Remove active class from all navigation links
      document.querySelectorAll("nav ul li a").forEach(link => {
        link.classList.remove("active");
      });
      
      // Add active class to the corresponding navigation link
      document.querySelector(`nav ul li a[href="#${current}"]`).classList.add("active");
    });
  });
  
  // Function to handle the form submission
  document.getElementById("review-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
  
    // Get the review text and rating
    const reviewText = document.getElementById('review-text').value;
    const rating = document.getElementById('review-rating').value;
  
    // Create the mailto link
    const mailtoLink = `mailto:vpvishnuprasath07@gmail.com?subject=New Review&body=Review: ${encodeURIComponent(reviewText)}%0D%0ARating: ${rating} stars`;
  
    // Open the mailto link
    window.location.href = mailtoLink;
  });
  
  // Back to Top button functionality
  window.onscroll = function() {
    const backTopButton = document.querySelector('.back-top');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backTopButton.style.display = 'block';
    } else {
        backTopButton.style.display = 'none';
    }
  };
  
  function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  
  // Select the View More button and the hidden paragraph
  const viewMoreBtn = document.getElementById('view-more');
  const hiddenParagraph = document.getElementById('more');
  
  // Add event listener to the button
  viewMoreBtn.addEventListener('click', function() {
    // Toggle the 'hidden' class on the hidden paragraph
    hiddenParagraph.classList.toggle('hidden-paragraph');
    
    // Change the button text based on paragraph visibility
    if (hiddenParagraph.classList.contains('hidden-paragraph')) {
      viewMoreBtn.textContent = 'View More';
    } else {
      viewMoreBtn.textContent = 'View Less';
    }
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('btn');
    const nav = document.querySelector('header nav');
  
    btn.addEventListener('click', function () {
      nav.classList.toggle('active');
    });
  
    // Optional: Close the menu when clicking on a link
    const navLinks = document.querySelectorAll('header ul li a');
    navLinks.forEach(link => {
      link.addEventListener('click', function () {
        nav.classList.remove('active');
      });
    });
  });
  document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btn');
    const navLinks = document.querySelector('.nav-links');
  
    btn.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  });
  
  
  
  document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.product-image');
    const overlay = document.getElementById('overlay');
    const fullImage = document.getElementById('fullImage');
    const viewMoreBtn = document.getElementById('viewMoreBtn');
    const viewLessBtn = document.getElementById('viewLessBtn');
    const productCards = document.querySelectorAll('.product-card');
  
    images.forEach(image => {
        image.addEventListener('click', function() {
            fullImage.src = image.src;
            overlay.style.display = 'flex';
        });
    });
  
    overlay.addEventListener('click', function() {
        overlay.style.display = 'none';
    });
  
    viewMoreBtn.addEventListener('click', function() {
        productCards.forEach(card => {
            card.style.display = 'block'; // Show all products
        });
        viewMoreBtn.style.display = 'none'; // Hide view more button
        viewLessBtn.style.display = 'block'; // Show view less button
    });
  
    viewLessBtn.addEventListener('click', function() {
        productCards.forEach((card, index) => {
            if (index >= 2) {
                card.style.display = 'none'; // Hide products 3 and beyond
            }
        });
        viewMoreBtn.style.display = 'block'; // Show view more button
        viewLessBtn.style.display = 'none'; // Hide view less button
    });
  });

  

  document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.product-image');
    const overlay = document.getElementById('overlay');
    const fullImage = document.getElementById('fullImage');
    const viewMoreBtn = document.getElementById('viewMoreBtn');
    const viewLessBtn = document.getElementById('viewLessBtn');
    const productCards = document.querySelectorAll('.product-card');
  
    images.forEach(image => {
        image.addEventListener('click', function() {
            fullImage.src = image.src;
            overlay.style.display = 'flex';
        });
    });
  
    overlay.addEventListener('click', function() {
        overlay.style.display = 'none';
    });
  
    viewMoreBtn.addEventListener('click', function() {
        productCards.forEach(card => {
            card.style.display = 'block'; // Show all products
        });
        viewMoreBtn.style.display = 'none'; // Hide view more button
        viewLessBtn.style.display = 'block'; // Show view less button
    });
  
    viewLessBtn.addEventListener('click', function() {
        productCards.forEach((card, index) => {
            if (index >= 2) {
                card.style.display = 'none'; // Hide products 3 and beyond
            }
        });
        viewMoreBtn.style.display = 'block'; // Show view more button
        viewLessBtn.style.display = 'none'; // Hide view less button
    });
  });
  


  
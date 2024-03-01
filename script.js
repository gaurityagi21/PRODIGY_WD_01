window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
      navbar.style.backgroundColor = '#f00'; // Change color when scrolled
    } else {
      navbar.style.backgroundColor = 'transparent';
    }
  });
  
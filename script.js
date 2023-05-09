window.addEventListener('scroll', function() {
    const navbar = document.querySelector('nav');
    const section = document.querySelector('#fix-navbar');
    
    // get the top position of the section
    const sectionTop = section.offsetTop;
  
    // check if the user has scrolled past the section
    if (window.pageYOffset > sectionTop) {
      navbar.classList.add('fixed-nav');
    } else {
      navbar.classList.remove('fixed-nav');
    }
  });
  
function toggleNav() {
    var x = document.getElementById("myNav");
    const menuBtn = document.querySelector('.menu-btn');
    let menuOpen = false;
  
    if (x.style.height === "100%") {
      x.style.height = "0";
      menuBtn.classList.remove('open');
      menuOpen = false;
    } else {
      x.style.height = "100%";
      menuBtn.classList.add('open');
      menuOpen = true;

    }
  
  }

  //Get the button
var mybutton = document.getElementById("topBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    mybutton.style.opacity = "1";
  } else {
    mybutton.style.opacity = "0";
  }
}
  
  // When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Prevent redirecting after form submission

  $('#contact-form').submit(function () {
    sendContactForm();
    return false;
  });

  function sendContactForm() {return false;}
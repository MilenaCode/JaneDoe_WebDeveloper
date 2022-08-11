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
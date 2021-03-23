(()=>{
    const header = document.querySelector('header');
    window.addEventListener("scroll", () => {
        if (window.scrollY > 0) {
          header.style.transform = "translate(0, 0px)";
        }
        if (window.scrollY == 0) {
          header.style.transform = "translate(0, 40px)";
        }
      });
})()
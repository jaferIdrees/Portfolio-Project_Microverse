document.querySelector("#burgerMenu").addEventListener("click", collapse);
    function collapse() {
        document.querySelectorAll(".collapse").forEach(element => 
        element.classList.toggle("hide"));
        this.preventDefault();
    }
    document.querySelectorAll(".mobMenuItem").forEach(element => {
      element.addEventListener("click",collapse);
    })

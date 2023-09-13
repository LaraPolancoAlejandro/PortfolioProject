
/* Menu de about */
    var tablinks = document.getElementsByClassName("tab-links")
    var tabcontents = document.getElementsByClassName("tab-contents")
    function opentab(tabname){
        for(tablink of tablinks){
            tablink.classList.remove("active-link")
        }
        for(tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab")
        }
        event.currentTarget.classList.add("active-link")
        document.getElementById(tabname).classList.add("active-tab")
    }



/* Menu responsive */
    var sidemenu = document.getElementById("sidemenu");

    function openmenu(){
        sidemenu.style.right = "0";
    }
    function closemenu(){
        sidemenu.style.right = "-200px";
    }


    /* Form de contactar */
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzQ0P9EiD2lkQ9iALR7YanSdy4jG3wLNQZ4BAoHK0_YLkrlcTIl_JkUhrUsYAlMp98S/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg") 

    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Message Test!"
            setTimeout(function(){
                msg.innerHTML=""
            },5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })

    /* Barra de navegacion*/
    document.addEventListener("DOMContentLoaded", function() {
        let lastScrollTop = 0;
        const containerNav = document.querySelector(".containerNav");
        const body = document.querySelector("body"); // Selecciona el cuerpo del documento
        const threshold = 100;
        const homeDiv = document.getElementById("Home");
        let timeoutId;
    
        function updateNavPosition(scrollTop) {
            let homeDivTop = homeDiv.offsetTop;
            let homeDivBottom = homeDivTop + homeDiv.offsetHeight;
    
            if (scrollTop >= homeDivTop && scrollTop <= homeDivBottom) {
                containerNav.style.position = "static";
                body.style.paddingTop = "0px"; // Restablecer el padding superior del cuerpo
            } else {
                containerNav.style.position = "fixed";
    
                if (scrollTop > lastScrollTop) {
                    containerNav.style.top = "-100%";
                    body.style.paddingTop = "0px"; // Restablecer el padding superior del cuerpo
                } else {
                    containerNav.style.top = "0";
                    body.style.paddingTop = "60px"; // Ajustar el padding superior del cuerpo
                }
            }
    
            lastScrollTop = scrollTop;
        }
    
        window.addEventListener("scroll", function() {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            updateNavPosition(scrollTop);
        });
    
        window.addEventListener("mousemove", function(event) {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
            if (event.clientY < threshold) {
                updateNavPosition(scrollTop);
                clearTimeout(timeoutId);
            } else {
                clearTimeout(timeoutId);
                timeoutId = setTimeout(function() {
                    containerNav.style.top = "-100%";
                    body.style.paddingTop = "0px"; // Restablecer el padding superior del cuerpo
                }, 500);
            }
        });
    });
    
    
    
    
    
    
    
    
    
    
    
    

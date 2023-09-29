
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
            msg.innerHTML = "Message send!"
            setTimeout(function(){
                msg.innerHTML=""
            },5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })

/* Barra de navegación */
document.addEventListener("DOMContentLoaded", function() {
    let lastScrollTop = 0;
    const containerNav = document.querySelector(".containerNav");
    const body = document.querySelector("body");
    const threshold = 100;
    const homeDiv = document.getElementById("Home");
    let timeoutId;
    let linkSelected = false; // Variable para rastrear si se ha seleccionado un enlace

    // Escucha los clics en los enlaces
    document.querySelectorAll("#sidemenu li a").forEach(link => {
        link.addEventListener("click", function() {
            linkSelected = true;
        });
    });

    function updateNavPosition(scrollTop) {
        let homeDivTop = homeDiv.offsetTop;
        let homeDivBottom = homeDivTop + homeDiv.offsetHeight;

        if (scrollTop >= homeDivTop && scrollTop <= homeDivBottom) {
            containerNav.style.top = "0";
            containerNav.style.position = "static";
            body.style.paddingTop = "0px";
        } else {
            containerNav.style.position = "fixed";

            if (scrollTop > lastScrollTop) {
                containerNav.style.top = "-100%";
                body.style.paddingTop = "0px";
            } else {
                containerNav.style.top = "0";
                body.style.paddingTop = "50px";
            }

            // Si se ha seleccionado un enlace, no desplazar el contenido hacia arriba
            if (linkSelected) {
                body.style.paddingTop = "50px";
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
                if (scrollTop < homeDiv.offsetTop || scrollTop > homeDiv.offsetTop + homeDiv.offsetHeight) {
                    containerNav.style.top = "-100%";
                    if (!linkSelected) { // Solo desplazar el contenido hacia arriba si no se ha seleccionado un enlace
                        body.style.paddingTop = "0px";
                    }
                }
            }, 500);
        }
    });
});

    
    
    /* CopyToClipboard*/
    function copyToClipboard(elementId) {
    // Crea un elemento de entrada de texto
    var inputElement = document.createElement("input");
    // Establece su valor en el texto del elemento que se va a copiar
    inputElement.value = document.getElementById(elementId).textContent;
    // Añade el elemento de entrada al DOM
    document.body.appendChild(inputElement);
    // Selecciona el texto
    inputElement.select();
    // Copia el texto al portapapeles
    document.execCommand("copy");
    // Elimina el elemento de entrada del DOM
    document.body.removeChild(inputElement);
}


    
    
    
    
    
    
    
    
    

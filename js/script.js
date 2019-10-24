var writeus = document.querySelector(".write-us");
if (writeus !== null) {
    var writeuspopup = document.querySelector(".modal-write-us");
    var closewriteuspopup = document.querySelector(".modal-write-us .modal-close");
    var namefiled = document.querySelector(".modal-write-us [name = 'name']");
    var emailfield = document.querySelector(".modal-write-us [name = 'email']");
    var commentfield = document.querySelector(".modal-write-us [name = 'comment']");
    var writeusform = document.querySelector(".modal-write-us form");

    var isStorageSupport = true;
    var storagename = "";
    var storageemail = "";

    try {
        storagename = localStorage.getItem("name");
        storageemail = localStorage.getItem("email");
    } catch (err) {
        isStorageSupport = false;
    }

    writeus.addEventListener("click", function (e) {
      e.preventDefault();
      writeuspopup.classList.add("show");
      if (storagename && storageemail) {
          namefiled.value = storagename;
          emailfield.value = storageemail;
          commentfield.focus();
      } else {
          namefiled.focus();
      }
    });

    closewriteuspopup.addEventListener("click", function (e) {
        e.preventDefault();
        writeuspopup.classList.remove("show");
        writeuspopup.classList.remove("error");
    });

    writeusform.addEventListener("submit", function (e) {
        if (!namefiled.value || !emailfield.value || !commentfield.value) {
            e.preventDefault();
            console.log("Нужно заполнить все поля!");
            writeuspopup.classList.remove("error");
            writeuspopup.offsetWidth = writeuspopup.offsetWidth;
            writeuspopup.classList.add("error");
        } else {
            if (isStorageSupport) {
                localStorage.setItem("name", namefiled.value);
                localStorage.setItem("email", emailfield.value);
            }
        }
    });

    var bigmaplink = document.querySelector('.big-map');
    var bigmappopup = document.querySelector('.modal-map');
    var closebigmappopup = bigmappopup.querySelector(".modal-close");

    bigmaplink.addEventListener("click", function (e) {
        e.preventDefault();
        bigmappopup.classList.add("show");
    });

    closebigmappopup.addEventListener("click", function (e) {
        e.preventDefault();
        bigmappopup.classList.remove("show");
    });
}

var addtocart = document.querySelectorAll('.addtocart');
var cartpopup = document.querySelector('.modal-cart');
var closecartpopup = cartpopup.querySelector(".modal-close");
var modalcartcontinue = cartpopup.querySelector(".modal-cart-continue");


for (i = 0; i < addtocart.length; i++) {
    addtocart[i].addEventListener("click", function (e) {
        e.preventDefault();
        cartpopup.classList.add("show");
    });
}

closecartpopup.addEventListener("click", function (e) {
    e.preventDefault();
    cartpopup.classList.remove("show");
});

modalcartcontinue.addEventListener("click", function (e) {
    e.preventDefault();
    cartpopup.classList.remove("show");
});

window.addEventListener("keydown", function (e) {
    if (e.keyCode === 27) {
        e.preventDefault();
        if (cartpopup.classList.contains("show")) {
            cartpopup.classList.remove("show");
        }
        if (writeus !== null) {
            if (bigmappopup.classList.contains("show")) {
              bigmappopup.classList.remove("show");
            }
            if (writeuspopup.classList.contains("show")) {
              writeuspopup.classList.remove("show");
              writeuspopup.classList.remove("error");
            }
        }
    }
});

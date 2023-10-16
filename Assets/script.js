// Search filter 
function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// subscribe confirmation box 
function confBox() {
    confirm("You have successfully subscribed!");
}

// hourSlide 
var slider = document.getElementById("myRange");
var output = document.getElementsByClassName("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
}

//flight bookings confirmation box 
function confBox2() {
    confirm("You have booked your ticket successfully! \nYou will recieve a confirmation mail from AirBooking shortly. \nPlease check your email.");
}

//call request confirmation box 
function confBox3() {
    confirm("Your call has bee requested succesfully. \nWe will contact you soon!");
}

//feedback submission confirmation box 
function confBox4() {
    confirm("Thanks for your feedback!");
}


//button tabs in contact.html
function openTab(tabName) {
  var i, x;
  x = document.getElementsByClassName("containerTab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
}

//Attractions videos

var button = document.getElementById("myButton");
button.addEventListener("click", playPause);
myVideo = document.getElementById("myVideo");
function playPause() { 
    if (myVideo.paused) {
        myVideo.play();
        button.innerHTML = "Pause";
        }
    else  {
        myVideo.pause(); 
        button.innerHTML = "Play";
        }
}
//flight checkout btn 
function checkout() {
 window.open("flights_booking.html");
}

function searchfunction() {
  alert("Make sure to login to complete your deals");
}

function myFunctionsssss() {
    var input, filter, ul, li, p, i, txtValue;
    input = document.getElementById("filtersearch");
    filter = input.value.toUpperCase();
    ul = document.getElementById("filteritems");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        p = li[i].getElementsByTagName("p")[0];
        txtValue = p.textContent || p.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("imgshow");
  var dots = document.getElementsByClassName("photoinfo");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function completedealfunction() {
  var txt;
  var r = confirm("Press ok to complete you deal");
  if (r == true) {
      window.location = "Hotels.html";
  } else {
    window.location = "Reservation processing.html";
  }
}

function loginfunction() {
  alert("Welcome to AirBooking");
}
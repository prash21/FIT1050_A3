// PRASHANT MURALI    ID:29625564   FIT1050 ASS3

// JavaScript file for the site

// For the image carousell
// It esentially changes image every 4 seconds, and also responds when the dots or
//  prev/next arrows are clicked on the carousel.

var slideIndex = 0;
autoPlay();

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
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

// Let the carousel run on its own as well
function autoPlay() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(autoPlay, 4500); // Change image every 4 seconds
}
// END OF CAROUSEL CODE


// Function to show pop up when user clicks the "Download" button in the table
function downloadAlert() {
  alert("Thank you for donwloading! Your donwload will begin shortly.");
}

// Function to get the user's name from the form, and display it in the pop-up
//  modal once the user clicks the "send message" button.
function submitPrompt() {
  // Get id of the form
  var x = document.getElementById("form");
  // Get id of the modal
  var modal = document.getElementById("Modal");
  // Get id of the close button
  var span = document.getElementsByClassName("close")[0];
  var text = "";
  
  // Get the user's name from the form (it is the first input in the form) 
  text += x.elements[0].value;
  // Add addtional "Thank you" text to it and ensure that user's name is in Title Case.
  final_text = "Thank you for contacting us "+titleCase(text)+"! We'll get back to you as soon as possible."
  // Display the text into the part that has the "disply" id in the html file
  // It would esentially display in the modal
  document.getElementById("display").innerHTML = final_text;
  modal.style.display = "block";
  // Close modal on <span> x button
  span.onclick = function() {
    modal.style.display = "none";
  }
  // Close modal when user clicks anywhere else
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

// Simple function to convert string into Title Case (first letter is upper, rest is lower)
function titleCase(string) {
  var sentence = string.toLowerCase().split(" ");
  for(var i = 0; i< sentence.length; i++){
     sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
  }
return sentence;
}


// END OF JAVASCRIPT CODE
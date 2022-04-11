// Get the modal
var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");
var modal4 = document.getElementById("myModal4");
var modal5 = document.getElementById("myModal5");
var modal6 = document.getElementById("myModal6");
var modal7 = document.getElementById("myModal7");
var modal8 = document.getElementById("myModal8");
var modal9 = document.getElementById("myModal9");
var modal10 = document.getElementById("myModal10");

// Get the button that opens the modal
var img1 = document.getElementById("slika1");
var img2 = document.getElementById("slika2");
var img3 = document.getElementById("slika3");
var img4 = document.getElementById("slika4");
var img5 = document.getElementById("slika5");
var img6 = document.getElementById("slika6");
var img7 = document.getElementById("slika7");
var img8 = document.getElementById("slika8");
var img9 = document.getElementById("slika9");
var img10 = document.getElementById("slika10");

// span.onclick = function() {
//   modal1.style.display = "none";
// }
// When the user clicks the button, open the modal 
img1.onclick = function() {
  modal1.style.display = "block";
}
img2.onclick = function() {
    modal2.style.display = "block";
  }
   img3.onclick = function() {
    modal3.style.display = "block";
  }
  img4.onclick = function() {
    modal4.style.display = "block";
  }
  img5.onclick = function() {
    modal5.style.display = "block";
  }
  img6.onclick = function() {
    modal6.style.display = "block";
  }
  img7.onclick = function() {
    modal7.style.display = "block";
  }
  img8.onclick = function() {
    modal8.style.display = "block";
  }
  img9.onclick = function() {
    modal9.style.display = "block";
  }
  img10.onclick = function() {
    modal10.style.display = "block";
  }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
  else if (event.target == modal2) {
    modal2.style.display = "none";
  }
  else if (event.target == modal3) {
    modal3.style.display = "none";
  }
  else if (event.target == modal4) {
    modal4.style.display = "none";
  }
  else if (event.target == modal5) {
    modal5.style.display = "none";
  }
  else if (event.target == modal6) {
    modal6.style.display = "none";
  }
  else if (event.target == modal7) {
    modal7.style.display = "none";
  }
  else if (event.target == modal8) {
    modal8.style.display = "none";
  }
  else if (event.target == modal9) {
    modal9.style.display = "none";
  }
  else if (event.target == modal10) {
    modal10.style.display = "none";
  }

}
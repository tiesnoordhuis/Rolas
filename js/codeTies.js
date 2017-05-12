/*
custom javascript van ties
*/

$('#nav').affix({
      offset: {
        top: $('header').height()
      }
});

function homeActive() {
  unActive();
  document.getElementById("home").className = "active";
};

function kernActive() {
  unActive();
  document.getElementById("kern").className = "active";
};

function werkActive() {
  unActive();
  document.getElementById("werk").className = "active";
};

function contperActive() {
  unActive();
  document.getElementById("contper").className = "active";
};

function contactActive() {
  unActive();
  document.getElementById("contact").className = "active";
};

function unActive() {
  document.getElementById("home").className = "";
  document.getElementById("kern").className = "";
  document.getElementById("werk").className = "";
  document.getElementById("contper").className = "";
  document.getElementById("contact").className = "";
};

"use strict";
// Written by:Muhammad Ehtisham

// Color set kiya he.
let alien_color = "green";
if (alien_color === "green") {
  console.log("Player just earned 5 ruppe for shooting the alien!");
} else {
  console.log("Player just earned 10 ruppe!");
}
// Color Change kar diya he. kam se kam 10 rupee to mil hi jaege.
alien_color = "red";
if (alien_color === "green") {
  console.log("Player just earned 5 ruppe for shooting the alien!");
} else {
  // ye false kar k, 10 wali lays khaonga. :-)
  console.log("Player just earned 10 ruppe!");
}

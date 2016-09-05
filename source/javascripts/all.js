//= require turbolinks
//= require_tree .

document.addEventListener("turbolinks:click", function(event) { 
  //do work
  console.log("link clicked");
  // document.classList.add("fade");
});

document.addEventListener("turbolinks:load", function(event) { 
  //do work
  console.log("page load");
});
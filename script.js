debug = function(arg) {
  if (arg == 'toggle'){
    console.log("Toggled Debug Mode.")
    const header = document.getElementById("greeting");
    header.innerHTML = "Debug Mode";
    const desc1 = document.getElementById("description1");
    desc1.innerHTML = "You have enabled debug mode.";
    const desc2 = document.getElementById("description2");
    desc2.innerHTML = "Refresh to disable.";
  }
   

    else{

    }
}
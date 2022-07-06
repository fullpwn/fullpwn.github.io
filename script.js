cookies = function(arg) {
  if (arg == 'are cool'){
    console.log("")
    const header = document.getElementById("greeting");
    header.innerHTML = "cookies are cool";
    const desc1 = document.getElementById("description1");
    desc1.innerHTML = "You found my easter egg lmfao";
    const desc2 = document.getElementById("description2");
    desc2.innerHTML = "have a cookie";
    const title = document.getElementById("title");
    title.innerHTML = "cookies are cool - fullpwn";
  }
   

    else{
      console.log('hm?')
    }
}
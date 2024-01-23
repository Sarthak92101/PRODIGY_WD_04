document.querySelector(".ri-menu-line").addEventListener("click", function(){
    let menuDiv = document.querySelector('.menubar');
    if (menuDiv.style.display === "none" || menuDiv.style.display === "") {
        menuDiv.style.display = "block";
      } else {
        menuDiv.style.display = "none";
      }
})
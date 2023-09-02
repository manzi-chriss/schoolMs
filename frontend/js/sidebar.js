function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").setAttribute("class","marg-left")
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").setAttribute("class","reset")
  }
//function for expanding the Topnav if the screen is too small
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    }else{
        x.className = "topnav";
    }
}
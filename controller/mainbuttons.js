//toogle the site content depending on the navbar link that has been clicked

//Clicked on the "home" link? Displays the main content,
//hides whatever was displayed before
document.getElementById("homebutton").onclick = function () {
    document.getElementById("home").style.display = "flex";
    document.getElementById("portfolio").style.display = "none";
    document.getElementById("passions").style.display = "none";
    document.getElementById("contact").style.display = "none";
};
//Clicked on the "portfolio" link? Displays the portfolio content,
//hides whatever was displayed before
document.getElementById("portbutton").onclick = function () {
    document.getElementById("home").style.display = "none";
    document.getElementById("portfolio").style.display = "flex";
    document.getElementById("passions").style.display = "none";
    document.getElementById("contact").style.display = "none";
};
//Clicked on the "passions" link? Displays the passions content,
// hide whatever was displayed before
document.getElementById("passionbutton").onclick = function () {
    document.getElementById("home").style.display = "none";
    document.getElementById("portfolio").style.display = "none";
    document.getElementById("passions").style.display = "flex";
    document.getElementById("contact").style.display = "none";
};
//Clicked on the "contact" link? Displays the contact content,
// hide whatever was displayed before
document.getElementById("contactbutton").onclick = function () {
    document.getElementById("home").style.display = "none";
    document.getElementById("portfolio").style.display = "none";
    document.getElementById("passions").style.display = "none";
    document.getElementById("contact").style.display = "flex";
};

//Damn it took me so long to figure out how to display my content on the same box,
//I'm so glad it works as intended !
"use strict" ;

window.onload=function()
{
    /*alert("window loaded");*/
    var searchbutton = document.getElementById("search");
    searchbutton.addEventListener("click", function ()
    {
        //fetch(http://localhost/info2180-lab4/superheroes.php)
        //fetch("http://localhost/info2180-lab4/helloworld.php")
        fetch("superheroes.php")
        //fetch('http://localhost/info2180-lab4/superheroes2.php')
        //fetch("http://localhost/info2180-lab4/superheroes.php")
            .then(console.log("Fetching"))
            .then(response => response.text())
            .then(data => alert(data))
            .catch(error => 
            {
                console.log("There was an error");
                console.log(error);
            });
    });
};


document.getElementById("iletişim").onclick = function() {myFunction()};
document.getElementById("contactCloseButton").onclick = function() {closeFunction()};




function myFunction() {
    document.getElementById("numara").style.visibility = "visible";
    document.getElementById("numara").style.top = "70px";
    document.getElementById("numara").style.opacity = "1";
}

function closeFunction() {
    document.getElementById("numara").style.visibility = "hidden";
    document.getElementById("numara").style.top = "50px";
    document.getElementById("numara").style.opacity = "0";
}



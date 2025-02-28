function modua(){
    if(document.getElementsByClassName("modua_botoia")[0].textContent.includes("Modua")){
        document.getElementsByClassName("modua_botoia")[0].textContent = "Iluna";
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        document.getElementsByClassName("irudia1")[0].style.backgroundColor = "#444";
        document.getElementsByClassName("irudia2")[0].style.backgroundColor = "#444";
    } else if ((document.getElementsByClassName("modua_botoia")[0].textContent.includes("Argia"))){
        document.getElementsByClassName("modua_botoia")[0].textContent = "Iluna";
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        document.getElementsByClassName("irudia1")[0].style.backgroundColor = "#444";
        document.getElementsByClassName("irudia2")[0].style.backgroundColor = "#444";
    } else {
        document.getElementsByClassName("modua_botoia")[0].textContent = "Argia";
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        document.getElementsByClassName("irudia1")[0].style.backgroundColor = "white";
        document.getElementsByClassName("irudia2")[0].style.backgroundColor = "white";
    }
}

function zenbakia(n){
    return(Math.floor(Math.random() * n + 1 ));
}

var aldatu_irudia = new Array();
aldatu_irudia[0] = "irudiak/JavaScrpit-logo.png";
aldatu_irudia[1] = "irudiak/css-logo.png";
aldatu_irudia[2] = "irudiak/HTML-logo.png";

function loop() {
    document.getElementById("aleatorioa").src = aldatu_irudia[zenbakia(3)-1];
    setTimeout(loop, 100);
}

function aukeratu_irudia(){
    document.getElementById("aukeratuta").src = aldatu_irudia[zenbakia(3)-1];
}

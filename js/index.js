var dt = 0;
function date(){
var dt = new Date();
year = dt.getFullYear();
month = dt.getMonth() + 1;
drate= dt.getDate();
document.getElementById("datetime").innerHTML="Date - " + drate + "/" + month + "/" + year;
document.getElementById("datetime2").innerHTML="Date - " + drate + "/" + month + "/" + year;
}
function main(){
    window.location = './html/main.html';
}
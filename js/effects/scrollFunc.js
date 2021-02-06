/* header scroll effect  */
window.onscroll = function () { scrollFunc() };

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function scrollFunc() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}
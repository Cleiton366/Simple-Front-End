
function darkMode() {
    var checkbox = document.querySelector('input[type="checkbox"]');
    var pColor = document.getElementsByClassName("P");
    var aProducts = document.getElementsByClassName("a-products");
    var aColor = document.getElementsByClassName("A");
    var h2Color = document.getElementsByClassName("H2")
    var h3Color = document.getElementsByClassName("H3");
    var h4Color = document.getElementsByClassName("H4");
    var smallColor = document.getElementsByClassName("SMALL");

    checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            document.body.style.backgroundColor = "rgb(40, 40, 40)";
            for (var i = 0; i < pColor.length; i++) pColor[i].style.color = "white";
            for (var i = 0; i < aProducts.length; i++) aProducts[i].style.color = "white";
            for (var i = 0; i < aColor.length; i++) aColor[i].style.color = "white";
            for (var i = 0; i < h2Color.length; i++) h2Color[i].style.color = "white";
            for (var i = 0; i < h3Color.length; i++) h3Color[i].style.color = "white";
            for (var i = 0; i < h4Color.length; i++) h4Color[i].style.color = "white";
            for (var i = 0; i < smallColor.length; i++) smallColor[i].style.color = "white";
        } else {
            document.body.style.backgroundColor = "white";
            for (var i = 0; i < pColor.length; i++) pColor[i].style.color = "black";
            for (var i = 0; i < aProducts.length; i++) aProducts[i].style.color = "black";
            for (var i = 0; i < aColor.length; i++) aColor[i].style.color = "black";
            for (var i = 0; i < h2Color.length; i++) h2Color[i].style.color = "black";
            for (var i = 0; i < h3Color.length; i++) h3Color[i].style.color = "black";
            for (var i = 0; i < h4Color.length; i++) h4Color[i].style.color = "black";
            for (var i = 0; i < smallColor.length; i++) smallColor[i].style.color = "black";
        }
    })
}
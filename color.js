var power = "purple";
var space = "lightblue";
var reality = "red";
var soul = "orange";
var time = "green";
var mind = "yellow";

function getColor() {
    let element = document.querySelector("#stone");
    console.log(element.className);
    if (element.className === "power") {
        var newColor = power
    } else if (element.className === "space") {
        var newColor = space
    } else if (element.className === "reality") {
        var newColor = reality
    } else if (element.className === "soul") {
        var newColor = soul
    } else if (element.className === "time") {
        var newColor = time
    } else if (element.className === "mind") {
        var newColor = mind
    }
    element.style.color = newColor;
}

getColor();
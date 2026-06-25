
function showMessage() {
    let name = document.getElementById("name").value;

    if (name === "") {
        alert("Please enter your name");
    } else {
        document.getElementById("output").innerHTML =
            "Welcome " + name + "!";
    }
}

function changeColor() {
    let colors = ["lightblue", "lightgreen", "pink", "yellow", "orange"];
    let random = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[random];
}


function showTime() {
    document.getElementById("output").innerHTML =
        "Current Time: " + new Date().toLocaleTimeString();
}



// BOM - setInterval (updates title every second)
setInterval(() => {
    document.title = new Date().toLocaleTimeString();
}, 1000);


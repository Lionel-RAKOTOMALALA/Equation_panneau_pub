change1 = () => {
    document.getElementById("1").style.display = "block";
    document.getElementById("2").style.display = "none";
    document.getElementById("3").style.display = "none";
    document.getElementById("4").style.display = "none";
}
change2 = () => {
    document.getElementById("1").style.display = "none";
    document.getElementById("2").style.display = "block";
    document.getElementById("3").style.display = "none";
    document.getElementById("4").style.display = "none";
}
change3 = () => {
    document.getElementById("1").style.display = "none";
    document.getElementById("2").style.display = "none";
    document.getElementById("3").style.display = "block";
    document.getElementById("4").style.display = "none";
}
change4 = () => {
    document.getElementById("1").style.display = "none";
    document.getElementById("2").style.display = "none";
    document.getElementById("3").style.display = "none";
    document.getElementById("4").style.display = "block";
}

var a, b, c, d = 0,
    dstr = "",
    x1 = 0,
    x2 = 0;

function quadcalc() {
    a = parseFloat(document.getElementById("a").value) ;
    b = parseFloat(document.getElementById("b").value);
    c = parseFloat(document.getElementById("c").value);
    if (a === "" || b === "" || c === "")
        document.getElementById("dtext").innerHTML = "";
    else {
        if (a == 0)
            document.getElementById("dtext").innerHTML = "⚠️Attention⚠️🚫, le coefficient de x<sup>2</sup> devrait-être un nombre entier différent de zéro";
        else
            calculate();
    }

}


function clearall() {
    a = 0, b = 0, c = 0, d = 0, dstr = "", x1 = 0, x2 = 0;
    document.getElementById("a").value = "";
    document.getElementById("b").value = "";
    document.getElementById("c").value = "";
    document.getElementById("dtext").innerHTML = "Remplissez les cases vides";
    document.getElementById("x1").innerHTML = "";
    document.getElementById("x2").innerHTML = "";

}

function dshow() {
    if (d > 0) {
        dstr = "Les deux racines sont bien réels et distincts";
    } else if (d < 0) {
        dstr = "Les deux racines sont bien distincts et imaginaires";
    } else if (d == 0) {
        dstr = "Les deux racines sont biens réels et identiques";
    }
    document.getElementById("dtext").innerHTML = dstr;
}

function calculate() {
    d = (b * b) - (4 * a * c);
    dshow();
    if (d >= 0) {
        x1 = ((-b) + Math.sqrt(d)) / (2 * a);
        x2 = ((-b) - Math.sqrt(d)) / (2 * a);
        if (!(Number.isInteger(x1)))
            x1 = Number(x1.toFixed(3));
        if (!(Number.isInteger(x2)))
            x2 = Number(x2.toFixed(3));
        x1 = x1.toString();
        x2 = x2.toString();
        document.getElementById("x1").innerHTML = x1;
        document.getElementById("x2").innerHTML = x2;
    } else {
        imgstr1 = "", imgstr2 = "";
        d = Math.sqrt(Math.abs(d));
        x1 = ((-b) / (2 * a));
        x2 = d / (2 * a);
        if (!(Number.isInteger(x1)))
            x1 = Number(x1.toFixed(2));
        if (!(Number.isInteger(x2)))
            x2 = Number(x2.toFixed(2));

        imgstr1 = x1.toString();
        if (x2 > 0)
            imgstr1 += " + ";
        else
            imgstr1 += " - ";
        imgstr1 += (Math.abs(x2)).toString() + "i";
        document.getElementById("x1").innerHTML = imgstr1;
        imgstr2 = x1;
        if (x2 > 0)
            imgstr2 += " - ";
        else
            imgstr2 += " + ";
        imgstr2 += (Math.abs(x2)).toString() + "i";
        document.getElementById("x2").innerHTML = imgstr2;
    }
}

function solve() {
    console.log("Processing");
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);
    var c = parseInt(document.getElementById("c").value);

    var d = Math.sqrt(b * b - 4 * a * c);
    var root1 = (-b + d) / (2 * a);
    var root2 = (-b - d) / (2 * a);

    var o1 = document.getElementById("output1");
    var o2 = document.getElementById("output2");

    if (d >= 0) {
        o1.value = root1;
        o2.value = root2;
    } else {
        o1.value = "Racine non-réel";
        o2.value = "Racine non-réel";
    }
}

var button = document.getElementById("order");
button.addEventListener("click", solve);
var i = 0;
var pressing = document.getElementsByName("value");
pressing[0].onkeypress = function() {
    enter0(event);
};
pressing[1].onkeypress = function() {
    enter1(event);
};
pressing[2].onkeypress = function() {
    enter2(event);
};

function enter0(event) {
    var x = event.key;
    console.log("key pressed = " + x);
    if (x == "Enter") {
        pressing[1].focus();
    }
}

function enter1(event) {
    var x = event.key;
    console.log("key pressed = " + x);
    if (x == "Enter") {
        pressing[2].focus();
    }
}

function enter2(event) {
    var x = event.key;
    console.log("key pressed = " + x);
    if (x == "Enter") {
        solve();
        document.getElementById("equation").innerHTML =
            "Your Equation = " + a.value + "x^2 + " + b.value + "x + " + c.value;
        var styleEquation = document.getElementById("equation").style;
        styleEquation.border = "2px solid red";
        styleEquation.background = "black";
        styleEquation.color = "white";
        styleEquation.width = "500px";
    }
}
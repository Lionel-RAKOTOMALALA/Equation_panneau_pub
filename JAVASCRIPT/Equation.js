function solve() {
    var a111 = parseFloat(document.getElementById("a111").value);
    var b111 = parseFloat(document.getElementById("b111").value);
    var c111 = parseFloat(document.getElementById("c111").value);
    var d111 = parseFloat(document.getElementById("d111").value);
    var e111 = parseFloat(document.getElementById("e111").value);
    var f111 = parseFloat(document.getElementById("f111").value);
    var g111 = parseFloat(document.getElementById("g111").value);
    var h111 = parseFloat(document.getElementById("h111").value);
    var i111 = parseFloat(document.getElementById("i111").value);
    var j111 = parseFloat(document.getElementById("j111").value);
    var k111 = parseFloat(document.getElementById("k111").value);
    var l111 = parseFloat(document.getElementById("l111").value);

    var dx;
    var dy;
    var dz;
    var D;

    dx = parseFloat(dx);
    dy = parseFloat(dy);
    dz = parseFloat(dz);
    D = parseFloat(D);

    dx = d111 * ((f111 * k111) - (j111 * g111)) - b111 * ((k111 * h111) - (e111 * g111)) + c111 * ((h111 * j111) - (e111 * f111));
    dy = a111 * ((h111 * k111) - (e111 * g111)) - d111 * ((e111 * k111) - (i111 * g111)) + c111 * ((e111 * l111) - (i111 * h111));
    dz = a111 * ((f111 * l111) - (j111 * h111)) - b111 * ((e111 * l111) - (i111 * h111)) + d111 * ((e111 * j111) - (i111 * f111));
    D = a111 * ((f111 * k111) - (j111 * g111)) - b111 * ((e111 * k111) - (i111 * g111)) + c111 * ((e111 * j111) - (i111 * f111));

    var x = parseFloat(dx / D);
    var y = parseFloat(dy / D);
    var z = parseFloat(dz / D);
    if (  dx == 0 && D== 0 || dy == 0 && D== 0 || dz == 0 && D== 0)
    {
        document.getElementById("ikse").innerHTML = "Undefined";
    document.getElementById("igreq").innerHTML = "Undefined";
    document.getElementById("zed").innerHTML = "Undefined";
    }
    
    
    else if
    (D == 0) {
        document.getElementById("ikse").innerHTML = "Infinity";
    document.getElementById("igreq").innerHTML = "Infinity";
    document.getElementById("zed").innerHTML = "Infinity";
    }

    else{
        document.getElementById("ikse").innerHTML = x;
    document.getElementById("igreq").innerHTML = y;
    document.getElementById("zed").innerHTML = z;
    }

    }
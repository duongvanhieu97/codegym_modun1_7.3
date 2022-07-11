function tan() {
    let r = document.getElementById("radius").value;
    let chuvi = 2 * 3.14 * r;
    document.getElementById("circumference").innerText = chuvi;

    let acreageOfCircle = 3.14 * r * r;
    document.getElementById('acreage').innerText = acreageOfCircle;
}

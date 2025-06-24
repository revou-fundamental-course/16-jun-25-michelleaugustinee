function luasSegitiga(event) {
    event.preventDefault();

    const alas = parseFloat(document.getElementById("alas").value);
    const tinggi = parseFloat(document.getElementById("tinggi").value);

    const hasil = document.getElementById("luas");

    if (isNaN(alas) || isNaN(tinggi) || alas <= 0 || tinggi <= 0) {
        hasil.textContent = "Input nilai Alas dan Tinggi yang valid (angka positif)";
        return;
    }

    const luas = 0.5 * alas * tinggi;
    hasil.textContent = `Luas Segitiga = ${luas} cm²`;
}

function resetLuas() {
    document.getElementById("alas").value = "";
    document.getElementById("tinggi").value = "";
    document.getElementById("luas").textContent = "";
}

function kelilingSegitiga(event) {
    event.preventDefault();

    const sisiA = parseFloat(document.getElementById("sisi-a").value);
    const sisiB = parseFloat(document.getElementById("sisi-b").value);
    const sisiC = parseFloat(document.getElementById("sisi-c").value);

    const hasil = document.getElementById("keliling");

    if (isNaN(sisiA) || isNaN(sisiB) || isNaN(sisiC) || sisiA <= 0 || sisiB <= 0 || sisiC <= 0) {
        hasil.textContent = "Input nilai sisi yang valid (angka positif)";
        return;
    }

    const keliling = sisiA + sisiB + sisiC;
    hasil.textContent = `Keliling Segitiga = ${keliling} cm`;
}

function resetKeliling() {
    document.getElementById("sisi-a").value = "";
    document.getElementById("sisi-b").value = "";
    document.getElementById("sisi-c").value = "";
    document.getElementById("keliling").textContent = "";
}
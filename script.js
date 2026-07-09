// =========================
// DATABASE BLACKLIST
// =========================

const blacklist = [
    "081234567890",
    "081345678912",
    "081456789123",
    "082123456789",
    "082345678901",
    "083812345678",
    "085712345678",
    "087812345678"
];

// =========================
// MENAMPILKAN DATABASE
// =========================

const tabel = document.getElementById("database");

blacklist.forEach((nomor, index) => {

    tabel.innerHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>${nomor}</td>
        </tr>
    `;

});


// =========================
// ALGORITMA LINEAR SEARCH
// =========================

function linearSearch(data, target){

    let jumlahPerbandingan = 0;

    const mulai = performance.now();

    for(let i = 0; i < data.length; i++){

        jumlahPerbandingan++;

        if(data[i] === target){

            const selesai = performance.now();

            return{

                ditemukan:true,
                posisi:i + 1,
                perbandingan:jumlahPerbandingan,
                waktu:(selesai - mulai).toFixed(4)

            };

        }

    }

    const selesai = performance.now();

    return{

        ditemukan:false,
        posisi:"-",
        perbandingan:jumlahPerbandingan,
        waktu:(selesai - mulai).toFixed(4)

    };

}


// =========================
// CEK NOMOR
// =========================

function cekNomor(){

    const nomor = document.getElementById("nomor").value.trim();

    if(nomor==""){

        alert("Masukkan nomor telepon terlebih dahulu.");

        return;

    }

    const hasil = linearSearch(blacklist, nomor);

    document.getElementById("hasilCard").style.display = "block";

    if(hasil.ditemukan){

        document.getElementById("status").innerHTML =
        "<span class='status-spam'>SPAM</span>";

    }

    else{

        document.getElementById("status").innerHTML =
        "<span class='status-aman'>BUKAN SPAM</span>";

    }

    document.getElementById("posisi").innerHTML = hasil.posisi;

    document.getElementById("perbandingan").innerHTML =
    hasil.perbandingan + " kali";

    document.getElementById("waktu").innerHTML =
    hasil.waktu + " ms";

}



// =========================
// RESET
// =========================

function resetForm(){

    document.getElementById("nomor").value = "";

    document.getElementById("hasilCard").style.display = "none";

}
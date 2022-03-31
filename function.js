let nilaiTersimpan = ''
let selectOperator = ''
let nilaiDiinput = '0'

const tampilanHasil = document.querySelector('.tampilan_hasil')

const updateScreen = (nilai) => {
    tampilanHasil.value = nilai
}

const inputNilai = (nilai) => {
    if (nilaiDiinput === '0') {
        nilaiDiinput = nilai
    }
    else {
        nilaiDiinput += nilai
    }
}

const angka = document.querySelectorAll(".angka")
angka.forEach((nilai) => {
    nilai.addEventListener("click", (event) => {
        inputNilai(event.target.value)
        updateScreen(nilaiDiinput)
    })
})

// fungsi operator
const tanda = document.querySelectorAll('.tanda')

tanda.forEach((fungsi) => {
    fungsi.addEventListener("click", (event) => {
        inputFungsi(event.target.value)
    })
})

const inputFungsi = (fungsi) => {
    if(selectOperator === ''){
        nilaiTersimpan = nilaiDiinput
    }
    selectOperator = fungsi
    nilaiDiinput = ''
}

const perhitungan = () => {
    let hasil= ''
    switch(selectOperator) {
        case "+":
            hasil = parseFloat(nilaiTersimpan) + parseFloat(nilaiDiinput)
            break
        case "-":
            hasil = parseFloat(nilaiTersimpan) - parseFloat(nilaiDiinput)
            break
        case "*":
            hasil = parseFloat(nilaiTersimpan) * parseFloat(nilaiDiinput)
            break
        case "/":
            hasil = parseFloat(nilaiTersimpan) / parseFloat(nilaiDiinput)
            break
        case "%":
            hasil = (parseFloat(nilaiTersimpan) / 100) * parseFloat(nilaiDiinput)
            break
        case "sqrt":
            hasil = Math.sqrt(parseFloat(nilaiTersimpan))
            break
        case "quad":
            hasil = parseFloat(nilaiTersimpan) ** 2
            break
        case "sin":
            hasil = Math.sin(parseFloat(nilaiTersimpan))
            break
        case "cos":
            hasil = Math.cos(parseFloat(nilaiTersimpan))
            break
        case "tan":
            hasil = Math.tan(parseFloat(nilaiTersimpan))
            break
        default:
            return;
    }
    nilaiDiinput = hasil
    selectOperator = ''

    let fixedNum = hasil
    nilaiDiinput = Math.round((fixedNum + Number.EPSILON)*100000) / 100000
}
// 

// fungsi hasil
const equal = document.querySelector('.equal')

equal.addEventListener('click', ()=> {
    perhitungan()
    updateScreen(nilaiDiinput)
})
// 

// fungsi koma
const inputDesimal = (dot) => {
    if(nilaiDiinput.includes('.')){
        return;
    }
    nilaiDiinput += dot;
}

const desimal = document.querySelector('.desimal')

desimal.addEventListener("click", (event) => {
    inputDesimal(event.target.value);
    updateScreen(nilaiDiinput);
})
//

// fungsi hapus
const hapusNilai = () => {
    nilaiDiinput = nilaiDiinput.substring(0, nilaiDiinput.length -1);
}

const hapusNilaiBtn = document.querySelector('.hapus')

hapusNilaiBtn.addEventListener("click", (event) => {
    hapusNilai();
    updateScreen(nilaiDiinput);
})
// 

// fungsi hapus semua
const hapusSemua = () => {
    nilaiTersimpan = '';
    selectOperator = '';
    nilaiDiinput = '0';
}

const hapusSemuaBtn = document.querySelector('.hapus_semua')

hapusSemuaBtn.addEventListener("click", () => {
    hapusSemua();
    updateScreen(nilaiDiinput);
})
//
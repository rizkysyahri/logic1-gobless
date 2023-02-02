// versi gueh

function update() {
  const hasil = document.getElementById("inputValue").value;
  const pilih = document.getElementById("selection").value;
  const card = document.getElementById("targetObject1");
  const card1 = document.getElementById("targetOBject2");

  switch (pilih) {
    case "Warna Latar":
      card.style.background = hasil;
      break;

    case "Warna Text":
      card.style.color = hasil;
      break;
    case "Ukuran Text":
      card.style.fontSize = hasil;
      break;

    case "Jenis Font":
      card.style.fontFamily = hasil;
      break;
    case "Lebar Konten":
      card.style.width = hasil;
      break;
    case "Tinggi Konten":
      card.style.height = hasil;
      break;
  }
}

// opsi selanjutnya variabel card nya klo mau yg diambil class nya jadi
// const card = document.querySelector(".card")
// jadi nnti ketika di case kita ambil sesuai card yg di butuh kan

// versi mang dea

const targetObject1 = document.getElementById("targetObject1"); // BG component
const targetObject2 = document.getElementById("targetObject2"); // TXT component
const selection = document.getElementById("selection");
const input = document.getElementById("inputValue");

function update() {
  const userSelect = selection.options.selectedIndex;
  switch (userSelect) {
    case 1:
      targetObject1.style.background = input.value;
      break;
    case 2:
      targetObject2.style.color = input.value;
      break;
    case 3:
      targetObject2.style.fontSize = input.value + 'px';
      break;
    case 4:
      targetObject2.style.fontFamily = input.value;

      break;
    case 5:
      targetObject2.style.width = input.value + 'px';

      break;
    case 6:
      targetObject2.style.height = input.value + 'px';

      break;
  }
}

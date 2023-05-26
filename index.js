// Soal Nomor 1

function tampilkanKelipatan(n) {
  let count = 0;
  let num = 1;

  while (count < n) {
    if (num % 3 === 0 || num % 7 === 0) {
      if (num % 3 === 0 && num % 7 === 0) {
        console.log("Z");
      } else {
        console.log(num);
      }
      count++;
    }
    num++;
  }
}
// Soal Nomor 2
function cariKata(teks) {
  const kataCari = ["sang gajah", "serigala", "harimau"];
  let hasil = [];

  kataCari.forEach((kata) => {
    let regex = new RegExp(kata, "gi");
    let kataDitemukan = teks.match(regex);

    if (kataDitemukan) {
      hasil = hasil.concat(kataDitemukan);
    }
  });

  return hasil.join(" - ");
}
// Soal Nomor 3
function cekKataSandi(kataSandi) {
  if (kataSandi.length < 8 || kataSandi.length > 32) {
    return "Kata sandi minimal 8 karakter dan maksimal 32 karakter";
  }
  if (/^\d/.test(kataSandi)) {
    return "Karakter awal tidak boleh angka";
  }
  if (!/\d/.test(kataSandi)) {
    return "Harus memiliki angka";
  }
  if (!/[A-Z]/.test(kataSandi) || !/[a-z]/.test(kataSandi)) {
    return "Harus memiliki huruf kapital dan huruf kecil";
  }

  return "Kata sandi valid";
}

// Soal Nomor 4
function cariBilanganCacahTerkecil(data) {
  data.sort((a, b) => a - b); // Urutkan data secara ascending

  let bilanganCacah = 1;

  for (let i = 0; i < data.length; i++) {
    if (data[i] === bilanganCacah) {
      bilanganCacah++;
    } else if (data[i] > bilanganCacah) {
      return bilanganCacah;
    }
  }

  return bilanganCacah;
}
function generatePattern(N) {
  if (N % 2 === 0) {
    console.log("Harus bilangan ganjil");
    return;
  }

  const pattern = [];
  for (let i = 0; i < Math.floor(N / 2); i++) {
    const row = Array(N).fill("X");
    row[i] = "O";
    row[N - 1 - i] = "O";
    pattern.push(row.join(""));
  }
  pattern.push(Array(N).fill("X").join(""));
  for (let i = Math.floor(N / 2) - 1; i >= 0; i--) {
    pattern.push(pattern[i]);
  }
  pattern.forEach((row) => {
    console.log(row);
  });
}
console.log("Jawaban Kasus 1");
tampilkanKelipatan(13);
console.log("----------------------------------");
console.log("----------------------------------");
console.log("      ");
console.log("Jawaban Kasus 2");
const teksInput =
  "Berikut adalah kisah sang gajah. Sang gajah memiliki teman serigala bernama DoeSang. Gajah sering dibela oleh serigala ketika harimau mendekati gajah.";
console.log(cariKata(teksInput));
console.log("----------------------------------");
console.log("----------------------------------");
console.log("      ");
console.log("Jawaban Kasus 3");
console.log(cekKataSandi("5andiwara"));
console.log(cekKataSandi("sandiwar4"));
console.log(cekKataSandi("Sandiwar4"));
console.log("----------------------------------");
console.log("----------------------------------");
console.log("      ");
console.log("Jawaban Kasus 4");
console.log(cariBilanganCacahTerkecil([5, 2, 8, 4, 3, 10]));
console.log(cariBilanganCacahTerkecil([2, 3, 4, 6]));
console.log(cariBilanganCacahTerkecil([8, 6, 7, 12]));
console.log("----------------------------------");
console.log("----------------------------------");
console.log("      ");
console.log("Jawaban Kasus 5");
generatePattern(5);
generatePattern(3);
generatePattern(7);
generatePattern(2);

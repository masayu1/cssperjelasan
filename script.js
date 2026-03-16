// ==============================
// FITUR 1: DARK MODE TOGGLE
// ==============================

const darkToggleBtn = document.querySelector('#dark-toggle'); // mengambil tombol dark mode dari HTML
const body = document.body; // mengambil elemen body halaman

darkToggleBtn.addEventListener('click', function() { // menjalankan fungsi saat tombol diklik
  
  body.classList.toggle('dark-mode'); // menambah atau menghapus class "dark-mode" pada body

  const isDarkMode = body.classList.contains('dark-mode'); // mengecek apakah dark mode aktif

  if (isDarkMode) { // jika dark mode aktif
    darkToggleBtn.textContent = '☀️ Light Mode'; // teks tombol berubah menjadi Light Mode
  } else { // jika dark mode tidak aktif
    darkToggleBtn.textContent = '🌙 Dark Mode'; // teks tombol berubah menjadi Dark Mode
  }
});


// ==============================
// FITUR 2: COUNTER
// ==============================

let count = 0; // membuat variabel untuk menyimpan angka counter

const angkaDisplay = document.querySelector('#angka-counter'); // mengambil elemen angka counter
const pesanDisplay = document.querySelector('#counter-pesan'); // mengambil elemen pesan counter
const btnTambah = document.querySelector('#btn-tambah'); // mengambil tombol tambah (+)
const btnKurang = document.querySelector('#btn-kurang'); // mengambil tombol kurang (-)

function updatePesan(n) { // fungsi untuk mengubah pesan berdasarkan jumlah minum air
  if (n === 0) pesanDisplay.textContent = 'Yuk mulai minum air!'; // jika angka 0
  else if (n < 4) pesanDisplay.textContent = 'Kurang minum nih...'; // jika kurang dari 4
  else if (n < 8) pesanDisplay.textContent = 'Lumayan, terus tambah! 💧'; // jika 4-7
  else pesanDisplay.textContent = 'Keren! Sudah cukup minum air hari ini! 🎉'; // jika 8 atau lebih
}

btnTambah.addEventListener('click', function() { // saat tombol tambah diklik
  count++; // menambah angka counter
  angkaDisplay.textContent = count; // menampilkan angka baru
  updatePesan(count); // memperbarui pesan
});

btnKurang.addEventListener('click', function() { // saat tombol kurang diklik
  if (count > 0) { // memastikan angka tidak kurang dari 0
    count--; // mengurangi angka counter
    angkaDisplay.textContent = count; // menampilkan angka baru
    updatePesan(count); // memperbarui pesan
  }
});


// ==============================
// FITUR 3: VALIDASI FORM
// ==============================

const btnKirim = document.querySelector('#btn-kirim'); // mengambil tombol kirim
const inputNama = document.querySelector('#input-nama'); // mengambil input nama
const inputEmail = document.querySelector('#input-email'); // mengambil input email
const inputPesan = document.querySelector('#input-pesan'); // mengambil input pesan
const formFeedback = document.querySelector('#form-feedback'); // mengambil tempat menampilkan pesan feedback

function tampilkanPesan(teks, tipe) { // fungsi untuk menampilkan pesan ke pengguna
  formFeedback.textContent = teks; // menampilkan teks pesan
  formFeedback.className = 'feedback ' + tipe; // menambahkan class error atau success
}

function isEmailValid(email) { // fungsi untuk mengecek format email
  return email.includes('@') && email.includes('.'); // email harus memiliki @ dan .
}

btnKirim.addEventListener('click', function() { // saat tombol kirim ditekan
  
  const nama = inputNama.value.trim(); // mengambil nilai nama dan menghapus spasi kosong
  const email = inputEmail.value.trim(); // mengambil nilai email
  const pesan = inputPesan.value.trim(); // mengambil nilai pesan

  if (nama === '' || email === '' || pesan === '') { // mengecek jika ada field kosong
    tampilkanPesan('⚠️ Semua field harus diisi!', 'error'); // menampilkan pesan error
    return; // menghentikan proses
  }

  if (!isEmailValid(email)) { // mengecek apakah email valid
    tampilkanPesan('⚠️ Format email tidak valid! Contoh: nama@email.com', 'error'); // pesan error email
    return; // menghentikan proses
  }

  tampilkanPesan('✅ Pesan berhasil dikirim! Terima kasih, ' + nama + '!', 'success'); // pesan sukses

  inputNama.value = ''; // mengosongkan input nama
  inputEmail.value = ''; // mengosongkan input email
  inputPesan.value = ''; // mengosongkan input pesan
});
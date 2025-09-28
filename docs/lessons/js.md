# 🚀 JavaScript - Membuat Web Interaktif

JavaScript adalah bahasa pemrograman yang memberikan "nyawa" pada website Anda! Mari belajar step by step dari dasar hingga membuat aplikasi interaktif.

## 📚 Daftar Materi

<!-- tabs:start -->

#### ** 🎯 Pengenalan **

### Apa itu JavaScript?

JavaScript adalah bahasa pemrograman yang digunakan untuk membuat website menjadi interaktif dan dinamis.

?> **Tahukah kamu?** JavaScript awalnya dibuat hanya dalam 10 hari oleh Brendan Eich pada tahun 1995!

### Mengapa Belajar JavaScript?

- 🌐 **Universal**: Berjalan di semua browser
- 📱 **Versatile**: Web, mobile, desktop, server
- 🎨 **Interactive**: Membuat animasi dan efek menarik
- 🚀 **Modern**: Teknologi yang terus berkembang

#### ** 📊 Variabel & Data **

### Variabel - Tempat Menyimpan Data

```javascript
// Cara mendeklarasikan variabel
let nama = "Budi";           // String (teks)
let umur = 25;               // Number (angka)
let sudahMenikah = false;    // Boolean (true/false)
let hobi = ["coding", "gaming", "musik"]; // Array

console.log(nama);           // Output: Budi
```

<div class="demo-container">
<h4>🎮 Coba Sendiri!</h4>

```html
<script>
  // Ganti nilai variabel ini
  let namaSaya = "Nama Kamu";
  let umurSaya = 20;
  
  document.write("<h3>Halo, saya " + namaSaya + "</h3>");
  document.write("<p>Umur saya " + umurSaya + " tahun</p>");
</script>
```
</div>

### Tipe Data JavaScript

| Tipe | Contoh | Kegunaan |
|------|--------|----------|
| **String** | `"Hello World"` | Menyimpan teks |
| **Number** | `42` atau `3.14` | Angka bulat/desimal |
| **Boolean** | `true` atau `false` | Nilai benar/salah |
| **Array** | `[1, 2, 3]` | Daftar data |
| **Object** | `{nama: "Budi"}` | Data terstruktur |

#### ** 🎛️ Operator **

### Operator Aritmatika

```javascript
let a = 10;
let b = 5;

console.log(a + b);  // 15 (Penjumlahan)
console.log(a - b);  // 5  (Pengurangan)
console.log(a * b);  // 50 (Perkalian)
console.log(a / b);  // 2  (Pembagian)
console.log(a % b);  // 0  (Sisa bagi)
```

### Operator Perbandingan

```javascript
let x = 10;
let y = "10";

console.log(x == y);   // true  (nilai sama)
console.log(x === y);  // false (nilai dan tipe beda)
console.log(x > 5);    // true
console.log(x <= 15);  // true
```

!> **Penting!** Gunakan `===` untuk perbandingan yang lebih akurat!

#### ** 🔄 Kontrol Alur **

### If Statement - Pengambilan Keputusan

```javascript
let nilai = 85;

if (nilai >= 90) {
    console.log("Grade A - Excellent! 🏆");
} else if (nilai >= 75) {
    console.log("Grade B - Good Job! 👍");
} else if (nilai >= 60) {
    console.log("Grade C - Not Bad 😊");
} else {
    console.log("Grade D - Keep Trying! 💪");
}
```

### Loop - Pengulangan

```javascript
// For Loop
for (let i = 1; i <= 5; i++) {
    console.log("Perulangan ke-" + i);
}

// While Loop
let counter = 0;
while (counter < 3) {
    console.log("Counter: " + counter);
    counter++;
}

// Array Loop
let buah = ["apel", "pisang", "jeruk"];
for (let item of buah) {
    console.log("Saya suka " + item);
}
```

#### ** 🎪 DOM Manipulation **

### Apa itu DOM?

DOM (Document Object Model) adalah cara JavaScript berinteraksi dengan HTML.

```javascript
// Mengambil element HTML
let judul = document.getElementById("judul");
let tombol = document.querySelector(".btn");
let semuaP = document.querySelectorAll("p");

// Mengubah konten
judul.textContent = "Judul Baru!";
judul.innerHTML = "<strong>Judul Tebal</strong>";

// Mengubah style
judul.style.color = "blue";
judul.style.fontSize = "24px";
```

<div class="demo-container">
<h4>🎨 Demo Interaktif</h4>

```html
<div id="demo-box" style="padding: 20px; background: lightblue; text-align: center;">
    <h3 id="demo-title">Klik tombol di bawah!</h3>
    <button onclick="changeColor()">Ubah Warna</button>
    <button onclick="changeText()">Ubah Teks</button>
</div>

<script>
function changeColor() {
    let box = document.getElementById('demo-box');
    let colors = ['lightblue', 'lightgreen', 'lightpink', 'lightyellow'];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    box.style.background = randomColor;
}

function changeText() {
    let title = document.getElementById('demo-title');
    let texts = ['Wow! Keren!', 'JavaScript Mantap!', 'Belajar itu Seru!', 'Keep Going!'];
    let randomText = texts[Math.floor(Math.random() * texts.length)];
    title.textContent = randomText;
}
</script>
```
</div>

#### ** 📝 Event Handling **

### Event - Menangani Interaksi User

```javascript
// Event Click
document.getElementById("myButton").addEventListener("click", function() {
    alert("Tombol diklik! 🎉");
});

// Event Mouse Over
document.getElementById("myDiv").addEventListener("mouseover", function() {
    this.style.backgroundColor = "yellow";
});

// Event Form Submit
document.getElementById("myForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Mencegah form submit default
    let input = document.getElementById("myInput").value;
    console.log("Input: " + input);
});
```

<div class="demo-container">
<h4>🎯 Event Demo</h4>

```html
<div style="text-align: center; padding: 20px;">
    <input type="text" id="userInput" placeholder="Ketik sesuatu...">
    <br><br>
    <button id="sayHello">Say Hello</button>
    <button id="clearText">Clear</button>
    <br><br>
    <div id="output" style="margin-top: 15px; font-size: 18px; color: green;"></div>
</div>

<script>
document.getElementById('sayHello').addEventListener('click', function() {
    let input = document.getElementById('userInput').value;
    let output = document.getElementById('output');
    if (input.trim() !== '') {
        output.innerHTML = `<strong>Hello, ${input}! 👋</strong>`;
    } else {
        output.innerHTML = '<em>Silakan ketik nama Anda dulu</em>';
    }
});

document.getElementById('clearText').addEventListener('click', function() {
    document.getElementById('userInput').value = '';
    document.getElementById('output').innerHTML = '';
});
</script>
```
</div>

#### ** 🏗️ Functions **

### Function - Blok Kode yang Dapat Digunakan Ulang

```javascript
// Function Declaration
function sapa(nama) {
    return "Halo, " + nama + "! Selamat datang! 🎉";
}

// Function Expression
const hitungLuas = function(panjang, lebar) {
    return panjang * lebar;
};

// Arrow Function (Modern JavaScript)
const hitungVolume = (p, l, t) => {
    return p * l * t;
};

// Penggunaan
console.log(sapa("Budi"));                    // Output: Halo, Budi! Selamat datang! 🎉
console.log(hitungLuas(5, 3));               // Output: 15
console.log(hitungVolume(2, 3, 4));          // Output: 24
```

#### ** 🎨 Mini Projects **

### 🎲 Project 1: Random Quote Generator

<div class="demo-container">

```html
<div style="text-align: center; padding: 30px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border-radius: 10px;">
    <h3>✨ Random Quote Generator</h3>
    <div id="quote-display" style="font-size: 18px; font-style: italic; margin: 20px 0; min-height: 60px;">
        "Klik tombol untuk mendapat inspirasi!"
    </div>
    <button onclick="generateQuote()" style="background: white; color: #667eea; border: none; padding: 10px 20px; border-radius: 25px; cursor: pointer; font-weight: bold;">
        🎲 Generate Quote
    </button>
</div>

<script>
const quotes = [
    "Masa depan milik mereka yang percaya pada keindahan mimpi mereka. - Eleanor Roosevelt",
    "Jangan menunggu. Waktu tidak akan pernah tepat. - Napoleon Hill",
    "Sukses adalah perjalanan, bukan tujuan. - Ben Sweetland",
    "Hidup adalah 10% apa yang terjadi padamu dan 90% bagaimana kamu meresponsnya. - Charles R. Swindoll",
    "Cara terbaik untuk memulai adalah berhenti bicara dan mulai melakukan. - Walt Disney"
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteDisplay = document.getElementById('quote-display');
    quoteDisplay.style.opacity = '0';
    
    setTimeout(() => {
        quoteDisplay.innerHTML = `"${quotes[randomIndex]}"`;
        quoteDisplay.style.opacity = '1';
    }, 200);
}
</script>
```
</div>

### 🎯 Project 2: Simple Calculator

<div class="demo-container">

```html
<div style="max-width: 300px; margin: 0 auto; padding: 20px; background: #f8f9fa; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
    <h3 style="text-align: center; color: #333;">🧮 Kalkulator Mini</h3>
    <input type="text" id="calc-display" readonly style="width: 100%; padding: 15px; font-size: 18px; text-align: right; border: 1px solid #ddd; border-radius: 5px; margin-bottom: 15px;">
    
    <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px;">
        <button onclick="clearCalculator()" style="grid-column: span 2; padding: 15px; background: #ff6b6b; color: white; border: none; border-radius: 5px; cursor: pointer;">Clear</button>
        <button onclick="deleteLast()" style="padding: 15px; background: #feca57; border: none; border-radius: 5px; cursor: pointer;">⌫</button>
        <button onclick="appendToDisplay('/')" style="padding: 15px; background: #48dbfb; border: none; border-radius: 5px; cursor: pointer;">÷</button>
        
        <button onclick="appendToDisplay('7')" style="padding: 15px; background: #f1f2f6; border: none; border-radius: 5px; cursor: pointer;">7</button>
        <button onclick="appendToDisplay('8')" style="padding: 15px; background: #f1f2f6; border: none; border-radius: 5px; cursor: pointer;">8</button>
        <button onclick="appendToDisplay('9')" style="padding: 15px; background: #f1f2f6; border: none; border-radius: 5px; cursor: pointer;">9</button>
        <button onclick="appendToDisplay('*')" style="padding: 15px; background: #48dbfb; border: none; border-radius: 5px; cursor: pointer;">×</button>
        
        <button onclick="appendToDisplay('4')" style="padding: 15px; background: #f1f2f6; border: none; border-radius: 5px; cursor: pointer;">4</button>
        <button onclick="appendToDisplay('5')" style="padding: 15px; background: #f1f2f6; border: none; border-radius: 5px; cursor: pointer;">5</button>
        <button onclick="appendToDisplay('6')" style="padding: 15px; background: #f1f2f6; border: none; border-radius: 5px; cursor: pointer;">6</button>
        <button onclick="appendToDisplay('-')" style="padding: 15px; background: #48dbfb; border: none; border-radius: 5px; cursor: pointer;">-</button>
        
        <button onclick="appendToDisplay('1')" style="padding: 15px; background: #f1f2f6; border: none; border-radius: 5px; cursor: pointer;">1</button>
        <button onclick="appendToDisplay('2')" style="padding: 15px; background: #f1f2f6; border: none; border-radius: 5px; cursor: pointer;">2</button>
        <button onclick="appendToDisplay('3')" style="padding: 15px; background: #f1f2f6; border: none; border-radius: 5px; cursor: pointer;">3</button>
        <button onclick="appendToDisplay('+')" style="padding: 15px; background: #48dbfb; border: none; border-radius: 5px; cursor: pointer;">+</button>
        
        <button onclick="appendToDisplay('0')" style="grid-column: span 2; padding: 15px; background: #f1f2f6; border: none; border-radius: 5px; cursor: pointer;">0</button>
        <button onclick="appendToDisplay('.')" style="padding: 15px; background: #f1f2f6; border: none; border-radius: 5px; cursor: pointer;">.</button>
        <button onclick="calculateResult()" style="padding: 15px; background: #2ed573; color: white; border: none; border-radius: 5px; cursor: pointer;">=</button>
    </div>
</div>

<script>
function appendToDisplay(value) {
    document.getElementById('calc-display').value += value;
}

function clearCalculator() {
    document.getElementById('calc-display').value = '';
}

function deleteLast() {
    let display = document.getElementById('calc-display');
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    let display = document.getElementById('calc-display');
    try {
        display.value = eval(display.value) || '0';
    } catch (error) {
        display.value = 'Error';
        setTimeout(clearCalculator, 1500);
    }
}
</script>
```
</div>

<!-- tabs:end -->

## 🎯 Tantangan & Latihan

### 📝 Latihan 1: To-Do List Sederhana
Buat aplikasi to-do list dengan fitur:
- Tambah task baru
- Tandai task selesai
- Hapus task

### 🎨 Latihan 2: Color Palette Generator
Buat generator warna acak yang menampilkan:
- Kode hex warna
- Preview warna
- Tombol copy kode warna

### 🎲 Latihan 3: Guessing Game
Buat game tebak angka dengan:
- Random number 1-100
- Hint "terlalu tinggi" atau "terlalu rendah"
- Counter jumlah percobaan

## 🚀 Tips & Best Practices

<div class="alert alert-info">
<strong>💡 Tips Debugging:</strong>
<ul>
<li>Gunakan <code>console.log()</code> untuk debug</li>
<li>Buka Developer Tools (F12) di browser</li>
<li>Periksa tab Console untuk error</li>
</ul>
</div>

<div class="alert alert-success">
<strong>✅ Best Practices:</strong>
<ul>
<li>Gunakan nama variabel yang deskriptif</li>
<li>Tulis komentar untuk kode kompleks</li>
<li>Gunakan <code>const</code> untuk nilai yang tidak berubah</li>
<li>Gunakan <code>let</code> instead of <code>var</code></li>
</ul>
</div>

<div class="alert alert-warning">
<strong>⚠️ Hal yang Harus Dihindari:</strong>
<ul>
<li>Jangan gunakan <code>var</code> (gunakan <code>let</code> atau <code>const</code>)</li>
<li>Hindari global variables berlebihan</li>
<li>Jangan lupa semicolon di akhir statement</li>
</ul>
</div>

## 📚 Sumber Belajar Lanjutan

- 🌐 [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- 📺 [JavaScript.info](https://javascript.info/)
- 🎮 [FreeCodeCamp](https://www.freecodecamp.org/)
- 💻 [Codecademy JavaScript Course](https://www.codecademy.com/learn/introduction-to-javascript)

## 🏁 Kesimpulan

Selamat! 🎉 Anda telah mempelajari dasar-dasar JavaScript. Sekarang Anda bisa:

✅ Membuat variabel dan menggunakan tipe data  
✅ Mengontrol alur program dengan if-else dan loop  
✅ Memanipulasi DOM untuk interaktivitas  
✅ Menangani event user  
✅ Membuat function reusable  
✅ Membangun mini project interaktif  

**Next Steps:** Lanjutkan dengan mempelajari JavaScript modern (ES6+), frameworks seperti React/Vue, atau Node.js untuk backend development!

<div style="text-align: center; margin: 30px 0;">
<button class="btn btn-primary" onclick="window.open('https://github.com/hamadazein/tutorial', '_blank')">
🌟 Star Repository Ini
</button>
<button class="btn btn-success" onclick="alert('Selamat! Anda telah menyelesaikan materi JavaScript! 🎉')">
🏆 Selesaikan Materi
</button>
</div>

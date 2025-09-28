# HTML - Fondasi Website Modern

HTML (HyperText Markup Language) adalah bahasa markup untuk membangun struktur website. Mari belajar dari dasar hingga mahir dengan pendekatan interaktif!

## 📚 Daftar Materi Lengkap

<!-- tabs:start -->

#### ** Pengenalan **

### Apa itu HTML?

HTML adalah **bahasa markup** yang digunakan untuk membuat struktur dan konten website. Bayangkan HTML seperti rangka rumah - menentukan di mana pintu, jendela, dan ruangan berada.

?> **Fun Fact:** HTML pertama kali dibuat oleh Tim Berners-Lee pada tahun 1991 di CERN!

### Mengapa Belajar HTML?

- **Universal**: Semua website menggunakan HTML
- **Mudah Dipelajari**: Sintaks yang sederhana dan logis  
- **Dasar Wajib**: Foundation untuk CSS dan JavaScript
- **Career Essential**: Skill wajib untuk web developer

### Tools yang Dibutuhkan

| Tool | Fungsi | Rekomendasi |
|------|---------|-------------|
| **Text Editor** | Menulis kode | VS Code, Sublime Text |
| **Web Browser** | Melihat hasil | Chrome, Firefox |
| **Developer Tools** | Debug & inspect | Built-in browser |

#### ** 📖 Struktur Dasar **

### Dokumen HTML Standard

```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Website Pertamaku</title>
</head>
<body>
    <h1>Selamat Datang di Website Saya!</h1>
    <p>Ini adalah paragraf pertama saya.</p>
</body>
</html>
```

<div class="code-editor">
<div class="editor-header">
    <div class="editor-dots">
        <div class="dot red"></div>
        <div class="dot yellow"></div>
        <div class="dot green"></div>
    </div>
    <span>index.html</span>
</div>
<div class="demo-container">

```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Website Pertamaku</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; }
        .container { background: rgba(255,255,255,0.1); padding: 30px; border-radius: 15px; text-align: center; }
    </style>
</head>
<body>
    <div class="container">
        <h1>🎉 Selamat Datang di Website Saya!</h1>
        <p>Ini adalah <strong>paragraf pertama</strong> saya menggunakan HTML.</p>
        <p><em>Mudah sekali bukan?</em> 😊</p>
    </div>
</body>
</html>
```
</div>
</div>

### Penjelasan Struktur

| Element | Fungsi |
|---------|---------|
| `<!DOCTYPE html>` | Memberitahu browser ini dokumen HTML5 |
| `<html>` | Root element, wadah semua content |
| `<head>` | Metadata (tidak tampil di halaman) |
| `<body>` | Konten yang tampil di halaman |
| `<meta>` | Informasi tentang dokumen |
| `<title>` | Judul di tab browser |

#### ** 🏷️ Tag Heading **

### Hierarki Heading (H1-H6)

HTML menyediakan 6 level heading untuk struktur konten yang baik:

<div class="demo-container">

```html
<h1>🏆 Heading Level 1 - Judul Utama</h1>
<h2>📊 Heading Level 2 - Sub Judul</h2>
<h3>📝 Heading Level 3 - Sub-Sub Judul</h3>
<h4>🔸 Heading Level 4</h4>
<h5>🔹 Heading Level 5</h5>
<h6>• Heading Level 6</h6>

<style>
h1 { color: #e74c3c; font-size: 2.5em; }
h2 { color: #3498db; font-size: 2em; }
h3 { color: #2ecc71; font-size: 1.5em; }
h4 { color: #f39c12; font-size: 1.3em; }
h5 { color: #9b59b6; font-size: 1.1em; }
h6 { color: #34495e; font-size: 1em; }
</style>
```
</div>

!> **SEO Tips:** Gunakan heading secara hierarkis (H1 → H2 → H3) untuk SEO yang lebih baik!

#### ** 📝 Paragraf & Teks **

### Format Teks Dasar

<div class="demo-container">

```html
<p>Ini adalah <strong>teks tebal (bold)</strong> menggunakan tag strong.</p>
<p>Ini adalah <em>teks miring (italic)</em> menggunakan tag em.</p>
<p>Ini adalah <u>teks bergaris bawah</u> menggunakan tag u.</p>
<p>Ini adalah <mark>teks yang di-highlight</mark> menggunakan tag mark.</p>
<p>Rumus kimia air: H<sub>2</sub>O menggunakan subscript.</p>
<p>Rumus matematika: E=mc<sup>2</sup> menggunakan superscript.</p>

<hr>

<blockquote>
    "Masa depan milik mereka yang percaya pada keindahan mimpi mereka."
    <cite>- Eleanor Roosevelt</cite>
</blockquote>

<pre>
Teks ini menggunakan tag pre
    yang mempertahankan format spasi
        dan baris baru
</pre>

<style>
strong { color: #e74c3c; }
em { color: #3498db; }
mark { background: yellow; padding: 2px; }
blockquote { 
    background: #f8f9fa; 
    border-left: 4px solid #007bff; 
    padding: 15px; 
    margin: 20px 0; 
    color: #333;
}
pre { 
    background: #2c3e50; 
    color: #ecf0f1; 
    padding: 15px; 
    border-radius: 5px; 
    font-family: monospace;
}
</style>
```
</div>

#### ** 🔗 Link & Navigasi **

### Membuat Link yang Efektif

<div class="demo-container">

```html
<!-- Link Eksternal -->
<p><a href="https://www.google.com" target="_blank">🔍 Buka Google (Tab Baru)</a></p>

<!-- Link Internal (dalam website yang sama) -->
<p><a href="#section1">📍 Pergi ke Section 1</a></p>

<!-- Link Email -->
<p><a href="mailto:example@email.com">📧 Kirim Email</a></p>

<!-- Link Telepon -->
<p><a href="tel:+6281234567890">📞 Hubungi Kami</a></p>

<!-- Link dengan Download -->
<p><a href="/files/document.pdf" download>📄 Download PDF</a></p>

<div id="section1" style="margin-top: 50px; padding: 20px; background: lightblue;">
    <h3>📍 Section 1</h3>
    <p>Anda berhasil navigasi ke section ini!</p>
</div>

<style>
a {
    color: #007bff;
    text-decoration: none;
    padding: 8px 15px;
    border-radius: 20px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    display: inline-block;
    margin: 5px;
    transition: transform 0.3s;
}
a:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
}
</style>
```
</div>

#### ** 📋 List & Struktur **

### Jenis-jenis List

<div class="demo-container">

```html
<!-- Unordered List (Bullet Points) -->
<h3>🛒 Daftar Belanja:</h3>
<ul>
    <li>🍎 Apel</li>
    <li>🍌 Pisang</li>
    <li>🥛 Susu</li>
    <li>🍞 Roti</li>
</ul>

<!-- Ordered List (Numbered) -->
<h3>📚 Langkah Belajar HTML:</h3>
<ol>
    <li>Pelajari struktur dasar</li>
    <li>Praktik membuat halaman sederhana</li>
    <li>Tambahkan styling dengan CSS</li>
    <li>Buat website interaktif dengan JavaScript</li>
</ol>

<!-- Description List -->
<h3>🎓 Istilah Web Development:</h3>
<dl>
    <dt><strong>HTML</strong></dt>
    <dd>HyperText Markup Language - untuk struktur</dd>
    
    <dt><strong>CSS</strong></dt>
    <dd>Cascading Style Sheets - untuk styling</dd>
    
    <dt><strong>JavaScript</strong></dt>
    <dd>Bahasa pemrograman untuk interaktivitas</dd>
</dl>

<style>
ul, ol { background: #f8f9fa; padding: 20px; border-radius: 10px; }
li { margin: 8px 0; }
dl { background: #e3f2fd; padding: 20px; border-radius: 10px; }
dt { font-weight: bold; color: #1976d2; margin-top: 15px; }
dd { margin-left: 20px; color: #555; }
</style>
```
</div>

#### ** 🖼️ Gambar & Media **

### Menambahkan Gambar

<div class="demo-container">

```html
<!-- Gambar Responsif -->
<figure style="text-align: center; margin: 20px 0;">
    <img src="https://via.placeholder.com/400x200/4285f4/ffffff?text=HTML+Tutorial" 
         alt="HTML Tutorial Banner" 
         style="max-width: 100%; height: auto; border-radius: 10px; box-shadow: 0 4px 15px rgba(0,0,0,0.2);">
    <figcaption style="margin-top: 10px; font-style: italic; color: #666;">
        Gambar ilustrasi tutorial HTML
    </figcaption>
</figure>

<!-- Gallery Sederhana -->
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px; margin: 20px 0;">
    <img src="https://via.placeholder.com/150/e74c3c/ffffff?text=HTML" style="width: 100%; border-radius: 8px;">
    <img src="https://via.placeholder.com/150/3498db/ffffff?text=CSS" style="width: 100%; border-radius: 8px;">
    <img src="https://via.placeholder.com/150/f1c40f/000000?text=JS" style="width: 100%; border-radius: 8px;">
</div>
```
</div>

### Atribut Gambar Penting

| Atribut | Fungsi | Contoh |
|---------|---------|---------|
| `src` | URL/path gambar | `src="image.jpg"` |
| `alt` | Teks alternatif | `alt="Deskripsi gambar"` |
| `width` | Lebar gambar | `width="300"` |
| `height` | Tinggi gambar | `height="200"` |
| `loading` | Lazy loading | `loading="lazy"` |

#### ** 📊 Tabel Data **

### Membuat Tabel yang Baik

<div class="demo-container">

```html
<table style="width: 100%; border-collapse: collapse; margin: 20px 0; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
    <caption style="font-size: 1.2em; margin-bottom: 15px; font-weight: bold; color: #333;">
        📊 Perbandingan Bahasa Pemrograman Web
    </caption>
    
    <thead>
        <tr style="background: linear-gradient(135deg, #667eea, #764ba2); color: white;">
            <th style="padding: 15px; text-align: left;">Bahasa</th>
            <th style="padding: 15px; text-align: center;">Fungsi Utama</th>
            <th style="padding: 15px; text-align: center;">Tingkat Kesulitan</th>
            <th style="padding: 15px; text-align: center;">Rating</th>
        </tr>
    </thead>
    
    <tbody>
        <tr style="background: #f8f9fa;">
            <td style="padding: 12px; border: 1px solid #ddd;"><strong>HTML</strong></td>
            <td style="padding: 12px; border: 1px solid #ddd; text-align: center;">Struktur</td>
            <td style="padding: 12px; border: 1px solid #ddd; text-align: center;">⭐ Mudah</td>
            <td style="padding: 12px; border: 1px solid #ddd; text-align: center;">⭐⭐⭐⭐⭐</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid #ddd;"><strong>CSS</strong></td>
            <td style="padding: 12px; border: 1px solid #ddd; text-align: center;">Styling</td>
            <td style="padding: 12px; border: 1px solid #ddd; text-align: center;">⭐⭐ Sedang</td>
            <td style="padding: 12px; border: 1px solid #ddd; text-align: center;">⭐⭐⭐⭐⭐</td>
        </tr>
        <tr style="background: #f8f9fa;">
            <td style="padding: 12px; border: 1px solid #ddd;"><strong>JavaScript</strong></td>
            <td style="padding: 12px; border: 1px solid #ddd; text-align: center;">Interaktivitas</td>
            <td style="padding: 12px; border: 1px solid #ddd; text-align: center;">⭐⭐⭐ Menengah</td>
            <td style="padding: 12px; border: 1px solid #ddd; text-align: center;">⭐⭐⭐⭐⭐</td>
        </tr>
    </tbody>
</table>
```
</div>

#### ** 📝 Form Input **

### Form Interaktif Lengkap

<div class="demo-container">

```html
<form style="max-width: 500px; margin: 0 auto; padding: 30px; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); border-radius: 15px; color: white;">
    <h3 style="text-align: center; margin-bottom: 25px;">📝 Form Pendaftaran</h3>
    
    <!-- Text Input -->
    <div style="margin-bottom: 20px;">
        <label for="nama" style="display: block; margin-bottom: 8px; font-weight: bold;">Nama Lengkap:</label>
        <input type="text" id="nama" name="nama" placeholder="Masukkan nama lengkap" 
               style="width: 100%; padding: 12px; border: none; border-radius: 8px; font-size: 14px;" required>
    </div>
    
    <!-- Email Input -->
    <div style="margin-bottom: 20px;">
        <label for="email" style="display: block; margin-bottom: 8px; font-weight: bold;">Email:</label>
        <input type="email" id="email" name="email" placeholder="contoh@email.com"
               style="width: 100%; padding: 12px; border: none; border-radius: 8px; font-size: 14px;" required>
    </div>
    
    <!-- Select Dropdown -->
    <div style="margin-bottom: 20px;">
        <label for="kota" style="display: block; margin-bottom: 8px; font-weight: bold;">Kota Asal:</label>
        <select id="kota" name="kota" style="width: 100%; padding: 12px; border: none; border-radius: 8px; font-size: 14px;">
            <option value="">Pilih Kota</option>
            <option value="jakarta">Jakarta</option>
            <option value="bandung">Bandung</option>
            <option value="surabaya">Surabaya</option>
            <option value="yogyakarta">Yogyakarta</option>
        </select>
    </div>
    
    <!-- Radio Buttons -->
    <div style="margin-bottom: 20px;">
        <label style="display: block; margin-bottom: 8px; font-weight: bold;">Jenis Kelamin:</label>
        <div style="display: flex; gap: 20px;">
            <label style="display: flex; align-items: center; cursor: pointer;">
                <input type="radio" name="gender" value="L" style="margin-right: 8px;"> Laki-laki
            </label>
            <label style="display: flex; align-items: center; cursor: pointer;">
                <input type="radio" name="gender" value="P" style="margin-right: 8px;"> Perempuan
            </label>
        </div>
    </div>
    
    <!-- Checkboxes -->
    <div style="margin-bottom: 20px;">
        <label style="display: block; margin-bottom: 8px; font-weight: bold;">Minat Teknologi:</label>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
            <label style="display: flex; align-items: center; cursor: pointer;">
                <input type="checkbox" name="minat[]" value="web" style="margin-right: 8px;"> Web Development
            </label>
            <label style="display: flex; align-items: center; cursor: pointer;">
                <input type="checkbox" name="minat[]" value="mobile" style="margin-right: 8px;"> Mobile App
            </label>
            <label style="display: flex; align-items: center; cursor: pointer;">
                <input type="checkbox" name="minat[]" value="ai" style="margin-right: 8px;"> Artificial Intelligence
            </label>
            <label style="display: flex; align-items: center; cursor: pointer;">
                <input type="checkbox" name="minat[]" value="design" style="margin-right: 8px;"> UI/UX Design
            </label>
        </div>
    </div>
    
    <!-- Textarea -->
    <div style="margin-bottom: 25px;">
        <label for="pesan" style="display: block; margin-bottom: 8px; font-weight: bold;">Pesan Tambahan:</label>
        <textarea id="pesan" name="pesan" rows="4" placeholder="Ceritakan tentang diri Anda..."
                  style="width: 100%; padding: 12px; border: none; border-radius: 8px; font-size: 14px; resize: vertical;"></textarea>
    </div>
    
    <!-- Submit Button -->
    <button type="submit" style="width: 100%; padding: 15px; background: white; color: #f5576c; border: none; border-radius: 8px; font-size: 16px; font-weight: bold; cursor: pointer; transition: transform 0.3s;"
            onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
        🚀 Daftar Sekarang
    </button>
</form>

<script>
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Form berhasil disubmit! (Demo saja) 🎉');
});
</script>
```
</div>

#### ** 🎯 Semantic HTML **

### Menggunakan Tag Semantik

Semantic HTML membuat struktur website lebih bermakna dan SEO-friendly:

<div class="demo-container">

```html
<article style="max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 8px 25px rgba(0,0,0,0.1);">
    <header style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 25px; text-align: center;">
        <h1 style="margin: 0; font-size: 1.5em;">📱 Tips Belajar HTML Efektif</h1>
        <p style="margin: 10px 0 0 0; opacity: 0.9;">Dipublikasikan pada 28 September 2025</p>
    </header>
    
    <main style="padding: 25px;">
        <section>
            <h2 style="color: #333; margin-top: 0;">🎯 Strategi Pembelajaran</h2>
            <p>Belajar HTML tidak harus menghafal semua tag. Yang penting adalah memahami konsep dan struktur.</p>
        </section>
        
        <section>
            <h3 style="color: #555;">💡 Tips Praktis:</h3>
            <ul style="color: #666;">
                <li>Praktik langsung sambil belajar teori</li>
                <li>Buat project kecil setiap hari</li>
                <li>Gunakan developer tools untuk inspeksi</li>
                <li>Bergabung dengan komunitas developer</li>
            </ul>
        </section>
        
        <aside style="background: #f8f9fa; padding: 15px; border-left: 4px solid #007bff; margin: 20px 0; border-radius: 0 8px 8px 0;">
            <strong>💭 Note:</strong> HTML5 memperkenalkan banyak tag semantik yang membuat code lebih readable dan SEO-friendly.
        </aside>
    </main>
    
    <footer style="background: #f8f9fa; padding: 15px 25px; border-top: 1px solid #eee; text-align: center; color: #666;">
        <small>© 2025 Interactive HTML Tutorial | 
        <a href="#" style="color: #007bff; text-decoration: none;">Share</a> | 
        <a href="#" style="color: #007bff; text-decoration: none;">Bookmark</a></small>
    </footer>
</article>
```
</div>

### Tag Semantik HTML5

| Tag | Fungsi | Contoh Penggunaan |
|-----|---------|-------------------|
| `<header>` | Header section | Logo, navigasi utama |
| `<nav>` | Navigation menu | Menu website |
| `<main>` | Konten utama | Content area |
| `<article>` | Konten independen | Blog post, berita |
| `<section>` | Bagian dari konten | Bab dalam artikel |
| `<aside>` | Konten sampingan | Sidebar, iklan |
| `<footer>` | Footer section | Copyright, contact |

<!-- tabs:end -->

## 🎮 Mini Projects

### 🏠 Project 1: Personal Portfolio

<div class="demo-container">

```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio Saya</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; }
        .container { max-width: 1000px; margin: 0 auto; padding: 20px; }
        .hero { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-align: center; padding: 80px 20px; }
        .hero h1 { font-size: 3em; margin-bottom: 20px; }
        .hero p { font-size: 1.2em; margin-bottom: 30px; }
        .btn { background: white; color: #667eea; padding: 15px 30px; border: none; border-radius: 25px; font-weight: bold; cursor: pointer; text-decoration: none; display: inline-block; transition: transform 0.3s; }
        .btn:hover { transform: translateY(-3px); }
        .section { padding: 60px 0; }
        .skills { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 30px; margin-top: 40px; }
        .skill-card { background: white; padding: 30px; border-radius: 10px; box-shadow: 0 5px 15px rgba(0,0,0,0.1); text-align: center; }
    </style>
</head>
<body>
    <header class="hero">
        <div class="container">
            <h1>👋 Halo, Saya John Doe</h1>
            <p>Web Developer & UI/UX Designer</p>
            <a href="#about" class="btn">Lihat Portfolio Saya</a>
        </div>
    </header>
    
    <main>
        <section id="about" class="section">
            <div class="container">
                <h2 style="text-align: center; margin-bottom: 40px;">🚀 Tentang Saya</h2>
                <p style="text-align: center; font-size: 1.1em; color: #666; max-width: 600px; margin: 0 auto;">
                    Saya adalah seorang web developer dengan pengalaman 3+ tahun dalam membuat website modern dan responsif. 
                    Passionate dalam menciptakan user experience yang menakjubkan.
                </p>
                
                <div class="skills">
                    <div class="skill-card">
                        <h3>🎨 Frontend</h3>
                        <p>HTML, CSS, JavaScript, React</p>
                    </div>
                    <div class="skill-card">
                        <h3>⚙️ Backend</h3>
                        <p>Node.js, PHP, MySQL</p>
                    </div>
                    <div class="skill-card">
                        <h3>🛠️ Tools</h3>
                        <p>Git, VS Code, Figma</p>
                    </div>
                </div>
            </div>
        </section>
        
        <section class="section" style="background: #f8f9fa;">
            <div class="container">
                <h2 style="text-align: center; margin-bottom: 40px;">📞 Kontak</h2>
                <div style="text-align: center;">
                    <p>📧 john@example.com</p>
                    <p>📱 +62 812 3456 7890</p>
                    <p>🌐 www.johndoe.com</p>
                </div>
            </div>
        </section>
    </main>
</body>
</html>
```
</div>

### 🍕 Project 2: Restaurant Menu

<div class="demo-container">

```html
<div style="max-width: 800px; margin: 0 auto; font-family: Arial, sans-serif;">
    <header style="background: linear-gradient(135deg, #ff6b6b, #ee5a52); color: white; padding: 40px 20px; text-align: center; border-radius: 15px 15px 0 0;">
        <h1>🍕 Pizzeria Deliciosa</h1>
        <p>Authentic Italian Pizza Since 1985</p>
    </header>
    
    <main style="padding: 30px; background: white; border-radius: 0 0 15px 15px; box-shadow: 0 8px 25px rgba(0,0,0,0.1);">
        <section>
            <h2 style="color: #ff6b6b; border-bottom: 2px solid #ff6b6b; padding-bottom: 10px;">🍕 Pizza Specials</h2>
            
            <div style="display: grid; gap: 20px; margin-top: 25px;">
                <div style="display: flex; justify-content: space-between; align-items: center; padding: 15px; border: 1px solid #eee; border-radius: 8px;">
                    <div>
                        <h3 style="margin: 0; color: #333;">Margherita Classic</h3>
                        <p style="margin: 5px 0; color: #666; font-size: 14px;">Fresh tomato, mozzarella, basil leaves</p>
                    </div>
                    <strong style="color: #ff6b6b; font-size: 18px;">$12.99</strong>
                </div>
                
                <div style="display: flex; justify-content: space-between; align-items: center; padding: 15px; border: 1px solid #eee; border-radius: 8px;">
                    <div>
                        <h3 style="margin: 0; color: #333;">Pepperoni Supreme</h3>
                        <p style="margin: 5px 0; color: #666; font-size: 14px;">Pepperoni, cheese, mushrooms, bell peppers</p>
                    </div>
                    <strong style="color: #ff6b6b; font-size: 18px;">$15.99</strong>
                </div>
                
                <div style="display: flex; justify-content: space-between; align-items: center; padding: 15px; border: 1px solid #eee; border-radius: 8px;">
                    <div>
                        <h3 style="margin: 0; color: #333;">Quattro Stagioni</h3>
                        <p style="margin: 5px 0; color: #666; font-size: 14px;">Four seasons with artichokes, ham, mushrooms, olives</p>
                    </div>
                    <strong style="color: #ff6b6b; font-size: 18px;">$18.99</strong>
                </div>
            </div>
        </section>
        
        <section style="margin-top: 40px;">
            <h2 style="color: #ff6b6b; border-bottom: 2px solid #ff6b6b; padding-bottom: 10px;">🥤 Beverages</h2>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin-top: 25px;">
                <div style="text-align: center; padding: 15px; background: #f8f9fa; border-radius: 8px;">
                    <h4 style="margin: 0; color: #333;">Coca Cola</h4>
                    <p style="margin: 10px 0; color: #ff6b6b; font-weight: bold;">$2.99</p>
                </div>
                <div style="text-align: center; padding: 15px; background: #f8f9fa; border-radius: 8px;">
                    <h4 style="margin: 0; color: #333;">Fresh Orange Juice</h4>
                    <p style="margin: 10px 0; color: #ff6b6b; font-weight: bold;">$3.99</p>
                </div>
                <div style="text-align: center; padding: 15px; background: #f8f9fa; border-radius: 8px;">
                    <h4 style="margin: 0; color: #333;">Italian Wine</h4>
                    <p style="margin: 10px 0; color: #ff6b6b; font-weight: bold;">$8.99</p>
                </div>
            </div>
        </section>
        
        <footer style="text-align: center; margin-top: 40px; padding: 20px; background: #f8f9fa; border-radius: 8px;">
            <h3 style="color: #ff6b6b; margin-bottom: 15px;">📍 Visit Us</h3>
            <p style="color: #666; margin: 5px 0;">123 Italian Street, Pizza City</p>
            <p style="color: #666; margin: 5px 0;">📞 (555) 123-PIZZA</p>
            <p style="color: #666; margin: 5px 0;">🕐 Open Daily 11AM - 11PM</p>
        </footer>
    </main>
</div>
```
</div>

## 🎯 Challenge & Latihan

### 📝 Latihan Tingkat Pemula
1. **Personal Card**: Buat kartu profil diri dengan foto, nama, dan bio singkat
2. **Recipe Page**: Buat halaman resep masakan dengan daftar bahan dan langkah-langkah
3. **Simple Blog**: Buat halaman blog sederhana dengan beberapa artikel

### 🚀 Latihan Tingkat Menengah
1. **Company Website**: Buat website perusahaan dengan multiple pages
2. **Event Landing Page**: Buat landing page untuk event dengan form registrasi
3. **News Portal**: Buat portal berita dengan kategori dan artikel

### 🏆 Latihan Tingkat Lanjut
1. **E-commerce Product Page**: Buat halaman produk lengkap dengan gallery
2. **Educational Platform**: Buat platform edukasi dengan course listing
3. **Portfolio Showcase**: Buat portfolio interaktif dengan project gallery

## 🛠️ Tools & Resources

<div class="alert alert-info">
<strong>🔧 Recommended Tools:</strong>
<ul>
<li><strong>VS Code</strong> - Text editor terbaik untuk web development</li>
<li><strong>Live Server Extension</strong> - Preview real-time changes</li>
<li><strong>HTML Validator</strong> - Cek kode HTML valid atau tidak</li>
<li><strong>Browser DevTools</strong> - Inspect dan debug website</li>
</ul>
</div>

<div class="alert alert-success">
<strong>📚 Learning Resources:</strong>
<ul>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank">MDN HTML Documentation</a></li>
<li><a href="https://www.w3schools.com/html/" target="_blank">W3Schools HTML Tutorial</a></li>
<li><a href="https://html5up.net/" target="_blank">HTML5 UP Templates</a></li>
<li><a href="https://validator.w3.org/" target="_blank">W3C HTML Validator</a></li>
</ul>
</div>

## ✅ Best Practices

<div class="alert alert-warning">
<strong>⚡ HTML Best Practices:</strong>
<ul>
<li><strong>Semantic HTML</strong>: Gunakan tag yang sesuai dengan makna konten</li>
<li><strong>Accessibility</strong>: Selalu tambahkan alt text pada gambar</li>
<li><strong>Valid HTML</strong>: Pastikan kode HTML valid dan well-formed</li>
<li><strong>SEO Friendly</strong>: Gunakan heading hierarchy (H1→H2→H3)</li>
<li><strong>Mobile First</strong>: Selalu pertimbangkan tampilan mobile</li>
</ul>
</div>

## 🏁 Kesimpulan

Selamat! 🎉 Anda telah mempelajari HTML dari dasar hingga level intermediate. Sekarang Anda bisa:

✅ **Memahami struktur HTML** dan cara kerja browser  
✅ **Menggunakan tag HTML** untuk berbagai jenis konten  
✅ **Membuat form interaktif** dengan berbagai input types  
✅ **Menggunakan semantic HTML** untuk SEO dan accessibility  
✅ **Membangun website responsif** dengan structure yang baik  
✅ **Menerapkan best practices** dalam pengembangan web  

**Next Steps:** Lanjutkan dengan mempelajari CSS untuk styling dan JavaScript untuk interaktivitas!

<div style="text-align: center; margin: 30px 0;">
<button class="btn btn-primary" onclick="window.open('https://github.com/hamadazein/tutorial', '_blank')">
🌟 Star Repository Ini
</button>
<button class="btn btn-success" onclick="alert('Selamat! Anda telah menyelesaikan materi HTML! 🏆')">
🏆 Complete HTML Course
</button>
</div>

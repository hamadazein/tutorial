# 🎨 CSS - Seni Mendesain Website

CSS (Cascading Style Sheets) adalah bahasa styling yang membuat website Anda tampil menakjubkan! Mari belajar dari dasar hingga teknik modern yang digunakan oleh profesional.

## 📚 Daftar Materi Komprehensif

<!-- tabs:start -->

#### ** 🚀 Pengenalan CSS **

### Apa itu CSS?

CSS adalah bahasa stylesheet yang mengontrol tampilan visual website. Jika HTML adalah tulang, maka CSS adalah kulit dan pakaian yang membuatnya tampak menarik!

?> **Did You Know?** CSS pertama kali diperkenalkan pada tahun 1996 dan terus berkembang hingga CSS3 yang kita gunakan sekarang.

### Mengapa CSS Penting?

- 🎨 **Visual Appeal**: Membuat website terlihat profesional
- 📱 **Responsiveness**: Adaptasi dengan berbagai device
- ⚡ **Performance**: Memisahkan style dari struktur
- 🔧 **Maintainability**: Mudah diupdate dan dikelola

### 3 Cara Menambahkan CSS

<div class="demo-container">

```html
<!DOCTYPE html>
<html>
<head>
    <!-- 1. Internal CSS -->
    <style>
        .internal-style {
            background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
            padding: 20px;
            color: white;
            text-align: center;
            border-radius: 10px;
            margin: 10px 0;
        }
    </style>
    
    <!-- 2. External CSS -->
    <!-- <link rel="stylesheet" href="styles.css"> -->
</head>
<body>
    <!-- 3. Inline CSS -->
    <div style="background: #3498db; color: white; padding: 15px; text-align: center; border-radius: 8px; margin: 10px 0;">
        ✨ Inline CSS - Langsung di element
    </div>
    
    <div class="internal-style">
        🎨 Internal CSS - Di dalam tag &lt;style&gt;
    </div>
    
    <div style="background: #e74c3c; color: white; padding: 15px; text-align: center; border-radius: 8px; margin: 10px 0;">
        📄 External CSS - File .css terpisah (Recommended!)
    </div>
</body>
</html>
```
</div>

#### ** 🎯 CSS Selectors **

### Jenis-jenis Selector

CSS selector adalah cara kita memilih element HTML untuk diberi style:

<div class="demo-container">

```html
<style>
/* 1. Element Selector */
h1 { color: #2c3e50; }

/* 2. Class Selector */
.highlight { background: yellow; padding: 5px; }

/* 3. ID Selector */
#special { font-size: 24px; color: #e74c3c; }

/* 4. Attribute Selector */
[data-theme="dark"] { background: #2c3e50; color: white; }

/* 5. Pseudo-class */
.button:hover { transform: scale(1.1); background: #27ae60; }

/* 6. Child Selector */
.container > .item { border-left: 4px solid #3498db; }

/* 7. Descendant Selector */
.card p { color: #666; }

/* 8. Universal Selector */
* { box-sizing: border-box; }
</style>

<div style="font-family: Arial, sans-serif; padding: 20px; background: #f8f9fa; border-radius: 10px;">
    <h1>🎯 CSS Selector Demo</h1>
    
    <p class="highlight">Text dengan class "highlight"</p>
    
    <p id="special">Text dengan ID "special"</p>
    
    <div data-theme="dark" style="padding: 15px; border-radius: 5px; margin: 10px 0;">
        Text dengan attribute selector
    </div>
    
    <button class="button" style="background: #3498db; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; transition: all 0.3s;"
            onmouseover="this.style.transform='scale(1.1)'; this.style.background='#27ae60'"
            onmouseout="this.style.transform='scale(1)'; this.style.background='#3498db'">
        Hover me! 🖱️
    </button>
    
    <div class="container" style="margin-top: 20px;">
        <div class="item" style="padding: 10px; margin: 5px 0; background: white; border-radius: 5px;">
            Direct child item
        </div>
    </div>
    
    <div class="card" style="background: white; padding: 20px; border-radius: 8px; margin-top: 15px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
        <h3 style="margin-top: 0; color: #2c3e50;">Card Title</h3>
        <p>Paragraph inside card (descendant selector demo)</p>
    </div>
</div>
```
</div>

### Prioritas CSS (Specificity)

| Selector Type | Specificity Score | Contoh |
|---------------|-------------------|--------|
| Inline styles | 1000 | `style="color: red"` |
| IDs | 100 | `#header` |
| Classes, attributes, pseudo-classes | 10 | `.nav`, `[type="text"]`, `:hover` |
| Elements | 1 | `h1`, `div`, `p` |

#### ** 📦 Box Model **

### Memahami CSS Box Model

Setiap element HTML adalah sebuah "box" yang terdiri dari:

<div class="demo-container">

```html
<style>
.box-demo {
    width: 200px;
    height: 100px;
    padding: 20px;
    border: 5px solid #3498db;
    margin: 30px auto;
    background: linear-gradient(135deg, #74b9ff, #0984e3);
    color: white;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    font-weight: bold;
}

.box-info {
    position: absolute;
    font-size: 10px;
    background: rgba(0,0,0,0.8);
    color: white;
    padding: 2px 6px;
    border-radius: 3px;
}

.margin-info { top: -15px; left: 50%; transform: translateX(-50%); }
.border-info { top: 5px; right: 5px; }
.padding-info { bottom: 5px; left: 5px; }
.content-info { top: 50%; left: 50%; transform: translate(-50%, -50%); }
</style>

<div style="background: #f8f9fa; padding: 40px; text-align: center; border-radius: 10px;">
    <h3>📦 Interactive Box Model</h3>
    
    <div class="box-demo">
        <span class="box-info margin-info">Margin: 30px</span>
        <span class="box-info border-info">Border: 5px</span>
        <span class="box-info padding-info">Padding: 20px</span>
        <span class="box-info content-info">Content Area</span>
        CONTENT
    </div>
    
    <div style="background: white; padding: 20px; border-radius: 8px; margin-top: 20px; display: inline-block; text-align: left;">
        <h4 style="margin-top: 0;">📏 Calculation:</h4>
        <p><strong>Total Width:</strong> width + padding-left + padding-right + border-left + border-right</p>
        <p><strong>Total Height:</strong> height + padding-top + padding-bottom + border-top + border-bottom</p>
        <p><strong>Example:</strong> 200px + 20px + 20px + 5px + 5px = <strong>250px</strong></p>
    </div>
</div>

<!-- Interactive Box Model Adjuster -->
<div style="background: white; padding: 25px; border-radius: 10px; margin-top: 20px;">
    <h4>🎛️ Box Model Controller</h4>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px; margin: 20px 0;">
        <div>
            <label>Width:</label><br>
            <input type="range" min="50" max="300" value="200" oninput="updateBox()" id="widthSlider">
            <span id="widthValue">200px</span>
        </div>
        <div>
            <label>Padding:</label><br>
            <input type="range" min="0" max="50" value="20" oninput="updateBox()" id="paddingSlider">
            <span id="paddingValue">20px</span>
        </div>
        <div>
            <label>Border:</label><br>
            <input type="range" min="0" max="20" value="5" oninput="updateBox()" id="borderSlider">
            <span id="borderValue">5px</span>
        </div>
        <div>
            <label>Margin:</label><br>
            <input type="range" min="0" max="50" value="30" oninput="updateBox()" id="marginSlider">
            <span id="marginValue">30px</span>
        </div>
    </div>
    
    <div id="adjustableBox" style="width: 200px; height: 100px; padding: 20px; border: 5px solid #e74c3c; margin: 30px auto; background: linear-gradient(135deg, #fd79a8, #e84393); color: white; text-align: center; display: flex; align-items: center; justify-content: center; font-weight: bold; transition: all 0.3s;">
        Adjustable Box
    </div>
    
    <div id="boxCalculation" style="background: #f8f9fa; padding: 15px; border-radius: 5px; text-align: center;">
        Total Width: <strong>250px</strong> | Total Height: <strong>150px</strong>
    </div>
</div>

<script>
function updateBox() {
    const width = document.getElementById('widthSlider').value;
    const padding = document.getElementById('paddingSlider').value;
    const border = document.getElementById('borderSlider').value;
    const margin = document.getElementById('marginSlider').value;
    
    const box = document.getElementById('adjustableBox');
    box.style.width = width + 'px';
    box.style.padding = padding + 'px';
    box.style.borderWidth = border + 'px';
    box.style.margin = margin + 'px auto';
    
    document.getElementById('widthValue').textContent = width + 'px';
    document.getElementById('paddingValue').textContent = padding + 'px';
    document.getElementById('borderValue').textContent = border + 'px';
    document.getElementById('marginValue').textContent = margin + 'px';
    
    const totalWidth = parseInt(width) + (parseInt(padding) * 2) + (parseInt(border) * 2);
    const totalHeight = 100 + (parseInt(padding) * 2) + (parseInt(border) * 2);
    
    document.getElementById('boxCalculation').innerHTML = 
        `Total Width: <strong>${totalWidth}px</strong> | Total Height: <strong>${totalHeight}px</strong>`;
}
</script>
```
</div>

#### ** 🎨 Colors & Backgrounds **

### Sistem Warna CSS

<div class="demo-container">

```html
<style>
.color-demo {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin: 20px 0;
}

.color-box {
    padding: 20px;
    text-align: center;
    color: white;
    font-weight: bold;
    border-radius: 10px;
    min-height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
</style>

<div class="color-demo">
    <!-- Named Colors -->
    <div class="color-box" style="background: crimson;">
        <div>Named Color</div>
        <small>crimson</small>
    </div>
    
    <!-- Hex Colors -->
    <div class="color-box" style="background: #3498db;">
        <div>Hex Color</div>
        <small>#3498db</small>
    </div>
    
    <!-- RGB Colors -->
    <div class="color-box" style="background: rgb(46, 204, 113);">
        <div>RGB Color</div>
        <small>rgb(46, 204, 113)</small>
    </div>
    
    <!-- RGBA Colors -->
    <div class="color-box" style="background: rgba(230, 126, 34, 0.8); backdrop-filter: blur(5px);">
        <div>RGBA Color</div>
        <small>rgba(230, 126, 34, 0.8)</small>
    </div>
    
    <!-- HSL Colors -->
    <div class="color-box" style="background: hsl(291, 64%, 42%);">
        <div>HSL Color</div>
        <small>hsl(291, 64%, 42%)</small>
    </div>
    
    <!-- Gradient -->
    <div class="color-box" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
        <div>Gradient</div>
        <small>linear-gradient</small>
    </div>
</div>

<!-- Interactive Color Picker -->
<div style="background: white; padding: 25px; border-radius: 10px; margin-top: 30px;">
    <h4>🎨 Interactive Color Mixer</h4>
    <div style="display: flex; flex-wrap: wrap; gap: 20px; align-items: center; margin-bottom: 20px;">
        <div>
            <label>Red (0-255):</label><br>
            <input type="range" min="0" max="255" value="52" oninput="mixColor()" id="redSlider">
            <span id="redValue">52</span>
        </div>
        <div>
            <label>Green (0-255):</label><br>
            <input type="range" min="0" max="255" value="152" oninput="mixColor()" id="greenSlider">
            <span id="greenValue">152</span>
        </div>
        <div>
            <label>Blue (0-255):</label><br>
            <input type="range" min="0" max="255" value="219" oninput="mixColor()" id="blueSlider">
            <span id="blueValue">219</span>
        </div>
    </div>
    
    <div id="colorResult" style="height: 100px; background: rgb(52, 152, 219); border-radius: 10px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; transition: all 0.3s;">
        <div>
            <div>Your Color</div>
            <div id="colorCode" style="font-size: 12px; opacity: 0.9;">rgb(52, 152, 219)</div>
        </div>
    </div>
</div>

<script>
function mixColor() {
    const red = document.getElementById('redSlider').value;
    const green = document.getElementById('greenSlider').value;
    const blue = document.getElementById('blueSlider').value;
    
    const rgbColor = `rgb(${red}, ${green}, ${blue})`;
    
    document.getElementById('redValue').textContent = red;
    document.getElementById('greenValue').textContent = green;
    document.getElementById('blueValue').textContent = blue;
    
    document.getElementById('colorResult').style.background = rgbColor;
    document.getElementById('colorCode').textContent = rgbColor;
    
    // Calculate contrast for text color
    const brightness = (parseInt(red) * 299 + parseInt(green) * 587 + parseInt(blue) * 114) / 1000;
    document.getElementById('colorResult').style.color = brightness > 155 ? 'black' : 'white';
}
</script>
```
</div>

#### ** 📝 Typography **

### Font & Text Styling

<div class="demo-container">

```html
<style>
.typography-demo {
    background: white;
    padding: 30px;
    border-radius: 15px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    box-shadow: 0 8px 25px rgba(0,0,0,0.1);
}

.font-showcase {
    display: grid;
    gap: 20px;
    margin: 25px 0;
}

.font-example {
    padding: 15px;
    border: 1px solid #eee;
    border-radius: 8px;
    background: #fafafa;
}
</style>

<div class="typography-demo">
    <h2 style="color: #2c3e50; margin-top: 0;">✍️ Typography Playground</h2>
    
    <div class="font-showcase">
        <div class="font-example" style="font-family: 'Times New Roman', serif;">
            <strong>Serif Font</strong><br>
            The quick brown fox jumps over the lazy dog. (Times New Roman)
        </div>
        
        <div class="font-example" style="font-family: Arial, sans-serif;">
            <strong>Sans-Serif Font</strong><br>
            The quick brown fox jumps over the lazy dog. (Arial)
        </div>
        
        <div class="font-example" style="font-family: 'Courier New', monospace;">
            <strong>Monospace Font</strong><br>
            The quick brown fox jumps over the lazy dog. (Courier New)
        </div>
        
        <div class="font-example" style="font-family: cursive;">
            <strong>Cursive Font</strong><br>
            The quick brown fox jumps over the lazy dog. (Cursive)
        </div>
    </div>
    
    <!-- Text Effects -->
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-top: 30px;">
        <div style="text-align: center;">
            <h4 style="color: #e74c3c;">🔤 Text Transform</h4>
            <p style="text-transform: uppercase;">uppercase text</p>
            <p style="text-transform: lowercase;">LOWERCASE TEXT</p>
            <p style="text-transform: capitalize;">capitalize each word</p>
        </div>
        
        <div style="text-align: center;">
            <h4 style="color: #27ae60;">🎯 Text Align</h4>
            <p style="text-align: left; background: #f8f9fa; padding: 10px;">Left aligned text</p>
            <p style="text-align: center; background: #f8f9fa; padding: 10px;">Center aligned text</p>
            <p style="text-align: right; background: #f8f9fa; padding: 10px;">Right aligned text</p>
        </div>
        
        <div style="text-align: center;">
            <h4 style="color: #8e44ad;">✨ Text Decoration</h4>
            <p style="text-decoration: underline;">Underlined text</p>
            <p style="text-decoration: line-through;">Strike through text</p>
            <p style="text-decoration: overline;">Overlined text</p>
        </div>
    </div>
    
    <!-- Interactive Font Size -->
    <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; margin-top: 25px;">
        <h4>📏 Font Size Controller</h4>
        <label for="fontSizeSlider">Font Size:</label>
        <input type="range" id="fontSizeSlider" min="12" max="48" value="16" oninput="changeFontSize()" style="margin: 0 10px;">
        <span id="fontSizeDisplay">16px</span>
        
        <p id="sampleText" style="font-size: 16px; margin-top: 15px; padding: 15px; background: white; border-radius: 5px; transition: font-size 0.3s;">
            This is a sample text to demonstrate font size changes. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
    </div>
</div>

<script>
function changeFontSize() {
    const size = document.getElementById('fontSizeSlider').value;
    document.getElementById('sampleText').style.fontSize = size + 'px';
    document.getElementById('fontSizeDisplay').textContent = size + 'px';
}
</script>
```
</div>

#### ** 📐 Layout Systems **

### CSS Layout Methods

<div class="demo-container">

```html
<style>
.layout-demo {
    margin: 20px 0;
}

.flex-container {
    display: flex;
    gap: 10px;
    background: #3498db;
    padding: 15px;
    border-radius: 8px;
    margin: 15px 0;
}

.flex-item {
    background: white;
    padding: 15px;
    border-radius: 5px;
    text-align: center;
    color: #333;
    flex: 1;
}

.grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 15px;
    background: #e74c3c;
    padding: 15px;
    border-radius: 8px;
    margin: 15px 0;
}

.grid-item {
    background: white;
    padding: 15px;
    border-radius: 5px;
    text-align: center;
    color: #333;
}
</style>

<div class="layout-demo">
    <h3 style="color: #2c3e50;">📐 Layout Methods Comparison</h3>
    
    <!-- Flexbox Demo -->
    <h4 style="color: #3498db;">🔗 Flexbox Layout</h4>
    <div class="flex-container">
        <div class="flex-item">Item 1</div>
        <div class="flex-item">Item 2</div>
        <div class="flex-item">Item 3</div>
    </div>
    
    <div style="background: #ecf0f1; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
        <strong>Flexbox:</strong> Ideal untuk 1-dimensional layouts (row or column)
        <br><code>display: flex;</code>
    </div>
    
    <!-- Grid Demo -->
    <h4 style="color: #e74c3c;">🎯 CSS Grid Layout</h4>
    <div class="grid-container">
        <div class="grid-item">A</div>
        <div class="grid-item">B</div>
        <div class="grid-item">C</div>
        <div class="grid-item">D</div>
        <div class="grid-item">E</div>
        <div class="grid-item">F</div>
    </div>
    
    <div style="background: #ecf0f1; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
        <strong>CSS Grid:</strong> Perfect untuk 2-dimensional layouts (rows and columns)
        <br><code>display: grid;</code>
    </div>
    
    <!-- Interactive Flexbox Playground -->
    <div style="background: white; padding: 25px; border-radius: 10px; border: 2px solid #3498db;">
        <h4>🎮 Interactive Flexbox Playground</h4>
        
        <div style="margin-bottom: 15px;">
            <label>Justify Content:</label>
            <select onchange="updateFlex()" id="justifySelect" style="margin-left: 10px; padding: 5px;">
                <option value="flex-start">flex-start</option>
                <option value="center">center</option>
                <option value="flex-end">flex-end</option>
                <option value="space-between">space-between</option>
                <option value="space-around">space-around</option>
                <option value="space-evenly">space-evenly</option>
            </select>
            
            <label style="margin-left: 20px;">Align Items:</label>
            <select onchange="updateFlex()" id="alignSelect" style="margin-left: 10px; padding: 5px;">
                <option value="stretch">stretch</option>
                <option value="flex-start">flex-start</option>
                <option value="center">center</option>
                <option value="flex-end">flex-end</option>
            </select>
            
            <label style="margin-left: 20px;">Direction:</label>
            <select onchange="updateFlex()" id="directionSelect" style="margin-left: 10px; padding: 5px;">
                <option value="row">row</option>
                <option value="column">column</option>
                <option value="row-reverse">row-reverse</option>
                <option value="column-reverse">column-reverse</option>
            </select>
        </div>
        
        <div id="flexDemo" style="display: flex; justify-content: flex-start; align-items: stretch; flex-direction: row; height: 120px; background: linear-gradient(135deg, #74b9ff, #0984e3); padding: 15px; border-radius: 8px; gap: 10px;">
            <div style="background: white; padding: 15px; border-radius: 5px; color: #333; display: flex; align-items: center; justify-content: center; min-width: 80px;">Box 1</div>
            <div style="background: white; padding: 15px; border-radius: 5px; color: #333; display: flex; align-items: center; justify-content: center; min-width: 80px;">Box 2</div>
            <div style="background: white; padding: 15px; border-radius: 5px; color: #333; display: flex; align-items: center; justify-content: center; min-width: 80px;">Box 3</div>
        </div>
        
        <div style="background: #f8f9fa; padding: 10px; border-radius: 5px; margin-top: 10px; font-family: monospace; font-size: 12px;">
            <div id="flexCode">display: flex; justify-content: flex-start; align-items: stretch; flex-direction: row;</div>
        </div>
    </div>
</div>

<script>
function updateFlex() {
    const justify = document.getElementById('justifySelect').value;
    const align = document.getElementById('alignSelect').value;
    const direction = document.getElementById('directionSelect').value;
    
    const flexDemo = document.getElementById('flexDemo');
    flexDemo.style.justifyContent = justify;
    flexDemo.style.alignItems = align;
    flexDemo.style.flexDirection = direction;
    
    document.getElementById('flexCode').textContent = 
        `display: flex; justify-content: ${justify}; align-items: ${align}; flex-direction: ${direction};`;
}
</script>
```
</div>

#### ** 🎭 Animations & Transitions **

### CSS Animations & Effects

<div class="demo-container">

```html
<style>
@keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
}

@keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

@keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
}

@keyframes slideIn {
    from { transform: translateX(-100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
}

.animation-gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin: 25px 0;
}

.animation-item {
    background: white;
    padding: 30px;
    border-radius: 15px;
    text-align: center;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    cursor: pointer;
    transition: all 0.3s ease;
}

.animation-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.15);
}

.bounce-demo { animation: bounce 2s infinite; }
.rotate-demo { animation: rotate 3s linear infinite; }
.pulse-demo { animation: pulse 1.5s infinite; }
.slide-demo { animation: slideIn 1s ease-out; }
</style>

<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px; border-radius: 20px; color: white;">
    <h3 style="text-align: center; margin: 0 0 30px 0;">🎭 CSS Animation Showcase</h3>
    
    <div class="animation-gallery">
        <div class="animation-item">
            <div class="bounce-demo" style="font-size: 2em; margin-bottom: 15px;">🏀</div>
            <h4 style="margin: 0; color: #333;">Bounce</h4>
            <p style="margin: 10px 0 0 0; color: #666; font-size: 14px;">@keyframes bounce</p>
        </div>
        
        <div class="animation-item">
            <div class="rotate-demo" style="font-size: 2em; margin-bottom: 15px;">⚙️</div>
            <h4 style="margin: 0; color: #333;">Rotate</h4>
            <p style="margin: 10px 0 0 0; color: #666; font-size: 14px;">@keyframes rotate</p>
        </div>
        
        <div class="animation-item">
            <div class="pulse-demo" style="font-size: 2em; margin-bottom: 15px;">💓</div>
            <h4 style="margin: 0; color: #333;">Pulse</h4>
            <p style="margin: 10px 0 0 0; color: #666; font-size: 14px;">@keyframes pulse</p>
        </div>
        
        <div class="animation-item">
            <div class="slide-demo" style="font-size: 2em; margin-bottom: 15px;">🚗</div>
            <h4 style="margin: 0; color: #333;">Slide In</h4>
            <p style="margin: 10px 0 0 0; color: #666; font-size: 14px;">@keyframes slideIn</p>
        </div>
    </div>
    
    <!-- Interactive Hover Effects -->
    <div style="background: rgba(255,255,255,0.1); padding: 25px; border-radius: 15px; margin-top: 30px;">
        <h4 style="text-align: center; margin: 0 0 20px 0;">🖱️ Hover Effects Demo</h4>
        
        <div style="display: flex; flex-wrap: wrap; gap: 15px; justify-content: center;">
            <button style="background: #ff6b6b; color: white; border: none; padding: 12px 24px; border-radius: 25px; cursor: pointer; transition: all 0.3s;"
                    onmouseover="this.style.transform='scale(1.1)'; this.style.boxShadow='0 5px 15px rgba(0,0,0,0.3)'"
                    onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='none'">
                Scale Effect
            </button>
            
            <button style="background: #4ecdc4; color: white; border: none; padding: 12px 24px; border-radius: 25px; cursor: pointer; transition: all 0.3s;"
                    onmouseover="this.style.transform='rotateY(180deg)'"
                    onmouseout="this.style.transform='rotateY(0deg)'">
                Flip Effect
            </button>
            
            <button style="background: #45b7d1; color: white; border: none; padding: 12px 24px; border-radius: 25px; cursor: pointer; transition: all 0.3s; position: relative; overflow: hidden;"
                    onmouseover="this.style.transform='translateY(-3px)'; this.style.background='#3498db'"
                    onmouseout="this.style.transform='translateY(0)'; this.style.background='#45b7d1'">
                Lift Effect
            </button>
        </div>
    </div>
    
    <!-- CSS Animation Code Generator -->
    <div style="background: white; color: #333; padding: 25px; border-radius: 15px; margin-top: 30px;">
        <h4 style="margin: 0 0 20px 0; color: #2c3e50;">⚙️ Animation Builder</h4>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px; margin-bottom: 20px;">
            <div>
                <label>Duration (s):</label><br>
                <input type="range" min="0.5" max="5" step="0.5" value="2" oninput="updateAnimation()" id="durationSlider">
                <span id="durationValue">2s</span>
            </div>
            <div>
                <label>Animation:</label><br>
                <select onchange="updateAnimation()" id="animationSelect">
                    <option value="bounce">Bounce</option>
                    <option value="rotate">Rotate</option>
                    <option value="pulse">Pulse</option>
                    <option value="slideIn">Slide In</option>
                </select>
            </div>
            <div>
                <label>Iteration:</label><br>
                <select onchange="updateAnimation()" id="iterationSelect">
                    <option value="infinite">Infinite</option>
                    <option value="1">Once</option>
                    <option value="3">3 times</option>
                </select>
            </div>
        </div>
        
        <div id="animatedElement" style="width: 80px; height: 80px; background: linear-gradient(135deg, #ff6b6b, #ee5a52); border-radius: 50%; margin: 0 auto 20px; animation: bounce 2s infinite; display: flex; align-items: center; justify-content: center; font-size: 24px;">
            🎯
        </div>
        
        <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; font-family: monospace; font-size: 12px; word-break: break-all;">
            <strong>Generated CSS:</strong><br>
            <span id="animationCode">animation: bounce 2s infinite;</span>
        </div>
    </div>
</div>

<script>
function updateAnimation() {
    const duration = document.getElementById('durationSlider').value;
    const animation = document.getElementById('animationSelect').value;
    const iteration = document.getElementById('iterationSelect').value;
    
    const element = document.getElementById('animatedElement');
    const animationRule = `${animation} ${duration}s ${iteration}`;
    
    element.style.animation = 'none';
    setTimeout(() => {
        element.style.animation = animationRule;
    }, 10);
    
    document.getElementById('durationValue').textContent = duration + 's';
    document.getElementById('animationCode').textContent = `animation: ${animationRule};`;
}
</script>
```
</div>

#### ** 📱 Responsive Design **

### Media Queries & Breakpoints

<div class="demo-container">

```html
<style>
.responsive-demo {
    background: white;
    border-radius: 15px;
    padding: 30px;
    margin: 20px 0;
}

.breakpoint-indicator {
    padding: 20px;
    text-align: center;
    font-weight: bold;
    border-radius: 10px;
    transition: all 0.3s;
    margin: 15px 0;
}

/* Mobile First Approach */
.breakpoint-indicator {
    background: #e74c3c;
    color: white;
}

.breakpoint-indicator::before {
    content: "📱 Mobile (< 768px)";
}

/* Tablet */
@media screen and (min-width: 768px) {
    .breakpoint-indicator {
        background: #f39c12;
    }
    .breakpoint-indicator::before {
        content: "📟 Tablet (768px - 1024px)";
    }
}

/* Desktop */
@media screen and (min-width: 1024px) {
    .breakpoint-indicator {
        background: #27ae60;
    }
    .breakpoint-indicator::before {
        content: "💻 Desktop (1024px - 1200px)";
    }
}

/* Large Desktop */
@media screen and (min-width: 1200px) {
    .breakpoint-indicator {
        background: #8e44ad;
    }
    .breakpoint-indicator::before {
        content: "🖥️ Large Desktop (> 1200px)";
    }
}

.responsive-grid {
    display: grid;
    gap: 15px;
    margin: 20px 0;
}

/* Mobile: 1 column */
.responsive-grid {
    grid-template-columns: 1fr;
}

/* Tablet: 2 columns */
@media screen and (min-width: 768px) {
    .responsive-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* Desktop: 3 columns */
@media screen and (min-width: 1024px) {
    .responsive-grid {
        grid-template-columns: repeat(3, 1fr);
    }
}

/* Large Desktop: 4 columns */
@media screen and (min-width: 1200px) {
    .responsive-grid {
        grid-template-columns: repeat(4, 1fr);
    }
}

.grid-item {
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    font-weight: bold;
}
</style>

<div class="responsive-demo">
    <h3 style="color: #2c3e50; margin: 0 0 25px 0;">📱 Responsive Design Demo</h3>
    
    <div class="breakpoint-indicator"></div>
    
    <p style="background: #f8f9fa; padding: 15px; border-radius: 8px; color: #666; text-align: center;">
        🔧 <strong>Resize your browser window</strong> to see the responsive changes!
    </p>
    
    <h4 style="color: #34495e; margin: 25px 0 15px 0;">Responsive Grid Layout</h4>
    <div class="responsive-grid">
        <div class="grid-item">Item 1</div>
        <div class="grid-item">Item 2</div>
        <div class="grid-item">Item 3</div>
        <div class="grid-item">Item 4</div>
        <div class="grid-item">Item 5</div>
        <div class="grid-item">Item 6</div>
    </div>
    
    <!-- Responsive Table -->
    <h4 style="color: #34495e; margin: 25px 0 15px 0;">📊 Common Breakpoints</h4>
    <div style="overflow-x: auto;">
        <table style="width: 100%; border-collapse: collapse; min-width: 500px;">
            <thead>
                <tr style="background: #3498db; color: white;">
                    <th style="padding: 12px; text-align: left; border: 1px solid #2980b9;">Device</th>
                    <th style="padding: 12px; text-align: center; border: 1px solid #2980b9;">Breakpoint</th>
                    <th style="padding: 12px; text-align: center; border: 1px solid #2980b9;">Grid Columns</th>
                </tr>
            </thead>
            <tbody>
                <tr style="background: #ecf0f1;">
                    <td style="padding: 10px; border: 1px solid #bdc3c7;">📱 Mobile</td>
                    <td style="padding: 10px; border: 1px solid #bdc3c7; text-align: center;">< 768px</td>
                    <td style="padding: 10px; border: 1px solid #bdc3c7; text-align: center;">1 column</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid #bdc3c7;">📟 Tablet</td>
                    <td style="padding: 10px; border: 1px solid #bdc3c7; text-align: center;">768px - 1024px</td>
                    <td style="padding: 10px; border: 1px solid #bdc3c7; text-align: center;">2 columns</td>
                </tr>
                <tr style="background: #ecf0f1;">
                    <td style="padding: 10px; border: 1px solid #bdc3c7;">💻 Desktop</td>
                    <td style="padding: 10px; border: 1px solid #bdc3c7; text-align: center;">1024px - 1200px</td>
                    <td style="padding: 10px; border: 1px solid #bdc3c7; text-align: center;">3 columns</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid #bdc3c7;">🖥️ Large Desktop</td>
                    <td style="padding: 10px; border: 1px solid #bdc3c7; text-align: center;">> 1200px</td>
                    <td style="padding: 10px; border: 1px solid #bdc3c7; text-align: center;">4 columns</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
```
</div>

<!-- tabs:end -->

## 🎮 Advanced Projects

### 🌟 Project 1: Modern Card Design

<div class="demo-container">

```html
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; padding: 20px;">
    <!-- Glassmorphism Card -->
    <div style="background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05)); backdrop-filter: blur(10px); border-radius: 20px; padding: 30px; border: 1px solid rgba(255,255,255,0.18); color: white; position: relative; overflow: hidden;">
        <div style="position: absolute; top: -50%; right: -50%; width: 200px; height: 200px; background: linear-gradient(45deg, #ff6b6b, transparent); border-radius: 50%; opacity: 0.3;"></div>
        <h3 style="margin: 0 0 15px 0; position: relative; z-index: 2;">✨ Glassmorphism Card</h3>
        <p style="margin: 0 0 20px 0; opacity: 0.9; position: relative; z-index: 2;">Modern glass effect with backdrop filter</p>
        <button style="background: rgba(255,255,255,0.2); border: 1px solid rgba(255,255,255,0.3); color: white; padding: 10px 20px; border-radius: 25px; cursor: pointer; transition: all 0.3s; position: relative; z-index: 2;"
                onmouseover="this.style.background='rgba(255,255,255,0.3)'"
                onmouseout="this.style.background='rgba(255,255,255,0.2)'">
            Learn More
        </button>
    </div>
    
    <!-- Neumorphism Card -->
    <div style="background: #e0e5ec; border-radius: 20px; padding: 30px; box-shadow: 9px 9px 16px #a3b1c6, -9px -9px 16px #ffffff; transition: all 0.3s; cursor: pointer;"
         onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='12px 12px 20px #a3b1c6, -12px -12px 20px #ffffff'"
         onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='9px 9px 16px #a3b1c6, -9px -9px 16px #ffffff'">
        <h3 style="margin: 0 0 15px 0; color: #333;">🎯 Neumorphism Card</h3>
        <p style="margin: 0 0 20px 0; color: #666;">Soft UI design with inset shadows</p>
        <button style="background: #e0e5ec; border: none; padding: 12px 24px; border-radius: 25px; cursor: pointer; box-shadow: 4px 4px 8px #a3b1c6, -4px -4px 8px #ffffff; color: #333; font-weight: bold; transition: all 0.2s;"
                onmousedown="this.style.boxShadow='inset 4px 4px 8px #a3b1c6, inset -4px -4px 8px #ffffff'"
                onmouseup="this.style.boxShadow='4px 4px 8px #a3b1c6, -4px -4px 8px #ffffff'"
                onmouseleave="this.style.boxShadow='4px 4px 8px #a3b1c6, -4px -4px 8px #ffffff'">
            Click Me
        </button>
    </div>
    
    <!-- Gradient Card -->
    <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 20px; padding: 30px; color: white; position: relative; overflow: hidden; transform: perspective(1000px) rotateX(0deg); transition: all 0.3s;"
         onmouseover="this.style.transform='perspective(1000px) rotateX(5deg) translateY(-10px)'"
         onmouseout="this.style.transform='perspective(1000px) rotateX(0deg) translateY(0)'">
        <div style="position: absolute; top: -50px; right: -50px; width: 100px; height: 100px; background: rgba(255,255,255,0.1); border-radius: 50%; animation: pulse 2s infinite;"></div>
        <h3 style="margin: 0 0 15px 0; position: relative; z-index: 2;">🚀 3D Hover Card</h3>
        <p style="margin: 0 0 20px 0; opacity: 0.9; position: relative; z-index: 2;">Interactive card with 3D transformation</p>
        <div style="display: flex; gap: 10px; position: relative; z-index: 2;">
            <div style="width: 12px; height: 12px; background: #ff6b6b; border-radius: 50%;"></div>
            <div style="width: 12px; height: 12px; background: #4ecdc4; border-radius: 50%;"></div>
            <div style="width: 12px; height: 12px; background: #45b7d1; border-radius: 50%;"></div>
        </div>
    </div>
</div>
```
</div>

### 🎪 Project 2: Interactive Navigation Menu

<div class="demo-container">

```html
<style>
.modern-nav {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    padding: 15px 30px;
    border-radius: 50px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px auto;
    max-width: 800px;
}

.nav-logo {
    font-size: 24px;
    font-weight: bold;
    background: linear-gradient(135deg, #667eea, #764ba2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.nav-menu {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 30px;
}

.nav-item {
    position: relative;
}

.nav-link {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    padding: 10px 15px;
    border-radius: 25px;
    transition: all 0.3s;
    position: relative;
    overflow: hidden;
}

.nav-link:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #667eea, #764ba2);
    transition: left 0.3s;
    z-index: -1;
    border-radius: 25px;
}

.nav-link:hover {
    color: white;
    transform: translateY(-2px);
}

.nav-link:hover:before {
    left: 0;
}

.hamburger {
    display: none;
    flex-direction: column;
    cursor: pointer;
    gap: 4px;
}

.hamburger span {
    width: 25px;
    height: 3px;
    background: #333;
    border-radius: 2px;
    transition: all 0.3s;
}

@media (max-width: 768px) {
    .nav-menu {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(10px);
        flex-direction: column;
        padding: 20px;
        border-radius: 20px;
        margin-top: 10px;
        transform: translateY(-20px);
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s;
    }
    
    .nav-menu.active {
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
    }
    
    .hamburger {
        display: flex;
    }
    
    .hamburger.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }
    
    .hamburger.active span:nth-child(2) {
        opacity: 0;
    }
    
    .hamburger.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
    }
}
</style>

<nav class="modern-nav">
    <div class="nav-logo">🚀 WebDev</div>
    
    <ul class="nav-menu" id="navMenu">
        <li class="nav-item"><a href="#" class="nav-link">Home</a></li>
        <li class="nav-item"><a href="#" class="nav-link">About</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Services</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Portfolio</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Contact</a></li>
    </ul>
    
    <div class="hamburger" id="hamburger" onclick="toggleMenu()">
        <span></span>
        <span></span>
        <span></span>
    </div>
</nav>

<script>
function toggleMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

// Close menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('hamburger').classList.remove('active');
        document.getElementById('navMenu').classList.remove('active');
    });
});
</script>
```
</div>

## 🎯 Challenges & Exercises

### 🏆 Level Pemula
1. **Color Palette Creator**: Buat palette generator dengan CSS variables
2. **Button Collection**: Kumpulkan 10 style button yang berbeda
3. **Loading Animations**: Buat 5 macam loading spinner

### 🚀 Level Menengah
1. **Responsive Dashboard**: Buat dashboard dengan sidebar dan charts
2. **Image Gallery**: Gallery dengan hover effects dan lightbox
3. **Pricing Cards**: Set kartu pricing dengan animations

### 💎 Level Advanced
1. **CSS Art**: Buat gambar/ilustrasi hanya dengan CSS
2. **Advanced Animations**: Implementasi complex keyframe animations
3. **Custom Framework**: Buat mini CSS framework sendiri

## 🛠️ Tools & Resources

<div class="alert alert-info">
<strong>🎨 Design Tools:</strong>
<ul>
<li><strong>Figma</strong> - Design interface dan prototyping</li>
<li><strong>Adobe XD</strong> - UI/UX design tool</li>
<li><strong>Coolors.co</strong> - Color palette generator</li>
<li><strong>Google Fonts</strong> - Free web fonts</li>
</ul>
</div>

<div class="alert alert-success">
<strong>📚 Learning Resources:</strong>
<ul>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">MDN CSS Documentation</a></li>
<li><a href="https://css-tricks.com/" target="_blank">CSS-Tricks</a></li>
<li><a href="https://flexboxfroggy.com/" target="_blank">Flexbox Froggy Game</a></li>
<li><a href="https://cssgridgarden.com/" target="_blank">CSS Grid Garden Game</a></li>
</ul>
</div>

<div class="alert alert-warning">
<strong>🔧 Development Tools:</strong>
<ul>
<li><strong>Browser DevTools</strong> - Inspect dan debug CSS</li>
<li><strong>Sass/SCSS</strong> - CSS preprocessor</li>
<li><strong>PostCSS</strong> - CSS transformation tool</li>
<li><strong>PurgeCSS</strong> - Remove unused CSS</li>
</ul>
</div>

## 💡 Best Practices

<div class="alert alert-success">
<strong>✅ CSS Best Practices:</strong>
<ul>
<li><strong>Mobile First</strong>: Mulai design dari mobile, lalu desktop</li>
<li><strong>BEM Methodology</strong>: Gunakan naming convention yang konsisten</li>
<li><strong>CSS Variables</strong>: Manfaatkan custom properties untuk maintainability</li>
<li><strong>Performance</strong>: Optimalkan selector dan hindari over-nesting</li>
<li><strong>Accessibility</strong>: Pastikan contrast ratio dan focus states</li>
</ul>
</div>

## 🏁 Kesimpulan

Fantastis! 🎉 Anda telah menguasai CSS dari level dasar hingga advanced. Sekarang Anda bisa:

✅ **Memahami CSS fundamentals** - selectors, properties, values  
✅ **Menguasai layout systems** - Flexbox dan CSS Grid  
✅ **Membuat responsive design** dengan media queries  
✅ **Menggunakan animations & transitions** untuk UX yang better  
✅ **Menerapkan modern CSS techniques** - variables, gradients, shadows  
✅ **Membangun component library** dengan reusable styles  

**Next Steps:** Lanjutkan dengan CSS frameworks (Bootstrap, Tailwind), preprocessors (Sass), atau dive deeper ke JavaScript untuk interactivity!

<div style="text-align: center; margin: 30px 0;">
<button class="btn btn-primary" onclick="window.open('https://github.com/hamadazein/tutorial', '_blank')">
🌟 Star Repository Ini
</button>
<button class="btn btn-success" onclick="alert('Selamat! Anda telah menyelesaikan CSS mastery! 🎨🏆')">
🏆 Complete CSS Mastery
</button>
</div>

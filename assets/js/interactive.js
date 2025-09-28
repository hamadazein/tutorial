// Interactive Tutorial Enhancement Scripts
// This file contains various interactive features for the web development tutorial

(function() {
    'use strict';

    // Wait for DOM to be ready
    document.addEventListener('DOMContentLoaded', function() {
        initializeInteractiveFeatures();
    });

    function initializeInteractiveFeatures() {
        addCodePenIntegration();
        addLiveCodeEditor();
        addProgressTracking();
        addThemeToggle();
        addKeyboardShortcuts();
        addTooltipEnhancement();
        addSmoothScrolling();
        addCodeHighlighting();
    }

    // CodePen Integration for live code examples
    function addCodePenIntegration() {
        const codeBlocks = document.querySelectorAll('pre code.lang-html, pre code.lang-css, pre code.lang-javascript');
        
        codeBlocks.forEach(block => {
            if (block.textContent.length > 50) {
                const openInCodePenBtn = document.createElement('button');
                openInCodePenBtn.className = 'codepen-btn';
                openInCodePenBtn.innerHTML = '🚀 Open in CodePen';
                openInCodePenBtn.onclick = () => openInCodePen(block.textContent, block.className);
                
                block.parentElement.appendChild(openInCodePenBtn);
            }
        });
    }

    function openInCodePen(code, language) {
        const form = document.createElement('form');
        form.action = 'https://codepen.io/pen/define';
        form.method = 'POST';
        form.target = '_blank';

        const data = {
            title: 'Interactive Web Dev Tutorial Demo',
            description: 'Code from Interactive Web Dev Tutorial',
            tags: ['webdev', 'tutorial', 'interactive'],
            editors: '1111',
        };

        if (language.includes('html')) {
            data.html = code;
        } else if (language.includes('css')) {
            data.css = code;
        } else if (language.includes('javascript')) {
            data.js = code;
        }

        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = 'data';
        input.value = JSON.stringify(data);
        
        form.appendChild(input);
        document.body.appendChild(form);
        form.submit();
        document.body.removeChild(form);
    }

    // Live Code Editor
    function addLiveCodeEditor() {
        const demoContainers = document.querySelectorAll('.demo-container');
        
        demoContainers.forEach(container => {
            const codeBlocks = container.querySelectorAll('code.lang-html');
            
            codeBlocks.forEach(codeBlock => {
                if (codeBlock.textContent.includes('<') && codeBlock.textContent.includes('>')) {
                    createLiveEditor(container, codeBlock);
                }
            });
        });
    }

    function createLiveEditor(container, codeBlock) {
        const editorWrapper = document.createElement('div');
        editorWrapper.className = 'live-editor-wrapper';
        editorWrapper.innerHTML = `
            <div class="editor-tabs">
                <button class="tab-btn active" data-tab="code">📝 Code</button>
                <button class="tab-btn" data-tab="preview">👀 Preview</button>
                <button class="tab-btn" data-tab="split">⚡ Live</button>
            </div>
            <div class="editor-content">
                <div class="editor-pane active" id="code-pane">
                    <textarea class="code-editor">${codeBlock.textContent}</textarea>
                </div>
                <div class="editor-pane" id="preview-pane">
                    <iframe class="preview-frame" sandbox="allow-scripts"></iframe>
                </div>
            </div>
        `;

        container.appendChild(editorWrapper);
        
        // Add event listeners
        const tabBtns = editorWrapper.querySelectorAll('.tab-btn');
        const textarea = editorWrapper.querySelector('.code-editor');
        const iframe = editorWrapper.querySelector('.preview-frame');

        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => switchTab(btn, editorWrapper));
        });

        textarea.addEventListener('input', () => updatePreview(textarea, iframe));
        updatePreview(textarea, iframe);
    }

    function switchTab(activeBtn, wrapper) {
        const tabs = wrapper.querySelectorAll('.tab-btn');
        const panes = wrapper.querySelectorAll('.editor-pane');
        
        tabs.forEach(tab => tab.classList.remove('active'));
        panes.forEach(pane => pane.classList.remove('active'));
        
        activeBtn.classList.add('active');
        
        const tabType = activeBtn.dataset.tab;
        if (tabType === 'split') {
            wrapper.classList.add('split-view');
            wrapper.querySelector('#code-pane').classList.add('active');
            wrapper.querySelector('#preview-pane').classList.add('active');
        } else {
            wrapper.classList.remove('split-view');
            wrapper.querySelector(`#${tabType}-pane`).classList.add('active');
        }
    }

    function updatePreview(textarea, iframe) {
        const code = textarea.value;
        const doc = iframe.contentDocument || iframe.contentWindow.document;
        doc.open();
        doc.write(code);
        doc.close();
    }

    // Progress Tracking
    function addProgressTracking() {
        const sections = document.querySelectorAll('.markdown-section h2, .markdown-section h3');
        const progressBar = createProgressTracker(sections.length);
        
        // Track scroll progress
        let completedSections = 0;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('viewed');
                    updateProgress();
                }
            });
        }, { threshold: 0.5 });

        sections.forEach(section => observer.observe(section));

        function updateProgress() {
            const viewedSections = document.querySelectorAll('.markdown-section h2.viewed, .markdown-section h3.viewed').length;
            const progress = (viewedSections / sections.length) * 100;
            progressBar.style.width = progress + '%';
            
            // Save progress to localStorage
            localStorage.setItem('tutorialProgress', progress);
        }

        // Load saved progress
        const savedProgress = localStorage.getItem('tutorialProgress');
        if (savedProgress) {
            progressBar.style.width = savedProgress + '%';
        }
    }

    function createProgressTracker(totalSections) {
        const progressContainer = document.createElement('div');
        progressContainer.className = 'progress-tracker';
        progressContainer.innerHTML = `
            <div class="progress-label">📚 Learning Progress</div>
            <div class="progress-bar-container">
                <div class="progress-bar-fill"></div>
            </div>
            <div class="progress-stats">0% Complete</div>
        `;

        document.body.appendChild(progressContainer);
        return progressContainer.querySelector('.progress-bar-fill');
    }

    // Theme Toggle
    function addThemeToggle() {
        const themeToggle = document.createElement('button');
        themeToggle.className = 'theme-toggle';
        themeToggle.innerHTML = '🌙';
        themeToggle.title = 'Toggle Dark Mode';
        
        themeToggle.addEventListener('click', toggleTheme);
        document.body.appendChild(themeToggle);

        // Load saved theme
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-theme');
            themeToggle.innerHTML = '☀️';
        }
    }

    function toggleTheme() {
        const body = document.body;
        const themeToggle = document.querySelector('.theme-toggle');
        
        body.classList.toggle('dark-theme');
        
        if (body.classList.contains('dark-theme')) {
            themeToggle.innerHTML = '☀️';
            localStorage.setItem('theme', 'dark');
        } else {
            themeToggle.innerHTML = '🌙';
            localStorage.setItem('theme', 'light');
        }
    }

    // Keyboard Shortcuts
    function addKeyboardShortcuts() {
        document.addEventListener('keydown', function(e) {
            // Ctrl/Cmd + K for search
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                const searchInput = document.querySelector('.search input');
                if (searchInput) {
                    searchInput.focus();
                }
            }

            // Escape to close modals/overlays
            if (e.key === 'Escape') {
                closeAllModals();
            }

            // Arrow keys for navigation
            if (e.key === 'ArrowRight' && e.altKey) {
                navigateToNext();
            } else if (e.key === 'ArrowLeft' && e.altKey) {
                navigateToPrevious();
            }
        });

        // Show keyboard shortcuts help
        const helpBtn = document.createElement('button');
        helpBtn.className = 'keyboard-help-btn';
        helpBtn.innerHTML = '⌨️';
        helpBtn.title = 'Keyboard Shortcuts';
        helpBtn.onclick = showKeyboardHelp;
        
        document.body.appendChild(helpBtn);
    }

    function showKeyboardHelp() {
        const modal = document.createElement('div');
        modal.className = 'keyboard-help-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h3>⌨️ Keyboard Shortcuts</h3>
                    <button class="close-btn" onclick="this.closest('.keyboard-help-modal').remove()">×</button>
                </div>
                <div class="modal-body">
                    <div class="shortcut-item">
                        <kbd>Ctrl</kbd> + <kbd>K</kbd> <span>Focus Search</span>
                    </div>
                    <div class="shortcut-item">
                        <kbd>Esc</kbd> <span>Close Modals</span>
                    </div>
                    <div class="shortcut-item">
                        <kbd>Alt</kbd> + <kbd>→</kbd> <span>Next Section</span>
                    </div>
                    <div class="shortcut-item">
                        <kbd>Alt</kbd> + <kbd>←</kbd> <span>Previous Section</span>
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Close on background click
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.remove();
            }
        });
    }

    // Enhanced Tooltips
    function addTooltipEnhancement() {
        // Create tooltip element
        const tooltip = document.createElement('div');
        tooltip.className = 'enhanced-tooltip';
        document.body.appendChild(tooltip);

        // Add tooltips to code elements
        document.querySelectorAll('code:not(pre code)').forEach(codeEl => {
            codeEl.addEventListener('mouseenter', showTooltip);
            codeEl.addEventListener('mouseleave', hideTooltip);
        });

        function showTooltip(e) {
            const element = e.target;
            const text = element.textContent;
            let tooltipText = '';

            // Define tooltips for common terms
            const tooltips = {
                'HTML': 'HyperText Markup Language - Struktur dasar website',
                'CSS': 'Cascading Style Sheets - Styling dan layout',
                'JavaScript': 'Bahasa pemrograman untuk interaktivitas',
                'DOM': 'Document Object Model - Representasi HTML',
                'API': 'Application Programming Interface',
                'JSON': 'JavaScript Object Notation - Format data',
                'AJAX': 'Asynchronous JavaScript and XML',
                'HTTP': 'HyperText Transfer Protocol',
                'URL': 'Uniform Resource Locator',
                'SQL': 'Structured Query Language'
            };

            tooltipText = tooltips[text] || `Code: ${text}`;

            tooltip.textContent = tooltipText;
            tooltip.style.display = 'block';
            
            // Position tooltip
            const rect = element.getBoundingClientRect();
            tooltip.style.left = rect.left + 'px';
            tooltip.style.top = (rect.top - tooltip.offsetHeight - 10) + 'px';
        }

        function hideTooltip() {
            tooltip.style.display = 'none';
        }
    }

    // Smooth Scrolling Enhancement
    function addSmoothScrolling() {
        // Enhance anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    // Add highlight effect
                    target.classList.add('highlight-target');
                    setTimeout(() => {
                        target.classList.remove('highlight-target');
                    }, 2000);
                }
            });
        });
    }

    // Code Highlighting Enhancement
    function addCodeHighlighting() {
        // Add line numbers to code blocks
        document.querySelectorAll('pre code').forEach(codeBlock => {
            const lines = codeBlock.textContent.split('\n');
            if (lines.length > 3) {
                const lineNumbers = document.createElement('div');
                lineNumbers.className = 'line-numbers';
                
                lines.forEach((line, index) => {
                    const lineNumber = document.createElement('span');
                    lineNumber.textContent = index + 1;
                    lineNumbers.appendChild(lineNumber);
                });
                
                codeBlock.parentElement.prepend(lineNumbers);
                codeBlock.parentElement.classList.add('has-line-numbers');
            }
        });
    }

    // Utility functions
    function closeAllModals() {
        document.querySelectorAll('.modal, .keyboard-help-modal').forEach(modal => {
            modal.remove();
        });
    }

    function navigateToNext() {
        const pagination = document.querySelector('.pagination-item--next a');
        if (pagination) {
            pagination.click();
        }
    }

    function navigateToPrevious() {
        const pagination = document.querySelector('.pagination-item--previous a');
        if (pagination) {
            pagination.click();
        }
    }

    // Achievement System
    function addAchievementSystem() {
        const achievements = {
            'first-visit': { name: '👋 First Visit', desc: 'Welcome to the tutorial!' },
            'code-runner': { name: '🏃‍♂️ Code Runner', desc: 'Ran your first code example' },
            'theme-switcher': { name: '🌙 Theme Switcher', desc: 'Toggled dark mode' },
            'speed-reader': { name: '📚 Speed Reader', desc: 'Completed a section quickly' },
            'completionist': { name: '🏆 Completionist', desc: 'Finished the entire tutorial' }
        };

        function unlockAchievement(key) {
            const achievement = achievements[key];
            if (!achievement || localStorage.getItem(`achievement_${key}`)) return;

            localStorage.setItem(`achievement_${key}`, 'true');
            showAchievementNotification(achievement);
        }

        function showAchievementNotification(achievement) {
            const notification = document.createElement('div');
            notification.className = 'achievement-notification';
            notification.innerHTML = `
                <div class="achievement-content">
                    <div class="achievement-icon">${achievement.name.split(' ')[0]}</div>
                    <div class="achievement-text">
                        <div class="achievement-title">Achievement Unlocked!</div>
                        <div class="achievement-name">${achievement.name}</div>
                        <div class="achievement-desc">${achievement.desc}</div>
                    </div>
                </div>
            `;

            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.classList.add('show');
            }, 100);

            setTimeout(() => {
                notification.classList.remove('show');
                setTimeout(() => {
                    notification.remove();
                }, 300);
            }, 4000);
        }

        // Trigger achievements
        if (!localStorage.getItem('achievement_first-visit')) {
            unlockAchievement('first-visit');
        }

        // Export unlock function
        window.unlockAchievement = unlockAchievement;
    }

    // Initialize achievement system
    addAchievementSystem();

})();

// CSS for interactive features
const interactiveStyles = `
<style>
/* Live Editor Styles */
.live-editor-wrapper {
    background: #1e1e1e;
    border-radius: 10px;
    overflow: hidden;
    margin: 20px 0;
    box-shadow: 0 8px 25px rgba(0,0,0,0.2);
}

.editor-tabs {
    background: #2d2d30;
    display: flex;
    padding: 0;
}

.tab-btn {
    background: transparent;
    border: none;
    color: #cccccc;
    padding: 12px 20px;
    cursor: pointer;
    transition: all 0.3s;
    border-bottom: 3px solid transparent;
}

.tab-btn.active {
    color: #4fc3f7;
    border-bottom-color: #4fc3f7;
    background: rgba(79, 195, 247, 0.1);
}

.tab-btn:hover {
    background: rgba(255,255,255,0.1);
}

.editor-content {
    position: relative;
    height: 400px;
}

.editor-pane {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: none;
}

.editor-pane.active {
    display: block;
}

.split-view .editor-pane.active {
    width: 50%;
    position: relative;
    display: inline-block;
    vertical-align: top;
}

.code-editor {
    width: 100%;
    height: 100%;
    background: #1e1e1e;
    color: #d4d4d4;
    border: none;
    padding: 20px;
    font-family: 'Fira Code', 'Consolas', monospace;
    font-size: 14px;
    line-height: 1.5;
    resize: none;
    outline: none;
}

.preview-frame {
    width: 100%;
    height: 100%;
    border: none;
    background: white;
}

.codepen-btn {
    position: absolute;
    top: 10px;
    right: 50px;
    background: #47cf73;
    color: white;
    border: none;
    padding: 8px 12px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 12px;
    transition: all 0.3s;
}

.codepen-btn:hover {
    background: #37a85a;
    transform: scale(1.05);
}

/* Progress Tracker */
.progress-tracker {
    position: fixed;
    top: 60px;
    right: 20px;
    background: white;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    z-index: 1000;
    min-width: 200px;
}

.progress-label {
    font-weight: bold;
    margin-bottom: 10px;
    color: #333;
}

.progress-bar-container {
    background: #e9ecef;
    height: 8px;
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 10px;
}

.progress-bar-fill {
    height: 100%;
    background: linear-gradient(90deg, #4fc3f7, #29b6f6);
    width: 0%;
    transition: width 0.5s ease;
}

.progress-stats {
    font-size: 12px;
    color: #666;
    text-align: center;
}

/* Theme Toggle */
.theme-toggle {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: none;
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    font-size: 20px;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    transition: all 0.3s;
    z-index: 1000;
}

.theme-toggle:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 20px rgba(0,0,0,0.3);
}

/* Dark Theme */
.dark-theme {
    background: #121212;
    color: #e0e0e0;
}

.dark-theme .sidebar {
    background: #1e1e1e;
}

.dark-theme .markdown-section {
    color: #e0e0e0;
}

.dark-theme .progress-tracker {
    background: #2d2d2d;
    color: #e0e0e0;
}

/* Keyboard Help */
.keyboard-help-btn {
    position: fixed;
    bottom: 80px;
    right: 20px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    background: #ff6b6b;
    color: white;
    font-size: 16px;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    transition: all 0.3s;
    z-index: 1000;
}

.keyboard-help-btn:hover {
    transform: scale(1.1);
}

.keyboard-help-modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2000;
}

.modal-content {
    background: white;
    border-radius: 15px;
    max-width: 400px;
    width: 90%;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
}

.modal-header {
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.modal-header h3 {
    margin: 0;
}

.close-btn {
    background: none;
    border: none;
    color: white;
    font-size: 24px;
    cursor: pointer;
}

.modal-body {
    padding: 20px;
}

.shortcut-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid #eee;
}

.shortcut-item:last-child {
    border-bottom: none;
}

kbd {
    background: #f8f9fa;
    border: 1px solid #dee2e6;
    border-radius: 3px;
    padding: 2px 6px;
    font-size: 12px;
    margin: 0 2px;
}

/* Enhanced Tooltip */
.enhanced-tooltip {
    position: absolute;
    background: #333;
    color: white;
    padding: 8px 12px;
    border-radius: 6px;
    font-size: 12px;
    z-index: 1000;
    display: none;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    max-width: 200px;
}

.enhanced-tooltip::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #333 transparent transparent transparent;
}

/* Line Numbers */
.has-line-numbers {
    display: flex;
}

.line-numbers {
    background: #2d2d30;
    color: #858585;
    padding: 1em 0.5em;
    text-align: right;
    user-select: none;
    font-family: 'Fira Code', 'Consolas', monospace;
    font-size: 14px;
    line-height: 1.5;
}

.line-numbers span {
    display: block;
}

/* Highlight Target */
.highlight-target {
    background: rgba(255, 235, 59, 0.3);
    transition: background 0.5s ease;
    padding: 10px;
    border-radius: 5px;
}

/* Achievement Notification */
.achievement-notification {
    position: fixed;
    top: 20px;
    right: -400px;
    background: linear-gradient(135deg, #4caf50, #45a049);
    color: white;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 8px 25px rgba(0,0,0,0.2);
    transition: right 0.3s ease;
    z-index: 2000;
    max-width: 350px;
}

.achievement-notification.show {
    right: 20px;
}

.achievement-content {
    display: flex;
    align-items: center;
    gap: 15px;
}

.achievement-icon {
    font-size: 2em;
}

.achievement-title {
    font-weight: bold;
    margin-bottom: 5px;
}

.achievement-name {
    font-size: 1.1em;
    margin-bottom: 3px;
}

.achievement-desc {
    font-size: 0.9em;
    opacity: 0.9;
}

/* Responsive Design */
@media (max-width: 768px) {
    .progress-tracker {
        position: static;
        margin: 20px;
        width: calc(100% - 40px);
    }
    
    .theme-toggle {
        bottom: 10px;
        right: 10px;
    }
    
    .keyboard-help-btn {
        bottom: 70px;
        right: 10px;
    }
    
    .split-view .editor-pane.active {
        width: 100%;
        height: 50%;
        display: block;
    }
}
</style>
`;

// Inject styles
document.head.insertAdjacentHTML('beforeend', interactiveStyles);
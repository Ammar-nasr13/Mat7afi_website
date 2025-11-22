 let currentLang = 'ar';

        function toggleLanguage() {
            const html = document.documentElement;
            const langBtnText = document.getElementById('lang-btn-text');
            
            if (currentLang === 'ar') {
                currentLang = 'en';
                html.setAttribute('lang', 'en');
                html.setAttribute('dir', 'ltr');
                langBtnText.textContent = 'العربية';
                document.title = 'Mathafy - Discover Minya\'s Archaeological Treasures';
            } else {
                currentLang = 'ar';
                html.setAttribute('lang', 'ar');
                html.setAttribute('dir', 'rtl');
                langBtnText.textContent = 'English';
                document.title = 'متحفي - اكتشف كنوز المنيا الأثرية';
            }
            
            // Update all elements with data-ar and data-en attributes
            document.querySelectorAll('[data-ar][data-en]').forEach(el => {
                const newText = el.getAttribute('data-' + currentLang);
                if (newText) {
                    // Check if element contains HTML (like <br>)
                    if (newText.includes('<br>')) {
                        el.innerHTML = newText;
                    } else {
                        el.textContent = newText;
                    }
                }
            });
        }

        function downloadApp() {
            const messages = {
                ar: '🎉 شكراً لاهتمامك!\n\nسيتم توجيهك لتحميل تطبيق متحفي...\n\n(ضع رابط التطبيق هنا)',
                en: '🎉 Thank you for your interest!\n\nYou will be redirected to download Mathafy app...\n\n(Put app link here)'
            };
            
            alert(messages[currentLang]);
            
            // Example: if you have app link
            // window.location.href = 'YOUR_APP_DOWNLOAD_LINK';
        }

        // Add smooth scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
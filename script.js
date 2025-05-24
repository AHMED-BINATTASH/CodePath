document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu');
    const nav = document.querySelector('nav');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
        });
    }
    
    // Roadmap milestone navigation
    const milestones = document.querySelectorAll('.milestone');
    const stageContents = document.querySelectorAll('.stage-content');
    
    if (milestones.length > 0) {
        milestones.forEach(milestone => {
            milestone.addEventListener('click', function() {
                const stage = this.getAttribute('data-stage');
                
                // Update active milestone
                milestones.forEach(m => m.classList.remove('active'));
                this.classList.add('active');
                
                // Update active content
                stageContents.forEach(content => {
                    content.classList.remove('active');
                    if (content.id === stage) {
                        content.classList.add('active');
                    }
                });
            });
        });
    }
    
    // Contact form functionality
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulate form submission
            formStatus.innerHTML = '<div class="loading">Sending your message...</div>';
            
            // Simulate API call with timeout
            setTimeout(function() {
                formStatus.innerHTML = '<div class="success">Your message has been sent successfully! We\'ll get back to you soon.</div>';
                contactForm.reset();
            }, 1500);
        });
    }
    
    // FAQ toggle functionality
    const faqItems = document.querySelectorAll('.faq-item');
    
    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            
            question.addEventListener('click', () => {
                // Toggle current item
                item.classList.toggle('active');
                
                // Update icon
                const icon = item.querySelector('.faq-toggle i');
                if (item.classList.contains('active')) {
                    icon.classList.remove('fa-plus');
                    icon.classList.add('fa-minus');
                } else {
                    icon.classList.remove('fa-minus');
                    icon.classList.add('fa-plus');
                }
            });
        });
    }
    
    // Map loading functionality
    const loadMapBtn = document.getElementById('loadMap');
    
    if (loadMapBtn) {
        loadMapBtn.addEventListener('click', function() {
            const mapContainer = document.querySelector('.map-container');
            
            // Replace placeholder with actual map (in a real implementation)
            // Here we're just simulating the loading of a map
            mapContainer.innerHTML = `
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0968143526147!2d-122.4009826!3d37.7857739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ3JzA5LjAiTiAxMjLCsDI0JzAzLjUiVw!5e0!3m2!1sen!2sus!4v1620841111111!5m2!1sen!2sus" 
                    width="100%" 
                    height="450" 
                    style="border:0;" 
                    allowfullscreen="" 
                    loading="lazy">
                </iframe>
            `;
        });
    }
    
    // Check for URL parameters to pre-select expert in contact form
    const urlParams = new URLSearchParams(window.location.search);
    const expertParam = urlParams.get('expert');
    const subjectSelect = document.getElementById('subject');
    
    if (expertParam && subjectSelect) {
        // Set subject to "Connect with an Expert"
        subjectSelect.value = 'expert';
        
        // Add expert name to message if there's a textarea
        const messageTextarea = document.getElementById('message');
        if (messageTextarea) {
            let expertName = '';
            
            switch(expertParam) {
                case 'jane':
                    expertName = 'Jane Doe';
                    break;
                case 'john':
                    expertName = 'John Smith';
                    break;
                case 'alex':
                    expertName = 'Alex Chen';
                    break;
            }
            
            if (expertName) {
                messageTextarea.value = `I'm interested in connecting with ${expertName} regarding...`;
            }
        }
    }
});
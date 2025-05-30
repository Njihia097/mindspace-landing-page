
 // FAQ Accordion functionality
        document.querySelectorAll('.faq-question').forEach(question => {
            question.addEventListener('click', () => {
                const faqItem = question.parentElement;
                const isActive = faqItem.classList.contains('active');
                
                // Close all other FAQ items
                document.querySelectorAll('.faq-item').forEach(item => {
                    item.classList.remove('active');
                });
                
                // Toggle current item
                if (!isActive) {
                    faqItem.classList.add('active');
                }
            });
        });

                // Testimonials auto-rotation (optional enhancement)
        let currentTestimonial = 0;
        const testimonials = document.querySelectorAll('.testimonial-card');
        
        function rotateTestimonials() {
            testimonials.forEach((card, index) => {
                card.style.transform = index === currentTestimonial ? 'scale(1.05)' : 'scale(1)';
                card.style.opacity = index === currentTestimonial ? '1' : '0.8';
            });
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        }
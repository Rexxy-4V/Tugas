AOS.init({
    duration: 1000,
    once: true
});

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('nav') && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(255, 255, 255, 0.95)';
    } else {
        nav.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

function toggleChat() {
    const chatBox = document.getElementById('chatBox');
    if (chatBox.style.display === 'none' || chatBox.style.display === '') {
        chatBox.style.display = 'flex';
    } else {
        chatBox.style.display = 'none';
    }
}

function sendMessage() {
    const input = document.getElementById('messageInput');
    const message = input.value.trim();
    
    if (message) {
        const chatMessages = document.getElementById('chatMessages');
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message sent';
        messageDiv.innerHTML = `<p>${message}</p>`;
        chatMessages.appendChild(messageDiv);
        
        input.value = '';
        
        chatMessages.scrollTop = chatMessages.scrollHeight;  

        setTimeout(() => {
            const responseDiv = document.createElement('div');
            responseDiv.className = 'message received';
            responseDiv.innerHTML = `<p>Terima kasih atas pesan Anda. Tim kami akan segera merespons.</p>`;
            chatMessages.appendChild(responseDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 1000);
    }
}


document.getElementById('messageInput')?.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});
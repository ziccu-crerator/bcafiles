// Trigger Gmail-like opening animation on page load
window.addEventListener('load', function() {
    // Animations are handled via CSS, but we can add JS if needed for more control
    // For now, CSS handles it automatically
});

// Reload page on main heading click
document.getElementById('mainHeading').addEventListener('click', function() {
    location.reload();
});

// Search functionality (filters sidebar threads)
document.getElementById('search').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const items = document.querySelectorAll('#threadList li');
    items.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(query) ? 'block' : 'none';
    });
});

// Load thread on sidebar click
document.getElementById('threadList').addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        const threadName = e.target.getAttribute('data-thread');
        loadThread(threadName);
    }
});

function loadThread(name) {
    const threadView = document.getElementById('threadView');
    let content = '';
    if (name === "Bob's Pizza Obsession") {
        content = `
            <h2>${name}</h2>
            <div class="email">
                <p><strong>From:</strong> Alice</p>
                <p>Hey team, pineapple on pizza? Proof below!</p>
            </div>
            <div class="image-grid">
                <img src="bob-pizza.jpg" alt="Bob's pizza" onclick="openLightbox(this.src)">
                <img src="bob-dance.jpg" alt="Bob dancing" onclick="openLightbox(this.src)">
            </div>
        `;
    } else if (name === "Charlie's Cat Conspiracy") {
        content = `
            <h2>${name}</h2>
            <div class="email">
                <p><strong>From:</strong> Dana</p>
                <p>Charlie's cat army is real!</p>
            </div>
            <div class="image-grid">
                <img src="charlie-cats.jpg" alt="Charlie's cats" onclick="openLightbox(this.src)">
                <img src="charlie-tickle.jpg" alt="Charlie tickling" onclick="openLightbox(this.src)">
            </div>
        `;
    }
    threadView.innerHTML = content;
    threadView.style.display = 'block';
    document.getElementById('imageGrid').style.display = 'none'; // Hide main grid when viewing thread
}

// Lightbox for images (Google Images-style popup)
function openLightbox(src) {
    document.getElementById('lightboxImg').src = src;
    document.getElementById('lightbox').style.display = 'flex';
}
function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

// Compose button (fun placeholder)
document.getElementById('composeBtn').addEventListener('click', function() {
    alert('Compose feature coming soon! For now, add threads manually in HTML. 😄');
});
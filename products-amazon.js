const amazonProducts = [
    { id: 1, title: "Pastel Pink Cardigan", price: "$24.99", image: "https://images.unsplash.com/photo-1624206112918-f140f087f9b5?auto=format&fit=crop&w=500", link: "#" },
    { id: 2, title: "Floral Puff Sleeve Dress", price: "$32.00", image: "https://images.unsplash.com/photo-1572804013307-59c6ddb60211?auto=format&fit=crop&w=500", link: "#" },
    { id: 3, title: "Pastel Pink Crossbody Bag", price: "$18.99", image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=500", link: "#" }
];

// Initialize wishlist from Local Storage under the new brand name
let wishlist = JSON.parse(localStorage.getItem('chicClosetWishlist')) || [];

function renderProducts() {
    const grid = document.getElementById('amazon-grid');
    grid.innerHTML = amazonProducts.map(product => {
        const isLiked = wishlist.includes(product.id);
        return `
            <div class="card">
                <button class="like-btn" onclick="toggleLike(${product.id})">
                    ${isLiked ? '❤️' : '🤍'}
                </button>
                <img src="${product.image}" alt="${product.title}">
                <h3 style="margin: 15px 0 5px; font-size: 1.1rem;">${product.title}</h3>
                <p style="color: var(--primary); font-weight: bold; font-size: 1.2rem;">${product.price}</p>
                <a href="${product.link}" target="_blank" class="btn-gradient" style="display:block; text-align:center; margin-top:10px; font-size: 14px;">Buy Now</a>
            </div>
        `;
    }).join('');
    updateWishlistUI();
}

function toggleLike(id) {
    if (wishlist.includes(id)) {
        wishlist = wishlist.filter(item => item !== id);
    } else {
        wishlist.push(id);
    }
    localStorage.setItem('chicClosetWishlist', JSON.stringify(wishlist));
    renderProducts();
}

function updateWishlistUI() {
    document.getElementById('wishlist-count').innerText = wishlist.length;
    const container = document.getElementById('wishlist-items');
    const items = amazonProducts.filter(p => wishlist.includes(p.id));
    
    container.innerHTML = items.length ? items.map(p => `
        <div style="display:flex; gap:15px; margin-bottom:20px; align-items:center; border-bottom: 1px solid #f0f0f0; padding-bottom: 10px;">
            <img src="${p.image}" style="width:60px; height:60px; border-radius:10px; object-fit:cover;">
            <div>
                <h4 style="margin:0; font-size:14px;">${p.title}</h4>
                <a href="${p.link}" style="color:var(--primary); font-size:12px; text-decoration:none; font-weight:600;">Shop Now</a>
            </div>
        </div>
    `).join('') : '<p style="text-align:center; opacity:0.5;">No favorites yet! 🤍</p>';
}

function toggleWishlist() {
    document.getElementById('wishlist-sidebar').classList.toggle('open');
}

// Initial Run
renderProducts();
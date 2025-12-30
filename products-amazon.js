const amazonProducts = [
    { id: 1, title: "Aahwan Women's Fit And Flare Midi Dress", price: "₹453", image: "https://m.media-amazon.com/images/I/51F8qaDJTbL._SY741_.jpg", link: "https://amzn.to/4pceDyH" },
    { id: 2, title: "Flare Solid Summer Beach Square Neck Puff Sleeve Cut Out Waist Mini Dress", price: "₹453", image: "https://m.media-amazon.com/images/I/71-BCekty8L._SY741_.jpg", link: "https://amzn.to/4q0Gx25" },
    { id: 3, title: "Solid Ruched Detail A-line Mini Dress", price: "₹453", image: "https://m.media-amazon.com/images/I/71dOpB-zcWL._SY741_.jpg", link: "https://amzn.to/44KBJ8r" },
    // NEW PRODUCT ADDED BELOW
    { 
        id: 4, 
        title: "Aahwan Floral Mini Dress", 
        price: "₹453", 
        image: "https://m.media-amazon.com/images/I/810uc+ocbrL._SY741_.jpg", 
        link: "https://amzn.to/3Lcs3wS" 
    },
    { id: 5, title: "Aahwan Women's Midi Fit And Flare Dress", price: "₹474", image: "https://m.media-amazon.com/images/I/71Z0bRA01nL._SY741_.jpg", link: "https://amzn.to/3YgIlYA" },
    { id: 6, title: "Stylish Night Solid Bodycon Short Dress", price: "₹499", image: "https://m.media-amazon.com/images/I/31-xELNRV9L.jpg", link: "https://amzn.to/4pYvXIT" },
    { id: 7, title: "Midi Party Dress for Women", price: "₹459", image: "https://m.media-amazon.com/images/I/51MiYQD5FcL._SY741_.jpg", link: "https://amzn.to/4phDoK2" },
    { id: 8, title: "Slim-Fit One-Piece ", price: "₹429", image: "https://m.media-amazon.com/images/I/71swF9bbPyL._SY741_.jpg", link: "https://amzn.to/4jjbk7L" }
];

// Load Favorites from Local Storage
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
                <a href="${p.link}" target="_blank" style="color:var(--primary); font-size:12px; text-decoration:none; font-weight:600;">Shop Now</a>
            </div>
        </div>
    `).join('') : '<p style="text-align:center; opacity:0.5;">No favorites yet! 🤍</p>';
}

function toggleWishlist() {
    document.getElementById('wishlist-sidebar').classList.toggle('open');
}

renderProducts();





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
    { id: 8, title: "Slim-Fit One-Piece ", price: "₹429", image: "https://m.media-amazon.com/images/I/71swF9bbPyL._SY741_.jpg", link: "https://amzn.to/4jjbk7L" },
    { id: 9, title: "Sleeveless Bodycon Mini Dress for Women", price: "₹429", image: "https://m.media-amazon.com/images/I/513EoLN0rwL._SX679_.jpg", link: "https://amzn.to/3Yhj0Og" },
    { id: 10, title: "Mini Dress for Casual Outings", price: "₹459", image: "https://m.media-amazon.com/images/I/71luHj+P2JL._SY741_.jpg", link: "https://amzn.to/3MZ6e4n" },
    { id: 11, title: "Solid Sleeveless Bodycon Knee Length Dress", price: "₹399", image: "https://m.media-amazon.com/images/I/51nEXy0BqKL._SY741_.jpg", link: "https://amzn.to/49h8ewp" },
    { id: 12, title: "Off Shoulder Hosiery Western Sexy Bodycon Midi", price: "₹599", image: "https://m.media-amazon.com/images/I/810uc+ocbrL._SY741_.jpg", link: "https://amzn.to/3YPKmLp" },
    { id: 13, title: "Women Mini Trendy Bodycon Dress | Slim-Fit One-Piece | Stylish Body-Con Dresses", price: "₹449", image: "https://m.media-amazon.com/images/I/51QuHOmMR+L._SY741_.jpg", link: "https://amzn.to/49jESO3" },
    { id: 14, title: "Casual Wear Dress for Women ||Bodycon || Western || One Piece ", price: "₹499", image: "https://m.media-amazon.com/images/I/61zbu9cCQ9L._SY741_.jpg", link: "https://amzn.to/49gQQYt" },
    { id: 15, title: "Fashions Soft Pre-Shrunk Polka Style Red Flared Pom-Pom Dress for Women", price: "₹999", image: "https://m.media-amazon.com/images/I/71YvmBgD7KL._SY741_.jpg", link: "https://amzn.to/4q2zwOl" },
    { id: 16, title: "Black & White Polka Dot Midi Dress for Women", price: "₹800", image: "https://m.media-amazon.com/images/I/61FcG1UJGSL._SY741_.jpg", link: "https://amzn.to/4pk9ZyZ" },
    { id: 17, title: "Women Poplin Floral Ruffle Neck Smocked Skater Dress", price: "₹1,249 ", image: "https://m.media-amazon.com/images/I/71yhEP94ZfL._SY741_.jpg", link: "https://amzn.to/49C3zGC" },
    { id: 18, title: "Women's Plus Size Off-Shoulder Cocktail Fit and Flare Dresses", price: "₹1199", image: "https://m.media-amazon.com/images/I/6134H2PAj8L._SY741_.jpg",  link: "https://amzn.to/3YrfMHV" },
    { id: 19, title: "Aahwan Women's & Girls' Black Solid Ruched Detail A-line Mini Dress", price: "₹453", image: "https://m.media-amazon.com/images/I/61PfMGSv60L._SY741_.jpg", link: "https://amzn.to/4jpFbLy" },
    { id: 20, title: "Women's Western Solid Stretchable Racer Back Cut Out Bodycon Midi Thigh Length Dress.", price: "₹599", image: "https://m.media-amazon.com/images/I/51V9CyCvmJL._SY741_.jpg", link: "https://amzn.to/4aKEv1o" },
    { id: 21, title: "Women's Bodycon Midi dress", price: "₹549", image: "https://m.media-amazon.com/images/I/51H9KB8PG1L._SY741_.jpg", link: "https://amzn.to/3LedUPR" },
    { id: 22, title: "Bodycon Dress for Women", price: "₹399", image: "https://m.media-amazon.com/images/I/61c7yHHfrVL._SY741_.jpg", link: "https://amzn.to/3YVHgFM" },
    { id: 23, title: "Halter Neck Bodycon Mini Dress Backless", price: "₹419", image: "https://m.media-amazon.com/images/I/51fj+SfpJ0L._SY741_.jpg", link: "https://amzn.to/4aNqqjB" },
    { id: 24, title: "Off Shoulder Ruched Bodycon Dress", price: "₹599", image: "https://m.media-amazon.com/images/I/31DL-m6C-jL.jpg", link: "https://amzn.to/49tyUdn" },
    { id: 25, title: "Women’s Satin Midi Dress with Spaghetti Straps", price: "₹479", image: "https://m.media-amazon.com/images/I/51f9e3ZNxoL._SY741_.jpg", link: "https://amzn.to/4stzqAQ" },
    { id: 26, title: "Maxi Dress for Women",  price: "₹529", image: "https://m.media-amazon.com/images/I/41ni-PNEu0L._SY741_.jpg", link: "https://amzn.to/49oTpYB" },
    { id: 27, title: "Women's Floral Print Short Dress", price: "₹459",image: "https://i.pinimg.com/1200x/10/04/19/100419754ef0a390290cacdd91433714.jpg", link: "https://amzn.to/45yhRFQ" },
    { 
        id: 28, 
        title: "Aahwan Floral Mini Dress", 
        price: "₹453", 
        image: "https://m.media-amazon.com/images/I/810uc+ocbrL._SY741_.jpg", 
        link: "https://amzn.to/3Lcs3wS" 
    },
    { 
        id: 4, 
        title: "Aahwan Floral Mini Dress", 
        price: "₹453", 
        image: "https://m.media-amazon.com/images/I/810uc+ocbrL._SY741_.jpg", 
        link: "https://amzn.to/3Lcs3wS" 
    },
    { 
        id: 4, 
        title: "Aahwan Floral Mini Dress", 
        price: "₹453", 
        image: "https://m.media-amazon.com/images/I/810uc+ocbrL._SY741_.jpg", 
        link: "https://amzn.to/3Lcs3wS" 
    },
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











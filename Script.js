// ============================================
// DONNÉES DES PRODUITS
// ============================================
const productsData = {
    1: { id: 1, name: "Voiture télécommandée - pour enfants", category: "Jouets", price: 108000, oldPrice: 120000, promotion: "-30%", image: "https://i.ibb.co/d0r3Sk8T/promo1.jpg", description: "Voiture télécommandée de qualité pour les enfants de 3 à 10 ans" },
    2: { id: 2, name: "Motocyclette - jouet télécommandé", category: "Jouets", price: 126000, oldPrice: 140000, promotion: "-25%", image: "https://i.ibb.co/FkPJHcrp/promo2.jpg", description: "Motocyclette télécommandée pour Enfants" },
    3: { id: 3, name: "Velo enfants", category: "Jouets", price: 88000, oldPrice: 110000, promotion: "-40%", image: "https://i.ibb.co/0VWtcWnz/promo3.jpg", description: "Vélo pour enfants de 3 à 10 ans, avec roues de 12 pouces" },
    4: { id: 4, name: "Marmite ou réchaud à fondue", category: "Cuisine", price: 8800, oldPrice: 11000, promotion: "-20%", image: "https://i.ibb.co/ycsm73Vn/promo4.jpg", description: "Marmite ou réchaud à fondue en acier inoxydable" },
    5: { id: 5, name: "Poêle à frire - GF Marble", category: "Cuisine", price: 8400, oldPrice: 10500, promotion: "-35%", image: "https://i.ibb.co/S75WWsn8/promo5.jpg", description: "Poêle à frire en acier inoxydable, idéal pour les repas rapides" },
    6: { id: 6, name: "Saut à champagne ou à glace - En acier inoxydable", category: "Cuisine", price: 9600, oldPrice: 11200, promotion: "-15%", image: "https://i.ibb.co/rKhm9TtC/promo6.jpg", description: "Idéal pour maintenir les bouteilles aux frais avec de la glace" },
    7: { id: 7, name: "Moulin à café manuel", category: "Cuisine", price: 6000, oldPrice: 12000, promotion: "-50%", image: "https://i.ibb.co/LXrfhLYz/promo7.jpg", description: "Pour moudre le café à la demande et conserver son arôme" },
    8: { id: 8, name: "Mini barbecue à charbon portable", category: "Cuisine", price: 14000, oldPrice: 18000, promotion: "-45%", image: "https://i.ibb.co/8DJb3z14/promo8.jpg", description: "Idéal pour les repas en plein air et les fêtes" },
    9: { id: 9, name: "Poussette pour bébé", category: "Bébé & Enfants", price: 32000, oldPrice: 40000, promotion: "-30%", image: "https://i.ibb.co/4gZq67D2/promo9.jpg", description: "Poussette légère et facile à transporter pour les bébés" },
    101: { id: 101, name: "T-shirt coton homme", category: "Habits", price: 8000, oldPrice: null, promotion: null, image: "https://i.ibb.co/DPM0SBbP/t-shirt-coton-bio-homme-blanc.jpg", description: "T-shirt coton pour homme, usage quotidien." },
    102: { id: 102, name: "Robe légère femme", category: "Habits", price: 18000, oldPrice: null, promotion: null, image: "https://i.ibb.co/ycprZRWM/robe-boheme-legere-classe-02.webp", description: "Robe légère et confortable pour femme." },
    103: { id: 103, name: "Riz 5kg", category: "Épicerie", price: 5500, oldPrice: null, promotion: null, image: "https://i.ibb.co/nNCfJB9L/riz1.jpg", description: "Riz de bonne qualité pour la famille." },
    104: { id: 104, name: "Huile végétale 1L", category: "Épicerie", price: 1800, oldPrice: null, promotion: null, image: "https://i.ibb.co/S4ynRh67/Huile-Vegetale-700x700.webp", description: "Huile végétale pour cuisson." },
    105: { id: 105, name: "Poulet frais entier", category: "Viandes / Poulet", price: 8000, oldPrice: null, promotion: null, image: "https://i.ibb.co/p6wNMW9h/poulet-entier-cru-frais-sur-le-fond-blanc-125776481.webp", description: "Poulet entier prêt à cuire." },
    106: { id: 106, name: "Steak de bœuf (1kg)", category: "Viandes / Poulet", price: 12000, oldPrice: null, promotion: null, image: "https://i.ibb.co/Z1FsvcD6/steak.jpg", description: "Steak de bœuf pour grillades." },
    107: { id: 107, name: "Eau minérale 1.5L", category: "Boissons", price: 300, oldPrice: null, promotion: null, image: "https://i.ibb.co/mVSfzhPz/eau-mineral.jpg", description: "Eau minérale pour toute la famille." },
    108: { id: 108, name: "Boisson gazeuse 50cl", category: "Boissons", price: 500, oldPrice: null, promotion: null, image: "https://i.ibb.co/S4SKgmJ3/bouteilles-de-boissons-gazeuses-global-brands-2hnmmgy.jpg", description: "Boisson rafraîchissante." },
    109: { id: 109, name: "Gel douche 500ml", category: "Hygiène & Beauté", price: 1500, oldPrice: null, promotion: null, image: "https://i.ibb.co/v4p3mrrP/ultra-hydratant-gel-douche-500ml-topicrem.jpg", description: "Gel douche pour tous types de peau." },
    110: { id: 110, name: "Shampooing 400ml", category: "Hygiène & Beauté", price: 2500, oldPrice: null, promotion: null, image: "https://i.ibb.co/Zpf9fjHV/shampoing.webp", description: "Shampooing nourrissant pour cheveux." },
    111: { id: 111, name: "Ventilateur sur pied", category: "Électroménager", price: 18000, oldPrice: null, promotion: null, image: "https://i.ibb.co/cShrgvgB/ventilo.jpg", description: "Ventilateur puissant pour la chaleur." },
    112: { id: 112, name: "Chaussures tennis homme", category: "Chaussures", price: 15000, oldPrice: null, promotion: null, image: "https://i.ibb.co/JWVnxwbt/chaussure.avif", description: "Baskets confortables pour homme." },
    113: { id: 113, name: "Coussin décoratif", category: "Maison & Décor", price: 5000, oldPrice: null, promotion: null, image: "https://i.ibb.co/zWDzMMJP/cousin.webp", description: "Coussin pour salon." },
    114: { id: 114, name: "Voiture miniature jouet", category: "Bébé & Enfants", price: 5000, oldPrice: null, promotion: null, image: "https://i.ibb.co/Hf6fqx5m/voiture.jpg", description: "Petite voiture pour enfants." },
    115: { id: 115, name: "Marteau de bricolage", category: "Jardin & Bricolage", price: 3000, oldPrice: null, promotion: null, image: "https://i.ibb.co/hxWytTXp/outils-de-bricolage-ensemble-avec-differents-types-de-cles-marteau-et-d-une-pince-ma60br.jpg", description: "Marteau pour petits travaux." },
    116: { id: 116, name: "Poupée enfant", category: "Bébé & Enfants", price: 7000, oldPrice: null, promotion: null, image: "https://i.ibb.co/tT9XTMbx/poup-e.webp", description: "Poupée pour jeux d'enfants." }
};

// ============================================
// GÉNÉRAL - FONCTIONS DE BASE
// ============================================

// Sanitizer pour les entrées utilisateur
function sanitizeInput(input) {
    if (!input) return '';
    const div = document.createElement('div');
    div.textContent = input;
    return div.innerHTML;
}

// Formater le prix
function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

// Afficher une notification
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
        <span>${sanitizeInput(message)}</span>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Fallback pour les produits non trouvés
function getProductFallback(productId) {
    return {
        id: productId,
        name: "Produit temporairement indisponible",
        price: 0,
        category: "Divers",
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        description: "Ce produit sera bientôt de retour"
    };
}

// ============================================
// GESTION DU PANIER
// ============================================

// Initialiser le panier
function initializeCart() {
    if (!localStorage.getItem('unimallCart')) {
        localStorage.setItem('unimallCart', JSON.stringify([]));
    }
}

// Mettre à jour le compteur du panier
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('unimallCart')) || [];
    const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
    const cartCountElement = document.getElementById('headerCartCount');
    if (cartCountElement) {
        cartCountElement.textContent = totalItems;
    }
}

// Ajouter un produit au panier
function addToCart(productId, button) {
    initializeCart();
    
    const cart = JSON.parse(localStorage.getItem('unimallCart')) || [];
    const product = productsData[productId] || getProductFallback(productId);
    
    const existingItemIndex = cart.findIndex(item => item.id === productId);
    
    if (existingItemIndex !== -1) {
        cart[existingItemIndex].quantity = (cart[existingItemIndex].quantity || 1) + 1;
    } else {
        const productToAdd = { ...product };
        productToAdd.quantity = 1;
        cart.push(productToAdd);
    }
    
    localStorage.setItem('unimallCart', JSON.stringify(cart));
    updateCartCount();
    
    // Feedback visuel
    if (button) {
        const originalHTML = button.innerHTML;
        button.innerHTML = '<i class="fas fa-check"></i> Ajouté !';
        button.style.background = '#388E3C';
        
        setTimeout(() => {
            button.innerHTML = originalHTML;
            button.style.background = '';
        }, 2000);
    }
    
    showNotification(`${product.name} a été ajouté à votre panier !`);
    
    // Animation sur l'icône du panier
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        cartCount.style.transform = 'scale(1.3)';
        setTimeout(() => {
            cartCount.style.transform = 'scale(1)';
        }, 300);
    }
}

// Configurer les boutons d'ajout au panier
function setupProductButtons() {
    // Boutons des produits promotionnels
    document.querySelectorAll('.btn-add-to-cart-promo').forEach(button => {
        const productId = parseInt(button.getAttribute('data-product-id'));
        if (!isNaN(productId)) {
            button.removeEventListener('click', handleAddToCart);
            button.addEventListener('click', handleAddToCart);
        }
    });
    
    // Boutons des produits par rayon
    document.querySelectorAll('.btn-add-to-cart-product').forEach(button => {
        const productId = parseInt(button.getAttribute('data-product-id'));
        if (!isNaN(productId)) {
            button.removeEventListener('click', handleAddToCart);
            button.addEventListener('click', handleAddToCart);
        }
    });
}

// Gestionnaire d'ajout au panier
function handleAddToCart(e) {
    e.preventDefault();
    const productId = parseInt(this.getAttribute('data-product-id'));
    addToCart(productId, this);
}

// Gestion du panier latéral
function toggleCart() {
    const cartPanel = document.getElementById('cartSection');
    const overlay = document.getElementById('cartOverlay');
    
    if (!cartPanel || !overlay) return;
    
    cartPanel.classList.toggle('active');
    overlay.classList.toggle('active');
    
    if (cartPanel.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
        renderCart();
    } else {
        document.body.style.overflow = '';
    }
}

// Afficher le contenu du panier
function renderCart() {
    const cart = JSON.parse(localStorage.getItem('unimallCart')) || [];
    const cartItemsContainer = document.getElementById('cartItems');
    const cartTotalElement = document.getElementById('cartTotal');
    const checkoutBtn = document.getElementById('checkoutBtn');
    
    if (!cartItemsContainer || !cartTotalElement || !checkoutBtn) return;
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <h3>Votre panier est vide</h3>
                <p>Ajoutez des produits à votre panier pour commencer vos achats</p>
            </div>
        `;
        cartTotalElement.textContent = '0';
        checkoutBtn.disabled = true;
        return;
    }
    
    let total = 0;
    let itemsHTML = '';
    
    cart.forEach((item, index) => {
        const quantity = item.quantity || 1;
        const itemTotal = item.price * quantity;
        total += itemTotal;
        
        itemsHTML += `
            <div class="cart-item" data-index="${index}">
                <div class="cart-item-info">
                    <div class="cart-item-name">${sanitizeInput(item.name)}</div>
                    <div class="cart-item-price">${formatPrice(item.price)} FCFA</div>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn minus" data-index="${index}">-</button>
                        <span>${quantity}</span>
                        <button class="quantity-btn plus" data-index="${index}">+</button>
                    </div>
                </div>
                <button class="remove-item" data-index="${index}">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
    });
    
    cartItemsContainer.innerHTML = itemsHTML;
    cartTotalElement.textContent = formatPrice(total);
    checkoutBtn.disabled = false;
    
    // Ajouter les événements
    attachCartItemEvents();
}

// Attacher les événements aux éléments du panier
function attachCartItemEvents() {
    // Boutons plus
    document.querySelectorAll('.quantity-btn.plus').forEach(btn => {
        btn.removeEventListener('click', handlePlusClick);
        btn.addEventListener('click', handlePlusClick);
    });
    
    // Boutons moins
    document.querySelectorAll('.quantity-btn.minus').forEach(btn => {
        btn.removeEventListener('click', handleMinusClick);
        btn.addEventListener('click', handleMinusClick);
    });
    
    // Boutons de suppression
    document.querySelectorAll('.remove-item').forEach(btn => {
        btn.removeEventListener('click', handleRemoveClick);
        btn.addEventListener('click', handleRemoveClick);
    });
}

function handlePlusClick(e) {
    e.preventDefault();
    updateQuantity(parseInt(this.dataset.index), 1);
}

function handleMinusClick(e) {
    e.preventDefault();
    updateQuantity(parseInt(this.dataset.index), -1);
}

function handleRemoveClick(e) {
    e.preventDefault();
    removeFromCart(parseInt(this.dataset.index));
}

// Mettre à jour la quantité
function updateQuantity(index, change) {
    const cart = JSON.parse(localStorage.getItem('unimallCart')) || [];
    
    if (cart[index]) {
        cart[index].quantity = (cart[index].quantity || 1) + change;
        
        if (cart[index].quantity <= 0) {
            cart.splice(index, 1);
        }
        
        localStorage.setItem('unimallCart', JSON.stringify(cart));
        renderCart();
        updateCartCount();
    }
}

// Supprimer un article
function removeFromCart(index) {
    const cart = JSON.parse(localStorage.getItem('unimallCart')) || [];
    
    if (cart[index]) {
        const productName = cart[index].name;
        cart.splice(index, 1);
        localStorage.setItem('unimallCart', JSON.stringify(cart));
        renderCart();
        updateCartCount();
        showNotification(`${productName} a été supprimé du panier`);
    }
}

// ============================================
// COMMANDE ET CHECKOUT
// ============================================

function goToCheckout() {
    const cart = JSON.parse(localStorage.getItem('unimallCart')) || [];
    
    if (cart.length === 0) {
        showNotification('Votre panier est vide', 'error');
        return;
    }
    
    const mainContent = document.getElementById('mainContent');
    const checkoutPage = document.getElementById('checkoutPage');
    
    if (mainContent && checkoutPage) {
        mainContent.style.display = 'none';
        checkoutPage.style.display = 'block';
    }
    
    // Fermer le panier si ouvert
    const cartPanel = document.getElementById('cartSection');
    const overlay = document.getElementById('cartOverlay');
    if (cartPanel && cartPanel.classList.contains('active')) {
        cartPanel.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    // Initialiser la page de commande
    loadCheckoutItems();
}

// Retour à la page d'accueil
function goToHome() {
    const checkoutPage = document.getElementById('checkoutPage');
    const mainContent = document.getElementById('mainContent');
    
    if (checkoutPage && mainContent) {
        checkoutPage.style.display = 'none';
        mainContent.style.display = 'block';
    }
    window.scrollTo(0, 0);
}

// Gestion de la page de commande
function loadCheckoutItems() {
    const cart = JSON.parse(localStorage.getItem('unimallCart')) || [];
    const itemsContainer = document.getElementById('checkoutItems');
    const totalElement = document.getElementById('checkoutTotal');
    
    if (!itemsContainer || !totalElement) return;
    
    if (cart.length === 0) {
        goToHome();
        return;
    }
    
    let total = 0;
    let itemsHTML = '';
    
    cart.forEach(item => {
        const quantity = item.quantity || 1;
        const itemTotal = item.price * quantity;
        total += itemTotal;
        
        itemsHTML += `
            <div class="summary-item">
                <span>${sanitizeInput(item.name)} × ${quantity}</span>
                <span>${formatPrice(itemTotal)} FCFA</span>
            </div>
        `;
    });
    
    itemsContainer.innerHTML = itemsHTML;
    totalElement.textContent = formatPrice(total);
}

// Navigation entre les étapes de commande
function nextStep(step) {
    if (step === 2) {
        const nom = document.getElementById('nom');
        const prenom = document.getElementById('prenom');
        const telephone = document.getElementById('telephone');
        
        if (!nom || !prenom || !telephone) return;
        
        if (!nom.value || !prenom.value || !telephone.value) {
            showNotification('Veuillez remplir tous les champs obligatoires', 'error');
            return;
        }
    }
    
    if (step === 3) {
        const adresse = document.getElementById('adresse');
        const quartier = document.getElementById('quartier');
        
        if (!adresse || !quartier) return;
        
        if (!adresse.value || !quartier.value) {
            showNotification('Veuillez remplir tous les champs obligatoires', 'error');
            return;
        }
    }
    
    for (let i = 1; i <= 4; i++) {
        const content = document.getElementById(`step${i}-content`);
        const stepEl = document.getElementById(`step${i}`);
        if (content) content.style.display = 'none';
        if (stepEl) {
            stepEl.classList.remove('active', 'completed');
        }
    }
    
    const nextContent = document.getElementById(`step${step}-content`);
    const nextStep = document.getElementById(`step${step}`);
    if (nextContent) nextContent.style.display = 'block';
    if (nextStep) nextStep.classList.add('active');
    
    for (let i = 1; i < step; i++) {
        const stepEl = document.getElementById(`step${i}`);
        if (stepEl) stepEl.classList.add('completed');
    }
}

function prevStep(step) {
    nextStep(step);
}

// Sélection du mode de livraison
function selectDelivery(element) {
    document.querySelectorAll('.payment-method').forEach(el => {
        el.classList.remove('selected');
    });
    element.classList.add('selected');
    
    const deliveryType = element.querySelector('input').value;
    const basePrice = window.baseDeliveryPrice || 1500;
    const deliveryCost = deliveryType === 'express' ? Math.round(basePrice * 2) : basePrice;
    
    const deliveryCostElement = document.getElementById('deliveryCost');
    if (deliveryCostElement) {
        deliveryCostElement.textContent = formatPrice(deliveryCost);
    }
    
    updateCheckoutTotal();
}

// Sélection du mode de paiement
function selectPayment(element) {
    document.querySelectorAll('.payment-method').forEach(el => {
        el.classList.remove('selected');
    });
    element.classList.add('selected');
    
    const paymentType = element.querySelector('input').value;
    const mobileDetails = document.getElementById('mobile-money-details');
    
    if (mobileDetails) {
        mobileDetails.style.display = paymentType === 'mobile' ? 'block' : 'none';
    }
}

// Mettre à jour le total de la commande
function updateCheckoutTotal() {
    const cart = JSON.parse(localStorage.getItem('unimallCart')) || [];
    const subtotal = cart.reduce((sum, item) => {
        const price = item.price || 0;
        const quantity = item.quantity || 1;
        return sum + (price * quantity);
    }, 0);
    
    const totalElement = document.getElementById('checkoutTotal');
    if (!totalElement) return;
    
    // Afficher le total (prix produits uniquement)
    totalElement.textContent = formatPrice(subtotal);
}

// Passer la commande
function placeOrder() {
    const terms = document.getElementById('terms');
    if (!terms || !terms.checked) {
        showNotification('Veuillez accepter les conditions générales de vente', 'error');
        return;
    }
    
    const paymentInput = document.querySelector('input[name="payment"]:checked');
    if (!paymentInput) return;
    
    const paymentType = paymentInput.value;
    
    if (paymentType === 'mobile') {
        const mobileNumber = document.getElementById('mobile-number');
        const mobileProvider = document.getElementById('mobile-provider');
        
        if (!mobileNumber || !mobileProvider) return;
        
        if (!mobileNumber.value || !mobileProvider.value) {
            showNotification('Veuillez remplir les détails du Mobile Money', 'error');
            return;
        }
    }
    
    // Récupérer toutes les informations du formulaire
    const nom = document.getElementById('nom')?.value || '';
    const prenom = document.getElementById('prenom')?.value || '';
    const telephone = document.getElementById('telephone')?.value || '';
    const email = document.getElementById('email')?.value || '';
    const adresse = document.getElementById('adresse')?.value || '';
    const quartier = document.getElementById('quartier')?.value || '';
    const ville = document.getElementById('ville')?.value || 'Ouagadougou';
    const instructions = document.getElementById('instructions')?.value || '';
    
    // Récupérer les coordonnées GPS si disponibles
    const userLocation = localStorage.getItem('userLocation');
    let googleMapsLink = '';
    let distance = '';
    
    if (userLocation) {
        try {
            const location = JSON.parse(userLocation);
            googleMapsLink = location.googleMapsLink || '';
            distance = location.distance ? `${location.distance.toFixed(2)} km` : '';
        } catch (e) {
            console.error('Erreur parsing location:', e);
        }
    }
    
    const orderId = 'UNI' + Date.now().toString().slice(-6);
    const orderIdElement = document.getElementById('orderId');
    if (orderIdElement) orderIdElement.textContent = orderId;
    
    const cart = JSON.parse(localStorage.getItem('unimallCart')) || [];
    let summaryHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        const quantity = item.quantity || 1;
        const itemTotal = item.price * quantity;
        total += itemTotal;
        
        summaryHTML += `
            <div class="summary-item">
                <span>${sanitizeInput(item.name)} × ${quantity}</span>
                <span>${formatPrice(itemTotal)} FCFA</span>
            </div>
        `;
    });
    
    // Créer le récapitulatif complet avec toutes les informations
    summaryHTML += `
        <div style="margin-top: 20px; padding-top: 20px; border-top: 2px solid #E0E0E0;">
            <h4 style="margin-bottom: 15px; color: var(--primary);">
                <i class="fas fa-user"></i> Informations client
            </h4>
            <div style="line-height: 1.8; color: #333;">
                <strong>Nom complet :</strong> ${sanitizeInput(prenom)} ${sanitizeInput(nom)}<br>
                <strong>Téléphone :</strong> ${sanitizeInput(telephone)}<br>
                ${email ? `<strong>Email :</strong> ${sanitizeInput(email)}<br>` : ''}
            </div>
        </div>
        
        <div style="margin-top: 20px; padding-top: 20px; border-top: 2px solid #E0E0E0;">
            <h4 style="margin-bottom: 15px; color: var(--primary);">
                <i class="fas fa-map-marker-alt"></i> Adresse de livraison
            </h4>
            <div style="line-height: 1.8; color: #333;">
                <strong>Adresse :</strong> ${sanitizeInput(adresse)}<br>
                <strong>Quartier :</strong> ${sanitizeInput(quartier)}<br>
                <strong>Ville :</strong> ${sanitizeInput(ville)}<br>
                ${distance ? `<strong>Distance :</strong> ${distance} depuis UNIMALL<br>` : ''}
                ${instructions ? `<strong>Instructions :</strong> ${sanitizeInput(instructions)}<br>` : ''}
            </div>
            ${googleMapsLink ? `
                <div style="margin-top: 15px;">
                    <a href="${googleMapsLink}" target="_blank" style="display: inline-block; padding: 10px 20px; background: #2E7D32; color: white; text-decoration: none; border-radius: 8px; font-weight: 600;">
                        <i class="fas fa-map-marked-alt"></i> Ouvrir avec Maps
                    </a>
                </div>
            ` : ''}
        </div>
        
        <div style="margin-top: 20px; padding-top: 20px; border-top: 2px solid #E0E0E0;">
            <h4 style="margin-bottom: 10px; color: var(--primary);">
                <i class="fas fa-info-circle"></i> Note importante
            </h4>
            <div style="background: #FFF3E0; padding: 15px; border-radius: 8px; border-left: 4px solid #F57C00;">
                <p style="color: #666; margin: 0;">
                    Le livreur vous contactera pour fixer le prix de livraison en fonction de la distance.
                </p>
            </div>
        </div>
    `;
    
    const orderSummary = document.getElementById('orderSummary');
    const orderTotal = document.getElementById('orderTotal');
    
    if (orderSummary) orderSummary.innerHTML = summaryHTML;
    if (orderTotal) orderTotal.textContent = formatPrice(total);
    
    nextStep(4);
    
    localStorage.setItem('unimallCart', JSON.stringify([]));
    updateCartCount();
    
    showNotification(`Commande #${orderId} confirmée ! Vous recevrez un SMS de confirmation.`);
}

// ============================================
// GÉOLOCALISATION
// ============================================

// Coordonnées du magasin UNIMALL (ZAD, Avenue Tensoba)
const UNIMALL_LOCATION = {
    lat: 12.3464,
    lng: -1.5186,
    address: "ZAD, Avenue Tensoba, Ouagadougou"
};

// Liste des quartiers de Ouagadougou avec leurs zones
const quartiersOuaga = [
    { name: "Centre-ville", lat: 12.3683, lng: -1.5275, zone: "Centre" },
    { name: "Koulouba", lat: 12.3597, lng: -1.5233, zone: "Centre" },
    { name: "Dapoya", lat: 12.3621, lng: -1.5112, zone: "Centre" },
    { name: "Gounghin", lat: 12.3578, lng: -1.4989, zone: "Centre" },
    { name: "Patte d'Oie", lat: 12.3315, lng: -1.5347, zone: "Nord" },
    { name: "Ouaga 2000", lat: 12.3956, lng: -1.4742, zone: "Nord" },
    { name: "Kamboinsin", lat: 12.4125, lng: -1.5139, zone: "Nord" },
    { name: "Tampouy", lat: 12.4267, lng: -1.4956, zone: "Nord" },
    { name: "Saaba", lat: 12.3247, lng: -1.4572, zone: "Est" },
    { name: "Tanghin", lat: 12.3189, lng: -1.4883, zone: "Est" },
    { name: "Bogodogo", lat: 12.3425, lng: -1.4825, zone: "Est" },
    { name: "Kologh-Naba", lat: 12.3567, lng: -1.5389, zone: "Ouest" },
    { name: "Cissin", lat: 12.3894, lng: -1.5567, zone: "Ouest" },
    { name: "Samandin", lat: 12.3156, lng: -1.5889, zone: "Ouest" },
    { name: "ZAD", lat: 12.3464, lng: -1.5186, zone: "Sud" },
    { name: "Somgandé", lat: 12.3122, lng: -1.5133, zone: "Sud" },
    { name: "Koubri", lat: 12.2636, lng: -1.4361, zone: "Sud" },
    { name: "Pissy", lat: 12.3344, lng: -1.5556, zone: "Périphérie" },
    { name: "Balkuy", lat: 12.4089, lng: -1.5467, zone: "Périphérie" },
    { name: "Nioko 2", lat: 12.3728, lng: -1.5011, zone: "Périphérie" }
];

// Calculer la distance entre deux points géographiques (formule de Haversine)
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Rayon de la Terre en km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
        Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
}

// Trouver le quartier le plus proche de l'utilisateur
function findNearestQuartier(userLat, userLng) {
    let nearestQuartier = quartiersOuaga[0];
    let minDistance = Infinity;
    
    quartiersOuaga.forEach(quartier => {
        const distance = calculateDistance(userLat, userLng, quartier.lat, quartier.lng);
        if (distance < minDistance) {
            minDistance = distance;
            nearestQuartier = quartier;
        }
    });
    
    return { quartier: nearestQuartier, distance: minDistance };
}

function getUserLocation() {
    const statusElement = document.getElementById('locationStatus');
    const locationBtn = document.getElementById('getLocationBtn');
    
    if (!statusElement || !locationBtn) return;
    
    if (!navigator.geolocation) {
        statusElement.innerHTML = `
            <div style="color: #D32F2F; padding: 10px; background: rgba(211, 47, 47, 0.1); border-radius: 8px;">
                <i class="fas fa-times-circle"></i>
                <strong>Géolocalisation non supportée</strong>
                <div style="margin-top: 5px; font-size: 13px;">
                    Votre navigateur ne supporte pas la géolocalisation. Veuillez saisir votre adresse manuellement.
                </div>
            </div>
        `;
        return;
    }
    
    // Vérifier les permissions si l'API est disponible
    if (navigator.permissions && navigator.permissions.query) {
        navigator.permissions.query({ name: 'geolocation' }).then(function(permissionStatus) {
            console.log('Permission de géolocalisation:', permissionStatus.state);
            
            if (permissionStatus.state === 'denied') {
                statusElement.innerHTML = `
                    <div style="color: #D32F2F; padding: 15px; background: rgba(211, 47, 47, 0.1); border-radius: 8px; border-left: 4px solid #D32F2F;">
                        <div style="display: flex; align-items: start; gap: 10px;">
                            <i class="fas fa-times-circle" style="font-size: 20px; margin-top: 2px;"></i>
                            <div style="flex: 1;">
                                <strong>Permission refusée</strong>
                                <div style="margin-top: 8px; font-size: 13px;">
                                    Vous avez bloqué l'accès à votre localisation. Pour l'activer :<br>
                                    1. Cliquez sur l'icône 🔒 à gauche de l'URL<br>
                                    2. Autorisez la localisation<br>
                                    3. Rechargez la page
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                locationBtn.innerHTML = '<i class="fas fa-ban"></i> Permission refusée';
                locationBtn.disabled = true;
                return;
            }
            
            // Continuer avec la géolocalisation
            requestGeolocation(statusElement, locationBtn);
        }).catch(function() {
            // Si l'API permissions n'est pas supportée, continuer quand même
            requestGeolocation(statusElement, locationBtn);
        });
    } else {
        // Si l'API permissions n'existe pas, continuer directement
        requestGeolocation(statusElement, locationBtn);
    }
}

function requestGeolocation(statusElement, locationBtn) {
    locationBtn.disabled = true;
    locationBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Localisation en cours...';
    statusElement.innerHTML = `
        <div style="color: #3498db; padding: 15px; background: rgba(52, 152, 219, 0.1); border-radius: 8px;">
            <i class="fas fa-satellite-dish fa-spin"></i>
            Détection de votre position en cours...
        </div>
    `;
    
    // Options de géolocalisation améliorées
    const geoOptions = {
        enableHighAccuracy: true,  // Active le GPS haute précision
        timeout: 15000,            // Délai max de 15 secondes
        maximumAge: 0              // Ne pas utiliser de position en cache
    };
    
    navigator.geolocation.getCurrentPosition(
        async function(position) {
            const userLat = position.coords.latitude;
            const userLng = position.coords.longitude;
            
            // Calculer la distance depuis UNIMALL
            const distanceFromUnimall = calculateDistance(userLat, userLng, UNIMALL_LOCATION.lat, UNIMALL_LOCATION.lng);
            
            // Trouver le quartier le plus proche (pour affichage uniquement)
            const nearestInfo = findNearestQuartier(userLat, userLng);
            
            // Récupérer l'adresse exacte
            const addressData = await getExactAddress(userLat, userLng);
            
            // Générer le lien Google Maps
            const mapsLink = generateGoogleMapsDirections(userLat, userLng);
            
            // Sauvegarder dans localStorage (sans le prix)
            localStorage.setItem('userLocation', JSON.stringify({
                latitude: userLat,
                longitude: userLng,
                exactAddress: addressData.success ? `${addressData.street}, ${addressData.quartier}` : '',
                quartier: addressData.success ? addressData.quartier : nearestInfo.quartier.name,
                ville: addressData.success ? addressData.ville : 'Ouagadougou',
                zone: nearestInfo.quartier.zone,
                googleMapsLink: mapsLink,
                distance: distanceFromUnimall,
                timestamp: Date.now()
            }));
            
            // Remplir les champs cachés si disponibles
            const mapsLinkField = document.getElementById('mapsLink');
            const coordinatesField = document.getElementById('coordinates');
            if (mapsLinkField) mapsLinkField.value = mapsLink;
            if (coordinatesField) coordinatesField.value = `${userLat},${userLng}`;
            
            // Afficher le résultat avec adresse ou sans
            if (addressData.success) {
                statusElement.innerHTML = `
                    <div style="color: #388E3C; padding: 20px; background: rgba(56, 142, 60, 0.1); border-radius: 12px; border-left: 4px solid #388E3C;">
                        <strong style="font-size: 16px;">📍 Position détectée !</strong>
                        
                        <div style="margin-top: 15px; padding: 15px; background: white; border-radius: 8px;">
                            <strong>🏠 Votre adresse :</strong><br>
                            ${addressData.street}<br>
                            ${addressData.quartier}${addressData.secteur ? ', ' + addressData.secteur : ''}<br>
                            ${addressData.ville}
                            
                            <div style="margin-top: 12px; padding-top: 12px; border-top: 1px solid #E0E0E0;">
                                <strong>📏 Distance :</strong><br>
                                Distance depuis UNIMALL : <strong>${distanceFromUnimall.toFixed(2)} km</strong>
                                <div style="margin-top: 8px; font-size: 13px; color: #666;">
                                    💡 Le livreur fixera le prix de livraison en fonction de cette distance
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                
                // Pré-remplir les champs d'adresse
                const adresseField = document.getElementById('adresse');
                const quartierField = document.getElementById('quartier');
                if (adresseField && !adresseField.value.trim()) {
                    adresseField.value = `${addressData.street}, ${addressData.quartier}`;
                }
                if (quartierField && !quartierField.value.trim()) {
                    quartierField.value = addressData.quartier;
                }
            } else {
                // Affichage simplifié sans adresse exacte
                statusElement.innerHTML = `
                    <div style="color: #388E3C; padding: 15px; background: rgba(56, 142, 60, 0.1); border-radius: 8px; border-left: 4px solid #388E3C;">
                        <div style="display: flex; align-items: start; gap: 10px;">
                            <i class="fas fa-check-circle" style="font-size: 20px; margin-top: 2px;"></i>
                            <div style="flex: 1;">
                                <strong>Position détectée avec succès !</strong>
                                <div style="margin-top: 8px; font-size: 13px; line-height: 1.6;">
                                    📍 Quartier approximatif: <strong>${nearestInfo.quartier.name}</strong> (${nearestInfo.quartier.zone})<br>
                                    📏 Distance depuis UNIMALL: <strong>${distanceFromUnimall.toFixed(2)} km</strong>
                                    <div style="margin-top: 8px; color: #666;">
                                        💡 Le livreur fixera le prix en fonction de cette distance
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                
                const quartierField = document.getElementById('quartier');
                if (quartierField && !quartierField.value.trim()) {
                    quartierField.value = nearestInfo.quartier.name;
                }
            }
            
            locationBtn.innerHTML = '<i class="fas fa-check-circle"></i> Position confirmée';
            locationBtn.style.background = '#388E3C';
            locationBtn.disabled = false;
        },
        function(error) {
            let message = "Erreur de géolocalisation";
            let suggestion = "Veuillez saisir votre adresse manuellement.";
            
            switch(error.code) {
                case error.PERMISSION_DENIED:
                    message = "Accès à la localisation refusé";
                    suggestion = "Autorisez l'accès à votre position dans les paramètres de votre navigateur.";
                    break;
                case error.POSITION_UNAVAILABLE:
                    message = "Position indisponible";
                    suggestion = "Vérifiez que votre GPS est activé et que vous avez une bonne connexion.";
                    break;
                case error.TIMEOUT:
                    message = "Délai de localisation dépassé";
                    suggestion = "La localisation prend trop de temps. Vérifiez votre connexion et réessayez.";
                    break;
                default:
                    message = "Erreur inconnue";
                    suggestion = "Une erreur est survenue. Veuillez réessayer ou saisir votre adresse manuellement.";
            }
            
            statusElement.innerHTML = `
                <div style="color: #F57C00; padding: 15px; background: rgba(245, 124, 0, 0.1); border-radius: 8px; border-left: 4px solid #F57C00;">
                    <div style="display: flex; align-items: start; gap: 10px;">
                        <i class="fas fa-exclamation-triangle" style="font-size: 20px; margin-top: 2px;"></i>
                        <div style="flex: 1;">
                            <strong>${message}</strong>
                            <div style="margin-top: 8px; font-size: 13px;">
                                ${suggestion}
                            </div>
                        </div>
                    </div>
                </div>
            `;
            
            locationBtn.innerHTML = '<i class="fas fa-redo"></i> Réessayer';
            locationBtn.disabled = false;
            locationBtn.style.background = '';
        },
        geoOptions
    );
}

// Générer un lien Google Maps pour le livreur
function generateGoogleMapsDirections(lat, lng) {
    return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
}

// Récupérer l'adresse exacte via l'API Nominatim
async function getExactAddress(latitude, longitude) {
    try {
        const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`;
        
        const response = await fetch(url, {
            headers: { 'Accept-Language': 'fr' }
        });
        
        if (!response.ok) throw new Error('Erreur de géocodage');
        
        const data = await response.json();
        const address = data.address || {};
        
        return {
            success: true,
            street: address.road || address.street || 'Rue non identifiée',
            quartier: address.suburb || address.neighbourhood || 'Quartier non identifié',
            secteur: address.city_district || '',
            ville: address.city || 'Ouagadougou'
        };
    } catch (error) {
        return { success: false };
    }
}

// Fonction pour copier le lien de localisation
function copyLocationLink(link) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(link).then(() => {
            showNotification('Lien copié ! Vous pouvez l\'envoyer au livreur', 'success');
        });
    } else {
        // Fallback pour les navigateurs plus anciens
        const textArea = document.createElement('textarea');
        textArea.value = link;
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand('copy');
            showNotification('Lien copié !', 'success');
        } catch (err) {
            showNotification('Erreur lors de la copie', 'error');
        }
        document.body.removeChild(textArea);
    }
}

function updateDeliveryPrice(price, distance = null) {
    const deliveryCostElement = document.getElementById('deliveryCost');
    if (!deliveryCostElement) return;
    
    const selectedDelivery = document.querySelector('input[name="delivery"]:checked');
    let finalPrice = price;
    
    if (selectedDelivery && selectedDelivery.value === 'express') {
        finalPrice = Math.round(price * 2);
    }
    
    deliveryCostElement.textContent = formatPrice(finalPrice);
    
    const standardRadio = document.querySelector('input[name="delivery"][value="standard"]');
    const expressRadio = document.querySelector('input[name="delivery"][value="express"]');
    
    if (standardRadio) {
        const standardDiv = standardRadio.closest('.payment-method')?.querySelector('div div:nth-child(2)');
        if (standardDiv) {
            standardDiv.textContent = `24-48h • ${formatPrice(price)} FCFA`;
        }
    }
    
    if (expressRadio) {
        const expressPrice = Math.round(price * 2);
        const expressDiv = expressRadio.closest('.payment-method')?.querySelector('div div:nth-child(2)');
        if (expressDiv) {
            expressDiv.textContent = `2-4h • ${formatPrice(expressPrice)} FCFA`;
        }
    }
    
    window.baseDeliveryPrice = price;
    updateCheckoutTotal();
}

function loadSavedLocation() {
    const savedLocation = localStorage.getItem('userLocation');
    if (!savedLocation) return;
    
    try {
        const location = JSON.parse(savedLocation);
        const oneDay = 24 * 60 * 60 * 1000;
        const isRecent = !location.timestamp || (Date.now() - location.timestamp) < oneDay;
        
        if (isRecent) {
            // Charger uniquement les informations de localisation, pas le prix
            const statusElement = document.getElementById('locationStatus');
            const locationBtn = document.getElementById('getLocationBtn');
            
            if (statusElement) {
                statusElement.innerHTML = `
                    <div style="color: #2196F3; padding: 12px; background: rgba(33, 150, 243, 0.1); border-radius: 8px; border-left: 4px solid #2196F3;">
                        <div style="display: flex; align-items: start; gap: 10px;">
                            <i class="fas fa-info-circle" style="font-size: 18px; margin-top: 2px;"></i>
                            <div style="flex: 1;">
                                <strong>Position sauvegardée</strong>
                                <div style="margin-top: 6px; font-size: 13px;">
                                    📍 ${location.quartier || 'Non spécifié'}<br>
                                    📏 ${location.distance.toFixed(2)} km depuis UNIMALL
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            }
            
            if (locationBtn) {
                locationBtn.innerHTML = '<i class="fas fa-redo"></i> Actualiser ma position';
            }
            
            const quartierField = document.getElementById('quartier');
            if (quartierField && !quartierField.value.trim() && location.quartier) {
                quartierField.value = location.quartier;
            }
        } else {
            localStorage.removeItem('userLocation');
        }
    } catch (e) {
        localStorage.removeItem('userLocation');
    }
}

// ============================================
// INITIALISATION
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('UNIMALL - Initialisation...');
    
    initializeCart();
    updateCartCount();
    setupProductButtons();
    
    loadSavedLocation();
    
    // Validation du champ téléphone - chiffres uniquement
    const telephoneInput = document.getElementById('telephone');
    if (telephoneInput) {
        telephoneInput.addEventListener('input', function(e) {
            // Garder uniquement les chiffres
            this.value = this.value.replace(/[^0-9]/g, '');
        });
    }
    
    // Gestion du panier
    const cartIcon = document.getElementById('cartIcon');
    if (cartIcon) {
        cartIcon.addEventListener('click', function(e) {
            e.preventDefault();
            toggleCart();
        });
    }
    
    const closeCart = document.getElementById('closeCart');
    if (closeCart) {
        closeCart.addEventListener('click', toggleCart);
    }
    
    const cartOverlay = document.getElementById('cartOverlay');
    if (cartOverlay) {
        cartOverlay.addEventListener('click', toggleCart);
    }
    
    const continueShopping = document.getElementById('continueShopping');
    if (continueShopping) {
        continueShopping.addEventListener('click', function(e) {
            e.preventDefault();
            toggleCart();
        });
    }
    
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', goToCheckout);
    }
    
    // Géolocalisation - un seul gestionnaire d'événement
    const getLocationBtn = document.getElementById('getLocationBtn');
    if (getLocationBtn) {
        getLocationBtn.addEventListener('click', getUserLocation);
    }
    
    // ============================================
    // NAVIGATION ACTIVE — barre suit le bon lien
    // ============================================

    const allNavLinks = document.querySelectorAll('nav a');

    function setActiveNavLink(target) {
        allNavLinks.forEach(a => a.classList.remove('active'));
        if (target) target.classList.add('active');
    }

    const homeLink = document.getElementById('homeLink');
    if (homeLink) {
        homeLink.addEventListener('click', function(e) {
            e.preventDefault();
            goToHome();
            setActiveNavLink(this);
        });
    }

    // Clic sur les autres liens nav
    document.querySelectorAll('nav a:not(#homeLink)').forEach(link => {
        link.addEventListener('click', function() {
            setActiveNavLink(this);
        });
    });

    // Scroll spy — détecte la section visible
    const spySections = [
        { id: 'delivery',   sel: 'nav a[href="#delivery"]'   },
        { id: 'rayons',     sel: 'nav a[href="#rayons"]'     },
        { id: 'promotions', sel: 'nav a[href="#promotions"]' },
    ];

    window.addEventListener('scroll', function() {
        const onCheckout = document.getElementById('checkoutPage')?.style.display === 'block';
        const onSearch   = document.getElementById('searchResultsPage')?.style.display === 'block';
        if (onCheckout || onSearch) return;

        const scrollY = window.scrollY + 120;
        let matched = false;

        for (const s of spySections) {
            const el = document.getElementById(s.id);
            if (el && scrollY >= el.offsetTop) {
                const lnk = document.querySelector(s.sel);
                if (lnk) setActiveNavLink(lnk);
                matched = true;
                break;
            }
        }
        if (!matched && homeLink) setActiveNavLink(homeLink);
    }, { passive: true });

    // ============================================
    // SLIDER HERO - BOUCLE INFINIE CONTINUE
    // ============================================

    (function() {
        const track = document.getElementById('sliderTrack');
        const dotsWrap = document.getElementById('sliderDots');
        const prevBtn = document.getElementById('sliderPrev');
        const nextBtn = document.getElementById('sliderNext');

        if (!track) return;

        const slides = Array.from(track.querySelectorAll('.slide'));
        const total = slides.length;
        let currentIndex = 0;
        let timer = null;
        const INTERVAL = 5000; // 5 secondes entre chaque slide

        // Dupliquer la première et dernière slide pour l'effet infini
        const firstClone = slides[0].cloneNode(true);
        const lastClone = slides[total - 1].cloneNode(true);
        
        // Ajouter les clones
        track.appendChild(firstClone);
        track.insertBefore(lastClone, slides[0]);
        
        // Position initiale sur la vraie première slide (index 1 à cause du clone)
        currentIndex = 1;
        track.style.transition = 'none';
        track.style.transform = `translateX(-${currentIndex * 100}%)`;

        // Créer les points de navigation (seulement pour les vraies slides)
        if (dotsWrap) {
            dotsWrap.innerHTML = '';
            slides.forEach((_, i) => {
                const dot = document.createElement('button');
                dot.className = 'slider-dot' + (i === 0 ? ' active' : '');
                dot.setAttribute('aria-label', 'Slide ' + (i + 1));
                dot.addEventListener('click', function() { 
                    goTo(i + 1, true); 
                });
                dotsWrap.appendChild(dot);
            });
        }

        function updateDots() {
            if (!dotsWrap) return;
            const dots = dotsWrap.querySelectorAll('.slider-dot');
            // Calculer l'index réel (sans les clones)
            let realIndex = currentIndex - 1;
            if (currentIndex === 0) realIndex = total - 1;
            if (currentIndex === total + 1) realIndex = 0;
            
            dots.forEach(function(dot, i) {
                dot.classList.toggle('active', i === realIndex);
            });
        }

        function goTo(index, smooth) {
            if (smooth === undefined) smooth = true;
            
            // Appliquer la transition
            track.style.transition = smooth ? 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)' : 'none';
            currentIndex = index;
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
            updateDots();
            
            // Gestion de la boucle infinie
            if (currentIndex === 0) {
                // Si on est sur le clone de la dernière slide, revenir à la vraie dernière
                setTimeout(function() {
                    track.style.transition = 'none';
                    currentIndex = total;
                    track.style.transform = `translateX(-${currentIndex * 100}%)`;
                    updateDots();
                }, 700);
            } else if (currentIndex === total + 1) {
                // Si on est sur le clone de la première slide, revenir à la vraie première
                setTimeout(function() {
                    track.style.transition = 'none';
                    currentIndex = 1;
                    track.style.transform = `translateX(-${currentIndex * 100}%)`;
                    updateDots();
                }, 700);
            }
        }

        function next() {
            stopAuto();
            goTo(currentIndex + 1, true);
            startAuto();
        }

        function prev() {
            stopAuto();
            goTo(currentIndex - 1, true);
            startAuto();
        }

        function startAuto() {
            clearInterval(timer);
            timer = setInterval(function() {
                goTo(currentIndex + 1, true);
            }, INTERVAL);
        }

        function stopAuto() {
            clearInterval(timer);
        }

        // Boutons de navigation
        if (prevBtn) prevBtn.addEventListener('click', prev);
        if (nextBtn) nextBtn.addEventListener('click', next);

        // Pause au survol
        const slider = document.getElementById('heroSlider');
        if (slider) {
            slider.addEventListener('mouseenter', stopAuto);
            slider.addEventListener('mouseleave', startAuto);
        }

        // Swipe tactile
        let touchStartX = 0;
        track.addEventListener('touchstart', function(e) {
            touchStartX = e.touches[0].clientX;
            stopAuto();
        }, { passive: true });
        
        track.addEventListener('touchend', function(e) {
            const diff = touchStartX - e.changedTouches[0].clientX;
            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                    next();
                } else {
                    prev();
                }
            } else {
                startAuto();
            }
        });

        // Démarrer le slider
        setTimeout(function() {
            goTo(1, false);
            updateDots();
            startAuto();
        }, 100);
    })();

    // ============================================
    // SYSTÈME DE RECHERCHE
    // ============================================

    const searchInput   = document.getElementById('searchInput');
    const searchClear   = document.getElementById('searchClear');
    const searchSugg    = document.getElementById('searchSuggestions');
    const searchToggle  = document.getElementById('searchToggleBtn');
    const searchWrapper = document.getElementById('searchWrapper');
    const searchBackBtn = document.getElementById('searchBackBtn');

    if (searchInput || searchWrapper) {
        function normalizeStr(str) {
            return str.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
        }
        function highlight(text, query) {
            if (!query) return text;
            const esc = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            return text.replace(new RegExp('(' + esc + ')', 'gi'), '<mark>$1</mark>');
        }
        function searchProducts(query) {
            const q = normalizeStr(query.trim());
            if (!q) return [];
            return Object.values(productsData).filter(p =>
                normalizeStr(p.name).includes(q) ||
                normalizeStr(p.category).includes(q) ||
                normalizeStr(p.description).includes(q)
            );
        }
        function closeSuggestions() {
            if (searchSugg) searchSugg.classList.remove('open');
        }
        function renderSuggestions(query) {
            if (!searchSugg) return;
            const results = searchProducts(query);
            if (!query.trim() || !results.length) { closeSuggestions(); return; }
            const top5 = results.slice(0, 5);
            let html = '<div class="suggestion-section-title"><i class="fas fa-box"></i> Produits</div>';
            top5.forEach(p => {
                html += '<div class="suggestion-item" data-id="' + p.id + '">'
                    + '<img class="suggestion-img" src="' + p.image + '" alt="" onerror="this.style.display=\'none\'">'
                    + '<div class="suggestion-info"><div class="suggestion-name">' + highlight(p.name, query.trim()) + '</div>'
                    + '<div class="suggestion-cat">' + p.category + '</div></div>'
                    + '<div class="suggestion-price">' + formatPrice(p.price) + ' FCFA</div>'
                    + '</div>';
            });
            if (results.length > 5) {
                html += '<div class="suggestion-footer" id="suggFooter"><i class="fas fa-search"></i> Voir les ' + results.length + ' résultats pour "<strong>' + query.trim() + '</strong>"</div>';
            }
            searchSugg.innerHTML = html;
            searchSugg.classList.add('open');
            searchSugg.querySelectorAll('.suggestion-item').forEach(item => {
                item.addEventListener('click', () => {
                    addToCart(parseInt(item.dataset.id), null);
                    closeSuggestions();
                    if (searchInput) searchInput.value = '';
                    if (searchClear) searchClear.classList.remove('visible');
                });
            });
            const sf = document.getElementById('suggFooter');
            if (sf) sf.addEventListener('click', () => showSearchResults(query.trim()));
        }

        let currentSearchQuery = '', currentFilterCat = 'Tous';

        function showSearchResults(query) {
            currentSearchQuery = query; currentFilterCat = 'Tous';
            closeSuggestions();
            document.getElementById('mainContent').style.display = 'none';
            document.getElementById('checkoutPage').style.display = 'none';
            const srp = document.getElementById('searchResultsPage');
            if (srp) srp.style.display = 'block';
            renderSearchResults(query, 'Tous');
            window.scrollTo({ top: 0, behavior: 'smooth' });
            if (searchWrapper) searchWrapper.classList.remove('mobile-open');
        }

        function renderSearchResults(query, filterCat) {
            let results = searchProducts(query);
            const title = document.getElementById('searchResultsTitle');
            const meta  = document.getElementById('searchResultsCount');
            if (title) title.textContent = 'Résultats pour "' + query + '"';
            const cats = ['Tous', ...new Set(results.map(p => p.category))];
            const fil = document.getElementById('searchFilters');
            if (fil) {
                fil.innerHTML = cats.map(c => '<button class="filter-chip ' + (c === filterCat ? 'active' : '') + '" data-cat="' + c + '">' + c + (c !== 'Tous' ? ' (' + results.filter(p => p.category === c).length + ')' : '') + '</button>').join('');
                fil.querySelectorAll('.filter-chip').forEach(btn => {
                    btn.addEventListener('click', () => { currentFilterCat = btn.dataset.cat; renderSearchResults(currentSearchQuery, currentFilterCat); });
                });
            }
            if (filterCat !== 'Tous') results = results.filter(p => p.category === filterCat);
            if (meta) meta.textContent = results.length + ' produit' + (results.length > 1 ? 's' : '') + ' trouvé' + (results.length > 1 ? 's' : '');
            const grid = document.getElementById('searchResultsGrid');
            const noR  = document.getElementById('searchNoResults');
            const noT  = document.getElementById('searchNoResultsText');
            if (!results.length) {
                if (grid) grid.innerHTML = '';
                if (noR) noR.style.display = 'block';
                if (noT) noT.textContent = 'Aucun produit pour "' + query + '"' + (filterCat !== 'Tous' ? ' dans "' + filterCat + '"' : '') + '.';
            } else {
                if (noR) noR.style.display = 'none';
                if (grid) {
                    grid.innerHTML = results.map(p =>
                        '<div class="search-product-card">'
                        + '<img class="search-product-img" src="' + p.image + '" alt="' + p.name + '" onerror="this.style.display=\'none\'">'
                        + '<div class="search-product-body">'
                        + '<div class="search-product-cat">' + p.category + '</div>'
                        + '<div class="search-product-name">' + highlight(p.name, query) + '</div>'
                        + '<div class="search-product-desc">' + p.description + '</div>'
                        + '<div class="search-product-footer"><div>'
                        + '<div class="search-product-price">' + formatPrice(p.price) + ' FCFA</div>'
                        + (p.oldPrice ? '<div class="search-product-old-price">' + formatPrice(p.oldPrice) + ' FCFA</div>' : '')
                        + '</div>'
                        + (p.promotion ? '<span class="search-promo-badge">' + p.promotion + '</span>' : '')
                        + '<button class="search-add-btn" data-id="' + p.id + '"><i class="fas fa-cart-plus"></i> Ajouter</button>'
                        + '</div></div></div>'
                    ).join('');
                    grid.querySelectorAll('.search-add-btn').forEach(btn => {
                        btn.addEventListener('click', () => addToCart(parseInt(btn.dataset.id), btn));
                    });
                }
            }
        }

        window.clearSearch = function() {
            const srp = document.getElementById('searchResultsPage');
            if (srp) srp.style.display = 'none';
            document.getElementById('mainContent').style.display = 'block';
            if (searchInput) searchInput.value = '';
            if (searchClear) searchClear.classList.remove('visible');
        };

        if (searchBackBtn) searchBackBtn.addEventListener('click', () => {
            const srp = document.getElementById('searchResultsPage');
            if (srp) srp.style.display = 'none';
            document.getElementById('mainContent').style.display = 'block';
            window.scrollTo({ top: 0 });
        });

        if (searchInput) {
            searchInput.addEventListener('input', () => {
                const v = searchInput.value;
                if (v.length) { searchClear.classList.add('visible'); renderSuggestions(v); }
                else { searchClear.classList.remove('visible'); closeSuggestions(); }
            });
            searchInput.addEventListener('keydown', e => {
                if (e.key === 'Enter' && searchInput.value.trim()) showSearchResults(searchInput.value.trim());
                if (e.key === 'Escape') { closeSuggestions(); searchInput.blur(); }
            });
        }
        if (searchClear) searchClear.addEventListener('click', () => {
            searchInput.value = ''; searchClear.classList.remove('visible'); closeSuggestions(); searchInput.focus();
        });
        document.addEventListener('click', e => {
            if (searchWrapper && !searchWrapper.contains(e.target)) closeSuggestions();
        });
        if (searchToggle && searchWrapper) {
            searchToggle.addEventListener('click', e => {
                e.stopPropagation();
                searchWrapper.classList.toggle('mobile-open');
                if (searchWrapper.classList.contains('mobile-open') && searchInput) setTimeout(() => searchInput.focus(), 50);
            });
        }
    }

    // Delivery radio
    document.querySelectorAll('input[name="delivery"]').forEach(input => {
        input.addEventListener('change', function() {
            const basePrice = window.baseDeliveryPrice || 1500;
            const deliveryCost = this.value === 'express' ? Math.round(basePrice * 2) : basePrice;
            const el = document.getElementById('deliveryCost');
            if (el) el.textContent = formatPrice(deliveryCost);
            updateCheckoutTotal();
        });
    });

    // Scroll to top
    const scrollBtn = document.getElementById('scrollToTop');
    if (scrollBtn) {
        window.addEventListener('scroll', () => scrollBtn.classList.toggle('show', window.scrollY > 300));
        scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }

    console.log('UNIMALL - Initialisation terminée');
});
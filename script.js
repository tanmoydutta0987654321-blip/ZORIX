// =========== NOTIFICATION SYSTEM ===========
// Notification system is now handled in the UTILITIES section below

// Global error handler for images
document.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG') {
        e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"%3E%3Crect fill="%23f0f0f0" width="200" height="200"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%23999" font-size="12"%3EImage Not Found%3C/text%3E%3C/svg%3E';
        e.target.style.opacity = '0.7';
    }
}, true);

// =========== PRODUCT DATABASE ===========
const productsDatabase = [
    // Kitchen Products
    {
        id: 1,
        name: 'Stainless Steel Cookware Set',
        price: 89.99,
        originalPrice: 129.99,
        category: 'Kitchen',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=500&h=500&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=500&h=500&fit=crop',
            'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=500&h=500&fit=crop'
        ],
        description: 'Professional grade stainless steel cookware set',
        features: ['Non-stick coating', 'Heat resistant handles', '10-piece set', 'Induction compatible'],
        inStock: true
    },
    {
        id: 2,
        name: 'Non-Stick Frying Pan',
        price: 34.99,
        originalPrice: 49.99,
        category: 'Kitchen',
        rating: 4,
        image: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=500&h=500&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=500&h=500&fit=crop',
            'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&h=500&fit=crop'
        ],
        description: 'Perfect for everyday cooking',
        features: ['Easy to clean', 'Dishwasher safe', '10-inch diameter', 'Aluminum core'],
        inStock: true
    },
    {
        id: 3,
        name: 'Kitchen Knife Set',
        price: 44.99,
        originalPrice: 69.99,
        category: 'Kitchen',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1593618998160-e34014e67546?w=500&h=500&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1593618998160-e34014e67546?w=500&h=500&fit=crop'
        ],
        description: 'Professional chef knife set',
        features: ['6-piece set', 'German stainless steel', 'Cut-resistant sheath', 'Ergonomic handles'],
        inStock: true
    },
    {
        id: 4,
        name: 'Blender Pro',
        price: 129.99,
        originalPrice: 179.99,
        category: 'Kitchen',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1590080876614-bc3ecca9b908?w=500&h=500&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1590080876614-bc3ecca9b908?w=500&h=500&fit=crop'
        ],
        description: 'Powerful 2000W blender',
        features: ['10 speed settings', '2-liter pitcher', 'Pulse function', 'Smoothie recipes included'],
        inStock: true
    },

    // Kids Products
    {
        id: 5,
        name: 'LEGO Building Set',
        price: 59.99,
        originalPrice: 79.99,
        category: 'Kids',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1590080876614-bc3ecca9b908?w=500&h=500&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1590080876614-bc3ecca9b908?w=500&h=500&fit=crop'
        ],
        description: '1000 piece LEGO set for creative building',
        features: ['1000+ pieces', 'Building instructions', 'Storage box', 'Age 6+'],
        inStock: true
    },
    {
        id: 6,
        name: 'Kids Bicycle',
        price: 149.99,
        originalPrice: 199.99,
        category: 'Kids',
        rating: 4,
        image: 'https://images.unsplash.com/photo-1522133573892-7f3a97e29e90?w=500&h=500&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1522133573892-7f3a97e29e90?w=500&h=500&fit=crop'
        ],
        description: 'Safety-designed kids bicycle',
        features: ['Training wheels included', 'Reflectors', 'Bell and basket', 'Ages 5-8'],
        inStock: true
    },
    {
        id: 7,
        name: 'Educational Puzzle Set',
        price: 24.99,
        originalPrice: 34.99,
        category: 'Kids',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1516542748618-5d0a3a311e11?w=500&h=500&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1516542748618-5d0a3a311e11?w=500&h=500&fit=crop'
        ],
        description: 'Colorful educational puzzles',
        features: ['4 different puzzles', 'Safe materials', 'Develops problem solving', 'Ages 3+'],
        inStock: true
    },
    {
        id: 8,
        name: 'Remote Control Car',
        price: 44.99,
        originalPrice: 64.99,
        category: 'Kids',
        rating: 4,
        image: 'https://images.unsplash.com/photo-1593642632823-8f503f7963d5?w=500&h=500&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1593642632823-8f503f7963d5?w=500&h=500&fit=crop'
        ],
        description: 'Fast RC car for outdoor fun',
        features: ['30m range', '2 hour battery', 'Speed up to 25 mph', 'All-terrain wheels'],
        inStock: true
    },

    // Pets Products
    {
        id: 9,
        name: 'Dog Food Premium',
        price: 39.99,
        originalPrice: 54.99,
        category: 'Pets',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?w=500&h=500&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?w=500&h=500&fit=crop'
        ],
        description: 'Nutritious dog food for all breeds',
        features: ['Grain-free', 'Natural ingredients', '20lb bag', 'Vet recommended'],
        inStock: true
    },
    {
        id: 10,
        name: 'Pet Bed Comfortable',
        price: 49.99,
        originalPrice: 69.99,
        category: 'Pets',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1545144611-83a5bda32e9f?w=500&h=500&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1545144611-83a5bda32e9f?w=500&h=500&fit=crop'
        ],
        description: 'Orthopedic pet bed for comfort',
        features: ['Memory foam', 'Washable cover', 'XL size', 'Water resistant'],
        inStock: true
    },
    {
        id: 11,
        name: 'Pet Toy Set',
        price: 19.99,
        originalPrice: 29.99,
        category: 'Pets',
        rating: 4,
        image: 'https://images.unsplash.com/photo-1587300411107-ec48ec489b61?w=500&h=500&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1587300411107-ec48ec489b61?w=500&h=500&fit=crop'
        ],
        description: 'Fun toys for active pets',
        features: ['10 toys included', 'Safe materials', 'Various textures', 'Great for training'],
        inStock: true
    },
    {
        id: 12,
        name: 'Pet Grooming Kit',
        price: 54.99,
        originalPrice: 79.99,
        category: 'Pets',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1566216443837-fc153ccf9066?w=500&h=500&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1566216443837-fc153ccf9066?w=500&h=500&fit=crop'
        ],
        description: 'Professional grooming tools',
        features: ['12 pieces included', 'Ergonomic handles', 'Travel case', 'Professional grade'],
        inStock: true
    },

    // Gym Products
    {
        id: 13,
        name: 'Dumbbells Set',
        price: 89.99,
        originalPrice: 129.99,
        category: 'Gym',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&h=500&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&h=500&fit=crop'
        ],
        description: 'Adjustable dumbbells set',
        features: ['5-25 lbs', 'Adjustable weights', 'Non-slip handles', 'Storage stand included'],
        inStock: true
    },
    {
        id: 14,
        name: 'Yoga Mat Premium',
        price: 29.99,
        originalPrice: 44.99,
        category: 'Gym',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1517836357463-c0869be61fe1?w=500&h=500&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1517836357463-c0869be61fe1?w=500&h=500&fit=crop'
        ],
        description: 'Non-slip yoga and exercise mat',
        features: ['6mm thickness', 'TPE material', 'Extra long', 'Carrying strap included'],
        inStock: true
    },
    {
        id: 15,
        name: 'Resistance Bands Set',
        price: 24.99,
        originalPrice: 34.99,
        category: 'Gym',
        rating: 4,
        image: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=500&h=500&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=500&h=500&fit=crop'
        ],
        description: 'Resistance bands for strength training',
        features: ['5 different strengths', 'Portable', 'Latex-free', 'Multi-use loops'],
        inStock: true
    },
    {
        id: 16,
        name: 'Treadmill Electric',
        price: 399.99,
        originalPrice: 549.99,
        category: 'Gym',
        rating: 4,
        image: 'https://images.unsplash.com/photo-1570829460005-c840387bb1ca?w=500&h=500&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1570829460005-c840387bb1ca?w=500&h=500&fit=crop'
        ],
        description: 'Electric treadmill for home use',
        features: ['0-12 mph speed', 'Foldable', 'LCD display', '300lb capacity'],
        inStock: true
    },

    // Fashion Products
    {
        id: 17,
        name: 'Cotton T-Shirt',
        price: 19.99,
        originalPrice: 29.99,
        category: 'Fashion',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop'
        ],
        description: 'Premium cotton t-shirt',
        features: ['100% organic cotton', 'Breathable fabric', 'Available in 5 colors', 'Sizes XS-XXL'],
        inStock: true
    },
    {
        id: 18,
        name: 'Denim Jeans',
        price: 54.99,
        originalPrice: 79.99,
        category: 'Fashion',
        rating: 4,
        image: 'https://images.unsplash.com/photo-1542272604-787c62d465d1?w=500&h=500&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1542272604-787c62d465d1?w=500&h=500&fit=crop'
        ],
        description: 'Classic blue denim jeans',
        features: ['High quality denim', 'Comfortable fit', 'Sizes 28-42', '5-pocket design'],
        inStock: true
    },
    {
        id: 19,
        name: 'Winter Jacket',
        price: 139.99,
        originalPrice: 199.99,
        category: 'Fashion',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1591047139829-74a440642117?w=500&h=500&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1591047139829-74a440642117?w=500&h=500&fit=crop'
        ],
        description: 'Warm winter jacket',
        features: ['Waterproof', 'Insulated', 'Multiple pockets', 'Adjustable hood'],
        inStock: true
    },
    {
        id: 20,
        name: 'Sneakers Athletic',
        price: 84.99,
        originalPrice: 124.99,
        category: 'Fashion',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop'
        ],
        description: 'Professional athletic sneakers',
        features: ['Cushioned sole', 'Breathable mesh', 'Sizes 6-14', 'Available in 3 colors'],
        inStock: true
    },

    // Electronics Products
    {
        id: 21,
        name: 'Wireless Headphones',
        price: 129.99,
        originalPrice: 179.99,
        category: 'Electronics',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop'
        ],
        description: 'Premium wireless headphones',
        features: ['30-hour battery', 'Noise cancellation', 'Bluetooth 5.0', 'Built-in microphone'],
        inStock: true
    },
    {
        id: 22,
        name: 'USB-C Cable Pack',
        price: 14.99,
        originalPrice: 24.99,
        category: 'Electronics',
        rating: 4,
        image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500&h=500&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500&h=500&fit=crop'
        ],
        description: 'High-speed USB-C cables',
        features: ['3-pack', 'Fast charging', '10ft length', 'Durable nylon coating'],
        inStock: true
    },
    {
        id: 23,
        name: 'Power Bank 20000mAh',
        price: 34.99,
        originalPrice: 49.99,
        category: 'Electronics',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1609042235495-f8f5e941b4b1?w=500&h=500&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1609042235495-f8f5e941b4b1?w=500&h=500&fit=crop'
        ],
        description: 'Fast charging power bank',
        features: ['20000mAh capacity', 'Dual USB ports', 'LED display', 'Compact design'],
        inStock: true
    },
    {
        id: 24,
        name: 'Bluetooth Speaker',
        price: 59.99,
        originalPrice: 84.99,
        category: 'Electronics',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1589003077984-894e133814c9?w=500&h=500&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1589003077984-894e133814c9?w=500&h=500&fit=crop'
        ],
        description: 'Portable Bluetooth speaker',
        features: ['360° sound', 'Waterproof', '24-hour battery', 'Built-in microphone'],
        inStock: true
    },

    // Mobile Products
    {
        id: 25,
        name: 'Screen Protector Glass',
        price: 9.99,
        originalPrice: 14.99,
        category: 'Mobile',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1505880257202-06d88a8da576?w=500&h=500&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1505880257202-06d88a8da576?w=500&h=500&fit=crop'
        ],
        description: 'Tempered glass screen protector',
        features: ['2.5D curved edges', '9H hardness', 'Easy installation', '2-pack'],
        inStock: true
    },
    {
        id: 26,
        name: 'Phone Case Protective',
        price: 19.99,
        originalPrice: 29.99,
        category: 'Mobile',
        rating: 4,
        image: 'https://images.unsplash.com/photo-1600788857-20c60a20c6c0?w=500&h=500&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1600788857-20c60a20c6c0?w=500&h=500&fit=crop'
        ],
        description: 'Heavy-duty phone protective case',
        features: ['Shock absorption', 'Anti-slip', 'Multiple color options', 'Universal fit'],
        inStock: true
    },
    {
        id: 27,
        name: 'Phone Stand Desktop',
        price: 14.99,
        originalPrice: 24.99,
        category: 'Mobile',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1565378578071-e4d4b14b9fa8?w=500&h=500&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1565378578071-e4d4b14b9fa8?w=500&h=500&fit=crop'
        ],
        description: 'Adjustable phone stand',
        features: ['360° rotation', 'Aluminum alloy', 'Foldable', 'Non-slip pads'],
        inStock: true
    },
    {
        id: 28,
        name: 'Charging Cable Pack',
        price: 19.99,
        originalPrice: 29.99,
        category: 'Mobile',
        rating: 4,
        image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500&h=500&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500&h=500&fit=crop'
        ],
        description: 'Multi-device charging cables',
        features: ['Lightning/USB-C/Micro', '3-pack', 'Fast charging', 'Nylon braided'],
        inStock: true
    },

    // Grocery Products
    {
        id: 29,
        name: 'Fresh Tomatoes',
        price: 4.99,
        originalPrice: 6.99,
        category: 'Vegetables',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1595521096291-87c89b0b3c5e?w=500&h=500&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1595521096291-87c89b0b3c5e?w=500&h=500&fit=crop'
        ],
        description: 'Fresh ripe tomatoes',
        features: ['Organic', '1lb pack', 'Ready to eat', 'Delivery 10-20 mins'],
        inStock: true
    },
    {
        id: 30,
        name: 'Organic Spinach',
        price: 3.99,
        originalPrice: 5.99,
        category: 'Vegetables',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1511621776919-a63c9b2b5533?w=500&h=500&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1511621776919-a63c9b2b5533?w=500&h=500&fit=crop'
        ],
        description: 'Fresh organic spinach',
        features: ['Pesticide-free', '200g pack', 'Crisp greens', 'Delivery 10-20 mins'],
        inStock: true
    },
    {
        id: 31,
        name: 'Broccoli Fresh',
        price: 3.49,
        originalPrice: 5.49,
        category: 'Vegetables',
        rating: 4,
        image: 'https://images.unsplash.com/photo-1535357061684-37d7d6950e6d?w=500&h=500&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1535357061684-37d7d6950e6d?w=500&h=500&fit=crop'
        ],
        description: 'Fresh green broccoli heads',
        features: ['Crispy texture', 'Vitamin C rich', 'Medium size', 'Delivery 10-20 mins'],
        inStock: true
    },
    {
        id: 32,
        name: 'Carrots Bundle',
        price: 2.99,
        originalPrice: 4.99,
        category: 'Vegetables',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&h=500&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&h=500&fit=crop'
        ],
        description: 'Fresh orange carrots',
        features: ['1.5lb bundle', 'Sweet flavor', 'Crunchy', 'Delivery 10-20 mins'],
        inStock: true
    },
    {
        id: 33,
        name: 'Red Apples Pack',
        price: 5.99,
        originalPrice: 8.99,
        category: 'Fruits',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1560806887-1195c9e684de?w=500&h=500&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1560806887-1195c9e684de?w=500&h=500&fit=crop'
        ],
        description: 'Crisp red apples',
        features: ['6-pack', 'Organic', 'Sweet taste', 'Delivery 10-20 mins'],
        inStock: true
    },
    {
        id: 34,
        name: 'Bananas Fresh',
        price: 2.49,
        originalPrice: 3.99,
        category: 'Fruits',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=500&h=500&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=500&h=500&fit=crop'
        ],
        description: 'Yellow ripe bananas',
        features: ['1lb bunch', 'Perfect ripeness', 'Natural sweetness', 'Delivery 10-20 mins'],
        inStock: true
    },
    {
        id: 35,
        name: 'Oranges Box',
        price: 6.99,
        originalPrice: 9.99,
        category: 'Fruits',
        rating: 4,
        image: 'https://images.unsplash.com/photo-1600271886742-f049cd1223f1?w=500&h=500&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1600271886742-f049cd1223f1?w=500&h=500&fit=crop'
        ],
        description: 'Juicy oranges box',
        features: ['8-pack', 'Fresh squeezed juice', 'Vitamin C', 'Delivery 10-20 mins'],
        inStock: true
    },
    {
        id: 36,
        name: 'Strawberries Fresh',
        price: 7.99,
        originalPrice: 11.99,
        category: 'Fruits',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1464454709131-ffd692591ee5?w=500&h=500&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1464454709131-ffd692591ee5?w=500&h=500&fit=crop'
        ],
        description: 'Sweet fresh strawberries',
        features: ['1.5lb box', 'Red ripe', 'No additives', 'Delivery 10-20 mins'],
        inStock: true
    },
    {
        id: 37,
        name: 'Chicken Breast',
        price: 12.99,
        originalPrice: 16.99,
        category: 'Meat',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=500&h=500&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=500&h=500&fit=crop'
        ],
        description: 'Fresh chicken breast',
        features: ['2lb pack', 'Hormone-free', 'Cold storage', 'Delivery 10-20 mins'],
        inStock: true
    },
    {
        id: 38,
        name: 'Ground Beef',
        price: 9.99,
        originalPrice: 13.99,
        category: 'Meat',
        rating: 4,
        image: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=500&h=500&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=500&h=500&fit=crop'
        ],
        description: 'Lean ground beef',
        features: ['1.5lb pack', '90% lean', 'Fresh quality', 'Delivery 10-20 mins'],
        inStock: true
    },
    {
        id: 39,
        name: 'Fish Fillet',
        price: 14.99,
        originalPrice: 19.99,
        category: 'Meat',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1580959375944-abd7e991da6a?w=500&h=500&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1580959375944-abd7e991da6a?w=500&h=500&fit=crop'
        ],
        description: 'Fresh salmon fillets',
        features: ['1lb pack', 'Wild caught', 'Rich in Omega-3', 'Delivery 10-20 mins'],
        inStock: true
    },
    {
        id: 40,
        name: 'Organic Eggs',
        price: 7.99,
        originalPrice: 10.99,
        category: 'Meat',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1585849771947-03f75db94a8a?w=500&h=500&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1585849771947-03f75db94a8a?w=500&h=500&fit=crop'
        ],
        description: 'Free-range organic eggs',
        features: ['1 dozen', 'Farm fresh', 'No hormones', 'Delivery 10-20 mins'],
        inStock: true
    },
    {
        id: 41,
        name: 'Chocolate Chips',
        price: 3.99,
        originalPrice: 5.99,
        category: 'Snacks',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1599599810369-2b82f6428e94?w=500&h=500&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1599599810369-2b82f6428e94?w=500&h=500&fit=crop'
        ],
        description: 'Premium chocolate chips',
        features: ['12oz pack', '70% cocoa', 'Baking ready', 'Delivery 10-20 mins'],
        inStock: true
    },
    {
        id: 42,
        name: 'Nuts Mix',
        price: 8.99,
        originalPrice: 12.99,
        category: 'Snacks',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=500&h=500&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=500&h=500&fit=crop'
        ],
        description: 'Healthy mixed nuts',
        features: ['1.5lb bag', 'No salt', 'Raw natural', 'Delivery 10-20 mins'],
        inStock: true
    },
    {
        id: 43,
        name: 'Granola Cereal',
        price: 5.99,
        originalPrice: 8.99,
        category: 'Snacks',
        rating: 4,
        image: 'https://images.unsplash.com/photo-1574521521267-430eef565f0e?w=500&h=500&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1574521521267-430eef565f0e?w=500&h=500&fit=crop'
        ],
        description: 'Organic granola cereal',
        features: ['500g box', 'Gluten-free', 'Honey sweetened', 'Delivery 10-20 mins'],
        inStock: true
    },
    {
        id: 44,
        name: 'Yogurt Pack',
        price: 6.99,
        originalPrice: 9.99,
        category: 'Snacks',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1533134242443-742a28317633?w=500&h=500&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1533134242443-742a28317633?w=500&h=500&fit=crop'
        ],
        description: 'Greek yogurt pack',
        features: ['6-pack 200g', 'Plain natural', 'No additives', 'Delivery 10-20 mins'],
        inStock: true
    }
];

// =========== CART MANAGEMENT ===========
function getCart() {
    const cart = localStorage.getItem('groceryCart');
    return cart ? JSON.parse(cart) : [];
}

function saveCart(cart) {
    localStorage.setItem('groceryCart', JSON.stringify(cart));
}

function addToCart(productId, quantity = 1) {
    const product = productsDatabase.find(p => p.id === productId);
    if (!product) return;

    let cart = getCart();
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            ...product,
            quantity: quantity
        });
    }

    saveCart(cart);
    updateCartCount();
    showNotification(`${product.name} added to cart!`);
}

function removeFromCart(productId) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== productId);
    saveCart(cart);
    updateCartCount();
}

function updateCartQuantity(productId, quantity) {
    let cart = getCart();
    const item = cart.find(p => p.id === productId);
    if (item) {
        item.quantity = Math.max(1, quantity);
        saveCart(cart);
        updateCartCount();
    }
}

function updateCartCount() {
    const cart = getCart();
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountElements = document.querySelectorAll('#cartCount');
    cartCountElements.forEach(element => {
        element.textContent = totalItems;
    });
}

function calculateCartTotal() {
    const cart = getCart();
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.08;
    const shipping = subtotal > 50 ? 0 : 10;
    const total = subtotal + tax + shipping;

    return {
        subtotal: subtotal.toFixed(2),
        tax: tax.toFixed(2),
        shipping: shipping.toFixed(2),
        total: total.toFixed(2),
        discount: '0.00'
    };
}

// =========== PRODUCT RENDERING ===========
function renderProducts(products, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = products.map(product => `
        <div class="product-card" onclick="goToProduct(${product.id})">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/220x220?text=Product'">
                <span class="product-badge">${Math.round((1 - product.price / product.originalPrice) * 100)}% OFF</span>
            </div>
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-rating">${'★'.repeat(product.rating)}${'☆'.repeat(5 - product.rating)}</div>
                <div class="product-price">
                    <span class="price">$${product.price.toFixed(2)}</span>
                    <span class="original-price">$${product.originalPrice.toFixed(2)}</span>
                </div>
                <div class="product-actions">
                    <button class="add-to-cart-btn" onclick="event.stopPropagation(); addToCart(${product.id})">Add to Cart</button>
                </div>
            </div>
        </div>
    `).join('');
}

function loadFeaturedProducts() {
    const featured = productsDatabase.slice(0, 8);
    renderProducts(featured, 'featuredProducts');
}

function loadShopProducts() {
    renderProducts(productsDatabase, 'shopProducts');
}

function loadGroceryProducts(category) {
    const filtered = productsDatabase.filter(p => p.category === category);
    const container = document.getElementById('groceryProducts');
    if (!container) return;

    container.innerHTML = filtered.map(product => `
        <div class="product-card">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/220x220?text=Product'">
                <span class="delivery-badge">⚡ 10-20 min</span>
            </div>
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-rating">${'★'.repeat(product.rating)}${'☆'.repeat(5 - product.rating)}</div>
                <div class="product-price">
                    <span class="price">$${product.price.toFixed(2)}</span>
                </div>
                <div class="product-actions">
                    <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Add to Cart</button>
                </div>
            </div>
        </div>
    `).join('');
}

function loadCategoryProducts() {
    const params = new URLSearchParams(window.location.search);
    const category = params.get('category') || 'Kitchen';
    
    document.getElementById('categoryTitle').textContent = category;
    document.getElementById('breadcrumbCategory').textContent = category;
    
    const filtered = productsDatabase.filter(p => p.category === category);
    renderProducts(filtered, 'categoryProducts');
}

function filterByCategory(category) {
    window.location.href = `category.html?category=${category}`;
}

// =========== PRODUCT DETAILS PAGE ===========
function loadProductDetails() {
    const params = new URLSearchParams(window.location.search);
    const productId = parseInt(params.get('id')) || 1;
    const product = productsDatabase.find(p => p.id === productId);

    if (!product) return;

    document.getElementById('productName').textContent = product.name;
    document.getElementById('mainImage').src = product.image;
    document.getElementById('breadcrumbProduct').textContent = product.name;
    document.getElementById('productRating').textContent = '★'.repeat(product.rating) + '☆'.repeat(5 - product.rating);
    document.getElementById('ratingCount').textContent = `(${Math.floor(Math.random() * 500) + 50} reviews)`;
    document.getElementById('productPrice').textContent = `$${product.price.toFixed(2)}`;
    document.getElementById('originalPrice').textContent = `$${product.originalPrice.toFixed(2)}`;
    document.getElementById('productDescription').textContent = product.description;
    document.getElementById('productCategory').textContent = product.category;
    document.getElementById('sku').textContent = `SKU-${product.id}`;
    document.getElementById('detailedDescription').textContent = product.description;

    // Product features
    const featuresList = document.getElementById('productFeatures');
    featuresList.innerHTML = product.features.map(f => `<li>${f}</li>`).join('');

    // Thumbnails
    const gallery = document.getElementById('thumbnailGallery');
    gallery.innerHTML = product.images.map((img, idx) => `
        <div class="thumbnail" onclick="updateMainImage('${img}')">
            <img src="${img}" alt="Thumbnail ${idx + 1}" onerror="this.src='https://via.placeholder.com/80x80?text=Img'">
        </div>
    `).join('');

    // Quantity controls
    document.getElementById('quantity').value = 1;
    document.getElementById('increaseQty').addEventListener('click', () => {
        const qty = document.getElementById('quantity');
        qty.value = parseInt(qty.value) + 1;
    });
    document.getElementById('decreaseQty').addEventListener('click', () => {
        const qty = document.getElementById('quantity');
        qty.value = Math.max(1, parseInt(qty.value) - 1);
    });

    // Add to cart
    document.getElementById('addToCartBtn').addEventListener('click', () => {
        const qty = parseInt(document.getElementById('quantity').value);
        addToCart(productId, qty);
    });
}

function updateMainImage(imageSrc) {
    document.getElementById('mainImage').src = imageSrc;
}

function goToProduct(productId) {
    window.location.href = `product.html?id=${productId}`;
}

// =========== CART PAGE ===========
function loadCartItems() {
    const cart = getCart();
    const container = document.getElementById('cartItemsContainer');
    const emptyMessage = document.getElementById('emptyCartMessage');

    if (cart.length === 0) {
        container.style.display = 'none';
        emptyMessage.style.display = 'block';
        updateCartSummary();
        return;
    }

    container.style.display = 'block';
    emptyMessage.style.display = 'none';

    container.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/100x100?text=Product'">
            </div>
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                <div class="cart-item-qty">
                    <div class="qty-control">
                        <button onclick="updateCartQuantity(${item.id}, ${item.quantity - 1})">−</button>
                        <input type="number" value="${item.quantity}" onchange="updateCartQuantity(${item.id}, this.value)">
                        <button onclick="updateCartQuantity(${item.id}, ${item.quantity + 1})">+</button>
                    </div>
                    <span>Subtotal: $${(item.price * item.quantity).toFixed(2)}</span>
                </div>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${item.id}); loadCartItems();">Remove</button>
        </div>
    `).join('');

    updateCartSummary();
}

function updateCartSummary() {
    const totals = calculateCartTotal();
    document.getElementById('subtotal').textContent = `$${totals.subtotal}`;
    document.getElementById('tax').textContent = `$${totals.tax}`;
    document.getElementById('shipping').textContent = `$${totals.shipping}`;
    document.getElementById('discount').textContent = `$${totals.discount}`;
    document.getElementById('total').textContent = `$${totals.total}`;
}

function applyPromoCode() {
    const code = document.getElementById('promoCode').value.trim().toUpperCase();
    if (code === 'SAVE10') {
        alert('Promo code applied! 10% off');
    } else if (code === 'SAVE20') {
        alert('Promo code applied! 20% off');
    } else {
        alert('Invalid promo code');
    }
}

function proceedToCheckout() {
    const cart = getCart();
    if (cart.length === 0) {
        alert('Your cart is empty');
        return;
    }
    alert('Proceeding to checkout... Order confirmed!');
    localStorage.removeItem('groceryCart');
    loadCartItems();
}

// =========== SHOP PAGE FILTERS ===========
function setupFilters() {
    // Category filter
    document.querySelectorAll('input[name="category"]').forEach(radio => {
        radio.addEventListener('change', applyFilters);
    });

    // Sort filter
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', applyFilters);
    }

    // Price filter
    document.querySelector('.filter-btn').addEventListener('click', applyFilters);
}

function applyFilters() {
    const selectedCategory = document.querySelector('input[name="category"]:checked').value;
    const sortOption = document.getElementById('sortSelect').value;
    const minPrice = parseFloat(document.getElementById('minPrice').value) || 0;
    const maxPrice = parseFloat(document.getElementById('maxPrice').value) || Infinity;

    let filtered = productsDatabase.filter(product => {
        const matchesCategory = !selectedCategory || product.category === selectedCategory;
        const matchesPrice = product.price >= minPrice && product.price <= maxPrice;
        return matchesCategory && matchesPrice;
    });

    // Apply sorting
    if (sortOption === 'low-high') {
        filtered.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'high-low') {
        filtered.sort((a, b) => b.price - a.price);
    }

    renderProducts(filtered, 'shopProducts');
}

function resetFilters() {
    document.querySelector('input[name="category"][value=""]').checked = true;
    document.getElementById('sortSelect').value = '';
    document.getElementById('minPrice').value = '';
    document.getElementById('maxPrice').value = '';
    loadShopProducts();
}

// =========== SLIDERS ===========
function initHeroSlider() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;

    function showSlide(n) {
        slides.forEach(s => s.classList.remove('active'));
        dots.forEach(d => d.classList.remove('active'));
        slides[n].classList.add('active');
        dots[n].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // Manual controls
    document.querySelector('.slider-btn.next').addEventListener('click', nextSlide);
    document.querySelector('.slider-btn.prev').addEventListener('click', prevSlide);

    // Dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });

    // Auto slide
    setInterval(nextSlide, 4000);

    showSlide(0);
}

// =========== PROMO SLIDER ===========
function initPromoSlider() {
    const slides = document.querySelectorAll('.promo-slide');
    const prevBtn = document.querySelector('.promo-btn.prev');
    const nextBtn = document.querySelector('.promo-btn.next');
    
    if (slides.length === 0 || !prevBtn || !nextBtn) return;
    
    let currentSlide = 0;

    function showSlide(n) {
        slides.forEach(s => s.classList.remove('active'));
        slides[n].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Auto scroll
    setInterval(nextSlide, 5000);
    
    showSlide(0);
}

// =========== UTILITIES ===========
function showNotification(message, type = 'success') {
    // Remove existing notifications
    const existing = document.querySelectorAll('[data-notification="true"]');
    existing.forEach(n => n.remove());
    
    const notification = document.createElement('div');
    notification.setAttribute('data-notification', 'true');
    notification.textContent = message;
    const bgColor = type === 'success' ? '#43e97b' : type === 'error' ? '#f44236' : '#667eea';
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, ${bgColor}, ${bgColor});
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        animation: slideInRight 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        font-weight: 600;
    `;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.4s ease-out';
        setTimeout(() => notification.remove(), 400);
    }, 3000);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    // Initialize sliders
    const sliderBtns = document.querySelectorAll('.slider-btn');
    if (sliderBtns.length > 0) {
        initPromoSlider();
    }
});

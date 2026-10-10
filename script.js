// ຂໍ້ມູນເມນູສະມູທຕີ້
const smoothies = [
    { id: 1, name: "🥑 ອາໂວກາໂດປັ່ນນົມສົດ", price: 35000 },
    { id: 2, name: "🥝 ກີວີ່ໂຍເກิร์ດສະມູທຕີ້", price: 30000 },
    { id: 3, name: "🍵 ມັດຊະ ກຣີນທີ ສະມູທຕີ້", price: 28000 },
    { id: 4, name: "🍋 ໝາກນາວມິນຫຼໍ່ໂຊດາ", price: 25000 },
    { id: 5, name: "🍓 ສະຕໍເບີຣີໂຍເກิร์ດປັ່ນ", price: 32000 }
];

let cart = [];

// ຟັງຊັນສະແດງເມນູລົງໃນໜ້າເວັບ
function renderMenu() {
    const grid = document.getElementById('menuGrid');
    grid.innerHTML = '';

    smoothies.forEach(item => {
        grid.innerHTML += `
            <div class="food-card">
                <div class="food-info">
                    <h4>${item.name}</h4>
                    <p>${item.price.toLocaleString()} ກີບ</p>
                </div>
                <button class="add-btn" onclick="addToCart(${item.id})">+ ເພີ່ມ</button>
            </div>
        `;
    });
}

// ຟັງຊັນເພີ່ມສິນຄ້າເຂົ້າກະຕ່າ
function addToCart(id) {
    const item = smoothies.find(s => s.id === id);
    cart.push(item);
    updateCartUI();
}

// ຟັງຊັນອັບເດດຕົວເລກ ແລະ ລາຄາລວມ
function updateCartUI() {
    const totalCount = cart.length;
    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

    document.getElementById('badgeCount').textContent = totalCount;
    document.getElementById('cartCount').textContent = `${totalCount} ຢ່າງ`;
    document.getElementById('cartTotal').textContent = `${totalPrice.toLocaleString()} ກີບ`;
}

// ຟັງຊັນກົດປຸ່ມສັ່ງຊື້
function checkout() {
    if (cart.length === 0) {
        alert("ກະລຸນາເລືອກເມນູສະມູທຕີ້ກ່ອນ!");
    } else {
        alert("ສັ່ງຊື້ສຳເລັດແລ້ວ! ຂອບໃຈທີ່ໃຊ້ບໍລິການ Green Fresh Smoothie 💚");
        cart = [];
        updateCartUI();
    }
}

// ເລີ່ມຕົ້ນການເຮັດວຽກເມື່ອໂຫຼດໜ້າເວັບ
renderMenu();
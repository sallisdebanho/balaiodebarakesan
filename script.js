let cart = [];
let total = 0;
let couponActive = true;
let couponApplied = false;

function addToCart(prod, price){
    cart.push({prod, price});
    renderCart();
}

function renderCart(){
    const items = document.getElementById("cart-items");
    items.innerHTML = "";
    let newTotal = 0;
    cart.forEach((item,index)=>{
        newTotal += item.price;
        items.innerHTML += `<div class="cart-item">${item.prod} - R$ ${item.price.toFixed(2)} <span class="remove" onclick="removeItem(${index})">Excluir</span></div>`;
    });
    total = couponApplied ? (newTotal * 0.9) : newTotal;
    document.getElementById("total").innerText = total.toFixed(2);
}

function removeItem(i){
    cart.splice(i,1);
    renderCart();
}

function applyCoupon(){
    if(!couponActive) return alert("Cupom desativado");
    let code = document.getElementById("coupon").value;
    if(code==="AXE10"){
        couponApplied = true;
        renderCart();
        alert("Cupom aplicado!");
    } else { alert("Cupom inválido"); }
}

function toggleCart(){
    const cartFloat = document.getElementById('cart-float');
    cartFloat.style.display = (cartFloat.style.display==='block') ? 'none' : 'block';
}

function disableCouponInternal(){
    couponActive = false;
    couponApplied = false;
    renderCart();
}
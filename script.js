





const menuData = [
  {id:1, nome:"IFBurger Clássico", descricao:"Blend 150g, cheddar maturado, molho especial da casa e cebola crispy.", preco:28.90, imagem:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600", categoria:"lanches", nutricional:{calorias:"520kcal", proteinas:"28g", carboidratos:"45g", gorduras:"25g"}, alergenos:["glúten","lactose"]},
  {id:2, nome:"Double Fire", descricao:"Dois blends, bacon crocante, picles e molho picante.", preco:39.90, imagem:"https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=600", categoria:"lanches", nutricional:{calorias:"780kcal", proteinas:"42g", carboidratos:"52g", gorduras:"48g"}, alergenos:["glúten","lactose","mostarda"]},
  {id:3, nome:"Três Queijos Supreme", descricao:"Blend, gorgonzola, provolone e parmesão gratinado.", preco:34.90, imagem:"https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2019/05/02/frango-molho-gorgonzola-1.jpg", categoria:"lanches", nutricional:{calorias:"890kcal", proteinas:"35g", carboidratos:"48g", gorduras:"58g"}, alergenos:["glúten","lactose"]},
  {id:4, nome:"Veggie Smart", descricao:"Hambúrguer de grão-de-bico, avocado e rúcula fresca.", preco:32.90, imagem:"https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?w=600", categoria:"fitness", nutricional:{calorias:"380kcal", proteinas:"18g", carboidratos:"42g", gorduras:"16g"}, alergenos:[]},
  {id:5, nome:"Frango Crocante", descricao:"Filé de frango empanado, molho honey mustard e alface.", preco:29.90, imagem:"https://d2qcpt1idvpipw.cloudfront.net/recipes/2022/01/Frango-frito-crocante.png", categoria:"lanches", nutricional:{calorias:"610kcal", proteinas:"32g", carboidratos:"55g", gorduras:"30g"}, alergenos:["glúten","ovo","mostarda"]},
  {id:6, nome:"Milkshake de Oreo", descricao:"Sorvete de baunilha, Oreo triturado e chantilly.", preco:19.90, imagem:"https://i.pinimg.com/originals/10/9c/d2/109cd288493a97b4232a0ee7565660ba.jpg ", categoria:"bebidas", nutricional:{calorias:"450kcal", proteinas:"8g", carboidratos:"65g", gorduras:"18g"}, alergenos:["lactose","glúten"]},
  {id:7, nome:"Milkshake de Morango", descricao:"Morangos frescos, leite e sorvete premium.", preco:18.90, imagem:"https://tse1.explicit.bing.net/th/id/OIP.pHErbHO4GBq7Y3R6IcdIzgHaFD?cb=thfc1falcon&rs=1&pid=ImgDetMain&o=7&rm=3", categoria:"bebidas", nutricional:{calorias:"380kcal", proteinas:"7g", carboidratos:"58g", gorduras:"14g"}, alergenos:["lactose"]},
  {id:8, nome:"Brownie com Sorvete", descricao:"Brownie de chocolate belga com sorvete de creme.", preco:22.90, imagem:"https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600", categoria:"sobremesas", nutricional:{calorias:"550kcal", proteinas:"9g", carboidratos:"68g", gorduras:"28g"}, alergenos:["glúten","lactose","ovo"]},
  {id:9, nome:"Batata Rústica", descricao:"Batatas rústicas com parmesão e alecrim.", preco:14.90, imagem:"https://img.saborosos.com.br/imagens/batata-rustica.jpg", categoria:"lanches", nutricional:{calorias:"320kcal", proteinas:"6g", carboidratos:"42g", gorduras:"14g"}, alergenos:["lactose"]},
  {id:10, nome:"Onion Rings", descricao:"Anéis de cebola empanados com molho barbecue.", preco:16.90, imagem:"https://th.bing.com/th/id/R.331035d0c6958a344e4bffbd8c805e11?rik=%2bjDEXG%2bb2HjaVQ&pid=ImgRaw&r=0", categoria:"lanches", nutricional:{calorias:"410kcal", proteinas:"7g", carboidratos:"48g", gorduras:"22g"}, alergenos:["glúten","ovo"]},
  {id:11, nome:"Coca-Cola 350ml", descricao:"Geladinha", preco:6.90, imagem:"https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=600", categoria:"bebidas", nutricional:{calorias:"150kcal", proteinas:"0g", carboidratos:"39g", gorduras:"0g"}, alergenos:[]},
  {id:12, nome:"Guaraná Natural", descricao:"350ml", preco:7.50, imagem:"https://marcaspelomundo.com.br/wp-content/uploads/2023/12/handler-1-1024x574.png", categoria:"bebidas", nutricional:{calorias:"140kcal", proteinas:"0g", carboidratos:"36g", gorduras:"0g"}, alergenos:[]},
  {id:13, nome:"Salada Caesar Fit", descricao:"Frango grelhado, alface, croutons e molho caesar light.", preco:26.90, imagem:"https://fricassedefrango.com.br/wp-content/uploads/2025/07/como-fazer-salada-caesar-com-frango.jpg", categoria:"fitness", nutricional:{calorias:"290kcal", proteinas:"25g", carboidratos:"18g", gorduras:"14g"}, alergenos:["ovo","lactose","glúten"]},
  {id:14, nome:"Cheeseburger Bacon", descricao:"Blend, queijo, bacon e molho especial.", preco:31.90, imagem:"https://tse1.explicit.bing.net/th/id/OIP.Rtx4iye-2rHVLHi1l2uOfAHaEn?cb=thfc1falcon&rs=1&pid=ImgDetMain&o=7&rm=3", categoria:"lanches", nutricional:{calorias:"720kcal", proteinas:"38g", carboidratos:"48g", gorduras:"44g"}, alergenos:["glúten","lactose"]},
  {id:15, nome:"Tiramisu", descricao:"Clássico italiano com café e mascarpone.", preco:19.90, imagem:"https://www.kingarthurbaking.com/sites/default/files/2023-03/Tiramisu_1426.jpg", categoria:"sobremesas", nutricional:{calorias:"480kcal", proteinas:"10g", carboidratos:"52g", gorduras:"26g"}, alergenos:["lactose","ovo","glúten"]},
  {id:16, nome:"Suco Verde Detox", descricao:"Espinafre, abacaxi, gengibre e limão.", preco:12.90, imagem:"https://tse1.mm.bing.net/th/id/OIP.RaFfjgVxEn0_mOUN-DwxJgHaFk?cb=thfc1falcon&w=900&h=677&rs=1&pid=ImgDetMain&o=7&rm=3", categoria:"bebidas", nutricional:{calorias:"95kcal", proteinas:"2g", carboidratos:"22g", gorduras:"0.5g"}, alergenos:[]},
  {id:17, nome:"SmartBurguer Picante", descricao:"Blend, pimenta jalapeño, queijo pepper jack.", preco:33.90, imagem:"https://images.mrcook.app/recipe-image/0190e686-e711-761e-9084-2aaffbff4393?cacheKey=VGh1LCAyNyBGZWIgMjAyNSAxNzozMDozNCBHTVQ=", categoria:"lanches", nutricional:{calorias:"650kcal", proteinas:"34g", carboidratos:"46g", gorduras:"38g"}, alergenos:["glúten","lactose"]},
  {id:18, nome:"Açaí Bowl", descricao:"Açaí premium com granola e frutas.", preco:24.90, imagem:"https://th.bing.com/th/id/R.8a9e3e109eb4b806ed2b298d7a460b9c?rik=u854qyPXdJXwIw&riu=http%3a%2f%2f1.bp.blogspot.com%2f-d12g2J7YHEM%2fVUkeDYSM9TI%2fAAAAAAAATdE%2feiUqEIXC68w%2fs1600%2fAcai%252BBowl%252B%27Recipe%27%252B6.jpg&ehk=8Begd6GzGLoxcDwcyjtYFQ9aAUhrEXPlbQI8lJvzh1s%3d&risl=&pid=ImgRaw&r=0", categoria:"sobremesas", nutricional:{calorias:"420kcal", proteinas:"8g", carboidratos:"62g", gorduras:"16g"}, alergenos:["lactose","glúten"]},
  {id:19, nome:"Água de Coco", descricao:"Natural 500ml", preco:8.90, imagem:"https://altoastral.joaobidu.com.br/wp-content/uploads/2023/09/beneficios-agua-coco.jpg", categoria:"fitness", nutricional:{calorias:"45kcal", proteinas:"1g", carboidratos:"10g", gorduras:"0g"}, alergenos:[]},
  {id:20, nome:"Coxinha Gourmet", descricao:"Coxinha de frango com catupiry", preco:12.90, imagem:"https://tse3.mm.bing.net/th/id/OIP.qRsL1oDnTP5ib_dQNFuhFgHaE6?cb=thfc1falcon&rs=1&pid=ImgDetMain&o=7&rm=3", categoria:"lanches", nutricional:{calorias:"280kcal", proteinas:"12g", carboidratos:"32g", gorduras:"12g"}, alergenos:["glúten","lactose"]},
  {id:21, nome: "Combo Bomba!!", descricao:"Hambúrguer Double Fire (dois blends, bacon crocante, picles e molho picante) + Batata frita média + Refrigerante 350ml", preco:59.90, imagem:"https://img.magnific.com/fotos-premium/um-hamburguer-e-batatas-fritas-em-fundo-preto_1268653-186.jpg", categoria:"combo", nutricional:{calorias:"1350kcal", proteinas:"58g", carboidratos:"142g", gorduras:"68g"}, alergenos:["glúten","lactose","mostarda"]},
  {id:22, nome: "Combo Explosivo!!", descricao:"Hambúrguer explosion Fire (dois blends, bacon crocante, picles e molho de alho) + Batata frita grande + Refrigerante guaraná 350ml", preco:59.90, imagem:"https://i.pinimg.com/originals/ef/fe/49/effe49984d1c16f0ce9713d8164c43f7.jpg", categoria:"combo", nutricional:{calorias:"1350kcal", proteinas:"58g", carboidratos:"142g", gorduras:"68g"}, alergenos:["glúten","lactose","mostarda"]},
  {id:23, nome: "Combo personalizado", descricao:"Hambúrguer personalizado  (Tempero Unico!!, bacon crocante, picles e molho de alho) + Batata frita grande + Refrigerante guaraná 350ml", preco:37.00, imagem:"https://heroisburger.com.br/wp-content/uploads/2024/02/hulk-1.png", categoria:"combo", nutricional:{calorias:"1350kcal", proteinas:"58g", carboidratos:"142g", gorduras:"68g"}, alergenos:["glúten","lactose","mostarda", ]},
  {id:24, nome: "Suco de laranja: natural", descricao:"Suco fresco e gelado, Refrescante.", preco:6.00, imagem:"https://files.agro20.com.br/uploads/2019/11/Suco-de-laranja-1.jpg", categoria:"bebidas", nutricional:{calorias:"47kcal", proteinas:"0,7g", carboidratos:"11,0g", gorduras:"0,1g", fibras: "0.2g", Vitamina: "C", }, alergenos:[]},

];

let cart = [];
let favorites = [];
let activeCategory = "all";
let cartTimeout = null;

const BRL = (val) => val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

function renderMenu() {
  const search = document.getElementById('searchInput').value.toLowerCase();
  const container = document.getElementById('menu');
  
  const filtered = menuData.filter(item => {
    const matchCategory = activeCategory === "all" || item.categoria === activeCategory;
    const matchSearch = item.nome.toLowerCase().includes(search) || 
                       item.descricao.toLowerCase().includes(search);
    return matchCategory && matchSearch;
  });

  container.innerHTML = filtered.map(item => `
    <div class="menu-card">
      <button class="favorite ${favorites.includes(item.id) ? 'active' : ''}" onclick="toggleFavorite(${item.id})"></button>
      ${item.preco > 45 ? '<div class="badge">🔥 Premium</div>' : ''}
      
      <img class="card-img" src="${item.imagem}" alt="${item.nome}" loading="lazy" onclick="showProductModal(${item.id})">
      
      <div class="card-content">
        <div class="product-name">${item.nome}</div>
        <div class="rating">⭐⭐⭐⭐⭐ <small>4.9</small></div>
        <p style="margin:8px 0; color:var(--text2); font-size:0.95rem;">${item.descricao}</p>
        
        <div class="card-bottom">
          <div class="price">${BRL(item.preco)}</div>
          <button class="buy-btn" onclick="addToCart(${item.id})">Adicionar</button>
        </div>
      </div>
    </div>
  `).join('');
}

// Função para gerar o HTML das informações nutricionais e alérgenos
function renderInfoAdicionais(item) {
  const temAlergenos = item.alergenos && item.alergenos.length > 0;
  
  return `
    <div class="info-section">
      <div class="info-title">
         
      </div>
      
      <div class="info-title" style="font-size:0.95rem; margin-top:5px;">
        🥗 Tabela Nutricional (porção)
      </div>
      
      <div class="nutricional-item">
        <span class="nutricional-label">🔥 Calorias</span>
        <span class="nutricional-value">${item.nutricional?.calorias || "N/I"}</span>
      </div>
      <div class="nutricional-item">
        <span class="nutricional-label">🥩 Proteínas</span>
        <span class="nutricional-value">${item.nutricional?.proteinas || "N/I"}</span>
      </div>
      <div class="nutricional-item">
        <span class="nutricional-label">🍚 Carboidratos</span>
        <span class="nutricional-value">${item.nutricional?.carboidratos || "N/I"}</span>
      </div>
      <div class="nutricional-item">
        <span class="nutricional-label">🧈 Gorduras</span>
        <span class="nutricional-value">${item.nutricional?.gorduras || "N/I"}</span>
      </div>
      
      <div class="alergenos">
        ${!temAlergenos ? `
          <div class="alergeno-livre">
            🌱 Este produto não contém alérgenos
          </div>
        ` : `
          <div style="font-weight:600; margin-bottom:8px; color:var(--secondary);">
            ⚠️ Contém os seguintes alérgenos:
          </div>
          <div style="display:flex; flex-wrap:wrap; gap:8px;">
            ${item.alergenos.map(alergeno => `
              <span style="background:rgba(255,61,0,0.2); padding:4px 12px; border-radius:20px; font-size:0.85rem;">
                🚫 ${alergeno.charAt(0).toUpperCase() + alergeno.slice(1)}
              </span>
            `).join('')}
          </div>
        `}
      </div>
    </div>
  `;
}

function showProductModal(id) {
  const item = menuData.find(i => i.id === id);
  if (!item) return;

  document.getElementById('modalContent').innerHTML = `
    <button class="close-modal-btn" onclick="closeModal()">✕</button>
    <img src="${item.imagem}" style="width:100%; height:280px; object-fit:cover;">
    <div style="padding:25px;">
      <h2>${item.nome}</h2>
      <p style="margin:15px 0; color:var(--text2);">${item.descricao}</p>
      
      <div style="display:flex; justify-content:space-between; align-items:center; margin:15px 0;">
        <div style="font-size:2rem; font-weight:800; color:var(--green);">
          ${BRL(item.preco)}
        </div>
        <div style="font-size:0.9rem; color:var(--primary); font-weight:500;">
        </div>
      </div>
      
      ${renderInfoAdicionais(item)}
      
      <button onclick="addToCart(${item.id}); closeModal()" style="width:100%; margin-top:20px; padding:16px; background:linear-gradient(135deg,#ff9800,#ff3d00); color:white; border:none; border-radius:16px; font-size:1.1rem; font-weight:700; cursor:pointer;">
        🛒 Adicionar ao Carrinho
      </button>
    </div>
  `;
  document.getElementById('productModal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('productModal').style.display = 'none';
}

function handleOutsideClick(e) {
  if (e.target.id === 'productModal') closeModal();



}

function toggleCart(show) {
  const sidebar = document.getElementById('cartSidebar');
  if (show) {
    sidebar.classList.add('active');
  } else {
    sidebar.classList.remove('active');
  }
}

function addToCart(id) {
  const item = menuData.find(i => i.id === id);
  const existing = cart.find(i => i.id === id);
  
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({...item, quantity: 1});
  }

  renderCart();
  
  if (cartTimeout) clearTimeout(cartTimeout);

  toggleCart(true);

  const notif = document.createElement('div');
  notif.textContent = `✅ ${item.nome} adicionado!`;
  notif.style.cssText = 'position:fixed; bottom:100px; right:20px; background:#25d366; color:white; padding:12px 20px; border-radius:12px; z-index:9999; box-shadow:0 5px 15px rgba(0,0,0,.2); font-weight:600;';
  document.body.appendChild(notif);
  setTimeout(() => notif.remove(), 2000);

  cartTimeout = setTimeout(() => {
    toggleCart(false);
  }, 2000);
}

function renderCart() {
  const container = document.getElementById('cartItems');
  const totalEl = document.getElementById('cartTotal');
  const countHeader = document.getElementById('cartCountHeader');
  const badgeFloating = document.getElementById('cartBadgeFloating');

  if (cart.length === 0) {
    container.innerHTML = `<p style="text-align:center; color:var(--text2); margin-top:40px;">Seu carrinho está vazio.</p>`;
    totalEl.textContent = `Total: ${BRL(0)}`;
    countHeader.textContent = "0";
    badgeFloating.textContent = "0";
    return;
  }

  container.innerHTML = cart.map((item, index) => `
    <div style="display:flex; justify-content:space-between; align-items:center; padding:12px 0; border-bottom:1px solid var(--border);">
      <div style="padding-right:10px;">
        <strong>${item.nome}</strong><br>
        <small style="color:var(--text2);">${BRL(item.preco)}</small>
      </div>
      <div style="display:flex; align-items:center; gap:10px; flex-shrink:0;">
        <button onclick="changeQuantity(${index}, -1)" style="width:28px;height:28px;border-radius:50%;border:none;background:#ddd;font-weight:bold;cursor:pointer;">–</button>
        <span style="min-width:20px; text-align:center; font-weight:600;">${item.quantity}</span>
        <button onclick="changeQuantity(${index}, 1)" style="width:28px;height:28px;border-radius:50%;border:none;background:#ddd;font-weight:bold;cursor:pointer;">+</button>
        <button onclick="removeFromCart(${index})" style="margin-left:10px; color:#ff3d00; background:none; border:none; font-size:1.2rem; cursor:pointer;">🗑</button>
      </div>
    </div>
  `).join('');

  const total = cart.reduce((acc, item) => acc + (item.preco * item.quantity), 0);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  totalEl.textContent = `Total: ${BRL(total)}`;
  countHeader.textContent = totalItems;
  badgeFloating.textContent = totalItems;
}

function changeQuantity(index, change) {
  if (cartTimeout) clearTimeout(cartTimeout);
  cart[index].quantity += change;
  if (cart[index].quantity < 1) cart.splice(index, 1);
  renderCart();
}

function removeFromCart(index) {
  if (cartTimeout) clearTimeout(cartTimeout);
  cart.splice(index, 1);
  renderCart();
}

function finishOrder() {
  if (cart.length === 0) return alert("Seu carrinho está vazio!");

  let message = "🍔 *Novo Pedido - lima-Burger* %0A%0A";
  cart.forEach(item => {
    message += `• *${item.quantity}x* ${item.nome} (${BRL(item.preco)}) %0A`;
  });

  const total = cart.reduce((acc, item) => acc + (item.preco * item.quantity), 0);
  message += `%0A💰 *Total do Pedido: ${BRL(total)}*`;

  window.open(`https://wa.me/5511999999999?text=${message.trim()}`, '_blank');
  
  cart = [];
  renderCart();
  toggleCart(false);
}

function toggleFavorite(id) {
  if (favorites.includes(id)) {
    favorites = favorites.filter(f => f !== id);
  } else {
    favorites.push(id);
  }
  renderMenu();
}

function createFilters() {
  const categories = ["all", "lanches", "bebidas", "sobremesas", "fitness", "combo"];
  const names = ["🍔 Cardápio", "🔥 Lanches", "🥤 Bebidas", "🍰 Sobremesas", "🥗 Fitness", "🍱 Combos"];
  
  const container = document.getElementById('filters');
  container.innerHTML = categories.map((cat, i) => `
    <button class="filter-btn ${cat === 'all' ? 'active' : ''}" data-category="${cat}">
      ${names[i]}
    </button>
  `).join('');

  container.addEventListener('click', e => {
    if (e.target.classList.contains('filter-btn')) {
      document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
      e.target.classList.add('active');
      activeCategory = e.target.dataset.category;
      renderMenu();
    }
  });
}

document.getElementById('searchInput').addEventListener('input', renderMenu);
document.getElementById('themeToggle').addEventListener('click', () => {
  const body = document.body;
  body.classList.toggle('dark');
  document.getElementById('themeToggle').textContent = body.classList.contains('dark') ? '☽' : '𖧋';
});

createFilters();
renderMenu();
renderCart();
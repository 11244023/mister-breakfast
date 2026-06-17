// ==========================================================================
// MENU DATA SPECIFICATION (TRANSCRIPTED FROM THE PROVIDED MENU IMAGE)
// ==========================================================================
const MENU_DATA = {
  burger: {
    name: "漢堡類",
    icon: "fa-solid fa-hamburger",
    desc: "元氣漢堡，可選擇是否加蛋 (+5元)",
    eggPrice: 5,
    items: [
      { id: "b1", name: "豬肉漢堡", price: 30, hasEggOption: true },
      { id: "b2", name: "火腿漢堡", price: 30, hasEggOption: true },
      { id: "b3", name: "培根漢堡", price: 30, hasEggOption: true },
      { id: "b4", name: "香雞漢堡", price: 35, hasEggOption: true },
      { id: "b5", name: "鱈魚漢堡", price: 40, hasEggOption: true },
      { id: "b6", name: "燻雞漢堡", price: 40, hasEggOption: true },
      { id: "b7", name: "豬柳漢堡", price: 40, hasEggOption: true },
      { id: "b8", name: "蔬菜漢堡", price: 40, hasEggOption: true },
      { id: "b9", name: "牛肉漢堡", price: 40, hasEggOption: true },
      { id: "b10", name: "里肌漢堡", price: 45, hasEggOption: true },
      { id: "b11", name: "鮪魚漢堡", price: 45, hasEggOption: true },
      { id: "b12", name: "總匯漢堡", price: 45, hasEggOption: true },
      { id: "b13", name: "德式香腸漢堡", price: 45, hasEggOption: true },
      { id: "b14", name: "花枝漢堡", price: 45, hasEggOption: true },
      { id: "b15", name: "龍蝦漢堡", price: 45, hasEggOption: true },
      { id: "b16", name: "原味卡啦漢堡", price: 50, hasEggOption: true },
      { id: "b17", name: "辣味卡啦漢堡", price: 50, hasEggOption: true }
    ]
  },
  eggroll: {
    name: "蛋餅類",
    icon: "fa-solid fa-scroll",
    desc: "酥脆蛋餅，美味滿分",
    items: [
      { id: "e1", name: "原味蛋餅", price: 20 },
      { id: "e2", name: "起士蛋餅", price: 30 },
      { id: "e3", name: "豬肉蛋餅", price: 30 },
      { id: "e4", name: "火腿蛋餅", price: 30 },
      { id: "e5", name: "鮪魚蛋餅", price: 30 },
      { id: "e6", name: "熱狗蛋餅", price: 30 },
      { id: "e7", name: "玉米蛋餅", price: 30 },
      { id: "e8", name: "肉鬆蛋餅", price: 30 },
      { id: "e9", name: "培根蛋餅", price: 30 },
      { id: "e10", name: "香薯蛋餅", price: 35 },
      { id: "e11", name: "薯餅蛋餅", price: 35 },
      { id: "e12", name: "蔬菜蛋餅", price: 35 },
      { id: "e13", name: "地瓜蛋餅", price: 35 },
      { id: "e14", name: "燻雞蛋餅", price: 40 },
      { id: "e15", name: "豬柳蛋餅", price: 40 },
      { id: "e16", name: "里肌蛋餅", price: 40 },
      { id: "e17", name: "牛肉蛋餅", price: 40 },
      { id: "e18", name: "原味卡啦蛋餅", price: 50 },
      { id: "e19", name: "辣味卡啦蛋餅", price: 50 }
    ]
  },
  croissant: {
    name: "可頌類",
    icon: "fa-solid fa-bread-slice",
    desc: "法式香酥可頌，可選擇是否加蛋 (+5元)",
    eggPrice: 5,
    items: [
      { id: "c1", name: "起士可頌", price: 30, hasEggOption: true },
      { id: "c2", name: "豬肉可頌", price: 40, hasEggOption: true },
      { id: "c3", name: "火腿可頌", price: 40, hasEggOption: true },
      { id: "c4", name: "培根可頌", price: 40, hasEggOption: true },
      { id: "c5", name: "蔬菜可頌", price: 40, hasEggOption: true },
      { id: "c6", name: "鮪魚可頌", price: 45, hasEggOption: true },
      { id: "c7", name: "香雞可頌", price: 45, hasEggOption: true },
      { id: "c8", name: "燻雞可頌", price: 45, hasEggOption: true },
      { id: "c9", name: "豬柳可頌", price: 45, hasEggOption: true },
      { id: "c10", name: "里肌可頌", price: 45, hasEggOption: true },
      { id: "c11", name: "牛肉可頌", price: 50, hasEggOption: true },
      { id: "c12", name: "原味卡啦可頌", price: 55, hasEggOption: true },
      { id: "c13", name: "辣味卡啦可頌", price: 55, hasEggOption: true }
    ]
  },
  frenchtoast: {
    name: "法式吐司",
    icon: "fa-solid fa-square",
    desc: "蛋香濃郁的法式吐司",
    items: [
      { id: "f1", name: "法式吐司-果醬", price: 30 },
      { id: "f2", name: "法式吐司-煉乳", price: 30 },
      { id: "f3", name: "法式吐司-肉鬆", price: 35 },
      { id: "f4", name: "法式吐司-火腿", price: 40 }
    ]
  },
  thicktoast: {
    name: "厚片焗烤",
    icon: "fa-solid fa-cheese",
    desc: "牽絲美味，焗烤厚片",
    items: [
      { id: "tk1", name: "焗烤厚片-玉米", price: 35 },
      { id: "tk2", name: "焗烤厚片-培根", price: 45 },
      { id: "tk3", name: "焗烤厚片-鮪魚", price: 45 },
      { id: "tk4", name: "焗烤厚片-燻雞", price: 45 }
    ]
  },
  waffle: {
    name: "鬆餅類",
    icon: "fa-solid fa-stroopwafel",
    desc: "現烤格子鬆餅，外酥內軟",
    items: [
      { id: "w1", name: "鬆餅-巧克力", price: 35 },
      { id: "w2", name: "鬆餅-蜂蜜", price: 35 },
      { id: "w3", name: "鬆餅-煉乳", price: 35 },
      { id: "w4", name: "鬆餅-鮪魚", price: 40 }
    ]
  },
  cheese_flatbread: {
    name: "乳酪餅",
    icon: "fa-solid fa-pizza-slice",
    desc: "酥脆乳酪餅皮夾餡",
    items: [
      { id: "cf1", name: "乳酪餅-果醬", price: 30 },
      { id: "cf2", name: "乳酪餅-起士蛋", price: 45 },
      { id: "cf3", name: "乳酪餅-肉鬆蛋", price: 45 },
      { id: "cf4", name: "乳酪餅-火腿蛋", price: 45 },
      { id: "cf5", name: "乳酪餅-鮪魚蛋", price: 45 },
      { id: "cf6", name: "乳酪餅-培根蛋", price: 50 },
      { id: "cf7", name: "乳酪餅-里肌蛋", price: 55 }
    ]
  },
  cheese_burger: {
    name: "乳酪堡",
    icon: "fa-solid fa-circle",
    desc: "特色乳酪堡，香濃美味",
    items: [
      { id: "cb1", name: "德式香腸乳酪堡", price: 65 },
      { id: "cb2", name: "香煎豬柳乳酪堡", price: 65 },
      { id: "cb3", name: "煙燻燻肉乳酪堡", price: 65 }
    ]
  },
  toast: {
    name: "現烤吐司",
    icon: "fa-solid fa-bread-slice",
    desc: "吐司/厚片現烤，抹醬與夾餡。加蛋 (+5元)",
    eggPrice: 5,
    items: [
      { id: "t1", name: "現烤吐司 (抹醬)", price: 15, hasFlavorOption: true, hasEggOption: true },
      { id: "t2", name: "現烤厚片 (抹醬)", price: 25, hasFlavorOption: true },
      { id: "t3", name: "烤散蛋吐司", price: 20 },
      { id: "t4", name: "烤起士吐司", price: 25, hasEggOption: true },
      { id: "t5", name: "烤肉排吐司", price: 25, hasEggOption: true },
      { id: "t6", name: "烤火腿吐司", price: 25, hasEggOption: true },
      { id: "t7", name: "烤肉鬆吐司", price: 25, hasEggOption: true },
      { id: "t8", name: "烤培根吐司", price: 25, hasEggOption: true },
      { id: "t9", name: "烤鮪魚吐司", price: 30, hasEggOption: true },
      { id: "t10", name: "烤香雞吐司", price: 30, hasEggOption: true },
      { id: "t11", name: "烤薯餅吐司", price: 30, hasEggOption: true },
      { id: "t12", name: "蔬菜吐司", price: 30, hasEggOption: true },
      { id: "t13", name: "烤燻雞吐司", price: 35, hasEggOption: true },
      { id: "t14", name: "烤牛肉吐司", price: 35, hasEggOption: true },
      { id: "t15", name: "烤豬柳吐司", price: 35, hasEggOption: true },
      { id: "t16", name: "烤里肌吐司", price: 40, hasEggOption: true },
      { id: "t17", name: "原味卡啦吐司", price: 45, hasEggOption: true },
      { id: "t18", name: "辣味卡啦吐司", price: 45, hasEggOption: true },
      { id: "t19", name: "烤起士蛋吐司", price: 50 },
      { id: "t20", name: "總匯吐司", price: 55 },
      { id: "t21", name: "鱈魚吐司", price: 55 },
      { id: "t22", name: "培根吐司", price: 55 },
      { id: "t23", name: "里肌吐司", price: 60 }
    ]
  },
  meals: {
    name: "特惠套餐",
    icon: "fa-solid fa-star",
    desc: "超值早餐套餐（套餐飲料均附中冰奶，若需更換請於備註填寫）",
    items: [
      { id: "m1", name: "① 陽光活力餐", price: 55, desc: "吐司、炒蛋、熱狗(2條)、薯條、中冰奶" },
      { id: "m2", name: "② 德雙脆漢堡餐", price: 60, desc: "火腿片、漢堡肉、蛋、中冰奶" },
      { id: "m3", name: "③ 里肌厚蛋吐司餐", price: 65, desc: "黑胡椒里肌肉、蛋、起士、千島醬、中冰奶" },
      { id: "m4", name: "④ 田園沙拉餐", price: 70, desc: "蔬果薯泥(2球)、吐司、太陽蛋、中冰柳橙汁" },
      { id: "m5", name: "⑤ 雙層牛肉堡餐", price: 70, desc: "雙層牛肉、新鮮蔬菜、起士、蛋、番茄醬、大冰奶" },
      { id: "m6", name: "⑥ 雙層鱈魚堡餐", price: 70, desc: "深海鱈魚、新鮮蔬菜、起士、蛋、千島醬、大冰奶" },
      { id: "m7", name: "⑦ 培根厚切吐司堡餐", price: 70, desc: "底層吐司、萵苣、番茄片、蛋、煙燻培根、起士、大冰奶" },
      { id: "m8", name: "⑧ 美式套餐", price: 80, desc: "培根、薯餅、熱狗(2條)、太陽蛋(2個)、吐司、中冰美式" }
    ]
  },
  mix: {
    name: "綜合類點心",
    icon: "fa-solid fa-bowl-food",
    desc: "煎餃、蘿蔔糕、鐵板麵等點心。部分商品加蛋 (+5元)",
    eggPrice: 5,
    items: [
      { id: "x1", name: "薯餅/一片", price: 15 },
      { id: "x2", name: "薯條", price: 15 },
      { id: "x3", name: "玉米蛋", price: 20 },
      { id: "x4", name: "荷包蛋", price: 10 },
      { id: "x5", name: "熱狗/4條", price: 20 },
      { id: "x6", name: "麥克雞塊/3塊", price: 20 },
      { id: "x7", name: "檸檬雞柳條/2支", price: 25 },
      { id: "x8", name: "煎餃", price: 25, hasEggOption: true },
      { id: "x9", name: "抓餅", price: 25, hasEggOption: true },
      { id: "x10", name: "德式香腸/1支", price: 25 },
      { id: "x11", name: "蘿蔔糕/2片", price: 30, hasEggOption: true },
      { id: "x12", name: "蔬菜薯泥", price: 35, hasEggOption: true },
      { id: "x13", name: "鐵板麵 (黑胡椒/蘑菇)", price: 35, hasEggOption: true, hasSauceOption: true },
      { id: "x14", name: "義大利麵 (紅醬/白醬)", price: 70, hasPastaSauceOption: true }
    ]
  },
  scallion_pancake: {
    name: "蔥抓餅",
    icon: "fa-solid fa-circle-dot",
    desc: "現煎蔥抓餅，香氣撲鼻。加蛋 (+5元)",
    eggPrice: 5,
    items: [
      { id: "sp1", name: "原味蔥抓餅", price: 25, hasEggOption: true },
      { id: "sp2", name: "起士蔥抓餅", price: 35, hasEggOption: true },
      { id: "sp3", name: "培根蔥抓餅", price: 40, hasEggOption: true },
      { id: "sp4", name: "燻雞蔥抓餅", price: 40, hasEggOption: true }
    ]
  },
  drinks: {
    name: "飲料類",
    icon: "fa-solid fa-mug-hot",
    desc: "中杯/大杯、冰/溫/熱可供選擇",
    isDrink: true,
    items: [
      { id: "d1", name: "可樂", price: 15, coldOnly: true, sizePriceDiff: 5 },
      { id: "d2", name: "雪碧", price: 15, coldOnly: true, sizePriceDiff: 5 },
      { id: "d3", name: "紅茶", price: 15, sizePriceDiff: 5 },
      { id: "d4", name: "焦糖綠茶", price: 15, sizePriceDiff: 5 },
      { id: "d5", name: "奶茶", price: 15, sizePriceDiff: 5 },
      { id: "d6", name: "豆漿", price: 15, sizePriceDiff: 5 },
      { id: "d7", name: "柳橙汁", price: 15, coldOnly: true, sizePriceDiff: 5 },
      { id: "d8", name: "咖啡", price: 20, sizePriceDiff: 5 },
      { id: "d9", name: "蔓越莓汁", price: 25, coldOnly: true, sizePriceDiff: 5 },
      { id: "d10", name: "檸檬紅茶", price: 25, coldOnly: true, sizePriceDiff: 5 },
      { id: "d11", name: "鮮奶茶", price: 30, sizePriceDiff: 5 },
      { id: "d12", name: "玉米濃湯", price: 30, hotOrWarmOnly: true, sizePriceDiff: 10 },
      { id: "d13", name: "鮮奶咖啡", price: 35, sizePriceDiff: 5 }
    ]
  }
};

// ==========================================================================
// APP STATE MANAGEMENT
// ==========================================================================
let state = {
  cart: [], // items: { item, qty, customs: { egg, size, temp, flavor, sauce }, price, remark, cartId }
  orders: [], // orders: { id, diningType, tableNo, timestamp, items: [{name, qty, customsStr, price, status, remark}], status }
  currentView: 'split', // 'split', 'customer', 'kitchen'
  selectedCategory: 'burger',
  audioEnabled: false,
  nextOrderId: 1,
  activeCartItemToEdit: null
};

// LocalStorage Synchronization Keys
const STORAGE_ORDERS_KEY = 'mister_breakfast_orders';
const STORAGE_NEXT_ORDER_ID_KEY = 'mister_breakfast_next_order_id';
const STORAGE_NOTIFY_EVENT_KEY = 'mister_breakfast_notify_event'; // Format: { orderId, tableNo, itemName, timestamp }

// Initialize State from LocalStorage
function initStorage() {
  const storedOrders = localStorage.getItem(STORAGE_ORDERS_KEY);
  if (storedOrders) {
    state.orders = JSON.parse(storedOrders);
  } else {
    state.orders = [];
    saveOrdersToStorage();
  }

  const storedNextId = localStorage.getItem(STORAGE_NEXT_ORDER_ID_KEY);
  if (storedNextId) {
    state.nextOrderId = parseInt(storedNextId);
  } else {
    state.nextOrderId = 1;
    localStorage.setItem(STORAGE_NEXT_ORDER_ID_KEY, state.nextOrderId.toString());
  }
}

function saveOrdersToStorage() {
  localStorage.setItem(STORAGE_ORDERS_KEY, JSON.stringify(state.orders));
}

// ==========================================================================
// AUDIO & SPEECH SYNTHESIS ENGINE
// ==========================================================================
function initVoiceNotification() {
  const banner = document.getElementById('tts-activation-banner');
  const btnEnable = document.getElementById('btn-enable-audio');

  // Check if speech synthesis is supported
  if ('speechSynthesis' in window) {
    // Show banner to prompt user interaction (required by browser autoplay policies)
    banner.classList.remove('hidden');
    
    btnEnable.addEventListener('click', () => {
      state.audioEnabled = true;
      banner.classList.add('hidden');
      
      // Speak a welcome message to confirm activation
      speak("語音出餐系統已啟用！米斯特早午餐祝您用餐愉快。");
    });
  } else {
    console.warn("這台裝置不支援語音合成播報功能。");
  }
}

function speak(text) {
  if (!state.audioEnabled || !('speechSynthesis' in window)) return;

  // Cancel any ongoing speech to prevent overlapping queues
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'zh-TW';
  utterance.rate = 1.05;
  utterance.pitch = 1.0;
  window.speechSynthesis.speak(utterance);
}

// Triggers notification (TTS + Visual Toast)
function triggerDishReadyNotification(tableNo, itemName, orderId) {
  const isTakeout = !tableNo || tableNo === "外帶" || tableNo === "";
  const locationText = isTakeout ? "外帶" : `桌號 ${tableNo}`;
  const speechText = isTakeout 
    ? `外帶單號 ${orderId} 號的 ${itemName} 已經好囉，請來取餐！`
    : `桌號 ${tableNo} 的 ${itemName} 已經好囉！`;
  
  // 1. Text-to-Speech
  const voiceToggle = document.getElementById('kitchen-voice-notify');
  if (voiceToggle && voiceToggle.checked) {
    speak(speechText);
  }

  // 2. Create Visual Toast
  createToast(
    `餐點出餐通知`,
    `${locationText} 的 「${itemName}」 已製作完成！`,
    'ready'
  );
}

// Toast UI generator
function createToast(title, message, type = 'info') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast-item ${type}`;
  
  let icon = 'fa-circle-info';
  if (type === 'ready') icon = 'fa-solid fa-bell';
  if (type === 'warning') icon = 'fa-triangle-exclamation';

  toast.innerHTML = `
    <i class="fa-solid ${icon} toast-icon"></i>
    <div class="toast-content">
      <div class="toast-title">${title}</div>
      <div class="toast-msg">${message}</div>
    </div>
    <button class="toast-close"><i class="fa-solid fa-xmark"></i></button>
    <div class="toast-progress"></div>
  `;

  container.appendChild(toast);

  // Close button action
  toast.querySelector('.toast-close').addEventListener('click', () => {
    toast.remove();
  });

  // Auto remove toast after 4.5 seconds
  setTimeout(() => {
    toast.style.animation = 'slideInToast 0.3s reverse forwards';
    setTimeout(() => toast.remove(), 300);
  }, 4500);
}

// ==========================================================================
// RENDER CUSTOMER MENU
// ==========================================================================
function renderMenuCategories() {
  const tabsContainer = document.getElementById('category-tabs');
  const categoriesContainer = document.getElementById('menu-categories');
  
  tabsContainer.innerHTML = '';
  categoriesContainer.innerHTML = '';

  Object.entries(MENU_DATA).forEach(([catKey, catVal]) => {
    // 1. Sidebar tab buttons
    const tabBtn = document.createElement('button');
    tabBtn.className = `tab-btn ${state.selectedCategory === catKey ? 'active' : ''}`;
    tabBtn.dataset.category = catKey;
    tabBtn.innerHTML = `
      <i class="${catVal.icon} tab-icon"></i>
      <span>${catVal.name}</span>
    `;
    tabBtn.addEventListener('click', () => {
      // Toggle active states
      document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
      tabBtn.classList.add('active');
      state.selectedCategory = catKey;
      
      // Scroll category section into view
      const targetSec = document.getElementById(`sec-${catKey}`);
      if (targetSec) {
        targetSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
    tabsContainer.appendChild(tabBtn);

    // 2. Menu category sections
    const section = document.createElement('section');
    section.className = 'category-section';
    section.id = `sec-${catKey}`;
    
    section.innerHTML = `
      <h3 class="category-title">${catVal.name}</h3>
      <div class="category-items-grid" id="grid-${catKey}"></div>
    `;
    categoriesContainer.appendChild(section);

    const itemsGrid = document.getElementById(`grid-${catKey}`);
    
    // 3. Render individual cards inside category section
    catVal.items.forEach(item => {
      const card = document.createElement('div');
      card.className = 'item-card';
      
      // Determine display price string (e.g. $30 / 加蛋 $35, or 中 $15 / 大 $20)
      let priceHtml = `$${item.price}`;
      if (item.hasEggOption || catVal.eggPrice) {
        const eggCost = item.eggPrice || catVal.eggPrice || 5;
        priceHtml = `$${item.price} <span class="price-split">/</span> <span class="price-alt">加蛋 $${item.price + eggCost}</span>`;
      } else if (catVal.isDrink) {
        const sizeCost = item.sizePriceDiff || 5;
        priceHtml = `<span class="price-size">中</span> $${item.price} <span class="price-split">/</span> <span class="price-size">大</span> $${item.price + sizeCost}`;
      } else if (item.hasEggOption) {
        priceHtml = `$${item.price} <span class="price-split">/</span> <span class="price-alt">加蛋 $${item.price + 5}</span>`;
      }

      card.innerHTML = `
        <div class="item-info">
          <span class="item-name">${item.name}</span>
          <span class="item-desc">${item.desc || catVal.desc || '美味點心，即點即做'}</span>
        </div>
        <div class="item-footer">
          <span class="item-price">${priceHtml}</span>
          <button class="btn-add-item"><i class="fa-solid fa-plus"></i></button>
        </div>
      `;
      card.addEventListener('click', () => openCustomModal(item, catKey));
      itemsGrid.appendChild(card);
    });
  });
}

// Live Search Filter
function initSearchFilter() {
  const searchInput = document.getElementById('menu-search');
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim().toLowerCase();
    
    Object.entries(MENU_DATA).forEach(([catKey, catVal]) => {
      const section = document.getElementById(`sec-${catKey}`);
      let hasVisibleItems = false;
      
      const grid = document.getElementById(`grid-${catKey}`);
      const cards = grid.children;
      
      catVal.items.forEach((item, index) => {
        const card = cards[index];
        const match = item.name.toLowerCase().includes(query) || 
                      (item.desc && item.desc.toLowerCase().includes(query)) ||
                      catVal.name.toLowerCase().includes(query);
        
        if (match) {
          card.classList.remove('hidden');
          hasVisibleItems = true;
        } else {
          card.classList.add('hidden');
        }
      });

      // If no items match in this category, hide the entire category header
      if (hasVisibleItems) {
        section.classList.remove('hidden');
      } else {
        section.classList.add('hidden');
      }
    });
  });
}

// ==========================================================================
// MODAL & OPTIONS CUSTOMIZATION
// ==========================================================================
const modal = document.getElementById('custom-modal');
const modalName = document.getElementById('modal-item-name');
const btnCloseModal = document.getElementById('btn-close-modal');
const btnSpinUp = document.getElementById('btn-spin-up');
const btnSpinDown = document.getElementById('btn-spin-down');
const inputQty = document.getElementById('modal-qty');
const modalTotal = document.getElementById('modal-total-display');
const btnAddToCart = document.getElementById('btn-add-to-cart');
const inputRemark = document.getElementById('modal-remark');

// Groups
const groupFlavor = document.getElementById('flavor-selection-group');
const groupEgg = document.getElementById('egg-option-group');
const groupSauce = document.getElementById('sauce-option-group');
const groupDrinkSize = document.getElementById('drink-size-group');
const groupDrinkTemp = document.getElementById('drink-temp-group');

function openCustomModal(item, catKey) {
  state.activeCartItemToEdit = { item, catKey, basePrice: item.price };
  
  modalName.textContent = item.name;
  inputQty.value = 1;
  inputRemark.value = '';
  
  // Hide all dynamic custom option groups by default
  groupFlavor.classList.add('hidden');
  groupEgg.classList.add('hidden');
  groupSauce.classList.add('hidden');
  groupDrinkSize.classList.add('hidden');
  groupDrinkTemp.classList.add('hidden');

  // 1. Toast Flavors Option
  if (item.hasFlavorOption) {
    groupFlavor.classList.remove('hidden');
    // Ensure default radio selection
    document.querySelector('input[name="toast-flavor"]').checked = true;
  }

  // 2. Add Egg Option
  const categoryConfig = MENU_DATA[catKey];
  if (item.hasEggOption || categoryConfig.eggPrice) {
    groupEgg.classList.remove('hidden');
    const eggPriceLabel = document.getElementById('modal-egg-price');
    const eggPrice = item.eggPrice || categoryConfig.eggPrice || 5;
    eggPriceLabel.textContent = `+$${eggPrice}`;
    document.querySelector('input[name="egg-option"][value="no"]').checked = true;
  }

  // 3. Pasta / Snack Sauce Option
  if (item.hasSauceOption || item.hasPastaSauceOption) {
    groupSauce.classList.remove('hidden');
    // Toggle sauce radios depending on item type
    const redSauce = document.getElementById('sauce-pasta-red');
    const whiteSauce = document.getElementById('sauce-pasta-white');
    
    if (item.hasPastaSauceOption) {
      redSauce.classList.remove('hidden');
      whiteSauce.classList.remove('hidden');
      document.querySelector('input[name="sauce-option"][value="紅醬"]').checked = true;
    } else {
      redSauce.classList.add('hidden');
      whiteSauce.classList.add('hidden');
      document.querySelector('input[name="sauce-option"][value="黑胡椒"]').checked = true;
    }
  }

  // 4. Drink Size Options
  if (categoryConfig.isDrink) {
    groupDrinkSize.classList.remove('hidden');
    groupDrinkTemp.classList.remove('hidden');
    
    const drinkLPriceLabel = document.getElementById('modal-drink-l-price');
    const sizeDiff = item.sizePriceDiff || 5;
    drinkLPriceLabel.textContent = `+$${sizeDiff}`;
    
    document.querySelector('input[name="drink-size"][value="M"]').checked = true;
    
    // Customize Drink Temperatures based on item restrictions
    const tempCold = document.getElementById('temp-cold-card');
    const tempWarm = document.getElementById('temp-warm-card');
    const tempHot = document.getElementById('temp-hot-card');
    
    tempCold.classList.remove('hidden');
    tempWarm.classList.remove('hidden');
    tempHot.classList.remove('hidden');

    if (item.coldOnly) {
      tempWarm.classList.add('hidden');
      tempHot.classList.add('hidden');
      document.querySelector('input[name="drink-temp"][value="冰"]').checked = true;
    } else if (item.hotOrWarmOnly) {
      tempCold.classList.add('hidden');
      document.querySelector('input[name="drink-temp"][value="熱"]').checked = true;
    } else {
      document.querySelector('input[name="drink-temp"][value="冰"]').checked = true;
    }
  }

  updateModalPrice();
  modal.classList.remove('hidden');
}

function updateModalPrice() {
  if (!state.activeCartItemToEdit) return;

  const { item, catKey, basePrice } = state.activeCartItemToEdit;
  let pricePerUnit = basePrice;

  // Add Egg price calculations
  if (groupEgg.classList.contains('hidden') === false) {
    const isEggChecked = document.querySelector('input[name="egg-option"]:checked').value === 'yes';
    if (isEggChecked) {
      const eggCost = item.eggPrice || MENU_DATA[catKey].eggPrice || 5;
      pricePerUnit += eggCost;
    }
  }

  // Drink Size calculations
  if (groupDrinkSize.classList.contains('hidden') === false) {
    const isLSize = document.querySelector('input[name="drink-size"]:checked').value === 'L';
    if (isLSize) {
      const sizeCost = item.sizePriceDiff || 5;
      pricePerUnit += sizeCost;
    }
  }

  const qty = parseInt(inputQty.value) || 1;
  const totalPrice = pricePerUnit * qty;

  modalTotal.textContent = `金額 $${totalPrice}`;
}

// Add Options Listeners to update price instantly
document.querySelectorAll('input[name="egg-option"], input[name="drink-size"]').forEach(input => {
  input.addEventListener('change', updateModalPrice);
});

btnSpinUp.addEventListener('click', () => {
  let val = parseInt(inputQty.value) || 1;
  if (val < 99) inputQty.value = val + 1;
  updateModalPrice();
});

btnSpinDown.addEventListener('click', () => {
  let val = parseInt(inputQty.value) || 1;
  if (val > 1) inputQty.value = val - 1;
  updateModalPrice();
});

btnCloseModal.addEventListener('click', () => {
  modal.classList.add('hidden');
  state.activeCartItemToEdit = null;
});

// Add to Cart Execution
btnAddToCart.addEventListener('click', () => {
  if (!state.activeCartItemToEdit) return;

  const { item, catKey, basePrice } = state.activeCartItemToEdit;
  const qty = parseInt(inputQty.value) || 1;
  const remark = inputRemark.value.trim();
  
  // Custom Object Construction
  let customs = {};
  let customsDisplayList = [];

  if (!groupFlavor.classList.contains('hidden')) {
    customs.flavor = document.querySelector('input[name="toast-flavor"]:checked').value;
    customsDisplayList.push(customs.flavor);
  }

  if (!groupEgg.classList.contains('hidden')) {
    const wantsEgg = document.querySelector('input[name="egg-option"]:checked').value === 'yes';
    customs.egg = wantsEgg;
    if (wantsEgg) customsDisplayList.push('加蛋');
  }

  if (!groupSauce.classList.contains('hidden')) {
    customs.sauce = document.querySelector('input[name="sauce-option"]:checked').value;
    customsDisplayList.push(customs.sauce);
  }

  if (!groupDrinkSize.classList.contains('hidden')) {
    customs.size = document.querySelector('input[name="drink-size"]:checked').value;
    customs.temp = document.querySelector('input[name="drink-temp"]:checked').value;
    customsDisplayList.push(customs.size === 'L' ? '大杯' : '中杯');
    customsDisplayList.push(customs.temp);
  }

  // Calculate Single Price
  let singlePrice = basePrice;
  if (customs.egg) singlePrice += (item.eggPrice || MENU_DATA[catKey].eggPrice || 5);
  if (customs.size === 'L') singlePrice += (item.sizePriceDiff || 5);

  const finalItemName = customs.flavor ? `${item.name}(${customs.flavor})` : item.name;

  // Add Item to cart state
  const cartId = Date.now().toString() + Math.random().toString().substr(2, 5);
  state.cart.push({
    cartId,
    item,
    catKey,
    name: finalItemName,
    qty,
    price: singlePrice,
    customs,
    customsStr: customsDisplayList.join(', '),
    remark
  });

  // Visual success feedback
  createToast('已加入購物車', `${finalItemName} x${qty}`, 'info');
  modal.classList.add('hidden');
  state.activeCartItemToEdit = null;

  renderCart();
});

// ==========================================================================
// RENDER SHOPPING CART (CUSTOMER DRAWER)
// ==========================================================================
const typeDinein = document.getElementById('type-dinein');
const typeTakeout = document.getElementById('type-takeout');
const tableWrapper = document.getElementById('table-number-wrapper');
const tableSelect = document.getElementById('table-select');
const btnSubmitOrder = document.getElementById('btn-submit-order');

let currentDiningType = 'dinein';

typeDinein.addEventListener('click', () => {
  currentDiningType = 'dinein';
  typeDinein.classList.add('active');
  typeTakeout.classList.remove('active');
  tableWrapper.classList.remove('hidden');
  validateOrderRequirements();
});

typeTakeout.addEventListener('click', () => {
  currentDiningType = 'takeout';
  typeTakeout.classList.add('active');
  typeDinein.classList.remove('active');
  tableWrapper.classList.add('hidden');
  tableSelect.value = ""; // clear selection
  validateOrderRequirements();
});

tableSelect.addEventListener('change', validateOrderRequirements);

function validateOrderRequirements() {
  const isCartEmpty = state.cart.length === 0;
  let isTableSelected = true;

  if (currentDiningType === 'dinein') {
    isTableSelected = tableSelect.value !== "";
  }

  btnSubmitOrder.disabled = isCartEmpty || !isTableSelected;
}

// Clear cart button
document.getElementById('clear-cart-btn').addEventListener('click', () => {
  if (state.cart.length === 0) return;
  state.cart = [];
  renderCart();
  createToast('購物車已清空', '請重新挑選想吃的餐點', 'info');
});

function renderCart() {
  const cartList = document.getElementById('cart-items-list');
  const cartSubtotal = document.getElementById('cart-subtotal');
  const cartTotal = document.getElementById('cart-total');
  const mobileCount = document.getElementById('mobile-cart-count');
  const mobileTotal = document.getElementById('mobile-cart-total');
  const mobileBar = document.getElementById('mobile-cart-trigger');

  // Handle mobile elements
  const totalItemsCount = state.cart.reduce((sum, item) => sum + item.qty, 0);
  const totalCost = state.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  if (totalItemsCount > 0) {
    mobileBar.classList.remove('hidden');
    mobileCount.textContent = `${totalItemsCount} 件商品`;
    mobileTotal.textContent = `$${totalCost}`;
  } else {
    mobileBar.classList.add('hidden');
  }

  cartList.innerHTML = '';

  if (state.cart.length === 0) {
    cartList.innerHTML = `
      <div class="empty-cart-state">
        <i class="fa-solid fa-cookie"></i>
        <p>購物車是空的，快去點餐吧！</p>
      </div>
    `;
    cartSubtotal.textContent = `$0`;
    cartTotal.textContent = `$0`;
    validateOrderRequirements();
    return;
  }

  state.cart.forEach(cartItem => {
    const itemCard = document.createElement('div');
    itemCard.className = 'cart-item-card';
    itemCard.innerHTML = `
      <div class="cart-item-top">
        <span class="cart-item-name">${cartItem.name}</span>
        <span class="cart-item-price">$${cartItem.price * cartItem.qty}</span>
      </div>
      <div class="cart-item-customizations">
        ${cartItem.customsStr ? `<div>規格: ${cartItem.customsStr}</div>` : ''}
        ${cartItem.remark ? `<div>備註: ${cartItem.remark}</div>` : ''}
      </div>
      <div class="cart-item-actions">
        <div class="quantity-badge-btn">
          <button class="qty-btn btn-qty-down" data-id="${cartItem.cartId}"><i class="fa-solid fa-minus"></i></button>
          <span class="qty-val">${cartItem.qty}</span>
          <button class="qty-btn btn-qty-up" data-id="${cartItem.cartId}"><i class="fa-solid fa-plus"></i></button>
        </div>
      </div>
      <button class="btn-delete-item" data-id="${cartItem.cartId}"><i class="fa-solid fa-trash"></i></button>
    `;

    // Item Action Listeners
    itemCard.querySelector('.btn-delete-item').addEventListener('click', (e) => {
      const id = e.currentTarget.dataset.id;
      state.cart = state.cart.filter(item => item.cartId !== id);
      renderCart();
    });

    itemCard.querySelector('.btn-qty-up').addEventListener('click', (e) => {
      const id = e.currentTarget.dataset.id;
      const target = state.cart.find(item => item.cartId === id);
      if (target.qty < 99) target.qty += 1;
      renderCart();
    });

    itemCard.querySelector('.btn-qty-down').addEventListener('click', (e) => {
      const id = e.currentTarget.dataset.id;
      const target = state.cart.find(item => item.cartId === id);
      if (target.qty > 1) {
        target.qty -= 1;
      } else {
        state.cart = state.cart.filter(item => item.cartId !== id);
      }
      renderCart();
    });

    cartList.appendChild(itemCard);
  });

  // Update prices display
  cartSubtotal.textContent = `$${totalCost}`;
  cartTotal.textContent = `$${totalCost}`;
  
  // Delivery threshold warning if takeout is selected
  const deliveryRow = document.getElementById('delivery-row');
  const deliveryStatus = document.getElementById('delivery-status');
  if (currentDiningType === 'takeout') {
    deliveryRow.classList.remove('hidden');
    if (totalCost >= 100) {
      deliveryStatus.textContent = "已達外送門檻";
      deliveryStatus.className = "success";
      deliveryStatus.style.color = "#2ecc71";
    } else {
      deliveryStatus.textContent = `未達門檻 (差 $${100 - totalCost})`;
      deliveryStatus.className = "warning";
      deliveryStatus.style.color = "#ff4757";
    }
  } else {
    deliveryRow.classList.add('hidden');
  }

  validateOrderRequirements();
}

// Mobile cart drawer toggle
const mobileCartTrigger = document.getElementById('mobile-cart-trigger');
mobileCartTrigger.addEventListener('click', () => {
  const drawer = document.getElementById('cart-drawer-container');
  drawer.classList.toggle('active');
  if (drawer.classList.contains('active')) {
    // Show a close drawer floating button or change text
    mobileCartTrigger.querySelector('.btn-cart-checkout').textContent = '收起購物車';
  } else {
    mobileCartTrigger.querySelector('.btn-cart-checkout').textContent = '查看購物車';
  }
});

// Submit Order Transaction
btnSubmitOrder.addEventListener('click', () => {
  if (state.cart.length === 0) return;

  const orderIdNum = state.nextOrderId;
  const formattedId = '#' + orderIdNum.toString().padStart(4, '0');
  
  const newOrder = {
    id: formattedId,
    diningType: currentDiningType,
    tableNo: currentDiningType === 'dinein' ? tableSelect.value : '外帶',
    timestamp: new Date().toLocaleTimeString('zh-TW', { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
    items: state.cart.map(cartItem => ({
      name: cartItem.name,
      qty: cartItem.qty,
      customsStr: cartItem.customsStr,
      price: cartItem.price,
      remark: cartItem.remark,
      status: 'pending' // pending, preparing, ready, archived
    })),
    status: 'pending' // pending, preparing, ready
  };

  // Add order to local list
  state.orders.push(newOrder);
  state.nextOrderId += 1;

  // Persist
  saveOrdersToStorage();
  localStorage.setItem(STORAGE_NEXT_ORDER_ID_KEY, state.nextOrderId.toString());

  // Show Success Box
  const successModal = document.getElementById('success-modal');
  document.getElementById('success-order-id').textContent = newOrder.id;
  document.getElementById('success-table-no').textContent = newOrder.tableNo === '外帶' ? '外帶' : `桌號 ${newOrder.tableNo}`;
  
  const totalCost = state.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  document.getElementById('success-order-total').textContent = `$${totalCost}`;
  successModal.classList.remove('hidden');

  // Trigger sound effect on click
  if (state.audioEnabled) {
    speak("訂單已送出，我們將儘速為您製作！");
  }

  // Clear cart
  state.cart = [];
  renderCart();

  // Reset drawer state on mobile
  const drawer = document.getElementById('cart-drawer-container');
  drawer.classList.remove('active');
  document.querySelector('.btn-cart-checkout').textContent = '查看購物車';

  // Rerender kitchen view immediately
  renderKitchenBoard();
});

// Close success modal
document.getElementById('btn-close-success').addEventListener('click', () => {
  document.getElementById('success-modal').classList.add('hidden');
});


// ==========================================================================
// RENDER KITCHEN DASHBOARD (STORE PANEL)
// ==========================================================================
function renderKitchenBoard() {
  const listPending = document.getElementById('list-pending');
  const listPreparing = document.getElementById('list-preparing');
  const listReady = document.getElementById('list-ready');

  // Count Statistics
  let countPending = 0;
  let countPreparing = 0;
  let countReady = 0;

  listPending.innerHTML = '';
  listPreparing.innerHTML = '';
  listReady.innerHTML = '';

  state.orders.forEach((order) => {
    // Filter active items based on statuses
    const pendingItems = order.items.filter(i => i.status === 'pending');
    const preparingItems = order.items.filter(i => i.status === 'preparing');
    const readyItems = order.items.filter(i => i.status === 'ready');

    // Categorize order status overall
    let overallStatus = 'pending';
    if (pendingItems.length === 0 && preparingItems.length > 0) {
      overallStatus = 'preparing';
    } else if (pendingItems.length === 0 && preparingItems.length === 0 && readyItems.length > 0) {
      overallStatus = 'ready';
    } else if (order.items.every(i => i.status === 'archived')) {
      return; // Skip archived orders entirely from active lists
    }

    // Update statistics counts
    if (overallStatus === 'pending') countPending++;
    if (overallStatus === 'preparing') countPreparing++;
    if (overallStatus === 'ready') countReady++;

    // Generate Order Card
    const card = document.createElement('div');
    card.className = 'kitchen-order-card';
    
    // Build Items List HTML
    let itemsHTML = '';
    order.items.forEach((item, index) => {
      // Ignore archived items inside card
      if (item.status === 'archived') return;

      let itemBadgeClass = 'item-status-pending';
      let actionBtnHTML = '';

      if (item.status === 'pending') {
        itemBadgeClass = 'status-pending-text';
        actionBtnHTML = `
          <button class="btn-kitchen-action btn-start" data-order-id="${order.id}" data-item-idx="${index}">
            <i class="fa-solid fa-fire-burner"></i> 開始製作
          </button>
        `;
      } else if (item.status === 'preparing') {
        itemBadgeClass = 'status-preparing-text';
        actionBtnHTML = `
          <button class="btn-kitchen-action btn-complete" data-order-id="${order.id}" data-item-idx="${index}">
            <i class="fa-solid fa-circle-check"></i> 完成出餐
          </button>
        `;
      } else if (item.status === 'ready') {
        itemBadgeClass = 'status-ready-text';
        actionBtnHTML = `
          <button class="btn-kitchen-action btn-archive" data-order-id="${order.id}" data-item-idx="${index}">
            <i class="fa-solid fa-check-double"></i> 存檔
          </button>
        `;
      }

      itemsHTML += `
        <div class="k-item-row">
          <div>
            <span class="k-item-qty">x${item.qty}</span>
            <span class="k-item-name">${item.name}</span>
            <span class="item-status-badge ${itemBadgeClass}">(${item.status})</span>
          </div>
          ${item.customsStr ? `<span class="k-item-custom"><i class="fa-solid fa-sliders"></i> ${item.customsStr}</span>` : ''}
          ${item.remark ? `<span class="k-item-custom"><i class="fa-regular fa-comment-dots"></i> 備註: ${item.remark}</span>` : ''}
          <div style="display:flex; justify-content:flex-end; margin-top:4px;">
            ${actionBtnHTML}
          </div>
        </div>
      `;
    });

    card.innerHTML = `
      <div class="k-order-header">
        <span class="k-order-title">${order.id} - ${order.tableNo === '外帶' ? '外帶' : `桌號 ${order.tableNo}`}</span>
        <span class="k-order-time">${order.timestamp}</span>
      </div>
      <div class="k-order-items">
        ${itemsHTML}
      </div>
      <div class="k-order-footer">
        <button class="btn-kitchen-action btn-archive btn-archive-all" data-order-id="${order.id}">
          <i class="fa-solid fa-circle-xmark"></i> 封存整筆
        </button>
      </div>
    `;

    // Click Actions on Buttons
    card.querySelectorAll('.btn-kitchen-action').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const orderId = e.currentTarget.dataset.orderId;
        const itemIdx = parseInt(e.currentTarget.dataset.itemIdx);
        
        // Handle whole order archiving
        if (e.currentTarget.classList.contains('btn-archive-all')) {
          archiveOrder(orderId);
          return;
        }

        const targetOrder = state.orders.find(o => o.id === orderId);
        const targetItem = targetOrder.items[itemIdx];

        if (targetItem.status === 'pending') {
          targetItem.status = 'preparing';
        } else if (targetItem.status === 'preparing') {
          targetItem.status = 'ready';
          // Trigger voice and visual notifications
          triggerDishReadyNotification(targetOrder.tableNo, targetItem.name, targetOrder.id);
          // Broadcast to other tabs
          broadcastNotification(targetOrder.id, targetOrder.tableNo, targetItem.name);
        } else if (targetItem.status === 'ready') {
          targetItem.status = 'archived';
        }

        saveOrdersToStorage();
        renderKitchenBoard();
      });
    });

    // Append card to column
    if (overallStatus === 'pending') {
      listPending.appendChild(card);
    } else if (overallStatus === 'preparing') {
      listPreparing.appendChild(card);
    } else if (overallStatus === 'ready') {
      listReady.appendChild(card);
    }
  });

  // Update Stats values
  document.getElementById('stat-pending').textContent = countPending;
  document.getElementById('stat-preparing').textContent = countPreparing;
  document.getElementById('stat-ready').textContent = countReady;

  document.getElementById('badge-pending').textContent = countPending;
  document.getElementById('badge-preparing').textContent = countPreparing;
  document.getElementById('badge-ready').textContent = countReady;
}

function archiveOrder(orderId) {
  const targetOrder = state.orders.find(o => o.id === orderId);
  if (targetOrder) {
    targetOrder.items.forEach(i => i.status = 'archived');
    saveOrdersToStorage();
    renderKitchenBoard();
    createToast('訂單已封存', `單號 ${orderId} 已移至歷史紀錄`, 'info');
  }
}

// Clear all active orders button
document.getElementById('clear-orders-btn').addEventListener('click', () => {
  if (confirm('確定要清除所有訂單紀錄嗎？此動作無法復原。')) {
    state.orders = [];
    state.nextOrderId = 1;
    saveOrdersToStorage();
    localStorage.setItem(STORAGE_NEXT_ORDER_ID_KEY, "1");
    renderKitchenBoard();
    createToast('系統重設完成', '已清除所有點餐資訊', 'warning');
  }
});

// ==========================================================================
// WINDOWS/TAB SYNCHRONIZATION VIA LOCALSTORAGE
// ==========================================================================
function broadcastNotification(orderId, tableNo, itemName) {
  const eventData = {
    orderId,
    tableNo,
    itemName,
    timestamp: Date.now()
  };
  localStorage.setItem(STORAGE_NOTIFY_EVENT_KEY, JSON.stringify(eventData));
}

function initCrossTabSync() {
  window.addEventListener('storage', (e) => {
    if (e.key === STORAGE_ORDERS_KEY) {
      // Re-load orders from storage
      const storedOrders = localStorage.getItem(STORAGE_ORDERS_KEY);
      if (storedOrders) {
        state.orders = JSON.parse(storedOrders);
        renderKitchenBoard();
      }
    }
    
    if (e.key === STORAGE_NEXT_ORDER_ID_KEY) {
      state.nextOrderId = parseInt(e.newValue || "1");
    }

    if (e.key === STORAGE_NOTIFY_EVENT_KEY && e.newValue) {
      const data = JSON.parse(e.newValue);
      // Only process if it's a new event (within the last 3 seconds) to prevent double notification on page loads
      if (Date.now() - data.timestamp < 3000) {
        triggerDishReadyNotification(data.tableNo, data.itemName, data.orderId);
      }
    }
  });
}

// ==========================================================================
// VIEWS ROUTING / CONTROLLER
// ==========================================================================
function setViewMode(mode) {
  const container = document.getElementById('app-container');
  const navSplit = document.getElementById('nav-view-split');
  const navCustomer = document.getElementById('nav-view-customer');
  const navKitchen = document.getElementById('nav-view-kitchen');

  state.currentView = mode;

  // Reset active classes
  navSplit.classList.remove('active');
  navCustomer.classList.remove('active');
  navKitchen.classList.remove('active');

  container.className = 'app-main'; // clear view classes

  if (mode === 'split') {
    navSplit.classList.add('active');
    container.classList.add('split-view');
  } else if (mode === 'customer') {
    navCustomer.classList.add('active');
    container.classList.add('customer-view');
  } else if (mode === 'kitchen') {
    navKitchen.classList.add('active');
    container.classList.add('kitchen-view');
  }

  // Force scroll calculations and updates
  renderCart();
  renderKitchenBoard();
}

function initViewToggle() {
  document.getElementById('nav-view-split').addEventListener('click', () => setViewMode('split'));
  document.getElementById('nav-view-customer').addEventListener('click', () => setViewMode('customer'));
  document.getElementById('nav-view-kitchen').addEventListener('click', () => setViewMode('kitchen'));
}

// Theme toggler (Light/Dark)
function initThemeToggle() {
  const btn = document.getElementById('dark-mode-toggle');
  btn.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('theme-dark');
    document.body.classList.toggle('theme-light', !isDark);
    
    btn.innerHTML = isDark 
      ? `<i class="fa-solid fa-sun"></i>` 
      : `<i class="fa-solid fa-moon"></i>`;
  });
}

// ==========================================================================
// SYSTEM ENTRYPOINT
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  initStorage();
  initVoiceNotification();
  renderMenuCategories();
  initSearchFilter();
  initViewToggle();
  initThemeToggle();
  initCrossTabSync();

  // Load default view mode
  setViewMode('split');
  
  console.log("米斯特早午餐系統初始化完成。");
});

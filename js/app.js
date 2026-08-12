// Trust Wallet UI Recreation – Design Project
// No real wallet / crypto logic

const tokens = [
  { name: "Bitcoin", symbol: "BTC", amount: "0.1842", fiat: "$11,420.55", change: 2.14, icon: "₿", color: "#F7931A" },
  { name: "Ethereum", symbol: "ETH", amount: "1.245", fiat: "$3,102.80", change: 1.87, icon: "Ξ", color: "#627EEA" },
  { name: "BNB", symbol: "BNB", amount: "4.82", fiat: "$2,891.40", change: -0.64, icon: "⬡", color: "#F0B90B" },
  { name: "Solana", symbol: "SOL", amount: "12.5", fiat: "$1,987.50", change: 4.21, icon: "◎", color: "#14F195" },
  { name: "Tether", symbol: "USDT", amount: "850.00", fiat: "$850.00", change: 0.01, icon: "₮", color: "#26A17B" },
  { name: "USD Coin", symbol: "USDC", amount: "420.00", fiat: "$420.00", change: 0.00, icon: "$", color: "#2775CA" },
  { name: "TRON", symbol: "TRX", amount: "1250", fiat: "$312.50", change: -1.12, icon: "T", color: "#FF0013" },
  { name: "Polygon", symbol: "POL", amount: "980", fiat: "$245.00", change: 0.85, icon: "⬡", color: "#8247E5" },
];

function renderTokens() {
  const list = document.getElementById("token-list");
  list.innerHTML = tokens.map(t => `
    <div class="token-item">
      <div class="token-icon" style="background:${t.color}22;color:${t.color}">${t.icon}</div>
      <div class="token-info">
        <div class="token-name">${t.name}</div>
        <div class="token-symbol">${t.symbol}</div>
      </div>
      <div class="token-balance">
        <div class="token-amount">${t.amount}</div>
        <div class="token-fiat">${t.fiat}</div>
        <div class="token-change ${t.change >= 0 ? "up" : "down"}">
          ${t.change >= 0 ? "▲" : "▼"} ${Math.abs(t.change).toFixed(2)}%
        </div>
      </div>
    </div>
  `).join("");
}

function showScreen(name) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  const el = document.getElementById("screen-" + name);
  if (el) el.classList.add("active");

  // bottom nav only after onboarding
  const nav = document.getElementById("bottom-nav");
  if (name === "splash") {
    nav.style.display = "none";
  } else {
    nav.style.display = "flex";
    document.querySelectorAll(".nav-item").forEach(n => {
      n.classList.toggle("active", n.dataset.screen === name);
    });
  }
}

function openSheet(title) {
  document.getElementById("sheet-title").textContent = title;
  document.getElementById("action-sheet").classList.add("open");
}

function closeSheet() {
  document.getElementById("action-sheet").classList.remove("open");
}

// Event listeners
document.getElementById("btn-create").addEventListener("click", () => showScreen("home"));
document.getElementById("btn-import").addEventListener("click", () => showScreen("home"));

document.querySelectorAll(".nav-item").forEach(btn => {
  btn.addEventListener("click", () => showScreen(btn.dataset.screen));
});

document.querySelectorAll(".action-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const map = { send: "Send", receive: "Receive", buy: "Buy Crypto", swap: "Swap" };
    openSheet(map[btn.dataset.action] || "Action");
  });
});

document.getElementById("sheet-close").addEventListener("click", closeSheet);
document.getElementById("action-sheet").addEventListener("click", e => {
  if (e.target.id === "action-sheet") closeSheet();
});

// Init
renderTokens();
showScreen("splash");

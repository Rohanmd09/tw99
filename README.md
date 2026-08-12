# Trust Wallet – UI Recreation (Design Project PWA)

High-fidelity visual recreation of **Trust: Crypto & Bitcoin Wallet** (v26.29.4) for design / presentation use.

## What this is
- Pixel-close dark UI matching Trust Wallet’s look & feel
- Splash / onboarding → Home (portfolio + tokens) → bottom navigation
- Discover / Browser / Settings placeholder screens
- Action sheets for Send / Receive / Buy / Swap
- Fully installable PWA (manifest + service worker)
- Uses the official-style shield icon you provided

## What this is NOT
- Not a real wallet
- No private keys, seed phrases, blockchain, or real transactions
- Frontend mock only – perfect for presentations, design reviews, or converting via PWA Builder

## How to use

### 1. Local preview
```bash
cd trust-wallet-pwa
npx serve .
# or python -m http.server 8080
```
Open the URL on your phone or Chrome.

### 2. Install as PWA
- Chrome → menu → “Install app” / “Add to Home screen”
- Or use [PWA Builder](https://www.pwabuilder.com/) to generate Android APK / package

### 3. PWA Builder steps
1. Zip this folder (or host it on any HTTPS static host)
2. Go to pwabuilder.com → enter the URL
3. Generate package → Android → download the .aab / APK

## Customisation tips for your presentation
- Edit `js/app.js` → change token list / balances
- Edit `css/styles.css` → tweak colors (accent is already `#0084FF`)
- Add more screens by copying the existing `.screen` pattern

Version shown in Settings: **26.29.4** (matches the APK you supplied).
Package name reference: `com.wallet.crypto.trustapp`

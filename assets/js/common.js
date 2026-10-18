/* ==========================================================================
   FreeInvoice.store — Shared UI Script
   Developer: Muhammad Rameez Tariq
   ========================================================================== */

function toggleMobileMenu() {
  const nav = document.getElementById('mobileNav');
  if (nav) {
    nav.classList.toggle('open');
  }
}

function closeStickyAd() {
  const ad = document.getElementById('stickyAd');
  if (ad) {
    ad.style.display = 'none';
  }
}

function showToast(message) {
  let toast = document.getElementById('globalToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'globalToast';
    toast.style.cssText = 'position:fixed;bottom:75px;right:16px;left:16px;max-width:360px;margin:0 auto;background:#0f172a;color:#fff;padding:11px 16px;border-radius:8px;font-weight:600;font-size:13.5px;text-align:center;box-shadow:0 8px 20px rgba(0,0,0,0.2);z-index:9999;transition:opacity 0.25s ease;opacity:0;pointer-events:none;';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.style.opacity = '1';
  setTimeout(() => {
    toast.style.opacity = '0';
  }, 2600);
}

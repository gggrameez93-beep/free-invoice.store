/* ==========================================================================
   Free-Invoice.store — Shared UI & Navigation Script (Deferred)
   Developer: Muhammad Rameez Tariq
   ========================================================================== */

function toggleMobileMenu() {
  var nav = document.getElementById('mobileDrawer');
  if (nav) {
    nav.classList.toggle('open');
  }
}

function closeStickyAd() {
  var ad = document.getElementById('stickyAd');
  if (ad) {
    ad.style.display = 'none';
  }
}

function showToast(message) {
  var toast = document.getElementById('globalToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'globalToast';
    toast.style.cssText = 'position:fixed;bottom:74px;right:16px;left:16px;max-width:340px;margin:0 auto;background:#0f172a;color:#fff;padding:10px 16px;border-radius:8px;font-weight:600;font-size:13.5px;text-align:center;box-shadow:0 8px 20px rgba(0,0,0,0.2);z-index:9999;transition:opacity 0.25s ease;opacity:0;pointer-events:none;';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.style.opacity = '1';
  setTimeout(function() {
    toast.style.opacity = '0';
  }, 2400);
}

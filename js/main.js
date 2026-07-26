/* AutoFrame landing — vanilla JS */
(function () {
  'use strict';

  var root = document.documentElement;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- theme ---- */
  var STORE_KEY = 'autoframe-theme';
  var saved = null;
  try { saved = localStorage.getItem(STORE_KEY); } catch (e) { /* private mode */ }

  function applyTheme(t) {
    root.setAttribute('data-theme', t);
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', t === 'dark' ? '#121212' : '#3949AB');
  }

  applyTheme(saved || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));

  var toggle = document.getElementById('themeToggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      try { localStorage.setItem(STORE_KEY, next); } catch (e) { /* ignore */ }
    });
  }

  /* ---- sticky nav shadow ---- */
  var nav = document.getElementById('nav');
  if (nav) {
    var onScroll = function () { nav.classList.toggle('is-stuck', window.scrollY > 8); };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---- reveal on scroll ---- */
  var items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || reduceMotion) {
    Array.prototype.forEach.call(items, function (el) { el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry, i) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        setTimeout(function () { el.classList.add('in'); }, Math.min(i, 6) * 60);
        io.unobserve(el);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    Array.prototype.forEach.call(items, function (el) { io.observe(el); });
  }

  /* ---- hero slideshow mock ---- */
  var slides = Array.prototype.slice.call(document.querySelectorAll('#slides .slide'));
  var dotsBox = document.getElementById('dots');

  if (slides.length > 1) {
    var idx = 0;
    var dots = slides.map(function (_, i) {
      var d = document.createElement('span');
      if (i === 0) d.className = 'on';
      if (dotsBox) dotsBox.appendChild(d);
      return d;
    });

    var show = function (n) {
      slides[idx].classList.remove('is-active');
      dots[idx].classList.remove('on');
      idx = n % slides.length;
      slides[idx].classList.add('is-active');
      dots[idx].classList.add('on');
    };

    if (!reduceMotion) {
      var timer = setInterval(function () { show(idx + 1); }, 3800);
      document.addEventListener('visibilitychange', function () {
        if (document.hidden) {
          clearInterval(timer);
        } else {
          clearInterval(timer);
          timer = setInterval(function () { show(idx + 1); }, 3800);
        }
      });
    }
  }

  /* ---- faq: one open at a time ---- */
  var faqs = document.querySelectorAll('#faq-list details');
  Array.prototype.forEach.call(faqs, function (d) {
    d.addEventListener('toggle', function () {
      if (!d.open) return;
      Array.prototype.forEach.call(faqs, function (other) {
        if (other !== d) other.open = false;
      });
    });
  });

  /* ---- footer year ---- */
  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();

(function () {
  'use strict';

  var measurementId = 'G-PHCXNGTBZ7';
  var storageKey = 'stoneward_analytics_consent';
  var scriptLoaded = false;

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };

  function readChoice() {
    try { return window.localStorage.getItem(storageKey); }
    catch (error) { return null; }
  }

  function saveChoice(choice) {
    try { window.localStorage.setItem(storageKey, choice); }
    catch (error) { /* The current visit still respects the visitor's choice. */ }
  }

  function loadGoogleAnalytics() {
    if (scriptLoaded || document.querySelector('script[data-stoneward-analytics]')) return;
    scriptLoaded = true;
    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(measurementId);
    script.dataset.stonewardAnalytics = 'true';
    document.head.appendChild(script);
    window.gtag('js', new Date());
    window.gtag('config', measurementId, {
      anonymize_ip: true,
      allow_google_signals: false,
      allow_ad_personalization_signals: false
    });
  }

  function setBannerVisible(visible) {
    var banner = document.getElementById('analyticsConsent');
    if (!banner) return;
    banner.hidden = !visible;
    if (visible) {
      var preferred = banner.querySelector('[data-consent="allow"]');
      if (preferred) preferred.focus();
    }
  }

  function choose(choice) {
    saveChoice(choice);
    setBannerVisible(false);
    window['ga-disable-' + measurementId] = choice !== 'granted';
    if (choice === 'granted') {
      if (scriptLoaded) window.gtag('consent', 'update', {analytics_storage: 'granted'});
      loadGoogleAnalytics();
    } else if (scriptLoaded) {
      window.gtag('consent', 'update', {analytics_storage: 'denied'});
    }
  }

  function renderControls() {
    var banner = document.createElement('section');
    banner.id = 'analyticsConsent';
    banner.className = 'analytics-consent';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-modal', 'false');
    banner.setAttribute('aria-labelledby', 'analyticsConsentTitle');
    banner.hidden = true;
    banner.innerHTML = '<div class="analytics-consent__copy">' +
      '<strong id="analyticsConsentTitle">Help us improve Stoneward</strong>' +
      '<p>With your permission, we use Google Analytics to measure visits and lead activity. The Google tag stays off unless you allow analytics. <a href="privacy.html#collect">Privacy details</a></p>' +
      '</div><div class="analytics-consent__actions">' +
      '<button type="button" class="analytics-consent__button analytics-consent__button--secondary" data-consent="deny">No thanks</button>' +
      '<button type="button" class="analytics-consent__button" data-consent="allow">Allow analytics</button>' +
      '</div>';
    document.body.appendChild(banner);

    banner.addEventListener('click', function (event) {
      var button = event.target.closest('[data-consent]');
      if (!button) return;
      choose(button.dataset.consent === 'allow' ? 'granted' : 'denied');
    });

    var footerNav = document.querySelector('footer .foot-links');
    if (footerNav) {
      var settings = document.createElement('button');
      settings.type = 'button';
      settings.className = 'analytics-settings';
      settings.textContent = 'Analytics settings';
      settings.addEventListener('click', function () { setBannerVisible(true); });
      footerNav.appendChild(settings);
    }

    var choice = readChoice();
    if (choice === 'granted') {
      window['ga-disable-' + measurementId] = false;
      loadGoogleAnalytics();
    } else {
      window['ga-disable-' + measurementId] = true;
      if (choice !== 'denied') setBannerVisible(true);
    }
  }

  function safeLabel(element) {
    return (element.getAttribute('data-analytics-label') || element.textContent || 'unknown')
      .replace(/\s+/g, ' ').trim().slice(0, 80);
  }

  document.addEventListener('click', function (event) {
    if (readChoice() !== 'granted') return;
    var link = event.target.closest('a');
    if (!link) return;
    var href = link.getAttribute('href') || '';
    if (href === '#contact' || href === 'index.html#contact') {
      window.gtag('event', 'book_review_click', {cta_text: safeLabel(link)});
    } else if (href.indexOf('mailto:') === 0) {
      window.gtag('event', 'email_click', {cta_text: safeLabel(link)});
    }
  });

  window.stonewardAnalytics = {
    track: function (eventName, parameters) {
      if (readChoice() === 'granted') window.gtag('event', eventName, parameters || {});
    },
    openSettings: function () { setBannerVisible(true); }
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', renderControls);
  else renderControls();
}());

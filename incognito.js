javascript:(function() {    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');    link.type = 'image/x-icon';    link.rel = 'shortcut icon';    link.href = 'https://www.google.com/favicon.ico';    document.title='Google'; alert("Exploit injected! Made with love by fullpwn.");})();
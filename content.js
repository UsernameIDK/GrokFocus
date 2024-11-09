setTimeout(() => {
  if (window.location.href.includes("x.com/i/grok")) {
    var header = document.querySelector("header[role='banner']");
    if (header) {
      header.remove();
    }
  }
}, 100);

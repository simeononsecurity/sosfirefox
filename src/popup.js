document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("searchButton").addEventListener("click", function () {
      const query = document.getElementById("searchInput").value;
      if (query) {
        const searchUrl = `https://simeononsecurity.ch/search/?q=${encodeURIComponent(query)}`;
        chrome.tabs.create({ url: searchUrl });
      }
    });
  });
  
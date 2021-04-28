// ==UserScript==
// @name         Astronomy Journal to ADS
// @namespace    niu541412
// @version      0.91
// @description  Add direct link to NASA/ADS on iop.org webpage for astronomy papers.
// @author       niu541412@gmail.com
// @match        *://iopscience.iop.org/article/*
// @match        *://www.nature.com/articles/*
// @match        *://science.sciencemag.org/*
// @match        *://www.annualreviews.org/*
// @grant        none
// @icon         data:image/gif;base64,R0lGODdhPAA8ANUAAAAAAAAAUgAAYwAQQggQWhAQYwAYUhAYShAYYxgYUgAhWhAhcwApYzEpaxAxYxAxayExazkxhDE5aylCczlCc0pCe0JKe0JKhEpKhClSe0JShEpSjDlajEpahFJae0pjlGNjnDlrhEp7nFp7nHN7rXt7pXOUrZyctYylvZy1xpy91r291s7O1sbW3tbW5+/v7/f39////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAADIALAAAAAA8ADwAAAb/QIZQqCAyYoRkssgowpRLIxLKLE6VVcZTGWMKoQQYYjwGi8kIcAydhp7JavQ1ye4q7go2DH8vyPl5f3x+ZHt4MQwFfgwGUmBZW0qNTUePjlCTTlBdQwxtSTCdnpuiaqKfYaWbcgRwWXZ4bC+AdWB1tGgvBAq7iGi2YJRFvGCraMKjUMioXQhDbKKUwo0GeX6KCLB3xcAEioFjSHCZo2lt563pfAgKcwTR8EO7h56eZXSEbPpjxLsEiJ0ACaS1iYkzaKLuUGqESAE2V3gMcAMTAMuvdK2QTdzIsaPHes4WHdxHcow9kiBBljzmTEjLeDBjDhmGbOBAjzhz6iyGJt/K/58kFSUaWoAogqJjfBaVyVSmSZpNaCq0iQrjzo4u1lz1RycpoZNAVyoKgOgaUrEIm0Z759RAjGqU2A2bK1CurXtbuQ240o9bXyj6UoZdyYDs4JJqE59yCzeLVEDC/uLtepgNgb1YlFTlyvPn0MpkCq8BnRZeiBioUXNQLIQx1LkMMqRO7YCPZigVUq9YsdfdRAUeUHvAbHVJ1hguWgxYPuAAYJ8CUK8QgCb6gp8wZqfedwF1g5D2iuYT9QG1S1ExJsRE3eKdM9SNKcFXYMDZO5r8oASfsjmGc72oDaCGO+3wRUVm3hwkwHTXhBbOAj6NQdZobGTFRgTiHEWIAhug9v/AUfUElJAII6SmXjSoBQAPfI0UwYIdTbCjXQwowEXHI7nNmEAx2R3IhTstIMFLjjEImAQJb/XBUocxqBDASDEsoBJZD1WIWitkkAXCC6k9OZQnMYAAInrmGSFEemTG0w4Kb51nAJcx8DbPNEXmcWOBRqKT247pBGckGHvxJuQSxfR1xwpX5JNiIg8VMKGUSZk3koSoIRBdgiAqgpRS2VA4RJkoxpACmp+qEE2BRbhVxEvSOHZEkk0ksdefSvQmYAx8XoZrGsT0VgZx/rQzDx5LoJZrglfmM2EMT2Zz3RjRQdAgCKKOdGlSaTTT4ANIxgBBIqG9SoQJqYV4xIlnwuL/IVKtcTJEAamVoAC5qKnQojBJnDBjnrvslUIrd/SW2p9llLArHATQmxoK5qDjkCcVBaAiiEclRV3FigggMXXgXuNJhAcVoDHHGJf8jEmsPRUTq/CwUxM7hIp81IG2EXOHXXnkDDM47PS86k3DJmiBBRpggIEFFEjAqKYYa4pNg2YVQPTQF1R9gQVWW1Ay1M4sUIHRFXxtwdcVsAyT2c4QXfTYYZP9tTM51yT10RoMPXTYdcsl0LC82PR1Bx0YfbTYGJTN6zZ8FG40218LfjQD3jgtOdOEYBO24BoUnfnRFoAbGAJGaxD22KLXPfTRZp9yXicWYJB50ZeDXcEwLuus8sDgbRdeAdGxWzAP33Wx0TjgoRe+tk14ON640YE7XnjUk2eKxu6NZ97B5plXLJgnRSvfPODN726u6ue11HrmbrcddupDGJ+53VjXjT3qevNj50CxY45BBxZ0MDvytxsc7L7WPcddjwIa8kqmJrc812lOc1qbnNOYpzjADQ8DHhhd29jykpZ0kAFjU5vuyFa4TiylEw6U3+vs5rgH6g2AdyCh/lwnvlgIpALdq1voHri5FF7AAU+jnOQaiD0XhoaBl2Nc6y7XQMVpLUQmQZkQhvY6xQmuAhf42PiEkMPmFdB1KQTj2uyHvOVdTgP+K11UbBIEADs=
// @license      MIT License
// @run-at       document-end
// ==/UserScript==

(function() {
  'use strict';
  if (window.top != window.self) {
    return;
  }
  var window_url = window.location.href;
  var website_host = window.location.host;
  if (website_host == "iopscience.iop.org") {
    let doimeta = document.querySelector("meta[name='citation_doi']");
    let doi = doimeta.content;
    let insertnode = document.getElementsByClassName("content-nav-ul wd-content-nav")[0];
    let insertdom = document.createElement("li");
    let p = document.createElement("a");
    p.append("NASA/ADS");
    p.href = "http://adsabs.harvard.edu/abs/" + doi;
    insertdom.append(p);
    insertnode.prepend(insertdom);
  } else if (website_host == "www.nature.com") {
    let doimeta = document.querySelector("meta[name='citation_doi']");
    let doi = doimeta.content;
    let insertnode = document.getElementsByClassName("c-article-info-details")[0];
    let insertdom = document.createElement("a");
    insertdom.href = "http://adsabs.harvard.edu/abs/" + doi;
    insertdom.classList.add("c-article-info-details__cite-as");
    insertdom.textContent = "NASA/ADS";
    insertnode.append(insertdom);
  } else if (website_host == "science.sciencemag.org") {
    let doimeta = document.querySelector("meta[name='citation_doi']");
    let doi = doimeta.content;
    let insertnode = document.getElementsByClassName("article__tools")[0];
    let insertdom = document.createElement("li");
    let p = document.createElement("div");
    let p2 = document.createElement("a");
    let ico = document.createElement("img");
    ico.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADb0lEQVQ4jT2QS0xcVQCGv3POvZd5wUyHIsMoDDYiBa1QY/ERatoQS1WMJsYuCI3GRavoohs1ja0xNXFhIyHiMxAbEysxptVoDdqF9VFIqQJqE4jUUooMCgwwA8zjzuMeFyR8++/Ln1983d+N44DP5RAKwNi0wReD6uDimmiWStYLJaRliEm/Vwy33pHu21WZzMdTklXbQkmN+Op0N36Pxl0En180DwyMymMZrXcoaZPL50GDYVooy4PPY93YFbFPHmhce89lwmJSYRSZGo9L8NF35vEzw/JEwJ/C5RLURMopDfgQQhJfTXE9usLSSiJy3i5/N5E16w/fu/yC1yxghLZo+n829p0dFifC5WkCAR9vdO5jzz3VKMkmf15dpOv0ZS79cZ3BSavTb7nGnm1K9cmpeYOBEdkbDmnSuTxvHXmElqYNeXZhnb9n4wDcVVNG72uPEvBZeElwacb1wZV5l08Ojssn5pOySogMO7dHaG68BYBPzl2hsrWLmj0neaXnJwBMCffVlZLOFliztTEatZ43/orq/cEAeD0udKHAM8fOEFvNEotn2L0zQtDvYXdjJVo76NwqUkkQkqDbYSZh7DUStlnrczn4fR5GxmcJ+IvpaGvkYNsOKkq9mx/MRueoCLpBSKSSeCxI5tWtBlIaUjvMx9bZVlXGuZ4OfG4DgAujcwyOXMOQWTqfbECZJgiQQiCEQAphyIA7P5XOGvy7lKSjrWFTPvzm97Qe6uP40c/4fWKOkoAftMNGQZJDYZniH1kbdoZWkhIhBFtKfBt7dZ4bM7Pk7XUa9tbx8tP3U8jZaEej0UhDspwrIuLPjcm6mzlVWizShirix18nAQfI0PNSC9++087gxx3cfWeYbCaHKPJS7HOTyYPbElQG5fvq6KGHCim7sHD1Px6bmJwmnUlTW30TVeEgNdvC/HD5Gq/3DlFdUYKDw9ziGhfGE7Tclu9+uHq5X/xy9m0SGcmrX1o9CyvZFw1S1ES2Ul5aQsrOMjG9hBJQGvTiCElOebCV5/yRxmjr9uIl1FOP78eQcHtIDmihdHTd3RyLZ9TiUpxEyqYs4KHYa7GUEcTsImq32h+218fbK9xpnc4LxDefdiEEhIod7IJkaEpVX5yynotl1INSEBJSCpQV97v1UFNF8tQD4fXfPCpHLK3IO5L/AdoPV62nNb+GAAAAAElFTkSuQmCC";
    ico.style = "display:inline-block;vertical-align: middle;";
    p.append(ico);
    p2.href = "http://adsabs.harvard.edu/abs/" + doi;
    p2.textContent = " NASA/ADS";
    p.append(p2);
    insertdom.append(p);
    insertnode.prepend(insertdom);
  } else if (website_host == "www.annualreviews.org"){
    let doimeta = document.querySelector("meta[name='dc.Identifier']");
    let doi = doimeta.content;
    let insertnode = document.getElementsByClassName("article-util-links")[0];
    let insertdom = document.createElement("li");
    let p = document.createElement("a");
    p.append("NASA/ADS");
    p.href = "http://adsabs.harvard.edu/abs/" + doi;
    insertdom.append(p);
    insertnode.prepend(insertdom);
  }
})();

// ==UserScript==
// @name         APJ to ADS
// @namespace    niu541412
// @version      0.3
// @description  Add direct link to NASA/ADS on iop.org webpage for astronomy papers.
// @author       niu541412@gmail.com
// @match        *://iopscience.iop.org/article/*
// @grant        none
// @icon         data:image/gif;base64,R0lGODdhPAA8ANUAAAAAAAAAUgAAYwAQQggQWhAQYwAYUhAYShAYYxgYUgAhWhAhcwApYzEpaxAxYxAxayExazkxhDE5aylCczlCc0pCe0JKe0JKhEpKhClSe0JShEpSjDlajEpahFJae0pjlGNjnDlrhEp7nFp7nHN7rXt7pXOUrZyctYylvZy1xpy91r291s7O1sbW3tbW5+/v7/f39////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAADIALAAAAAA8ADwAAAb/QIZQqCAyYoRkssgowpRLIxLKLE6VVcZTGWMKoQQYYjwGi8kIcAydhp7JavQ1ye4q7go2DH8vyPl5f3x+ZHt4MQwFfgwGUmBZW0qNTUePjlCTTlBdQwxtSTCdnpuiaqKfYaWbcgRwWXZ4bC+AdWB1tGgvBAq7iGi2YJRFvGCraMKjUMioXQhDbKKUwo0GeX6KCLB3xcAEioFjSHCZo2lt563pfAgKcwTR8EO7h56eZXSEbPpjxLsEiJ0ACaS1iYkzaKLuUGqESAE2V3gMcAMTAMuvdK2QTdzIsaPHes4WHdxHcow9kiBBljzmTEjLeDBjDhmGbOBAjzhz6iyGJt/K/58kFSUaWoAogqJjfBaVyVSmSZpNaCq0iQrjzo4u1lz1RycpoZNAVyoKgOgaUrEIm0Z759RAjGqU2A2bK1CurXtbuQ240o9bXyj6UoZdyYDs4JJqE59yCzeLVEDC/uLtepgNgb1YlFTlyvPn0MpkCq8BnRZeiBioUXNQLIQx1LkMMqRO7YCPZigVUq9YsdfdRAUeUHvAbHVJ1hguWgxYPuAAYJ8CUK8QgCb6gp8wZqfedwF1g5D2iuYT9QG1S1ExJsRE3eKdM9SNKcFXYMDZO5r8oASfsjmGc72oDaCGO+3wRUVm3hwkwHTXhBbOAj6NQdZobGTFRgTiHEWIAhug9v/AUfUElJAII6SmXjSoBQAPfI0UwYIdTbCjXQwowEXHI7nNmEAx2R3IhTstIMFLjjEImAQJb/XBUocxqBDASDEsoBJZD1WIWitkkAXCC6k9OZQnMYAAInrmGSFEemTG0w4Kb51nAJcx8DbPNEXmcWOBRqKT247pBGckGHvxJuQSxfR1xwpX5JNiIg8VMKGUSZk3koSoIRBdgiAqgpRS2VA4RJkoxpACmp+qEE2BRbhVxEvSOHZEkk0ksdefSvQmYAx8XoZrGsT0VgZx/rQzDx5LoJZrglfmM2EMT2Zz3RjRQdAgCKKOdGlSaTTT4ANIxgBBIqG9SoQJqYV4xIlnwuL/IVKtcTJEAamVoAC5qKnQojBJnDBjnrvslUIrd/SW2p9llLArHATQmxoK5qDjkCcVBaAiiEclRV3FigggMXXgXuNJhAcVoDHHGJf8jEmsPRUTq/CwUxM7hIp81IG2EXOHXXnkDDM47PS86k3DJmiBBRpggIEFFEjAqKYYa4pNg2YVQPTQF1R9gQVWW1Ay1M4sUIHRFXxtwdcVsAyT2c4QXfTYYZP9tTM51yT10RoMPXTYdcsl0LC82PR1Bx0YfbTYGJTN6zZ8FG40218LfjQD3jgtOdOEYBO24BoUnfnRFoAbGAJGaxD22KLXPfTRZp9yXicWYJB50ZeDXcEwLuus8sDgbRdeAdGxWzAP33Wx0TjgoRe+tk14ON640YE7XnjUk2eKxu6NZ97B5plXLJgnRSvfPODN726u6ue11HrmbrcddupDGJ+53VjXjT3qevNj50CxY45BBxZ0MDvytxsc7L7WPcddjwIa8kqmJrc812lOc1qbnNOYpzjADQ8DHhhd29jykpZ0kAFjU5vuyFa4TiylEw6U3+vs5rgH6g2AdyCh/lwnvlgIpALdq1voHri5FF7AAU+jnOQaiD0XhoaBl2Nc6y7XQMVpLUQmQZkQhvY6xQmuAhf42PiEkMPmFdB1KQTj2uyHvOVdTgP+K11UbBIEADs=
// @license      MIT License
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';
    var doiMeta = document.querySelector("head > meta:nth-child(105)").content;
    var doi = doiMeta.split(":")[1];
    var insertnode = document.getElementsByClassName("content-nav-ul wd-content-nav")[0];
    var insertdom = document.createElement("li");
    var p = document.createElement("a");
    p.append("NASA/ADS");
    p.href = "http://adsabs.harvard.edu/abs/"+doi;
    insertdom.append(p);
    insertnode.prepend(insertdom);
})();

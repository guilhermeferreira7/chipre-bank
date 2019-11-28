'use strict';
(function() {
    $('#menu').load('menu.html');
    $('#footer').load('footer.html');
})();


window.addEventListener('load', function() {
    (function() {
        $('.sidenav').sidenav();
    })();
    
})

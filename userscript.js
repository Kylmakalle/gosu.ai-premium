// ==UserScript==
// @name     Gosu.ai premium
// @author   https://t.me/Kylmakalle
// @include  https://gosu.ai/dota/analysis/match/*
// @version  0.0.1
// @downloadURL https://github.com/Kylmakalle/gosu.ai-premium/blob/master/userscript.js
// @updateURL https://github.com/Kylmakalle/gosu.ai-premium/blob/master/userscript.js
// @run-at   context-menu
// ==/UserScript==

function getDivs(){
    return document.getElementsByClassName('premium__gap ng-star-inserted')
}

let premiumDivs = getDivs();
Array.from(premiumDivs)
    .forEach(function(element) {
    console.log(element);
    element.remove();
});


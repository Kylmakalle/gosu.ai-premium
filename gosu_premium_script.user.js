// ==UserScript==
// @name     Gosu.ai premium
// @author   https://t.me/Kylmakalle
// @include  https://gosu.ai/dota/analysis/match/*
// @version  0.0.3
// @downloadURL https://raw.githubusercontent.com/Kylmakalle/gosu.ai-premium/master/gosu_premium_script.user.js
// @updateURL https://raw.githubusercontent.com/Kylmakalle/gosu.ai-premium/master/gosu_premium_script.user.js
// @run-at document-idle
// ==/UserScript==

function getDivs(){
    return Array.from(document.getElementsByClassName('premium__gap ng-star-inserted'))
        .concat(Array.from(document.getElementsByClassName('advice__gap ng-star-inserted')))
}

function a () {
    let premiumDivs = getDivs();
    if (!premiumDivs.length){
        setTimeout(a, 2000);
    } else {
        premiumDivs.forEach(function(element) {
            element.remove();
        });
    }
}
a();

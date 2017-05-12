"use strict";
var menuBar = require("./js/menuBar");
nw.Window.open('./view/index.html', {
    height: 500,
    width: 500
}, function (win) {
    menuBar(win);
});

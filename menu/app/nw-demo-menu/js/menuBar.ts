/**
 * 壳子顶部菜单栏
 */
var menuBar = new nw.Menu({
    type: 'menubar'
});

/** 植入页面的window对象 */
var pageWindow: Window = null;

/** 操作 */
var mainMenu = new nw.MenuItem({
    label: "操作",
    key: "c",
    modifiers: "alt",
});

/** 操作的子菜单集合 */
var mainMenuColl = new nw.Menu({ type: "contextmenu" });
mainMenu.submenu = mainMenuColl;

/** 操作-返回 */
var returnMenu = new nw.MenuItem({
    label: "返回",
    key: "Backspace",
    click: function () {
        console.log("back click");
        pageWindow.history.back();
    },
    tooltip: "返回上一页",
});
mainMenuColl.append(returnMenu);

/** 操作-前进 */
var forwardMenu = new nw.MenuItem({
    label: "前进",
    click: function () {
        pageWindow.history.forward();
    },
    tooltip: "前进下一页",
});
mainMenuColl.append(forwardMenu);

//刷新菜单的下属子集
var reloadMenuColl = new nw.Menu();
reloadMenuColl.append(new nw.MenuItem({ label: "刷新二级" }));

/** 操作-刷新 */
var reloadMenu = new nw.MenuItem({
    label: "刷新",
    key: "r",
    modifiers: "alt",
    click: function () {
        pageWindow.location.reload();
    },
    tooltip: "刷新当前页面",
    submenu: reloadMenuColl
});
mainMenuColl.append(reloadMenu);

/** 操作-分割线 */
var separatorMenu = new nw.MenuItem({
    type: "separator"
});
mainMenuColl.append(separatorMenu);

// /** 操作-缩略图 */
// var checkMenu = new nw.MenuItem({
//     type: "checkbox",
//     label: "是否展现缩略图"
// });
// mainMenuColl.append(checkMenu);

/** 操作-退出 */
var exitMenu = new nw.MenuItem({
    label: "退出",
    click: function () {
        nw.App.quit();
    },
    tooltip: "退出应用程序",
});
mainMenuColl.append(exitMenu);
menuBar.append(mainMenu);

/** 帮助 */
var helpMenu = new nw.MenuItem({
    label: "帮助",
});

/** 帮助的子菜单集合 */
var helpMenuColl = new nw.Menu({ type: "contextmenu" });
helpMenu.submenu = helpMenuColl;

/** 帮助-关于 */
var infoMenu = new nw.MenuItem({
    label: "关于",
    click: function () {
        pageWindow.alert("http://xxcanghai.cnblogs.com/");
    },
});
helpMenuColl.append(infoMenu);
menuBar.append(helpMenu);


function initMenuBar(win: NWJS_Helpers.win) {
    pageWindow = <Window>win.window;
    win.menu = menuBar;
}

export = initMenuBar;












// // Create a submenu as the 2nd level menu
// var submenu = new nw.Menu();
// submenu.append(new nw.MenuItem({ label: 'Item A' }));
// submenu.append(new nw.MenuItem({ label: 'Item B' }));

// // Create and append the 1st level menu to the menubar
// menuBar.append(new nw.MenuItem({
//     label: 'First Menu',
//     submenu: submenu
// }));
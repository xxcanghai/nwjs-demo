# nwjs-demo-menu 
NW.js 菜单栏Demo

# 原文地址
[http://www.cnblogs.com/xxcanghai/p/6845160.html](http://www.cnblogs.com/xxcanghai/p/6845160.html)

# 运行方法
## 1、首先在命令行进入此目录，执行安装npm包
```
npm i
```

## 2、执行启动编译命令
```
npm start
```
这期间nw-builder会去下载相关的 win32 win64 osx64 三个平台的nw.js的SDK，总共600MB+。

您将看到如下信息：
```
menu git:(master) ✗ npm start

> nwjs-demo-menu@1.0.0 start /Users/xxx/WebSite/nwjs-demo/menu
> gulp nw

[13:10:07] Using gulpfile ~/WebSite/nwjs-demo/menu/gulpfile.js
[13:10:07] Starting 'nw'...
[13:10:16] nw-builder Using v0.14.7 (sdk)
[13:10:16] nw-builder Downloading: https://dl.nwjs.io/v0.14.7/nwjs-sdk-v0.14.7-win-ia32.zip
[13:10:16] nw-builder Downloading: https://dl.nwjs.io/v0.14.7/nwjs-sdk-v0.14.7-win-x64.zip
[13:10:16] nw-builder Downloading: https://dl.nwjs.io/v0.14.7/nwjs-sdk-v0.14.7-osx-x64.zip
  downloading [====----------------] 19% 63.7s
```

请耐心等待，下载完成后会将应用打包成三个平台对应的桌面端应用程序。

## 3、运行打包后的应用
编译打包后的应用在 `/nwjs-demo/menu/build/nw-demo-menu/[相关平台]` 目录下。

执行相应平台的`.exe`或是`.app`文件即可。

## 4、应用程序源码
源文件在`/nwjs-demo/menu/app/nw-demo-menu`文件夹下

# 关于TypeScript
本应用使用TypeScript开发，如您只想使用JavaScript，则直接全局搜索，并删除所有`*.ts`即可。

# 运行界面
![](https://github.com/xxcanghai/nwjs-demo/blob/master/menu/img/app.jpg?raw=true)
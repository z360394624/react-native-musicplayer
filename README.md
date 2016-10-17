# show

# Tech
- [x] react-native
- [x] 引入数据状态管理redux
- [x] 引入数据库realm
- [x] 引入redux持久库 redux-pressist

# Source
- [x] 滚动tabview  https://github.com/skv-headless/react-native-scrollable-tab-view
- [x] 普通样式button https://github.com/ide/react-native-button
- [x] 带有一些炫酷动作和效果的按钮库  https://github.com/mastermoo/react-native-action-button
- [x] 移动端通用数据库react-native版  https://github.com/realm/realm-js
- [x] 启动白屏一秒解决方案库  https://github.com/crazycodeboy/react-native-splash-screen
- [x] 炫酷icon库  https://github.com/oblador/react-native-vector-icons
- [x] 关于this绑定问题解决方案(有时候会出现引用this为undefine)  https://github.com/andreypopp/autobind-decorator
- [x] 炫酷button样式库 https://github.com/APSL/react-native-button(相比较另外一个库,更多的操作空间)
- [x] 缓存图片库 避免多次访问相同uri的图片资源 https://github.com/remobile/react-native-cache-image
- [x] 用路由的方式写导航  https://github.com/starlight36/react-native-navigator-router(试了一下  感觉还是有一些问题) 
- [x] 关于进度条动画的依赖库  https://github.com/maxs15/react-native-spinkit
- [x] redux store自动化持久框架   https://github.com/rt2zz/redux-persist
- [x] navbar组件库  https://github.com/react-native-community/react-native-navbar(个人认为这个还是自己写的好,方便定制)
- [x] 图片等内容轮播组件  https://github.com/leecade/react-native-swiper
- [x] 文件上传下载依赖库  https://github.com/wkh237/react-native-fetch-blob/File-System-Access-API#createfilepath-data-encodingpromise
- [x] 运行时权限给定库 https://github.com/lucasferreira/react-native-android-permissions
- [x] 文件操作库  https://github.com/johanneslumpe/react-native-fs(有上传(ios) 下载功能)
- [x] 图片选择器控件  https://github.com/marcshilling/react-native-image-picker
- [x] 炫酷弹出planblank窗口屏 https://github.com/kirkness/react-native-fs-modal

# Demo
- [x] 知乎日报移动版  https://github.com/race604/ZhiHuDaily-React-Native (ios and android)
- [x] 干货集中营  https://github.com/iwgang/GankCamp-React-Native (ios and android)
- [x] 关于react-native各种资料汇集  https://github.com/reactnativecn/react-native-guide


# Solution

### 一些报错提示及解决方案参考
  - overlay permissions needs to be granted in order for react native apps to run in dev mode   需要开启悬浮窗权限
  - could not connect to development server   adb reverse tcp:8081 tcp:8081
  - 关于简书上的一些解决方案  http://www.jianshu.com/p/d1f15da51317
  - 在使用react-native-swiper库的时候老是报loop undefined找不到原因，清楚项目，放在index下测试也不行，只好重开项目重新配置  就可以了，估计是安装什么东西的时候污染了。。。
  - scrollable-view-tab库两层嵌套的话  内部会出现渲染失效  必须在操作之后反应过来  这不行 需要改成平行的scrollview
  - react-native-swiper中的页脚定位是根据外层的不是swiper本身  所以有可能找不到  可以调整renderPagination  方法中视图的bottom样式 矫正定位
### 启动白屏解决方案
  - 使用的是  https://github.com/crazycodeboy/react-native-splash-screen
  - 大部分配置和其他类库相似
  - 需要新建文件夹和配置文件
  - 修改MainActivity.java  中的getMainComponentName方法  在return之前添加  SplashScreen.show(this);
  - 实现效果是一张背景图片取代白屏  暂时没有动画
  - src/main/res/values/styles.xml   + <item name="android:windowIsTranslucent">true</item>
  - src/main/drawable-xhdpi/....png
  - src/main/drawable-xxdpi/....png
  - src/main/res/layout/launch_screen.xml  
  ```<?xml version="1.0" encoding="utf-8"?>
   <LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
       android:orientation="vertical" android:layout_width="match_parent"
       android:layout_height="match_parent"
       android:background="@drawable/launch_screen">
   </LinearLayout>```

### 关于开发规范的一些建议
  - 生命周期钩子放在render方法之前
  - global开头声明全局变量

### 关于更新功能提示动画页面
  - 基于react-native-scrollable-tab-view实现    tabbar透明子view不透明
  - tabbarposition="bottom"  不能去掉  否则出现zIndex不够的情况
  - 滑动tab的时候tabbar是重新渲染的   整个重新创建和渲染

### 关于沉浸式状态栏的一些操作(就是电量显示那一信息栏隐藏或者其他操作)
  - 需求  view不计入statusbar  translucent={false} 默认不计入
  - 需求 计入statusbar  translucent={true}  
  - 需求 要实现一直的背景色  android backgroundColor属性   ios  style
  - 隐藏statusbar  hidden属性  default false

### 关于预加载图片的解决方案猜想
  - 在服务端预先处理好   转换成base64数据
  - {{uri: base64}}
  - 编码解码base64   https://github.com/riyadhalnur/node-base64-image/blob/master/docs/docs.md
  
### navigator的转场动画非常卡   
  - 快关了远程调试呀   没错 就是这个原因


### 关于redux-persist的一些坑
  - 需要手动dispatch一次action才有效果  按道理讲初始化redux的dispatch应该触发(但是没有呀)

### 一些认识
  - [x] redux-persist 传入数据库引擎对象满足一定标准的就可以  然后就会进行操作
  - [x] import Icon from 'react-native-vector-icons/Ionicons'  icon选自于Ionicons这个icon库集 可选的库有  Entypo  EvilIcons  FontAwesome  Foundation Ionicons MaterialIcons Octions Zocial SimpleLineIcons

### 关于react-native项目的数据序列化持久方案(小浩找的一套方案)
  - redux进行应用状态管理
  - redux-persist订阅store 调用数据库引擎进行存储
  - 最近新出的数据库realm  一个字  牛逼   react-native版  https://github.com/realm/realm-js
  - 修饰包裹tealm的api衔接redux-persist  会丢失很大部分realm原生的api  这个要进行优化处理
  - 一般数据库操作js必定回调   这个不用  你没听错  这个不用  就是当做同步的来跑
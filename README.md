# show

# Tech
- [x] react-native
- [ ] 引入数据状态管理redux
- [ ] 引入数据库realm
- [ ] 引入redux持久库 redux-pressist
- [ ] 

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






# Solution

### 一些报错提示及解决方案参考
  - overlay permissions needs to be granted in order for react native apps to run in dev mode   需要开启悬浮窗权限
  - could not connect to development server   adb reverse tcp:8081 tcp:8081
  - 关于简书上的一些解决方案  http://www.jianshu.com/p/d1f15da51317

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
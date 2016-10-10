1.  express允许外部访问   listem(port, '0.0.0.0')
2.  等驳回和同意接口
3.  添加fastclick库   解决click替代tap时存在的300ms延时问题
4.  完成一些交互操作   
5.  

















xxxxxxxxxxxxx
测试数据
//获取放行单详细信息
token '3B8243FC-D536-1F0F-0508-B1442C213975'
formId '0be5e344-64ca-4d29-8ee7-ca91e8ec875b'
接口  'http://10.60.217.94:25041/dji-imService/im/corp/getReleasePassData?params='+ formId +'&signature='+result+'&token='+token



驳回接口




测试了imtest1500账号   各项数据正常

##################修复关于判断是否为安保人员判断出错   
接口返回的是False字符串  不是bool  也不是false  
# 2017-sharing-frontend
趣分享-前端仓库

# 页面分类
* 注册页面
* 登录页面
* 主页面
* 导航栏
  * 已分享文章时间轴页面
  * 原创文章时间轴页面
  * 发表文章页面
* 头像
  * 上传/修改头像页面
  * 修改密码页面
* 具体文章页面
* 评论文章页面
* 删除文章页面
* 发布内容按钮



# 同步路由
### 1.用户注册
Page:注册页面
URL: ``/api/v1.0/signup/``
method:POST
描述：注册一个用户,注册完成后进入 浏览内容页面

input data:

```
username: string,
password: string,
email：string,
photo:string(头像的URL)(optional)
```


return :
```
{
"created":id
}
```

### 2.用户登录
Page:登录页面
URL:``/api/v1.0/login/``
method:GET
permission: username:password
描述：登录

return data:
```
{
'userid':id
}

```

### 3.主页面
URL：``/api/v1.0/feed/``
+ **趣分享**
URL：``/api/v1.0/feed/share/``
描述：文章类型为分享型的Timeline
+ **博主原创**
URL: ``/api/v1.0/feed/original/``
描述：文章类型为原创型的Timeline
+ **去分享**
URL: ``/api/v1.0/feed/toshare/``
描述：重定向至 **发布内容页面**

### 4.具体文章页面
<分享型>
URL: ``/api/v1.0/feed/share/<articleid>``
<原创型>
URL: ``/api/v1.0/feed/original/<articleid>``

### 5.发表文章页面
Page:发布内容页面
URL：``/api/v1.0/issue/``
method: POST
描述：用富文本编辑器？发布文章
input:

```
article:string
```
return:
```
{
"create":articleid
}
```

---
路由待补充

# 2017-sharing-frontend
趣分享-前端仓库



| 路由| URL | 描述 | 模板
| ------| ------ | ------|
| /signup | /signup    | 注册页面    | signup.html
| /login | /login     | 登录页面    | login.html
| /share | /feed/share|主页面-趣分享 | share.html
| /original | /feed/original| 原创页面 |original.html
| /toshare | /toshare   |发布页面-去分享|toshare.html
| /article | /feed/<article_id>| 具体文章 |article.html
| /delete_article | /feed/<article_id>/delect|删除文章|delete_article.html
| /comment | /feed/<article_id>/comment|发布评论|comment.html
| /rmcomment | /feed/<article_id>/rmcomment|删除评论|rmcomment.html
| /userdata | /userdata/<user_id>|查看个人资料|userdata.html
| /userdata_change | /userdata/<user_id>/change/|修改个人资料|userdata_change.html


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
Page:注册页面</br>
URL: ``/api/v1.0/signup/`` </br>
method:POST </br>
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
Page:登录页面</br>
URL:``/api/v1.0/login/``</br>
method:GET</br>
permission: username:password</br>
描述：登录

return data:
```
{
'userid':id
}

```

### 3.主页面
#### 主页面
URL：``/api/v1.0/feed/share``</br>
method :GET</br>
描述：默认为趣分享页面

return：
```
user_name:string //用户名
user_portrait: string //头像URL
article_id:int //文章id
```

#### 导航栏
+ **趣分享** </br>
URL：``/api/v1.0/feed/share/``</br>
method：GET</br>
return:
```
{
article_id:int //文章id
}
```
描述：文章类型为分享型的Timeline</br></br>
+ **博主原创**</br>
URL: ``/api/v1.0/feed/original/``</br>
method：GET</br>
return:
```
{
article_id:int //文章id
}
```
描述：文章类型为原创型的Timeline</br></br>
+ **去分享**</br>
URL: ``/api/v1.0/toshare/``</br>
描述：重定向至 **发布内容页面**</br></br>



### 4.具体文章页面
#### 文章页面
URL : ``/api/v1.0/feed/<article_id>``</br>
method： GET</br>
描述：某篇文章的页面</br>

return：
```
{
user_id:int //发布者id
article:string //发布的内容
comment_id:int //评论id
comment:string //评论内容
}
```

#### 删除文章
URL:`` /api/v1.0/feed/<article_id>/delect/`` </br>
method: POST</br>
input :
```
article_id: string
user_id: string
```


#### 发布评论
URL : ``/api/v1.0/feed/<article_id>/comment/ ``</br>
method:  GET POST</br>

input:
```
user_id:int //评论者id
comment:string //评论内容
```

return：
```
{
user_id:int //评论者id
user_portrait:string //评论者头像URL
comment_id:int //评论id
}
```

#### 删除评论
URL： ``/api/v1.0/feed/<article_id>/rmcomment/``</br>
method: POST</br>
input
```
comment_id: string
user_id: string
```
### 5.发表文章页面
Page:发布内容页面</br>
URL：``/api/v1.0/toshare/``</br>
method: GET POST</br>
描述：用编辑器编辑、发布文章</br>
input:

```
user_id:string //用户id
article:string //内容
```
return:
```
{
article_id: int //文章id
}
```

### 6.个人资料页面

#### 查看个人资料
URL：`` /api/v1.0/userdata/<user_id></br>``
method : GET</br>
描述: 点击一个人的头像可以看他的个人资料</br>
return：
```
{
user_portrait:string //头像URL
username:string
email:string
gender:string //性别
description： string //自我介绍
}
```


#### 修改个人资料
URL：``/api/v1.0/userdata/<user_id>/change/``</br>
method: PUSH</br>

input:
```
user_id: int
user_portrait:string //头像URL
username:string
password:string //密码
gender:string //性别
description： string //自我介绍
```
---
感谢张可提供API。

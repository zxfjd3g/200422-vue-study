const express = require("express")
const axios = require("axios")
const app = express()

// 启动服务器 node index.js

/* 
请求地址： http://localhost:3000/search
*/
app.get("/search", function (req, res) {
  res.json({
    code: 10000, // 成功
    data: [
      // 响应具体数据
      { name: "vue", url: "https://github.com/vuejs/vue" },
      { name: "vue-resource", url: "https://github.com/pagekit/vue-resource" },
    ],
  })
})

/*
  请求地址： http://localhost:3000/search/users?q=aa
  后台路由
    key： /search/users
    value： function () {}
*/
app.get("/search/users", function (req, res) {
  const {q} = req.query
  axios({
    url: 'https://api.github.com/search/users',
    params: {q}
  }).then(response => {
    res.json(response.data)
  })
})

/* 
请求地址： http://localhost:3000/search/users2?q=aa
注意: 如果github的接口无法返回数据, 就用这个模拟的数据返回
*/
app.get("/search/users2", function (req, res) {
  res.json({
    items: [
      {
        login: "xpromise",
        html_url: "https://github.com/xpromise",
        avatar_url:
          "https://avatars0.githubusercontent.com/u/30899542?s=460&u=6086b55c7b3643e56a1fe2fd9ebd51d3c3f5d495&v=4",
        id: 1,
      },
      {
        login: "ruanyf",
        html_url: "https://github.com/ruanyf",
        avatar_url: "https://avatars2.githubusercontent.com/u/905434?s=460&v=4",
        id: 2,
      },
      {
        login: "yyx990803",
        html_url: "https://github.com/yyx990803",
        avatar_url:
          "https://avatars3.githubusercontent.com/u/499550?s=460&u=de41ec9325e8a92e281b96a1514a0fd1cd81ad4a&v=4",
        id: 3,
      },
      {
        login: "xpromise",
        html_url: "https://github.com/xpromise",
        avatar_url:
          "https://avatars0.githubusercontent.com/u/30899542?s=460&u=6086b55c7b3643e56a1fe2fd9ebd51d3c3f5d495&v=4",
        id: 4,
      },
      {
        login: "ruanyf2",
        html_url: "https://github.com/ruanyf",
        avatar_url: "https://avatars2.githubusercontent.com/u/905434?s=460&v=4",
        id: 5,
      },
      {
        login: "yyx9908032",
        html_url: "https://github.com/yyx990803",
        avatar_url:
          "https://avatars3.githubusercontent.com/u/499550?s=460&u=de41ec9325e8a92e281b96a1514a0fd1cd81ad4a&v=4",
        id: 6,
      },
      {
        login: "xpromise2",
        html_url: "https://github.com/xpromise",
        avatar_url:
          "https://avatars0.githubusercontent.com/u/30899542?s=460&u=6086b55c7b3643e56a1fe2fd9ebd51d3c3f5d495&v=4",
        id: 7,
      },
      {
        login: "ruanyf3",
        html_url: "https://github.com/ruanyf",
        avatar_url: "https://avatars2.githubusercontent.com/u/905434?s=460&v=4",
        id: 8,
      },
      {
        login: "yyx9908033",
        html_url: "https://github.com/yyx990803",
        avatar_url:
          "https://avatars3.githubusercontent.com/u/499550?s=460&u=de41ec9325e8a92e281b96a1514a0fd1cd81ad4a&v=4",
        id: 9,
      },
    ],
  });
});


/* 
请求地址： http://localhost:3000/search/repositories2?q=js
注意: 如果github的接口无法返回数据, 就用这个模拟的数据返回
*/
app.get("/search/repositories2", function (req, res) {
  res.send({
    items: [
      {
        id: 1,
        name: 'You-Dont-Know-JS',
        html_url: 'http://www.github.com/You-Dont-Know-JS'
      },
      {
        id: 2,
        name: 'javascript',
        html_url: 'http://www.github.com/javascript'
      },
      {
        id: 3,
        name: 'JavaGuide',
        html_url: 'http://www.github.com/JavaGuide'
      },
      {
        id: 4,
        name: 'three.js',
        html_url: 'http://www.github.com/three.js'
      }
    ],
  });
});

// 启动服务器
app.listen(3000, "localhost", (err) => {
  if (!err) console.log("服务器启动成功了，请访问 http://localhost:3000")
  else console.log(err);
})

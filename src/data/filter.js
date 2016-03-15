var categories = [{
  "name": "全部商家",
  "id": 0
}, {
  "name": "品牌商家",
  "id": 1
}, {
  "name": "快餐类",
  "id": 20,
  "more": [{
    "name": "全部快餐类",
    "id": 200
  }, {
    "name": "盖浇饭",
    "id": 201
  }, {
    "name": "中式炒菜",
    "id": 202
  }, {
    "name": "品牌快餐",
    "id": 203
  }, {
    "name": "米粉面馆",
    "id": 204
  }, {
    "name": "汉堡",
    "id": 205
  }, {
    "name": "麻辣烫",
    "id": 206
  }, {
    "name": "饺子馄饨",
    "id": 207
  }]
}, {
  "name": "正餐类",
  "id": 30,
  "more": [{
    "name": "全部正餐类",
    "id": 300
  }, {
    "name": "川湘菜",
    "id": 301
  }, {
    "name": "日韩料理",
    "id": 302
  }, {
    "name": "西餐",
    "id": 303
  }, {
    "name": "粤菜",
    "id": 303
  }, {
    "name": "江浙菜",
    "id": 303
  }, {
    "name": "海鲜",
    "id": 303
  }, {
    "name": "火锅",
    "id": 303
  }, {
    "name": "西北菜",
    "id": 303
  }, {
    "name": "东北菜",
    "id": 303
  }, {
    "name": "云南菜",
    "id": 303
  }, {
    "name": "卤菜",
    "id": 303
  }, {
    "name": "清真",
    "id": 303
  }]
}, {
  "name": "小吃零食",
  "id": 40,
  "more": [{
    "name": "全部小吃零食",
    "id": 300
  }, {
    "name": "地方小吃",
    "id": 301
  }, {
    "name": "炸鸡炸串",
    "id": 302
  }, {
    "name": "鸭脖卤味",
    "id": 303
  }, {
    "name": "零食",
    "id": 303
  }, {
    "name": "小龙虾",
    "id": 303
  }]
}, {
  "name": "甜品饮料",
  "id": 50,
  "more": [{
    "name": "全部甜品饮品",
    "id": 300
  }, {
    "name": "饮品",
    "id": 301
  }, {
    "name": "甜品",
    "id": 302
  }, {
    "name": "咖啡",
    "id": 303
  }]
}, {
  "name":"果蔬生鲜",
  "id":60
}, {
  "name":"鲜花蛋糕",
  "id":70
}, {
  "name":"超市便利店",
  "id":80
}];

var checkboxItems = [
  { name: "新开商家", id: 0 },
  { name: "免配送费", id: 1 },
  { name: "饿配送", id: 2 },
  { name: "可开发票", id: 3 },
  { name: "在线支付", id: 4 }
];

var singleSortItems = [
  { name: "默认排序", id: 0 },
  { name: "销量高", id: 1 },
  { name: "评价好", id: 2 }
];

var multiSortItems = [{
  prefix: "",
  data: [
    { name: "其他排序", id: 0 },
    { name: "距离最近", id: 1 },
    { name: "配送金额", id: 2 },
    { name: "起送金额", id: 3 }
  ],
  postfix: ""
}, {
  prefix: "起送价格: ",
  data: [
    { name: "起送价格: 不限", id: 0 },
    { name: "不限", id: 1 },
    { name: "15元", id: 2 },
    { name: "20元", id: 3 },
    { name: "30元", id: 4 },
    { name: "40元", id: 5 }
  ],
  postfix: "以下"
}];

module.exports = categories;

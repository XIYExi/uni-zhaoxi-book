"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      bookList: [
        {
          id: "book 01",
          title: "book 01",
          author: "author 01",
          cover: "https://s1.ax1x.com/2023/01/28/pSUxBkR.jpg",
          publisher: "publisher 01",
          type: "\u8BD7\u6B4C",
          time: "2023-01-29"
        },
        {
          id: "book 02",
          title: "book 02",
          author: "author 02",
          cover: "https://s1.ax1x.com/2023/01/28/pSUxBkR.jpg",
          publisher: "publisher 02",
          type: "\u6563\u6587",
          time: "2023-01-29"
        },
        {
          id: "book 03",
          title: "book 03",
          author: "author 03",
          cover: "https://s1.ax1x.com/2023/01/28/pSUxBkR.jpg",
          publisher: "publisher 03",
          type: "\u5C0F\u8BF4",
          time: "2023-01-29"
        },
        {
          id: "book 04",
          title: "book 04",
          author: "author 04",
          cover: "https://s1.ax1x.com/2023/01/28/pSUxBkR.jpg",
          publisher: "publisher 04",
          type: "\u671F\u520A",
          time: "2023-01-29"
        }
      ]
    };
  },
  onLoad(options) {
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.bookList, (item, i, i0) => {
      return {
        a: item.cover,
        b: common_vendor.t(item.title),
        c: common_vendor.t(item.author),
        d: common_vendor.t(item.type),
        e: common_vendor.t(item.publisher),
        f: common_vendor.t(item.time),
        g: item.id,
        h: item.id
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/Projection/uniapp/book/book/pages/book/book.vue"]]);
wx.createPage(MiniProgramPage);

"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      title: "Hello",
      notice: [
        {
          id: "notice1",
          title: "\u516C\u544A\u6D4B\u8BD5 01"
        },
        {
          id: "notice2",
          title: "\u516C\u544A\u6D4B\u8BD5 02"
        },
        {
          id: "notice3",
          title: "\u516C\u544A\u6D4B\u8BD5 03"
        }
      ],
      newBook: [
        {
          id: "new1",
          title: "\u65B0\u4E66 01",
          author: "\u4F5C\u8005 01",
          time: "2023-01-28",
          desc: "01\u51FA\u7248\u793E\u51FA\u724811111111111111111111111111111111111111111111",
          cover: "https://s1.ax1x.com/2023/01/28/pSUxBkR.jpg"
        },
        {
          id: "new2",
          title: "\u65B0\u4E66 02",
          author: "\u4F5C\u8005 02",
          time: "2023-01-28",
          desc: "02\u51FA\u7248\u793E\u51FA\u7248",
          cover: "https://s1.ax1x.com/2023/01/28/pSUxBkR.jpg"
        },
        {
          id: "new3",
          title: "\u65B0\u4E66 03",
          author: "\u4F5C\u8005 03",
          time: "2023-01-28",
          desc: "03\u51FA\u7248\u793E\u51FA\u7248",
          cover: "https://s1.ax1x.com/2023/01/28/pSUxBkR.jpg"
        },
        {
          id: "new4",
          title: "\u65B0\u4E66 04",
          author: "\u4F5C\u8005 04",
          time: "2023-01-28",
          desc: "04\u51FA\u7248\u793E\u51FA\u7248",
          cover: "https://s1.ax1x.com/2023/01/28/pSUxBkR.jpg"
        },
        {
          id: "new5",
          title: "\u65B0\u4E66 05",
          author: "\u4F5C\u8005 05",
          time: "2023-01-28",
          desc: "05\u51FA\u7248\u793E\u51FA\u7248",
          cover: "https://s1.ax1x.com/2023/01/28/pSUxBkR.jpg"
        }
      ],
      shopList: [
        {
          id: "shop01",
          title: "shop 01",
          price: "29.9",
          cover: "https://s1.ax1x.com/2023/01/28/pSa9MvV.jpg",
          link: "xxx"
        },
        {
          id: "shop02",
          title: "shop 02",
          price: "29.9",
          cover: "https://s1.ax1x.com/2023/01/28/pSa9MvV.jpg",
          link: "xxx"
        },
        {
          id: "shop03",
          title: "shop 03",
          price: "29.9",
          cover: "https://s1.ax1x.com/2023/01/28/pSa9MvV.jpg",
          link: "xxx"
        }
      ]
    };
  },
  onLoad() {
  },
  methods: {
    handleJumpToNotice() {
      common_vendor.index.navigateTo({
        url: "../../pages/notice/notice"
      });
    },
    handleJumpToNoticeDetail(e) {
      common_vendor.index.navigateTo({
        url: `../noticeDetail/noticeDetail?id=${e.currentTarget.id}`
      });
    },
    handleJumpToBook() {
      common_vendor.index.navigateTo({
        url: "../book/book"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $options.handleJumpToNotice()),
    b: common_vendor.f($data.notice, (item, i, i0) => {
      return {
        a: common_vendor.t(item.title),
        b: i,
        c: item.id,
        d: common_vendor.o((e) => $options.handleJumpToNoticeDetail(e), i)
      };
    }),
    c: common_vendor.o(($event) => $options.handleJumpToBook()),
    d: common_vendor.f($data.newBook, (item, i, i0) => {
      return {
        a: item.cover,
        b: common_vendor.t(item.title),
        c: common_vendor.t(item.author),
        d: common_vendor.t(item.time),
        e: common_vendor.t(item.desc),
        f: item.id
      };
    }),
    e: common_vendor.f($data.shopList, (item, i, i0) => {
      return {
        a: item.cover,
        b: common_vendor.t(item.title),
        c: common_vendor.t(item.price)
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/Projection/uniapp/book/book/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);

"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      notices: [
        {
          id: "notice 01",
          title: "notice 01",
          time: "2023-01-29",
          desc: "\u8FD9\u662F\u5173\u4E8Enotice 01\u7684\u63CF\u8FF0\uFF0C\u63CF\u8FF0\u4E00\u65E6\u8D85\u8FC7\u4E24\u884C\u5C06\u4F1A\u663E\u793A\u4E3A\u7701\u7565\u53F7",
          cover: "https://s1.ax1x.com/2023/01/28/pSUxBkR.jpg"
        },
        {
          id: "notice 02",
          title: "notice 02",
          time: "2023-01-29",
          desc: "\u8FD9\u662F\u5173\u4E8Enotice 02\u7684\u63CF\u8FF0\uFF0C\u63CF\u8FF0\u4E00\u65E6\u8D85\u8FC7\u4E24\u884C\u5C31\u4F1A\u663E\u793A\u4E3A\u7701\u7565\u53F7",
          cover: ""
        },
        {
          id: "notice 03",
          title: "notice 03",
          time: "2023-01-29",
          desc: "\u8FD9\u662F\u5173\u4E8Enotice 03\u7684\u63CF\u8FF0\uFF0C\u63CF\u8FF0\u4E00\u65E6\u8D85\u8FC7\u4E24\u884C\u5C06\u4F1A\u663E\u793A\u4E3A\u7701\u7565\u53F7",
          cover: "https://s1.ax1x.com/2023/01/28/pSUxBkR.jpg"
        },
        {
          id: "notice 04",
          title: "notice 04",
          time: "2023-01-29",
          desc: "\u8FD9\u662F\u5173\u4E8Enotice 04\u7684\u63CF\u8FF0\uFF0C\u63CF\u8FF0\u4E00\u65E6\u8D85\u8FC7\u4E24\u884C\u5C31\u4F1A\u663E\u793A\u4E3A\u7701\u7565\u53F7",
          cover: ""
        },
        {
          id: "notice 05",
          title: "notice 05",
          time: "2023-01-29",
          desc: "\u8FD9\u662F\u5173\u4E8Enotice 05\u7684\u63CF\u8FF0\uFF0C\u63CF\u8FF0\u4E00\u65E6\u8D85\u8FC7\u4E24\u884C\u5C06\u4F1A\u663E\u793A\u4E3A\u7701\u7565\u53F7",
          cover: "https://s1.ax1x.com/2023/01/28/pSUxBkR.jpg"
        },
        {
          id: "notice 06",
          title: "notice 06",
          time: "2023-01-29",
          desc: "\u8FD9\u662F\u5173\u4E8Enotice 06\u7684\u63CF\u8FF0\uFF0C\u63CF\u8FF0\u4E00\u65E6\u8D85\u8FC7\u4E24\u884C\u5C31\u4F1A\u663E\u793A\u4E3A\u7701\u7565\u53F7",
          cover: ""
        }
      ]
    };
  },
  onLaunch() {
  },
  methods: {
    handleJump(e) {
      common_vendor.index.navigateTo({
        url: `../noticeDetail/noticeDetail?id=${e.currentTarget.id}`
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.notices, (item, i, i0) => {
      return common_vendor.e({
        a: item.cover.length > 0
      }, item.cover.length > 0 ? {
        b: item.cover,
        c: common_vendor.t(item.title),
        d: common_vendor.t(item.desc),
        e: common_vendor.t(item.time)
      } : {
        f: common_vendor.t(item.title),
        g: common_vendor.t(item.desc),
        h: common_vendor.t(item.time)
      }, {
        i: item.id,
        j: item.id,
        k: common_vendor.o((e) => $options.handleJump(e), item.id)
      });
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/Projection/uniapp/book/book/pages/notice/notice.vue"]]);
wx.createPage(MiniProgramPage);

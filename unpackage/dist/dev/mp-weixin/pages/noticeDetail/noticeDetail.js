"use strict";
const pages_noticeDetail_noticeDetailTest = require("./noticeDetailTest.js");
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      content: pages_noticeDetail_noticeDetailTest.contentTest
    };
  },
  onLoad: function(options) {
    console.log(options.id);
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.content
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/Projection/uniapp/book/book/pages/noticeDetail/noticeDetail.vue"]]);
wx.createPage(MiniProgramPage);

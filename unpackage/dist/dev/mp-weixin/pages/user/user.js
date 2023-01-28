"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      user: {
        state: "\u4F5C\u8005",
        nickname: "\u7B14\u540D"
      }
    };
  },
  onLoad() {
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.user.nickname)
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/Projection/uniapp/book/book/pages/user/user.vue"]]);
wx.createPage(MiniProgramPage);

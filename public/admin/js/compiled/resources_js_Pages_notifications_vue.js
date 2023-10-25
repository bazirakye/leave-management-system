"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_notifications_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/notifications.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/notifications.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    notifications: Array
  },
  data: function data() {
    return {
      role: this.$page.props.authenticatedUser.role,
      currentCompany: this.$page.props.currentCompany
    };
  },
  computed: {
    companyNotifications: function companyNotifications() {
      var _this = this;

      var totalNotifications = [];

      if (this.role == 'owner') {
        this.notifications.find(function (notification) {
          if (notification.data.company_id == _this.currentCompany.id) {
            totalNotifications.push(notification);
          }
        });
      }

      return totalNotifications;
    },
    unReadNotificationCount: function unReadNotificationCount() {
      var _this2 = this;

      var notificationCount = 0;

      if (this.role == 'owner') {
        if (this.role == 'owner') {
          this.notifications.find(function (notification) {
            if (notification.data.company_id == _this2.currentCompany.id && !notification.read_at) {
              notificationCount++;
            }
          });
        }
      }

      return notificationCount;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/notifications.vue?vue&type=template&id=93abbba2":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/notifications.vue?vue&type=template&id=93abbba2 ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "row justify-content-center pt-4"
};
var _hoisted_2 = {
  "class": "col-12"
};
var _hoisted_3 = {
  "class": "card"
};
var _hoisted_4 = {
  "class": "card-header"
};
var _hoisted_5 = {
  "class": "card-title"
};
var _hoisted_6 = {
  "class": "card-body"
};
var _hoisted_7 = {
  "class": "list-group"
};
var _hoisted_8 = ["href"];
var _hoisted_9 = {
  key: 0,
  "class": "d-flex w-100 justify-content-between"
};
var _hoisted_10 = ["innerHTML"];
var _hoisted_11 = {
  "class": "text-muted"
};
var _hoisted_12 = ["href"];
var _hoisted_13 = {
  key: 0,
  "class": "d-flex w-100 justify-content-between"
};
var _hoisted_14 = ["innerHTML"];
var _hoisted_15 = {
  "class": "text-muted"
};
var _hoisted_16 = {
  key: 2,
  "class": "text-center my-5"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, {
    title: _ctx.__('All Notification')
  }, null, 8
  /* PROPS */
  , ["title"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('All Notification')), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [$data.role != 'owner' && $props.notifications.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 0
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.notifications, function (notification, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
      href: notification.data.url,
      "class": "list-group-item list-group-item-action flex-column align-items-start",
      key: index
    }, [notification.data ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
      innerHTML: notification.data.message,
      "class": "mb-1"
    }, null, 8
    /* PROPS */
    , _hoisted_10), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.timeFromNow(notification.created_at)), 1
    /* TEXT */
    )])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 8
    /* PROPS */
    , _hoisted_8);
  }), 128
  /* KEYED_FRAGMENT */
  )) : $data.role == 'owner' && $options.companyNotifications && $options.companyNotifications.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 1
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.companyNotifications, function (notification, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
      href: notification.data.url,
      "class": "list-group-item list-group-item-action flex-column align-items-start",
      key: index
    }, [notification.data ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
      innerHTML: notification.data.message,
      "class": "mb-1"
    }, null, 8
    /* PROPS */
    , _hoisted_14), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.timeFromNow(notification.created_at)), 1
    /* TEXT */
    )])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 8
    /* PROPS */
    , _hoisted_12);
  }), 128
  /* KEYED_FRAGMENT */
  )) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("h6", _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('No Data Found')), 1
  /* TEXT */
  ))])])])])])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./resources/js/Pages/notifications.vue":
/*!**********************************************!*\
  !*** ./resources/js/Pages/notifications.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _notifications_vue_vue_type_template_id_93abbba2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notifications.vue?vue&type=template&id=93abbba2 */ "./resources/js/Pages/notifications.vue?vue&type=template&id=93abbba2");
/* harmony import */ var _notifications_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notifications.vue?vue&type=script&lang=js */ "./resources/js/Pages/notifications.vue?vue&type=script&lang=js");
/* harmony import */ var C_xampp_htdocs_leave_management_system_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_leave_management_system_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_notifications_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_notifications_vue_vue_type_template_id_93abbba2__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/notifications.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/notifications.vue?vue&type=script&lang=js":
/*!**********************************************************************!*\
  !*** ./resources/js/Pages/notifications.vue?vue&type=script&lang=js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_notifications_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_notifications_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./notifications.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/notifications.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/notifications.vue?vue&type=template&id=93abbba2":
/*!****************************************************************************!*\
  !*** ./resources/js/Pages/notifications.vue?vue&type=template&id=93abbba2 ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_notifications_vue_vue_type_template_id_93abbba2__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_notifications_vue_vue_type_template_id_93abbba2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./notifications.vue?vue&type=template&id=93abbba2 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/notifications.vue?vue&type=template&id=93abbba2");


/***/ })

}]);
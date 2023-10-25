"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_admin_company_show_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/admin/company/show.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/admin/company/show.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Shared_Admin_Plan_Feature_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Shared/Admin/Plan/Feature.vue */ "./resources/js/Shared/Admin/Plan/Feature.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    user: Object,
    working_days: Object,
    summary: Object,
    subscribed_plan: Object
  },
  components: {
    Feature: _Shared_Admin_Plan_Feature_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  methods: {
    deleteCompany: function deleteCompany(id) {
      var _this = this;

      this.$swal({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(function (result) {
        if (result.isConfirmed) {
          _this.$inertia["delete"](route("companies.destroy", id));
        }
      });
    },
    details: function details(value) {
      switch (value) {
        case 'order':
          this.$inertia.get(route("orders.index"), {
            'company': this.user.company.id
          });
          break;

        default:
          break;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Admin/Plan/Feature.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Admin/Plan/Feature.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    checked: {
      type: Boolean,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: false
    },
    spanText: {
      type: Boolean,
      "default": false
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/admin/company/show.vue?vue&type=template&id=6781d5d8&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/admin/company/show.vue?vue&type=template&id=6781d5d8&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-6781d5d8"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  "class": "row gutters-sm p-4"
};
var _hoisted_2 = {
  "class": "col-md-4 mb-3"
};
var _hoisted_3 = {
  "class": "card"
};
var _hoisted_4 = {
  "class": "card-body"
};
var _hoisted_5 = {
  "class": "d-flex flex-column align-items-center text-center"
};
var _hoisted_6 = ["src"];
var _hoisted_7 = {
  "class": "mt-3"
};
var _hoisted_8 = {
  "class": "card mt-3"
};
var _hoisted_9 = {
  "class": "list-group list-group-flush"
};
var _hoisted_10 = {
  "class": "list-group-item flex-wrap"
};
var _hoisted_11 = {
  href: "javascript:void(0)",
  "class": "d-flex justify-content-between align-items-center text-dark"
};
var _hoisted_12 = {
  "class": "mb-0"
};
var _hoisted_13 = {
  "class": "list-group-item flex-wrap"
};
var _hoisted_14 = {
  href: "javascript:void(0)",
  "class": "d-flex justify-content-between align-items-center text-dark"
};
var _hoisted_15 = {
  "class": "mb-0"
};
var _hoisted_16 = {
  "class": "list-group-item flex-wrap"
};
var _hoisted_17 = {
  href: "javascript:void(0)",
  "class": "d-flex justify-content-between align-items-center text-dark"
};
var _hoisted_18 = {
  "class": "mb-0"
};
var _hoisted_19 = {
  "class": "list-group-item flex-wrap"
};
var _hoisted_20 = {
  href: "javascript:void(0)",
  "class": "d-flex justify-content-between align-items-center text-dark"
};
var _hoisted_21 = {
  "class": "mb-0"
};
var _hoisted_22 = {
  "class": "list-group-item flex-wrap"
};
var _hoisted_23 = {
  href: "javascript:void(0)",
  "class": "d-flex justify-content-between align-items-center text-dark"
};
var _hoisted_24 = {
  "class": "mb-0"
};
var _hoisted_25 = {
  "class": "list-group-item flex-wrap"
};
var _hoisted_26 = {
  href: "javascript:void(0)",
  "class": "d-flex justify-content-between align-items-center text-dark"
};
var _hoisted_27 = {
  "class": "mb-0"
};
var _hoisted_28 = {
  "class": "list-group-item flex-wrap"
};
var _hoisted_29 = {
  href: "javascript:void(0)",
  "class": "d-flex justify-content-between align-items-center text-dark"
};
var _hoisted_30 = {
  "class": "mb-0"
};
var _hoisted_31 = {
  "class": "list-group-item flex-wrap"
};
var _hoisted_32 = {
  href: "javascript:void(0)",
  "class": "d-flex justify-content-between align-items-center text-dark"
};
var _hoisted_33 = {
  "class": "mb-0"
};
var _hoisted_34 = {
  "class": "col-md-8"
};
var _hoisted_35 = {
  "class": "card mb-3"
};
var _hoisted_36 = {
  "class": "card-body"
};
var _hoisted_37 = {
  "class": "row"
};
var _hoisted_38 = {
  "class": "col-sm-3"
};
var _hoisted_39 = {
  "class": "mb-0"
};
var _hoisted_40 = {
  "class": "col-sm-9 text-secondary"
};

var _hoisted_41 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1
  /* HOISTED */
  );
});

var _hoisted_42 = {
  "class": "row"
};
var _hoisted_43 = {
  "class": "col-sm-3"
};
var _hoisted_44 = {
  "class": "mb-0"
};
var _hoisted_45 = {
  "class": "col-sm-9 text-secondary"
};

var _hoisted_46 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1
  /* HOISTED */
  );
});

var _hoisted_47 = {
  "class": "row"
};
var _hoisted_48 = {
  "class": "col-sm-3"
};
var _hoisted_49 = {
  "class": "mb-0"
};
var _hoisted_50 = {
  "class": "col-sm-9 text-secondary"
};

var _hoisted_51 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1
  /* HOISTED */
  );
});

var _hoisted_52 = {
  "class": "row"
};
var _hoisted_53 = {
  "class": "col-sm-3"
};
var _hoisted_54 = {
  "class": "mb-0"
};
var _hoisted_55 = {
  "class": "col-sm-9 text-secondary"
};

var _hoisted_56 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1
  /* HOISTED */
  );
});

var _hoisted_57 = {
  "class": "row"
};
var _hoisted_58 = {
  "class": "col-sm-3"
};
var _hoisted_59 = {
  "class": "mb-0"
};
var _hoisted_60 = {
  "class": "col-sm-9 text-secondary"
};
var _hoisted_61 = {
  "class": "row mt-4"
};
var _hoisted_62 = {
  "class": "col-sm-12"
};
var _hoisted_63 = {
  "class": "row gutters-sm"
};
var _hoisted_64 = {
  "class": "col-sm-6 mb-3"
};
var _hoisted_65 = {
  "class": "card h-100"
};
var _hoisted_66 = {
  "class": "card-body"
};
var _hoisted_67 = {
  "class": "d-flex align-items-center mb-3"
};

var _hoisted_68 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("hr", null, null, -1
  /* HOISTED */
  );
});

var _hoisted_69 = {
  "class": "col-sm-6 mb-3"
};
var _hoisted_70 = {
  "class": "card h-100"
};
var _hoisted_71 = {
  "class": "card-body"
};
var _hoisted_72 = {
  "class": "d-flex justify-content-between align-items-center mb-3"
};
var _hoisted_73 = {
  "class": "table border-0"
};
var _hoisted_74 = {
  key: 0
};
var _hoisted_75 = {
  key: 1
};
var _hoisted_76 = {
  key: 0
};
var _hoisted_77 = {
  key: 1,
  "class": "text-capitalize"
};
var _hoisted_78 = {
  key: 2
};
var _hoisted_79 = {
  key: 0
};
var _hoisted_80 = {
  width: "40%"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");

  var _component_DeleteIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DeleteIcon");

  var _component_Feature = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Feature");

  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");

  var _directive_tooltip = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("tooltip");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, {
    title: $props.user.name
  }, null, 8
  /* PROPS */
  , ["title"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: $props.user.company_logo,
    alt: "logo",
    "class": "rounded-circle object-fit-cover",
    width: "150",
    height: "150"
  }, null, 8
  /* PROPS */
  , _hoisted_6), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.user.company_name), 1
  /* TEXT */
  )])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Total Expense')), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.currencyPosition($props.summary.total_expense)), 1
  /* TEXT */
  )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Total Teams')), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.summary.total_teams), 1
  /* TEXT */
  )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", _hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Total Employees')), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.summary.total_employees), 1
  /* TEXT */
  )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", _hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Total Holidays')), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.summary.total_holidays), 1
  /* TEXT */
  )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", _hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Total Leave Types')), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.summary.total_leave_types), 1
  /* TEXT */
  )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", _hoisted_27, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Pending Leave Requests')), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.summary.total_pending_leave_requests), 1
  /* TEXT */
  )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", _hoisted_30, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Approved Leave Requests')), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.summary.total_approved_leave_requests), 1
  /* TEXT */
  )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", _hoisted_33, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Rejected Leave Requests')), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.summary.total_rejected_leave_requests), 1
  /* TEXT */
  )])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_34, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_35, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_36, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_37, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_38, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", _hoisted_39, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Name')), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_40, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.user.company_name), 1
  /* TEXT */
  )]), _hoisted_41, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_42, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_43, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", _hoisted_44, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Email')), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_45, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.user.company_email), 1
  /* TEXT */
  )]), _hoisted_46, $props.user.company && $props.user.company.country ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 0
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_47, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_48, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", _hoisted_49, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Country')), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_50, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.user.company.country.name), 1
  /* TEXT */
  )]), _hoisted_51], 64
  /* STABLE_FRAGMENT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_52, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_53, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", _hoisted_54, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Joining Date')), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_55, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.timeFromNow($props.user.created_at)), 1
  /* TEXT */
  )]), _hoisted_56, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_57, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_58, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", _hoisted_59, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Last Profile Update')), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_60, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.timeFromNow($props.user.updated_at)), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_61, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_62, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $options.deleteCompany($props.user.id);
    }),
    "class": "btn"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DeleteIcon)])), [[_directive_tooltip, 'Delete']])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_63, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_64, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_65, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_66, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", _hoisted_67, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Working Days')), 1
  /* TEXT */
  ), _hoisted_68, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Feature, {
    name: "Sunday",
    checked: $props.working_days.sunday
  }, null, 8
  /* PROPS */
  , ["checked"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Feature, {
    name: "Monday",
    checked: $props.working_days.monday
  }, null, 8
  /* PROPS */
  , ["checked"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Feature, {
    name: "Tuesday",
    checked: $props.working_days.tuesday
  }, null, 8
  /* PROPS */
  , ["checked"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Feature, {
    name: "Wednesday",
    checked: $props.working_days.wednesday
  }, null, 8
  /* PROPS */
  , ["checked"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Feature, {
    name: "Thursday",
    checked: $props.working_days.thursday
  }, null, 8
  /* PROPS */
  , ["checked"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Feature, {
    name: "Friday",
    checked: $props.working_days.friday
  }, null, 8
  /* PROPS */
  , ["checked"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Feature, {
    name: "Saturday",
    checked: $props.working_days.saturday
  }, null, 8
  /* PROPS */
  , ["checked"])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_69, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_70, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_71, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", _hoisted_72, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Currently Subscribed')), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $options.details('order');
    }),
    "class": "btn btn-primary"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Order List')), 1
      /* TEXT */
      )];
    }),
    _: 1
    /* STABLE */

  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_73, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [$props.subscribed_plan.plan ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", _hoisted_74, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Plan')), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.subscribed_plan.plan.name), 1
  /* TEXT */
  )])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.subscribed_plan.plan ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", _hoisted_75, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Subscription Type')), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [$props.subscribed_plan.plan.interval == 'custom_days' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_76, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.subscribed_plan.plan.custom_interval_days) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.pluralize($props.subscribed_plan.remaining_days, 'Day')), 1
  /* TEXT */
  )) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_77, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.subscribed_plan.plan.interval), 1
  /* TEXT */
  ))])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.subscribed_plan.plan && $props.subscribed_plan.plan.interval != 'lifetime' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", _hoisted_78, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Expiration Remaining')), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.subscribed_plan.remaining_days) + " ", 1
  /* TEXT */
  ), $props.subscribed_plan.remaining_days != 'Lifetime' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_79, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.pluralize($props.subscribed_plan.remaining_days, 'Day')), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_80, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Plan Features')), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Feature, {
    "span-text": true,
    name: "Unlimited Employees",
    checked: !$props.subscribed_plan.plan.plan_features.is_limited_employee
  }, null, 8
  /* PROPS */
  , ["checked"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Feature, {
    "span-text": true,
    name: "Max Employees",
    checked: true,
    value: $props.subscribed_plan.plan.plan_features.is_limited_employee ? $props.subscribed_plan.plan.plan_features.max_employees : '∞'
  }, null, 8
  /* PROPS */
  , ["value"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Feature, {
    "span-text": true,
    name: "Max Teams",
    checked: true,
    value: $props.subscribed_plan.plan.plan_features.max_teams
  }, null, 8
  /* PROPS */
  , ["value"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Feature, {
    "span-text": true,
    name: "Max Leave Types",
    checked: true,
    value: $props.subscribed_plan.plan.plan_features.max_leave_types
  }, null, 8
  /* PROPS */
  , ["value"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Feature, {
    "span-text": true,
    name: "Custom Theme Look",
    checked: $props.subscribed_plan.plan.plan_features.custom_theme_look
  }, null, 8
  /* PROPS */
  , ["checked"])])])])])])])])])])])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Admin/Plan/Feature.vue?vue&type=template&id=694c792c":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Admin/Plan/Feature.vue?vue&type=template&id=694c792c ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "mb-2 d-flex align-items-center justify-content-between"
};
var _hoisted_2 = {
  "class": "d-flex"
};
var _hoisted_3 = {
  "class": "icon mr-2"
};
var _hoisted_4 = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  width: "22",
  height: "22",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M5 13l4 4L19 7"
}, null, -1
/* HOISTED */
);

var _hoisted_6 = [_hoisted_5];
var _hoisted_7 = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  "class": "me-0 icon icon-tabler icon-tabler-x",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  "stroke-width": "2",
  stroke: "#dc3545",
  fill: "none",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  stroke: "none",
  d: "M0 0h24v24H0z",
  fill: "none"
}, null, -1
/* HOISTED */
);

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("line", {
  x1: "18",
  y1: "6",
  x2: "6",
  y2: "18"
}, null, -1
/* HOISTED */
);

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("line", {
  x1: "6",
  y1: "6",
  x2: "18",
  y2: "18"
}, null, -1
/* HOISTED */
);

var _hoisted_11 = [_hoisted_8, _hoisted_9, _hoisted_10];
var _hoisted_12 = {
  key: 0,
  "class": "mb-0"
};
var _hoisted_13 = {
  key: 1,
  "class": "mb-0"
};
var _hoisted_14 = {
  key: 0,
  "class": "mb-0"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_hs = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("hs");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_3, [$props.checked ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_4, _hoisted_6)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_7, _hoisted_11))]), $props.spanText ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__($props.name)), 1
  /* TEXT */
  )) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("h5", _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__($props.name)), 1
  /* TEXT */
  ))]), $props.spanText ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 0
  }, [$props.value ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.value), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64
  /* STABLE_FRAGMENT */
  )) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 1
  }, [$props.value ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_hs, {
    key: 0,
    "class": "mb-0"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.value), 1
      /* TEXT */
      )];
    }),
    _: 1
    /* STABLE */

  })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64
  /* STABLE_FRAGMENT */
  ))]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/admin/company/show.vue?vue&type=style&index=0&id=6781d5d8&scoped=true&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/admin/company/show.vue?vue&type=style&index=0&id=6781d5d8&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.gutters-sm[data-v-6781d5d8] {\r\n        margin-right: -8px;\r\n        margin-left: -8px;\n}\n.gutters-sm>.col[data-v-6781d5d8],\r\n    .gutters-sm>[class*=col-][data-v-6781d5d8] {\r\n        padding-right: 8px;\r\n        padding-left: 8px;\n}\n.mb-3[data-v-6781d5d8],\r\n    .my-3[data-v-6781d5d8] {\r\n        margin-bottom: 1rem !important;\n}\n.bg-gray-300[data-v-6781d5d8] {\r\n        background-color: #e2e8f0;\n}\n.h-100[data-v-6781d5d8] {\r\n        height: 100% !important;\n}\n.shadow-none[data-v-6781d5d8] {\r\n        box-shadow: none !important;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/admin/company/show.vue?vue&type=style&index=0&id=6781d5d8&scoped=true&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/admin/company/show.vue?vue&type=style&index=0&id=6781d5d8&scoped=true&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_show_vue_vue_type_style_index_0_id_6781d5d8_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./show.vue?vue&type=style&index=0&id=6781d5d8&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/admin/company/show.vue?vue&type=style&index=0&id=6781d5d8&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_show_vue_vue_type_style_index_0_id_6781d5d8_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_show_vue_vue_type_style_index_0_id_6781d5d8_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/Pages/admin/company/show.vue":
/*!***************************************************!*\
  !*** ./resources/js/Pages/admin/company/show.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _show_vue_vue_type_template_id_6781d5d8_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show.vue?vue&type=template&id=6781d5d8&scoped=true */ "./resources/js/Pages/admin/company/show.vue?vue&type=template&id=6781d5d8&scoped=true");
/* harmony import */ var _show_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show.vue?vue&type=script&lang=js */ "./resources/js/Pages/admin/company/show.vue?vue&type=script&lang=js");
/* harmony import */ var _show_vue_vue_type_style_index_0_id_6781d5d8_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./show.vue?vue&type=style&index=0&id=6781d5d8&scoped=true&lang=css */ "./resources/js/Pages/admin/company/show.vue?vue&type=style&index=0&id=6781d5d8&scoped=true&lang=css");
/* harmony import */ var C_xampp_htdocs_leave_management_system_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_leave_management_system_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_show_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_show_vue_vue_type_template_id_6781d5d8_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-6781d5d8"],['__file',"resources/js/Pages/admin/company/show.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Shared/Admin/Plan/Feature.vue":
/*!****************************************************!*\
  !*** ./resources/js/Shared/Admin/Plan/Feature.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Feature_vue_vue_type_template_id_694c792c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Feature.vue?vue&type=template&id=694c792c */ "./resources/js/Shared/Admin/Plan/Feature.vue?vue&type=template&id=694c792c");
/* harmony import */ var _Feature_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Feature.vue?vue&type=script&lang=js */ "./resources/js/Shared/Admin/Plan/Feature.vue?vue&type=script&lang=js");
/* harmony import */ var C_xampp_htdocs_leave_management_system_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_leave_management_system_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Feature_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Feature_vue_vue_type_template_id_694c792c__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Shared/Admin/Plan/Feature.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/admin/company/show.vue?vue&type=script&lang=js":
/*!***************************************************************************!*\
  !*** ./resources/js/Pages/admin/company/show.vue?vue&type=script&lang=js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_show_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_show_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./show.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/admin/company/show.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Shared/Admin/Plan/Feature.vue?vue&type=script&lang=js":
/*!****************************************************************************!*\
  !*** ./resources/js/Shared/Admin/Plan/Feature.vue?vue&type=script&lang=js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Feature_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Feature_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Feature.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Admin/Plan/Feature.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/admin/company/show.vue?vue&type=template&id=6781d5d8&scoped=true":
/*!*********************************************************************************************!*\
  !*** ./resources/js/Pages/admin/company/show.vue?vue&type=template&id=6781d5d8&scoped=true ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_show_vue_vue_type_template_id_6781d5d8_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_show_vue_vue_type_template_id_6781d5d8_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./show.vue?vue&type=template&id=6781d5d8&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/admin/company/show.vue?vue&type=template&id=6781d5d8&scoped=true");


/***/ }),

/***/ "./resources/js/Shared/Admin/Plan/Feature.vue?vue&type=template&id=694c792c":
/*!**********************************************************************************!*\
  !*** ./resources/js/Shared/Admin/Plan/Feature.vue?vue&type=template&id=694c792c ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Feature_vue_vue_type_template_id_694c792c__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Feature_vue_vue_type_template_id_694c792c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Feature.vue?vue&type=template&id=694c792c */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Admin/Plan/Feature.vue?vue&type=template&id=694c792c");


/***/ }),

/***/ "./resources/js/Pages/admin/company/show.vue?vue&type=style&index=0&id=6781d5d8&scoped=true&lang=css":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/Pages/admin/company/show.vue?vue&type=style&index=0&id=6781d5d8&scoped=true&lang=css ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_show_vue_vue_type_style_index_0_id_6781d5d8_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./show.vue?vue&type=style&index=0&id=6781d5d8&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/admin/company/show.vue?vue&type=style&index=0&id=6781d5d8&scoped=true&lang=css");


/***/ })

}]);
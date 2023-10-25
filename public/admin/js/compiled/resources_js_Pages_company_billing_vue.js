(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_company_billing_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/company/billing.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/company/billing.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Shared_Admin_Plan_Feature_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Shared/Admin/Plan/Feature.vue */ "./resources/js/Shared/Admin/Plan/Feature.vue");
/* harmony import */ var _Shared_Pagination_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Shared/Pagination.vue */ "./resources/js/Shared/Pagination.vue");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Shared_Icons_ArrowRight_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Shared/Icons/ArrowRight.vue */ "./resources/js/Shared/Icons/ArrowRight.vue");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Feature: _Shared_Admin_Plan_Feature_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Pagination: _Shared_Pagination_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Inertia: _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__.Inertia,
    ArrowRight: _Shared_Icons_ArrowRight_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  props: {
    plans: {
      type: Array,
      required: true
    },
    currently_subscribed: {
      type: Object,
      required: true
    },
    orders: Array,
    filters: Object || Array
  },
  data: function data() {
    return {
      subscription: this.$page.props.current_subscription,
      showFilter: false,
      form: {
        order_id: "",
        payment_method: "",
        amount: "",
        currency_symbol: "",
        plan: {}
      },
      filterForm: {
        search: this.filters.search,
        payment: this.filters.payment,
        plan: this.filters.plan
      }
    };
  },
  methods: {
    getPlanDetails: function getPlanDetails(planId) {},
    filteringData: function filteringData() {
      this.showFilter = !this.showFilter;
      localStorage.setItem("companyOrder", this.showFilter);
    },
    filterData: function filterData() {
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__.Inertia.get(route("company.billing"), {
        company: this.filterForm.company,
        search: this.filterForm.search,
        payment: this.filterForm.payment,
        plan: this.filterForm.plan
      }, {
        preserveState: true,
        preserveScroll: true,
        replace: true
      });
    }
  },
  watch: {
    "filterForm.search": lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default()(function (value) {
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__.Inertia.get(route("company.billing"), {
        search: value
      }, {
        preserveState: true,
        preserveScroll: true,
        replace: true
      });
    }, 500)
  },
  mounted: function mounted() {
    this.checkPagePermission("owner");
    this.showFilter = localStorage.getItem("companyOrder") == "true" ? true : false;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Admin/Plan/Feature.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Admin/Plan/Feature.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Pagination.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Pagination.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    links: {
      type: Array,
      required: true
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/company/billing.vue?vue&type=template&id=1d26f820&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/company/billing.vue?vue&type=template&id=1d26f820&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-1d26f820"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  "class": "row pt-4 billing"
};
var _hoisted_2 = {
  "class": "col-lg-4 mb-4"
};
var _hoisted_3 = {
  "class": "card h-100 border-start-lg border-start-primary"
};
var _hoisted_4 = {
  "class": "card-body"
};
var _hoisted_5 = {
  "class": "h3"
};
var _hoisted_6 = {
  "class": "text-arrow-icon small",
  href: "#pricing_plan"
};
var _hoisted_7 = {
  "class": "col-lg-4 mb-4"
};
var _hoisted_8 = {
  "class": "card h-100 border-start-lg border-start-secondary"
};
var _hoisted_9 = {
  "class": "card-body"
};
var _hoisted_10 = {
  "class": "h3"
};
var _hoisted_11 = {
  key: 0,
  "class": "badge badge-danger"
};
var _hoisted_12 = {
  key: 1,
  "class": "badge badge-success"
};
var _hoisted_13 = {
  key: 1
};
var _hoisted_14 = {
  "class": "text-arrow-icon small text-secondary",
  href: "#billing_history"
};
var _hoisted_15 = {
  "class": "col-lg-4 mb-4"
};
var _hoisted_16 = {
  "class": "card h-100 border-start-lg border-start-success"
};
var _hoisted_17 = {
  "class": "card-body"
};
var _hoisted_18 = {
  key: 0,
  "class": "h3 d-flex align-items-center"
};
var _hoisted_19 = ["href"];
var _hoisted_20 = {
  "class": "row justify-content-center",
  id: "pricing_plan"
};
var _hoisted_21 = {
  "class": "col-12"
};
var _hoisted_22 = {
  "class": "card"
};
var _hoisted_23 = {
  "class": "card-header border-0"
};
var _hoisted_24 = {
  "class": "card-title"
};
var _hoisted_25 = {
  "class": "card-body"
};
var _hoisted_26 = {
  "class": "row justify-content-center"
};
var _hoisted_27 = {
  "class": "card h-100 shadow-sm"
};
var _hoisted_28 = {
  "class": "card-header text-center py-4"
};
var _hoisted_29 = {
  key: 0
};
var _hoisted_30 = {
  key: 1
};
var _hoisted_31 = {
  key: 0,
  "class": "badge badge-info"
};
var _hoisted_32 = {
  key: 0,
  "class": "card-body"
};
var _hoisted_33 = {
  "class": "card-footer"
};
var _hoisted_34 = {
  "class": "d-flex justify-content-between"
};
var _hoisted_35 = ["href"];

var _hoisted_36 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fas fa-arrow-right"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_37 = ["href"];

var _hoisted_38 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fas fa-arrow-right"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_39 = {
  key: 0,
  href: "javascript:void(0)",
  "class": "btn btn-danger"
};
var _hoisted_40 = {
  "class": "row justify-content-center",
  id: "billing_history"
};
var _hoisted_41 = {
  "class": "col-12"
};
var _hoisted_42 = {
  "class": "card mt-3"
};
var _hoisted_43 = {
  "class": "card-header border-0"
};
var _hoisted_44 = {
  "class": "d-flex justify-content-between"
};
var _hoisted_45 = {
  "class": "card-title"
};

var _hoisted_46 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fa-solid fa-filter"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_47 = {
  key: 0
};
var _hoisted_48 = {
  key: 1
};

var _hoisted_49 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fa-solid fa-times"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_50 = {
  key: 0,
  "class": "card-body border-bottom row"
};
var _hoisted_51 = {
  "class": "col-4"
};
var _hoisted_52 = {
  "class": "col-4"
};
var _hoisted_53 = {
  value: ""
};
var _hoisted_54 = ["value"];
var _hoisted_55 = {
  "class": "col-4"
};
var _hoisted_56 = {
  value: ""
};
var _hoisted_57 = {
  value: "paypal"
};
var _hoisted_58 = {
  value: "stripe"
};
var _hoisted_59 = {
  value: "flutterwave"
};
var _hoisted_60 = {
  value: "mollie"
};
var _hoisted_61 = {
  value: "midtrans"
};
var _hoisted_62 = {
  value: "paystack"
};
var _hoisted_63 = {
  value: "razorpay"
};
var _hoisted_64 = {
  value: "instamojo"
};
var _hoisted_65 = {
  "class": "card-body table-responsive p-0"
};
var _hoisted_66 = {
  "class": "table table-valign-middle"
};
var _hoisted_67 = ["innerHTML"];
var _hoisted_68 = ["innerHTML"];
var _hoisted_69 = {
  "class": "text-capitalize"
};
var _hoisted_70 = {
  key: 0
};
var _hoisted_71 = {
  key: 0
};
var _hoisted_72 = {
  key: 1
};
var _hoisted_73 = {
  "class": "d-flex"
};
var _hoisted_74 = ["href"];

var _hoisted_75 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fa-solid fa-download fa-2x"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_76 = [_hoisted_75];
var _hoisted_77 = {
  key: 1
};
var _hoisted_78 = {
  colspan: "5",
  "class": "text-center"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");

  var _component_ArrowRight = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ArrowRight");

  var _component_Feature = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Feature");

  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");

  var _component_EyeIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("EyeIcon");

  var _component_Pagination = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Pagination");

  var _directive_tooltip = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("tooltip");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, {
    title: _ctx.__('Billing')
  }, null, 8
  /* PROPS */
  , ["title"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Billing card 1"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Current bill')), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.currencyPosition($props.currently_subscribed.plan.price)), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Switch to another plan')) + " ", 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ArrowRight)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Billing card 2"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Next payment due')), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [$props.currently_subscribed.plan && $props.currently_subscribed.plan.interval != 'lifetime' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 0
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.formateDate($props.currently_subscribed.expired_date, "MMMM D")) + " ", 1
  /* TEXT */
  ), $props.currently_subscribed.plan_expired ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Expired')), 1
  /* TEXT */
  )) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Active')), 1
  /* TEXT */
  ))], 64
  /* STABLE_FRAGMENT */
  )) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Lifetime')), 1
  /* TEXT */
  ))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('View billing history')) + " ", 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ArrowRight)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Billing card 3"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Current Plan')), 1
  /* TEXT */
  ), $props.currently_subscribed.plan ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.currently_subscribed.plan.name), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    "class": "text-arrow-icon small text-success",
    href: _ctx.route('website.plan.details', $props.currently_subscribed.plan.slug)
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Upgrade plan')) + " ", 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ArrowRight)], 8
  /* PROPS */
  , _hoisted_19)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", _hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Pricing Plan')), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.plans, function (plan) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      "class": "col-md-6 col-lg-4 col-xl-3 mb-3 col-12",
      key: plan.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(plan.name), 1
    /* TEXT */
    ), plan.interval != 'custom_days' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("small", _hoisted_29, " /" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(plan.interval), 1
    /* TEXT */
    )) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("small", _hoisted_30, " /" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(plan.custom_interval_days) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Days')), 1
    /* TEXT */
    ))]), plan.recommended ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_31, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Recommended')), 1
    /* TEXT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.currencyPosition(plan.price)), 1
    /* TEXT */
    )]), plan.plan_features ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Feature, {
      name: "Unlimited Employees",
      checked: !plan.plan_features.is_limited_employee
    }, null, 8
    /* PROPS */
    , ["checked"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Feature, {
      name: "Max Employees",
      checked: true,
      value: plan.plan_features.is_limited_employee ? plan.plan_features.max_employees : '∞'
    }, null, 8
    /* PROPS */
    , ["value"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Feature, {
      name: "Max Teams",
      checked: true,
      value: plan.plan_features.max_teams
    }, null, 8
    /* PROPS */
    , ["value"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Feature, {
      name: "Max Leave Types",
      checked: true,
      value: plan.plan_features.max_leave_types
    }, null, 8
    /* PROPS */
    , ["value"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Feature, {
      name: "Custom Theme Look",
      checked: plan.plan_features.custom_theme_look
    }, null, 8
    /* PROPS */
    , ["checked"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_34, [$data.subscription.plan_id == plan.id ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
      key: 0,
      href: _ctx.route('website.plan.details', plan.slug),
      type: "button",
      "class": "btn btn-success"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Current Plan')) + " ", 1
    /* TEXT */
    ), _hoisted_36], 8
    /* PROPS */
    , _hoisted_35)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
      key: 1,
      href: _ctx.route('website.plan.details', plan.slug),
      "class": "btn btn-primary"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Select Plan')) + " ", 1
    /* TEXT */
    ), _hoisted_38], 8
    /* PROPS */
    , _hoisted_37)), $props.currently_subscribed.plan && $props.currently_subscribed.plan.interval != 'lifetime' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      key: 2
    }, [$props.currently_subscribed.plan_id == plan.id ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", _hoisted_39, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Expire In')) + " - " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.currently_subscribed.remaining_days) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Days')), 1
    /* TEXT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64
    /* STABLE_FRAGMENT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_40, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_41, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_42, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_43, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_44, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", _hoisted_45, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Billing History')), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn btn-secondary ml-2",
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.filteringData && $options.filteringData.apply($options, arguments);
    })
  }, [_hoisted_46, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("   "), !$data.showFilter ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_47, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Show Filter')), 1
  /* TEXT */
  )) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_48, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Hide Filter')), 1
  /* TEXT */
  ))]), $data.filterForm.search || $data.filterForm.payment || $data.filterForm.plan ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Link, {
    key: 0,
    href: _ctx.route('company.billing'),
    "class": "btn btn-danger ml-2",
    "preserve-scroll": ""
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_49, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Clear')), 1
      /* TEXT */
      )];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])]), $data.showFilter ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_50, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_51, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Search')), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    onKeyup: _cache[1] || (_cache[1] = function () {
      return _ctx.searchData && _ctx.searchData.apply(_ctx, arguments);
    }),
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $data.filterForm.search = $event;
    }),
    type: "text",
    placeholder: "Search order id, transaction id",
    "class": "form-control"
  }, null, 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.filterForm.search]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_52, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Plan')), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $data.filterForm.plan = $event;
    }),
    "class": "form-control",
    onChange: _cache[4] || (_cache[4] = function () {
      return $options.filterData && $options.filterData.apply($options, arguments);
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", _hoisted_53, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('All')), 1
  /* TEXT */
  ), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.plans, function (plan) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      key: plan.id,
      value: plan.id
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(plan.name), 9
    /* TEXT, PROPS */
    , _hoisted_54);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.filterForm.plan]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_55, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Payment')), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "class": "form-control",
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return $data.filterForm.payment = $event;
    }),
    onChange: _cache[6] || (_cache[6] = function () {
      return $options.filterData && $options.filterData.apply($options, arguments);
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", _hoisted_56, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('All')), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", _hoisted_57, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Paypal')), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", _hoisted_58, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Stripe')), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", _hoisted_59, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Flutterwave')), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", _hoisted_60, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Mollie')), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", _hoisted_61, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Midtrans')), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", _hoisted_62, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Paystack')), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", _hoisted_63, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Razorpay')), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", _hoisted_64, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Instamojo')), 1
  /* TEXT */
  )], 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.filterForm.payment]])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_65, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_66, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Order ID')), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Transaction ID')), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Amount')), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Payment Method')), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Plan')), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Action')), 1
  /* TEXT */
  )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [$props.orders && $props.orders.data.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 0
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.orders.data, function (order, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: index
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Link, {
      href: _ctx.route('company.orders.show', order.id)
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" #"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
          innerHTML: order.order_id
        }, null, 8
        /* PROPS */
        , _hoisted_67)];
      }),
      _: 2
      /* DYNAMIC */

    }, 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["href"])), [[_directive_tooltip, _ctx.__('Order Details')]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
      innerHTML: order.transaction_id
    }, null, 8
    /* PROPS */
    , _hoisted_68)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(order.currency_symbol) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(order.amount), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_69, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(order.payment_provider), 1
    /* TEXT */
    ), order.plan ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("td", _hoisted_70, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(order.plan.name), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" / "), order.plan.interval != 'custom_days' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("small", _hoisted_71, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(order.plan.interval), 1
    /* TEXT */
    )) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("small", _hoisted_72, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(order.plan.custom_interval_days) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Days')), 1
    /* TEXT */
    ))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_73, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Link, {
      href: _ctx.route('company.orders.show', order.id),
      "class": "btn btn-sm pl-0"
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_EyeIcon)];
      }),
      _: 2
      /* DYNAMIC */

    }, 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["href"])), [[_directive_tooltip, _ctx.__('Order Details')]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
      href: _ctx.route('orders.pdf.download', order.id),
      target: "_blank",
      "class": "btn btn-sm pl-0 text-secondary"
    }, _hoisted_76, 8
    /* PROPS */
    , _hoisted_74)), [[_directive_tooltip, _ctx.__('Download')]])])]);
  }), 128
  /* KEYED_FRAGMENT */
  )) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", _hoisted_77, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_78, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('No Data Found')), 1
  /* TEXT */
  )])]))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Pagination  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Pagination, {
    links: $props.orders.links
  }, null, 8
  /* PROPS */
  , ["links"])])])])])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Admin/Plan/Feature.vue?vue&type=template&id=694c792c":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Admin/Plan/Feature.vue?vue&type=template&id=694c792c ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Icons/ArrowRight.vue?vue&type=template&id=c41539b8":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Icons/ArrowRight.vue?vue&type=template&id=c41539b8 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "class": "feather feather-arrow-right"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("line", {
  x1: "5",
  y1: "12",
  x2: "19",
  y2: "12"
}, null, -1
/* HOISTED */
);

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("polyline", {
  points: "12 5 19 12 12 19"
}, null, -1
/* HOISTED */
);

var _hoisted_4 = [_hoisted_2, _hoisted_3];
function render(_ctx, _cache) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1, _hoisted_4);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Pagination.vue?vue&type=template&id=7ed7fa14":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Pagination.vue?vue&type=template&id=7ed7fa14 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "pagination justify-content-center"
};
var _hoisted_2 = ["innerHTML"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("nav", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_1, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.links, function (link, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [link.url ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["page-item", {
        'active': link.active
      }]),
      key: index
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
      "class": "page-link d-inline",
      href: link.url,
      innerHTML: link.label
    }, null, 8
    /* PROPS */
    , ["href", "innerHTML"])], 2
    /* CLASS */
    )) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
      "class": "page-item disabled",
      key: index,
      style: {
        "margin-top": "-7px"
      }
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
      "class": "page-link",
      href: "#",
      innerHTML: link.label
    }, null, 8
    /* PROPS */
    , _hoisted_2)]))], 64
    /* STABLE_FRAGMENT */
    );
  }), 256
  /* UNKEYED_FRAGMENT */
  ))])]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/company/billing.vue?vue&type=style&index=0&id=1d26f820&scoped=true&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/company/billing.vue?vue&type=style&index=0&id=1d26f820&scoped=true&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.billing .card[data-v-1d26f820] {\r\n    box-shadow: 0 0.15rem 1.75rem 0 rgb(33 40 50 / 15%);\n}\n.billing .card .card-header[data-v-1d26f820] {\r\n    font-weight: 500;\n}\n.billing .card-header[data-v-1d26f820]:first-child {\r\n    border-radius: 0.35rem 0.35rem 0 0;\n}\n.billing .card-header[data-v-1d26f820] {\r\n    padding: 1rem 1.35rem;\r\n    margin-bottom: 0;\r\n    background-color: rgba(33, 40, 50, 0.03);\r\n    border-bottom: 1px solid rgba(33, 40, 50, 0.125);\n}\n.billing .border-start-primary[data-v-1d26f820] {\r\n    border-left-color: #0061f2 !important;\n}\n.billing .border-start-secondary[data-v-1d26f820] {\r\n    border-left-color: #6900c7 !important;\n}\n.billing .border-start-success[data-v-1d26f820] {\r\n    border-left-color: #00ac69 !important;\n}\n.billing .border-start-lg[data-v-1d26f820] {\r\n    border-left-width: 0.25rem !important;\n}\n.billing .h-100[data-v-1d26f820] {\r\n    height: 100% !important;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/lodash/_baseTrim.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseTrim.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var trimmedEndIndex = __webpack_require__(/*! ./_trimmedEndIndex */ "./node_modules/lodash/_trimmedEndIndex.js");

/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}

module.exports = baseTrim;


/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

module.exports = freeGlobal;


/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/lodash/_trimmedEndIndex.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_trimmedEndIndex.js ***!
  \*************************************************/
/***/ ((module) => {

/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

module.exports = trimmedEndIndex;


/***/ }),

/***/ "./node_modules/lodash/debounce.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/debounce.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    now = __webpack_require__(/*! ./now */ "./node_modules/lodash/now.js"),
    toNumber = __webpack_require__(/*! ./toNumber */ "./node_modules/lodash/toNumber.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/***/ ((module) => {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/***/ ((module) => {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ "./node_modules/lodash/now.js":
/*!************************************!*\
  !*** ./node_modules/lodash/now.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),

/***/ "./node_modules/lodash/toNumber.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toNumber.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseTrim = __webpack_require__(/*! ./_baseTrim */ "./node_modules/lodash/_baseTrim.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/company/billing.vue?vue&type=style&index=0&id=1d26f820&scoped=true&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/company/billing.vue?vue&type=style&index=0&id=1d26f820&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_billing_vue_vue_type_style_index_0_id_1d26f820_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./billing.vue?vue&type=style&index=0&id=1d26f820&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/company/billing.vue?vue&type=style&index=0&id=1d26f820&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_billing_vue_vue_type_style_index_0_id_1d26f820_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_billing_vue_vue_type_style_index_0_id_1d26f820_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/Pages/company/billing.vue":
/*!************************************************!*\
  !*** ./resources/js/Pages/company/billing.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _billing_vue_vue_type_template_id_1d26f820_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./billing.vue?vue&type=template&id=1d26f820&scoped=true */ "./resources/js/Pages/company/billing.vue?vue&type=template&id=1d26f820&scoped=true");
/* harmony import */ var _billing_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./billing.vue?vue&type=script&lang=js */ "./resources/js/Pages/company/billing.vue?vue&type=script&lang=js");
/* harmony import */ var _billing_vue_vue_type_style_index_0_id_1d26f820_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./billing.vue?vue&type=style&index=0&id=1d26f820&scoped=true&lang=css */ "./resources/js/Pages/company/billing.vue?vue&type=style&index=0&id=1d26f820&scoped=true&lang=css");
/* harmony import */ var C_xampp_htdocs_leave_management_system_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_leave_management_system_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_billing_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_billing_vue_vue_type_template_id_1d26f820_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-1d26f820"],['__file',"resources/js/Pages/company/billing.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Shared/Admin/Plan/Feature.vue":
/*!****************************************************!*\
  !*** ./resources/js/Shared/Admin/Plan/Feature.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./resources/js/Shared/Icons/ArrowRight.vue":
/*!**************************************************!*\
  !*** ./resources/js/Shared/Icons/ArrowRight.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ArrowRight_vue_vue_type_template_id_c41539b8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ArrowRight.vue?vue&type=template&id=c41539b8 */ "./resources/js/Shared/Icons/ArrowRight.vue?vue&type=template&id=c41539b8");
/* harmony import */ var C_xampp_htdocs_leave_management_system_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");

const script = {}

;
const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_leave_management_system_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__["default"])(script, [['render',_ArrowRight_vue_vue_type_template_id_c41539b8__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Shared/Icons/ArrowRight.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Shared/Pagination.vue":
/*!********************************************!*\
  !*** ./resources/js/Shared/Pagination.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Pagination_vue_vue_type_template_id_7ed7fa14__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pagination.vue?vue&type=template&id=7ed7fa14 */ "./resources/js/Shared/Pagination.vue?vue&type=template&id=7ed7fa14");
/* harmony import */ var _Pagination_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pagination.vue?vue&type=script&lang=js */ "./resources/js/Shared/Pagination.vue?vue&type=script&lang=js");
/* harmony import */ var C_xampp_htdocs_leave_management_system_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_leave_management_system_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Pagination_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Pagination_vue_vue_type_template_id_7ed7fa14__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Shared/Pagination.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/company/billing.vue?vue&type=script&lang=js":
/*!************************************************************************!*\
  !*** ./resources/js/Pages/company/billing.vue?vue&type=script&lang=js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_billing_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_billing_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./billing.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/company/billing.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Shared/Admin/Plan/Feature.vue?vue&type=script&lang=js":
/*!****************************************************************************!*\
  !*** ./resources/js/Shared/Admin/Plan/Feature.vue?vue&type=script&lang=js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Feature_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Feature_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Feature.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Admin/Plan/Feature.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Shared/Pagination.vue?vue&type=script&lang=js":
/*!********************************************************************!*\
  !*** ./resources/js/Shared/Pagination.vue?vue&type=script&lang=js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Pagination_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Pagination_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Pagination.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Pagination.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/company/billing.vue?vue&type=template&id=1d26f820&scoped=true":
/*!******************************************************************************************!*\
  !*** ./resources/js/Pages/company/billing.vue?vue&type=template&id=1d26f820&scoped=true ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_billing_vue_vue_type_template_id_1d26f820_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_billing_vue_vue_type_template_id_1d26f820_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./billing.vue?vue&type=template&id=1d26f820&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/company/billing.vue?vue&type=template&id=1d26f820&scoped=true");


/***/ }),

/***/ "./resources/js/Shared/Admin/Plan/Feature.vue?vue&type=template&id=694c792c":
/*!**********************************************************************************!*\
  !*** ./resources/js/Shared/Admin/Plan/Feature.vue?vue&type=template&id=694c792c ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Feature_vue_vue_type_template_id_694c792c__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Feature_vue_vue_type_template_id_694c792c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Feature.vue?vue&type=template&id=694c792c */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Admin/Plan/Feature.vue?vue&type=template&id=694c792c");


/***/ }),

/***/ "./resources/js/Shared/Icons/ArrowRight.vue?vue&type=template&id=c41539b8":
/*!********************************************************************************!*\
  !*** ./resources/js/Shared/Icons/ArrowRight.vue?vue&type=template&id=c41539b8 ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ArrowRight_vue_vue_type_template_id_c41539b8__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ArrowRight_vue_vue_type_template_id_c41539b8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ArrowRight.vue?vue&type=template&id=c41539b8 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Icons/ArrowRight.vue?vue&type=template&id=c41539b8");


/***/ }),

/***/ "./resources/js/Shared/Pagination.vue?vue&type=template&id=7ed7fa14":
/*!**************************************************************************!*\
  !*** ./resources/js/Shared/Pagination.vue?vue&type=template&id=7ed7fa14 ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Pagination_vue_vue_type_template_id_7ed7fa14__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Pagination_vue_vue_type_template_id_7ed7fa14__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Pagination.vue?vue&type=template&id=7ed7fa14 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Pagination.vue?vue&type=template&id=7ed7fa14");


/***/ }),

/***/ "./resources/js/Pages/company/billing.vue?vue&type=style&index=0&id=1d26f820&scoped=true&lang=css":
/*!********************************************************************************************************!*\
  !*** ./resources/js/Pages/company/billing.vue?vue&type=style&index=0&id=1d26f820&scoped=true&lang=css ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_billing_vue_vue_type_style_index_0_id_1d26f820_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./billing.vue?vue&type=style&index=0&id=1d26f820&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/company/billing.vue?vue&type=style&index=0&id=1d26f820&scoped=true&lang=css");


/***/ })

}]);
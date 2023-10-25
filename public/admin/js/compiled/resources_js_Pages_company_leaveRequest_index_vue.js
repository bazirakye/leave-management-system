"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_company_leaveRequest_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/company/leaveRequest/index.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/company/leaveRequest/index.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Shared_Pagination_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Shared/Pagination.vue */ "./resources/js/Shared/Pagination.vue");
/* harmony import */ var _Shared_Company_LeaveRequest_Status_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Shared/Company/LeaveRequest/Status.vue */ "./resources/js/Shared/Company/LeaveRequest/Status.vue");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    leaveRequests: Array,
    leaveTypes: Array,
    filters: Object
  },
  components: {
    Pagination: _Shared_Pagination_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Actions: _Shared_Company_LeaveRequest_Status_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      showModal: false,
      showFilter: false,
      form: {
        status: this.filters.status,
        leave_type: this.filters.leave_type
      },
      detailForm: {
        type: "",
        color: "",
        status: "",
        start: "",
        end: "",
        days: "",
        reason: "",
        user_id: "",
        employee: ""
      }
    };
  },
  methods: _defineProperty({
    getBadgeType: function getBadgeType(status) {
      if (status == "pending") {
        return "badge-warning";
      } else if (status == "approved") {
        return "badge-success";
      } else {
        return "badge-danger";
      }
    },
    startDate: function startDate(date) {
      return dayjs__WEBPACK_IMPORTED_MODULE_2___default()(date).format("DD MMM, YYYY");
    },
    endDate: function endDate(date) {
      return dayjs__WEBPACK_IMPORTED_MODULE_2___default()(date).format("DD MMM, YYYY");
    },
    filteringData: function filteringData() {
      this.showFilter = !this.showFilter;
      localStorage.setItem("companyLeaveRequestList", this.showFilter);
    },
    filterData: function filterData() {
      this.$inertia.get(route("company.leaveRequests.index"), {
        status: this.form.status,
        leave_type: this.form.leave_type,
        team: this.form.team
      }, {
        preserveState: true,
        replace: true
      });
    },
    showDetails: function showDetails(request) {
      this.detailForm.type = request.leave_type.name;
      this.detailForm.color = request.leave_type.color;
      this.detailForm.status = request.status;
      this.detailForm.start = request.start;
      this.detailForm.end = request.end;
      this.detailForm.days = request.days;
      this.detailForm.reason = request.reason;
      this.detailForm.user_id = request.employee.user_id;
      this.detailForm.employee = request.employee.user.name;
      this.showModal = true;
    },
    requestFor: function requestFor(startDate, endDate) {
      var start = dayjs__WEBPACK_IMPORTED_MODULE_2___default()(startDate).format("DD MMM, YYYY");
      var end = dayjs__WEBPACK_IMPORTED_MODULE_2___default()(endDate).format("DD MMM, YYYY");
      return "".concat(start, " - ").concat(end);
    }
  }, "getBadgeType", function getBadgeType(status) {
    if (status == "pending") {
      return "badge-warning";
    } else if (status == "approved") {
      return "badge-success";
    } else {
      return "badge-danger";
    }
  }),
  mounted: function mounted() {
    this.checkPagePermission("owner");
    this.showFilter = localStorage.getItem("companyLeaveRequestList") == "true" ? true : false;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Company/LeaveRequest/Status.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Company/LeaveRequest/Status.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    leaveRequest: {
      type: Object,
      required: true
    }
  },
  methods: {
    statusChange: function statusChange(status) {
      this.$inertia.post(route("company.leaveRequests.status"), {
        id: this.leaveRequest.id,
        status: status
      });
    },
    editData: function editData(leaveRequestId) {
      this.$inertia.get(route("company.leaveRequests.edit", leaveRequestId));
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Pagination.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Pagination.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/company/leaveRequest/index.vue?vue&type=template&id=13c7b876&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/company/leaveRequest/index.vue?vue&type=template&id=13c7b876&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-13c7b876"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  "class": "row justify-content-center pt-3"
};
var _hoisted_2 = {
  "class": "col-12"
};
var _hoisted_3 = {
  "class": "card"
};
var _hoisted_4 = {
  "class": "card-header border-0"
};
var _hoisted_5 = {
  "class": "d-flex justify-content-between"
};
var _hoisted_6 = {
  "class": "card-title"
};

var _hoisted_7 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fa-solid fa-plus"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_8 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fa-solid fa-filter"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_9 = {
  key: 0
};
var _hoisted_10 = {
  key: 1
};

var _hoisted_11 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fa-solid fa-times"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_12 = {
  key: 0,
  "class": "card-body border-bottom d-flex justify-content-between"
};
var _hoisted_13 = {
  "class": "w-25"
};
var _hoisted_14 = {
  value: ""
};
var _hoisted_15 = ["value"];
var _hoisted_16 = {
  "class": "ml-auto w-25"
};
var _hoisted_17 = {
  value: ""
};
var _hoisted_18 = {
  value: "pending"
};
var _hoisted_19 = {
  value: "approved"
};
var _hoisted_20 = {
  value: "rejected"
};
var _hoisted_21 = {
  "class": "card-body table-responsive p-0"
};
var _hoisted_22 = {
  "class": "table table-valign-middle"
};
var _hoisted_23 = ["src"];
var _hoisted_24 = {
  "class": "text-danger ml-1"
};
var _hoisted_25 = {
  "class": "d-flex"
};
var _hoisted_26 = ["onClick"];
var _hoisted_27 = {
  key: 1
};
var _hoisted_28 = {
  colspan: "20",
  "class": "text-center"
};
var _hoisted_29 = {
  key: 0
};
var _hoisted_30 = {
  "class": "modal-mask"
};
var _hoisted_31 = {
  "class": "modal-wrapper"
};
var _hoisted_32 = {
  "class": "modal-dialog d-flex justify-content-center",
  role: "document"
};
var _hoisted_33 = {
  "class": "modal-content"
};
var _hoisted_34 = {
  "class": "modal-header"
};
var _hoisted_35 = {
  "class": "modal-title"
};
var _hoisted_36 = {
  type: "button",
  "class": "close",
  "data-dismiss": "modal",
  "aria-label": "Close"
};
var _hoisted_37 = {
  "class": "modal-body"
};
var _hoisted_38 = {
  "class": "table"
};
var _hoisted_39 = {
  width: "30%"
};
var _hoisted_40 = {
  width: "70%"
};
var _hoisted_41 = {
  width: "30%"
};
var _hoisted_42 = {
  width: "70%"
};
var _hoisted_43 = {
  href: "#"
};
var _hoisted_44 = {
  width: "30%"
};
var _hoisted_45 = {
  width: "70%"
};
var _hoisted_46 = {
  width: "30%"
};
var _hoisted_47 = {
  width: "70%"
};
var _hoisted_48 = {
  width: "30%"
};
var _hoisted_49 = {
  width: "70%"
};
var _hoisted_50 = {
  width: "30%"
};
var _hoisted_51 = {
  width: "50%"
};
var _hoisted_52 = {
  "class": "modal-footer"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");

  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");

  var _component_Actions = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Actions");

  var _component_EyeIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("EyeIcon");

  var _component_Pagination = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Pagination");

  var _directive_tooltip = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("tooltip");

  var _directive_click_outside = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("click-outside");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, {
    title: _ctx.__('Leave Request List')
  }, null, 8
  /* PROPS */
  , ["title"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Leave Request List')), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: _ctx.route('company.leaveRequests.create'),
    "class": "btn btn-primary"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Create a new request')), 1
      /* TEXT */
      )];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "btn btn-secondary ml-2",
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.filteringData && $options.filteringData.apply($options, arguments);
    })
  }, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("   "), !$data.showFilter ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Show Filter')), 1
  /* TEXT */
  )) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Hide Filter')), 1
  /* TEXT */
  ))]), $data.form.status || $data.form.leave_type ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Link, {
    key: 0,
    href: _ctx.route('company.leaveRequests.index'),
    "class": "btn btn-danger ml-2"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Clear')), 1
      /* TEXT */
      )];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])]), $data.showFilter ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Leave Type')), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "class": "form-control",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.form.leave_type = $event;
    }),
    onChange: _cache[2] || (_cache[2] = function () {
      return $options.filterData && $options.filterData.apply($options, arguments);
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", _hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('All')), 1
  /* TEXT */
  ), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.leaveTypes, function (leave_type) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: leave_type.id,
      key: leave_type.id
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(leave_type.name), 9
    /* TEXT, PROPS */
    , _hoisted_15);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.form.leave_type]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Status')), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "class": "form-control",
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $data.form.status = $event;
    }),
    onChange: _cache[4] || (_cache[4] = function () {
      return $options.filterData && $options.filterData.apply($options, arguments);
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", _hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('All')), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", _hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Pending')), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", _hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Approved')), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", _hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Rejected')), 1
  /* TEXT */
  )], 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.form.status]])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Employee')), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Leave Type')), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Team')), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Date')), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Status')), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Action')), 1
  /* TEXT */
  )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [$props.leaveRequests && $props.leaveRequests.data.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 0
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.leaveRequests.data, function (leaveRequest, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: index
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
      href: _ctx.route('company.employees.show', leaveRequest.employee.user_id)
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
          src: leaveRequest.employee.user.avatar,
          alt: "img",
          "class": "img-circle img-size-32 mr-2"
        }, null, 8
        /* PROPS */
        , _hoisted_23), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(leaveRequest.employee.user.name), 1
        /* TEXT */
        )];
      }),
      _: 2
      /* DYNAMIC */

    }, 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["href"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
      style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
        background: leaveRequest.leave_type.color,
        border: '2px solid ' + leaveRequest.leave_type.color
      }),
      "class": "leave-type-color"
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(leaveRequest.leave_type.name), 5
    /* TEXT, STYLE */
    )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(leaveRequest.employee.team.name), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.startDate(leaveRequest.start)) + " - " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.endDate(leaveRequest.end)) + " (", 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(leaveRequest.days) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.pluralize(leaveRequest.days, 'Day')), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(") ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["toCapitalFirst badge", $options.getBadgeType(leaveRequest.status)])
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(leaveRequest.status), 3
    /* TEXT, CLASS */
    )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Actions, {
      leaveRequest: leaveRequest
    }, null, 8
    /* PROPS */
    , ["leaveRequest"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      onClick: function onClick($event) {
        return $options.showDetails(leaveRequest);
      },
      "class": "btn btn-sm"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_EyeIcon)], 8
    /* PROPS */
    , _hoisted_26)), [[_directive_tooltip, _ctx.__('Details')]])])]);
  }), 128
  /* KEYED_FRAGMENT */
  )) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('No Data Found')), 1
  /* TEXT */
  )])]))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Pagination  "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Pagination, {
    links: $props.leaveRequests.links
  }, null, 8
  /* PROPS */
  , ["links"])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Details Holiday Modal  "), $data.showModal ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
    name: "fade"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_34, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", _hoisted_35, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Leave Request Details')), 1
      /* TEXT */
      ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", _hoisted_36, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "aria-hidden": "true",
        onClick: _cache[5] || (_cache[5] = function ($event) {
          return $data.showModal = false;
        })
      }, "×")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_37, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_38, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_39, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Employee')), 1
      /* TEXT */
      ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_40, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
        href: _ctx.route('company.employees.show', $data.detailForm.user_id)
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.detailForm.employee), 1
          /* TEXT */
          )];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["href"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_41, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Leave Type')), 1
      /* TEXT */
      ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_42, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_43, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
          background: $data.detailForm.color,
          border: '2px solid ' + $data.detailForm.color
        }),
        "class": "leave-type-color"
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.detailForm.type), 5
      /* TEXT, STYLE */
      )])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_44, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Date')), 1
      /* TEXT */
      ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_45, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.requestFor($data.detailForm.start, $data.detailForm.end)), 1
      /* TEXT */
      )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_46, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Total Days')), 1
      /* TEXT */
      ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_47, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.detailForm.days) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.pluralize($data.detailForm.days, 'Day')), 1
      /* TEXT */
      )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_48, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Status')), 1
      /* TEXT */
      ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_49, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["toCapitalFirst badge", $options.getBadgeType($data.detailForm.status)])
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.detailForm.status), 3
      /* TEXT, CLASS */
      )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_50, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Reason')), 1
      /* TEXT */
      ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_51, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.detailForm.reason), 1
      /* TEXT */
      )])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_52, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        type: "button",
        "class": "btn btn-secondary",
        onClick: _cache[6] || (_cache[6] = function ($event) {
          return $data.showModal = false;
        })
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Close')), 1
      /* TEXT */
      )])])), [[_directive_click_outside, function () {
        return $data.showModal = false;
      }]])])])])];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Company/LeaveRequest/Status.vue?vue&type=template&id=752bb34b":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Company/LeaveRequest/Status.vue?vue&type=template&id=752bb34b ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_CheckIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("CheckIcon");

  var _component_CrossIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("CrossIcon");

  var _component_EditIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("EditIcon");

  var _directive_tooltip = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("tooltip");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [$props.leaveRequest.status == 'pending' || $props.leaveRequest.status == 'rejected' ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $options.statusChange('approved');
    }),
    "class": "btn btn-sm"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_CheckIcon)])), [[_directive_tooltip, _ctx.__('Accept Request')]]) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.leaveRequest.status == 'pending' || $props.leaveRequest.status == 'approved' ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $options.statusChange('rejected');
    }),
    "class": "btn btn-sm"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_CrossIcon)])), [[_directive_tooltip, _ctx.__('Reject Request')]]) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.leaveRequest.status == 'pending' ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 2,
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return $options.editData($props.leaveRequest.id);
    }),
    "class": "btn btn-sm"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_EditIcon)])), [[_directive_tooltip, _ctx.__('Edit')]]) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Pagination.vue?vue&type=template&id=7ed7fa14":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Pagination.vue?vue&type=template&id=7ed7fa14 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/company/leaveRequest/index.vue?vue&type=style&index=0&id=13c7b876&scoped=true&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/company/leaveRequest/index.vue?vue&type=style&index=0&id=13c7b876&scoped=true&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.avatar-img[data-v-13c7b876] {\r\n        height: 60px;\r\n        width: 60px;\r\n        -o-object-fit: cover;\r\n           object-fit: cover;\n}\n.leave-type-color[data-v-13c7b876] {\r\n        border-radius: 30px;\r\n        padding: 2px 5px;\r\n            font-weight: 500;\r\n        color: #fff;\n}\n.modal-dialog[data-v-13c7b876] {\r\n        max-width: 1000px !important;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/company/leaveRequest/index.vue?vue&type=style&index=0&id=13c7b876&scoped=true&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/company/leaveRequest/index.vue?vue&type=style&index=0&id=13c7b876&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_style_index_0_id_13c7b876_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=style&index=0&id=13c7b876&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/company/leaveRequest/index.vue?vue&type=style&index=0&id=13c7b876&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_style_index_0_id_13c7b876_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_style_index_0_id_13c7b876_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/Pages/company/leaveRequest/index.vue":
/*!***********************************************************!*\
  !*** ./resources/js/Pages/company/leaveRequest/index.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_13c7b876_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=13c7b876&scoped=true */ "./resources/js/Pages/company/leaveRequest/index.vue?vue&type=template&id=13c7b876&scoped=true");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./resources/js/Pages/company/leaveRequest/index.vue?vue&type=script&lang=js");
/* harmony import */ var _index_vue_vue_type_style_index_0_id_13c7b876_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=13c7b876&scoped=true&lang=css */ "./resources/js/Pages/company/leaveRequest/index.vue?vue&type=style&index=0&id=13c7b876&scoped=true&lang=css");
/* harmony import */ var C_xampp_htdocs_leave_management_system_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_leave_management_system_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_index_vue_vue_type_template_id_13c7b876_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-13c7b876"],['__file',"resources/js/Pages/company/leaveRequest/index.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Shared/Company/LeaveRequest/Status.vue":
/*!*************************************************************!*\
  !*** ./resources/js/Shared/Company/LeaveRequest/Status.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Status_vue_vue_type_template_id_752bb34b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Status.vue?vue&type=template&id=752bb34b */ "./resources/js/Shared/Company/LeaveRequest/Status.vue?vue&type=template&id=752bb34b");
/* harmony import */ var _Status_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Status.vue?vue&type=script&lang=js */ "./resources/js/Shared/Company/LeaveRequest/Status.vue?vue&type=script&lang=js");
/* harmony import */ var C_xampp_htdocs_leave_management_system_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_leave_management_system_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Status_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Status_vue_vue_type_template_id_752bb34b__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Shared/Company/LeaveRequest/Status.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Shared/Pagination.vue":
/*!********************************************!*\
  !*** ./resources/js/Shared/Pagination.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./resources/js/Pages/company/leaveRequest/index.vue?vue&type=script&lang=js":
/*!***********************************************************************************!*\
  !*** ./resources/js/Pages/company/leaveRequest/index.vue?vue&type=script&lang=js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/company/leaveRequest/index.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Shared/Company/LeaveRequest/Status.vue?vue&type=script&lang=js":
/*!*************************************************************************************!*\
  !*** ./resources/js/Shared/Company/LeaveRequest/Status.vue?vue&type=script&lang=js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Status_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Status_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Status.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Company/LeaveRequest/Status.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Shared/Pagination.vue?vue&type=script&lang=js":
/*!********************************************************************!*\
  !*** ./resources/js/Shared/Pagination.vue?vue&type=script&lang=js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Pagination_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Pagination_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Pagination.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Pagination.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/company/leaveRequest/index.vue?vue&type=template&id=13c7b876&scoped=true":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/Pages/company/leaveRequest/index.vue?vue&type=template&id=13c7b876&scoped=true ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_13c7b876_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_13c7b876_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=template&id=13c7b876&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/company/leaveRequest/index.vue?vue&type=template&id=13c7b876&scoped=true");


/***/ }),

/***/ "./resources/js/Shared/Company/LeaveRequest/Status.vue?vue&type=template&id=752bb34b":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Shared/Company/LeaveRequest/Status.vue?vue&type=template&id=752bb34b ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Status_vue_vue_type_template_id_752bb34b__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Status_vue_vue_type_template_id_752bb34b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Status.vue?vue&type=template&id=752bb34b */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Company/LeaveRequest/Status.vue?vue&type=template&id=752bb34b");


/***/ }),

/***/ "./resources/js/Shared/Pagination.vue?vue&type=template&id=7ed7fa14":
/*!**************************************************************************!*\
  !*** ./resources/js/Shared/Pagination.vue?vue&type=template&id=7ed7fa14 ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Pagination_vue_vue_type_template_id_7ed7fa14__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Pagination_vue_vue_type_template_id_7ed7fa14__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Pagination.vue?vue&type=template&id=7ed7fa14 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Pagination.vue?vue&type=template&id=7ed7fa14");


/***/ }),

/***/ "./resources/js/Pages/company/leaveRequest/index.vue?vue&type=style&index=0&id=13c7b876&scoped=true&lang=css":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/Pages/company/leaveRequest/index.vue?vue&type=style&index=0&id=13c7b876&scoped=true&lang=css ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_style_index_0_id_13c7b876_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=style&index=0&id=13c7b876&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/company/leaveRequest/index.vue?vue&type=style&index=0&id=13c7b876&scoped=true&lang=css");


/***/ })

}]);
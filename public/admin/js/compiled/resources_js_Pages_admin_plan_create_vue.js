"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_admin_plan_create_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/admin/plan/create.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/admin/plan/create.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      form: this.$inertia.form({
        name: null,
        type: "paid",
        price: null,
        interval: "monthly",
        custom_interval_days: 15,
        status: 1,
        // plan features
        is_limited_employee: 1,
        max_employees: 10,
        max_teams: 3,
        max_leave_types: 3,
        custom_theme_look: 0
      }),
      showCustomIntervalField: false,
      showMaxEmployeeField: true
    };
  },
  watch: {
    "form.interval": function formInterval(val) {
      if (val == "custom_days") {
        this.showCustomIntervalField = true;
      } else {
        this.showCustomIntervalField = false;
      }
    },
    "form.is_limited_employee": function formIs_limited_employee(val) {
      if (val == 1) {
        this.showMaxEmployeeField = true;
      } else {
        this.showMaxEmployeeField = false;
      }
    }
  },
  methods: {
    createData: function createData() {
      var _this = this;

      this.form.post(route("plans.store"), {
        onSuccess: function onSuccess() {
          return _this.form.reset();
        }
      });
    },
    statusChange: function statusChange(event) {
      this.form.status = event.target.checked;
    },
    customLookStatusChange: function customLookStatusChange(event) {
      this.form.custom_theme_lookup = event.target.checked;
    }
  },
  mounted: function mounted() {
    this.checkPagePermission('admin');
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/admin/plan/create.vue?vue&type=template&id=097238a9&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/admin/plan/create.vue?vue&type=template&id=097238a9&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-097238a9"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  "class": "row justify-content-center"
};
var _hoisted_2 = {
  "class": "col-12"
};
var _hoisted_3 = {
  "class": "card mt-3"
};
var _hoisted_4 = {
  "class": "card-header"
};
var _hoisted_5 = {
  "class": "d-flex justify-content-between"
};
var _hoisted_6 = {
  "class": "card-title"
};

var _hoisted_7 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fa-solid fa-arrow-left"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_8 = {
  "class": "card-body row justify-content-center"
};
var _hoisted_9 = {
  "class": "col-lg-6"
};
var _hoisted_10 = {
  "class": "mb-3 row"
};
var _hoisted_11 = {
  "class": "col-md-6"
};
var _hoisted_12 = ["placeholder"];
var _hoisted_13 = {
  "class": "col-md-6"
};
var _hoisted_14 = {
  value: "paid"
};
var _hoisted_15 = {
  value: "free"
};
var _hoisted_16 = {
  "class": "mb-3 row"
};
var _hoisted_17 = {
  "class": "col-lg-6"
};
var _hoisted_18 = ["placeholder"];
var _hoisted_19 = {
  "class": "col-md-6"
};
var _hoisted_20 = {
  value: "monthly"
};
var _hoisted_21 = {
  value: "yearly"
};
var _hoisted_22 = {
  value: "custom_days"
};
var _hoisted_23 = {
  value: "lifetime"
};
var _hoisted_24 = {
  "class": "mb-3 row"
};
var _hoisted_25 = {
  key: 0,
  "class": "col-md-6"
};
var _hoisted_26 = {
  "class": "col-md-6"
};

var _hoisted_27 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
  /* HOISTED */
  );
});

var _hoisted_28 = {
  "class": "switch"
};

var _hoisted_29 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "slider round"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_30 = {
  "class": "mt-2"
};
var _hoisted_31 = {
  "class": "mb-3 row"
};
var _hoisted_32 = {
  "class": "col-md-6"
};
var _hoisted_33 = {
  value: "1"
};
var _hoisted_34 = {
  value: "0"
};
var _hoisted_35 = {
  key: 0,
  "class": "col-md-6"
};
var _hoisted_36 = {
  "class": "col-md-6 my-2"
};
var _hoisted_37 = {
  "class": "col-md-6 my-2"
};

var _hoisted_38 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
  /* HOISTED */
  );
});

var _hoisted_39 = {
  "class": "switch"
};

var _hoisted_40 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "slider round"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_41 = ["disabled"];
var _hoisted_42 = {
  key: 1
};

var _hoisted_43 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fa-solid fa-check mr-1"
  }, null, -1
  /* HOISTED */
  );
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");

  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");

  var _component_Label = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Label");

  var _component_ErrorMessage = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ErrorMessage");

  var _component_Loading = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Loading");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, {
    title: _ctx.__('Plan Create')
  }, null, 8
  /* PROPS */
  , ["title"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Plan Create')), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: _ctx.route('plans.index'),
    "class": "btn btn-primary"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Back')), 1
      /* TEXT */
      )];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    onSubmit: _cache[13] || (_cache[13] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.createData && $options.createData.apply($options, arguments);
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Label, {
    name: _ctx.__('Name'),
    "for": "name"
  }, null, 8
  /* PROPS */
  , ["name"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.form.name = $event;
    }),
    type: "text",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["form-control", {
      'is-invalid': $data.form.errors.name
    }]),
    id: "name",
    placeholder: _ctx.__('Name')
  }, null, 10
  /* CLASS, PROPS */
  , _hoisted_12), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.name]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ErrorMessage, {
    name: $data.form.errors.name
  }, null, 8
  /* PROPS */
  , ["name"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Label, {
    name: _ctx.__('Plan Type')
  }, null, 8
  /* PROPS */
  , ["name"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["form-control", {
      'is-invalid': $data.form.errors.type
    }]),
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.form.type = $event;
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", _hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Paid')), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Free')), 1
  /* TEXT */
  )], 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.form.type]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ErrorMessage, {
    name: $data.form.errors.type
  }, null, 8
  /* PROPS */
  , ["name"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Label, {
    name: _ctx.__('Price'),
    "for": "price"
  }, null, 8
  /* PROPS */
  , ["name"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $data.form.price = $event;
    }),
    type: "text",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["form-control", {
      'is-invalid': $data.form.errors.price
    }]),
    placeholder: _ctx.__('Price'),
    id: "price"
  }, null, 10
  /* CLASS, PROPS */
  , _hoisted_18), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.price]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ErrorMessage, {
    name: $data.form.errors.price
  }, null, 8
  /* PROPS */
  , ["name"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Label, {
    name: _ctx.__('Subscription Type')
  }, null, 8
  /* PROPS */
  , ["name"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["form-control", {
      'is-invalid': $data.form.errors.interval
    }]),
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $data.form.interval = $event;
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", _hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Monthly')), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", _hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Yearly')), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", _hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Custom Days')), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", _hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Lifetime')), 1
  /* TEXT */
  )], 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.form.interval]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ErrorMessage, {
    name: $data.form.errors.interval
  }, null, 8
  /* PROPS */
  , ["name"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [$data.showCustomIntervalField ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Label, {
    name: _ctx.__('Number of Days')
  }, null, 8
  /* PROPS */
  , ["name"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $data.form.custom_interval_days = $event;
    }),
    type: "number",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["form-control", {
      'is-invalid': $data.form.errors.custom_interval_days
    }])
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.custom_interval_days]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ErrorMessage, {
    name: $data.form.errors.custom_interval_days
  }, null, 8
  /* PROPS */
  , ["name"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Label, {
    name: _ctx.__('Status'),
    required: false
  }, null, 8
  /* PROPS */
  , ["name"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), _hoisted_27, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    onChange: _cache[5] || (_cache[5] = function () {
      return $options.statusChange && $options.statusChange.apply($options, arguments);
    }),
    "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
      return $data.form.status = $event;
    }),
    type: "checkbox",
    "class": "success toggle-switch",
    checked: ""
  }, null, 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.status]]), _hoisted_29]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ErrorMessage, {
    name: $data.form.errors.status,
    className: "d-block"
  }, null, 8
  /* PROPS */
  , ["name"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", _hoisted_30, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Plan Features')), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Label, {
    name: _ctx.__('Employee Adding Type')
  }, null, 8
  /* PROPS */
  , ["name"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["form-control", {
      'is-invalid': $data.form.errors.is_limited_employee
    }]),
    "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
      return $data.form.is_limited_employee = $event;
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", _hoisted_33, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Limited Employee')), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", _hoisted_34, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Unlimited Employee')), 1
  /* TEXT */
  )], 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.form.is_limited_employee]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ErrorMessage, {
    name: $data.form.errors.interval
  }, null, 8
  /* PROPS */
  , ["name"])]), $data.showMaxEmployeeField ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_35, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Label, {
    name: _ctx.__('Max Employees')
  }, null, 8
  /* PROPS */
  , ["name"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
      return $data.form.max_employees = $event;
    }),
    type: "number",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["form-control", {
      'is-invalid': $data.form.errors.max_employees
    }]),
    min: "1"
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.max_employees]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ErrorMessage, {
    name: $data.form.errors.max_employees
  }, null, 8
  /* PROPS */
  , ["name"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_36, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Label, {
    name: _ctx.__('Max Teams')
  }, null, 8
  /* PROPS */
  , ["name"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
      return $data.form.max_teams = $event;
    }),
    type: "number",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["form-control", {
      'is-invalid': $data.form.errors.max_teams
    }]),
    min: "1"
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.max_teams]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ErrorMessage, {
    name: $data.form.errors.max_teams
  }, null, 8
  /* PROPS */
  , ["name"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_37, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Label, {
    name: _ctx.__('Max Leave Types')
  }, null, 8
  /* PROPS */
  , ["name"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[10] || (_cache[10] = function ($event) {
      return $data.form.max_leave_types = $event;
    }),
    type: "number",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["form-control", {
      'is-invalid': $data.form.errors.max_leave_types
    }]),
    min: "1"
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.max_leave_types]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ErrorMessage, {
    name: $data.form.errors.max_leave_types
  }, null, 8
  /* PROPS */
  , ["name"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["col-md-6", {
      'mt-2': !$data.showMaxEmployeeField
    }])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Label, {
    name: _ctx.__('Custom Theme Look'),
    required: false
  }, null, 8
  /* PROPS */
  , ["name"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), _hoisted_38, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_39, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    onChange: _cache[11] || (_cache[11] = function () {
      return $options.customLookStatusChange && $options.customLookStatusChange.apply($options, arguments);
    }),
    "onUpdate:modelValue": _cache[12] || (_cache[12] = function ($event) {
      return $data.form.custom_theme_look = $event;
    }),
    type: "checkbox",
    "class": "success toggle-switch",
    checked: ""
  }, null, 544
  /* HYDRATE_EVENTS, NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.custom_theme_look]]), _hoisted_40]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ErrorMessage, {
    name: $data.form.errors.custom_theme_look,
    className: "d-block"
  }, null, 8
  /* PROPS */
  , ["name"])], 2
  /* CLASS */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    disabled: $data.form.processing,
    type: "submit",
    "class": "btn btn-primary"
  }, [$data.form.processing ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Loading, {
    key: 0,
    message: "Saving..."
  })) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_42, [_hoisted_43, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Save')), 1
  /* TEXT */
  )]))], 8
  /* PROPS */
  , _hoisted_41)], 32
  /* HYDRATE_EVENTS */
  )])])])])])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/admin/plan/create.vue?vue&type=style&index=0&id=097238a9&scoped=true&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/admin/plan/create.vue?vue&type=style&index=0&id=097238a9&scoped=true&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.switch[data-v-097238a9] {\r\n        position: relative;\r\n        display: inline-block;\r\n        width: 35px;\r\n        height: 19px;\n}\r\n\r\n    /* Hide default HTML checkbox */\n.switch input[data-v-097238a9] {\r\n        display: none;\n}\r\n\r\n    /* The slider */\n.slider[data-v-097238a9] {\r\n        position: absolute;\r\n        cursor: pointer;\r\n        top: 0;\r\n        left: 0;\r\n        right: 0;\r\n        bottom: 0;\r\n        background-color: #ccc;\r\n        transition: .4s;\n}\n.slider[data-v-097238a9]:before {\r\n        position: absolute;\r\n        content: \"\";\r\n        height: 15px;\r\n        width: 15px;\r\n        left: 3px;\r\n        bottom: 2px;\r\n        background-color: white;\r\n        transition: .4s;\n}\ninput.success:checked+.slider[data-v-097238a9] {\r\n        background-color: #28a745;\n}\ninput:checked+.slider[data-v-097238a9]:before {\r\n        transform: translateX(15px);\n}\r\n\r\n    /* Rounded sliders */\n.slider.round[data-v-097238a9] {\r\n        border-radius: 34px;\n}\n.slider.round[data-v-097238a9]:before {\r\n        border-radius: 50%;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/admin/plan/create.vue?vue&type=style&index=0&id=097238a9&scoped=true&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/admin/plan/create.vue?vue&type=style&index=0&id=097238a9&scoped=true&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_create_vue_vue_type_style_index_0_id_097238a9_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./create.vue?vue&type=style&index=0&id=097238a9&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/admin/plan/create.vue?vue&type=style&index=0&id=097238a9&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_create_vue_vue_type_style_index_0_id_097238a9_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_create_vue_vue_type_style_index_0_id_097238a9_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/Pages/admin/plan/create.vue":
/*!**************************************************!*\
  !*** ./resources/js/Pages/admin/plan/create.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _create_vue_vue_type_template_id_097238a9_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.vue?vue&type=template&id=097238a9&scoped=true */ "./resources/js/Pages/admin/plan/create.vue?vue&type=template&id=097238a9&scoped=true");
/* harmony import */ var _create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.vue?vue&type=script&lang=js */ "./resources/js/Pages/admin/plan/create.vue?vue&type=script&lang=js");
/* harmony import */ var _create_vue_vue_type_style_index_0_id_097238a9_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create.vue?vue&type=style&index=0&id=097238a9&scoped=true&lang=css */ "./resources/js/Pages/admin/plan/create.vue?vue&type=style&index=0&id=097238a9&scoped=true&lang=css");
/* harmony import */ var C_xampp_htdocs_leave_management_system_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_leave_management_system_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_create_vue_vue_type_template_id_097238a9_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-097238a9"],['__file',"resources/js/Pages/admin/plan/create.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/admin/plan/create.vue?vue&type=script&lang=js":
/*!**************************************************************************!*\
  !*** ./resources/js/Pages/admin/plan/create.vue?vue&type=script&lang=js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./create.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/admin/plan/create.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/admin/plan/create.vue?vue&type=template&id=097238a9&scoped=true":
/*!********************************************************************************************!*\
  !*** ./resources/js/Pages/admin/plan/create.vue?vue&type=template&id=097238a9&scoped=true ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_create_vue_vue_type_template_id_097238a9_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_create_vue_vue_type_template_id_097238a9_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./create.vue?vue&type=template&id=097238a9&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/admin/plan/create.vue?vue&type=template&id=097238a9&scoped=true");


/***/ }),

/***/ "./resources/js/Pages/admin/plan/create.vue?vue&type=style&index=0&id=097238a9&scoped=true&lang=css":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/Pages/admin/plan/create.vue?vue&type=style&index=0&id=097238a9&scoped=true&lang=css ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_create_vue_vue_type_style_index_0_id_097238a9_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./create.vue?vue&type=style&index=0&id=097238a9&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/admin/plan/create.vue?vue&type=style&index=0&id=097238a9&scoped=true&lang=css");


/***/ })

}]);
"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_admin_setting_smtp_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/admin/setting/smtp.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/admin/setting/smtp.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  layout: "Setting",
  props: {
    data: Object
  },
  data: function data() {
    return {
      form: this.$inertia.form({
        type: this.data.type,
        host: this.data.host,
        port: this.data.port,
        password: this.data.password,
        username: this.data.username,
        encryption: this.data.encryption,
        from_name: this.data.from_name,
        from_address: this.data.from_address
      }),
      testMailForm: this.$inertia.form({
        email: ""
      })
    };
  },
  methods: {
    saveSetting: function saveSetting() {
      this.form.put(route("settings.smtp.update"));
    },
    testMailSend: function testMailSend() {
      var _this = this;

      this.testMailForm.post(route("settings.send.test.email"), {
        onSuccess: function onSuccess() {
          _this.form.reset();
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/admin/setting/smtp.vue?vue&type=template&id=0632203e&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/admin/setting/smtp.vue?vue&type=template&id=0632203e&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-0632203e"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  "class": "row pt-5"
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
  "class": "card-title line-height-36"
};
var _hoisted_6 = {
  "class": "card-body"
};
var _hoisted_7 = {
  "class": "row"
};
var _hoisted_8 = {
  "class": "col-6"
};
var _hoisted_9 = {
  "class": "mb-3"
};

var _hoisted_10 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    disabled: "",
    type: "text",
    "class": "form-control",
    id: "driver",
    value: "smtp",
    name: "driver"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_11 = {
  "class": "col-6"
};
var _hoisted_12 = {
  "class": "mb-3"
};
var _hoisted_13 = {
  "class": "col-6"
};
var _hoisted_14 = {
  "class": "mb-3"
};

var _hoisted_15 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    value: "587"
  }, "587", -1
  /* HOISTED */
  );
});

var _hoisted_16 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    value: "465"
  }, "465", -1
  /* HOISTED */
  );
});

var _hoisted_17 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    value: "25"
  }, "25", -1
  /* HOISTED */
  );
});

var _hoisted_18 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    value: "2525"
  }, "2525", -1
  /* HOISTED */
  );
});

var _hoisted_19 = [_hoisted_15, _hoisted_16, _hoisted_17, _hoisted_18];
var _hoisted_20 = {
  "class": "col-6"
};
var _hoisted_21 = {
  "class": "mb-3"
};
var _hoisted_22 = {
  "class": "col-6"
};
var _hoisted_23 = {
  "class": "mb-3"
};
var _hoisted_24 = {
  "class": "col-6"
};
var _hoisted_25 = {
  "class": "mb-3"
};

var _hoisted_26 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    value: "tls"
  }, "TLS", -1
  /* HOISTED */
  );
});

var _hoisted_27 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    value: "ssl"
  }, "SSL", -1
  /* HOISTED */
  );
});

var _hoisted_28 = [_hoisted_26, _hoisted_27];
var _hoisted_29 = {
  "class": "col-6"
};
var _hoisted_30 = {
  "class": "mb-3"
};
var _hoisted_31 = {
  "class": "col-6"
};
var _hoisted_32 = {
  "class": "mb-3"
};
var _hoisted_33 = {
  "class": "mx-auto"
};
var _hoisted_34 = {
  "class": "text-center"
};
var _hoisted_35 = ["disabled"];
var _hoisted_36 = {
  key: 1
};

var _hoisted_37 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fa-solid fa-check mr-1"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_38 = {
  "class": "card mt-3"
};
var _hoisted_39 = {
  "class": "card-header"
};
var _hoisted_40 = {
  "class": "card-title"
};
var _hoisted_41 = {
  "class": "card-body"
};
var _hoisted_42 = {
  "class": "d-flex justify-content-center"
};
var _hoisted_43 = {
  "class": "form-group mx-sm-3 mb-2"
};
var _hoisted_44 = ["disabled"];
var _hoisted_45 = {
  key: 1
};

var _hoisted_46 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fa-solid fa-check mr-1"
  }, null, -1
  /* HOISTED */
  );
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");

  var _component_Label = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Label");

  var _component_ErrorMessage = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ErrorMessage");

  var _component_Loading = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Loading");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, {
    title: _ctx.__('SMTP')
  }, null, 8
  /* PROPS */
  , ["title"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Mail Settings')), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    onSubmit: _cache[7] || (_cache[7] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.saveSetting && $options.saveSetting.apply($options, arguments);
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Label, {
    name: _ctx.__('Mail Driver')
  }, null, 8
  /* PROPS */
  , ["name"]), _hoisted_10])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Label, {
    name: _ctx.__('Mail Host')
  }, null, 8
  /* PROPS */
  , ["name"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.form.host = $event;
    }),
    type: "text",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["form-control", {
      'is-invalid': $data.form.errors.host
    }])
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.host]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ErrorMessage, {
    name: $data.form.errors.host
  }, null, 8
  /* PROPS */
  , ["name"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Label, {
    name: _ctx.__('Mail Port')
  }, null, 8
  /* PROPS */
  , ["name"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $data.form.port = $event;
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["form-control", {
      'is-invalid': $data.form.errors.port
    }])
  }, _hoisted_19, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.form.port]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ErrorMessage, {
    name: $data.form.errors.port
  }, null, 8
  /* PROPS */
  , ["name"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Label, {
    name: _ctx.__('Mail Username')
  }, null, 8
  /* PROPS */
  , ["name"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $data.form.username = $event;
    }),
    type: "text",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["form-control", {
      'is-invalid': $data.form.errors.username
    }])
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.username]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ErrorMessage, {
    name: $data.form.errors.username
  }, null, 8
  /* PROPS */
  , ["name"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Label, {
    name: _ctx.__('Mail Password')
  }, null, 8
  /* PROPS */
  , ["name"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $data.form.password = $event;
    }),
    type: "text",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["form-control", {
      'is-invalid': $data.form.errors.password
    }])
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.password]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ErrorMessage, {
    name: $data.form.errors.password
  }, null, 8
  /* PROPS */
  , ["name"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Label, {
    name: _ctx.__('Mail Encryption')
  }, null, 8
  /* PROPS */
  , ["name"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $data.form.encryption = $event;
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["form-control", {
      'is-invalid': $data.form.errors.encryption
    }])
  }, _hoisted_28, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.form.encryption]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ErrorMessage, {
    name: $data.form.errors.encryption
  }, null, 8
  /* PROPS */
  , ["name"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Label, {
    name: _ctx.__('Mail From Address')
  }, null, 8
  /* PROPS */
  , ["name"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return $data.form.from_address = $event;
    }),
    type: "email",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["form-control", {
      'is-invalid': $data.form.errors.from_address
    }])
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.from_address]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ErrorMessage, {
    name: $data.form.errors.from_address
  }, null, 8
  /* PROPS */
  , ["name"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Label, {
    name: _ctx.__('Mail From Name')
  }, null, 8
  /* PROPS */
  , ["name"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
      return $data.form.from_name = $event;
    }),
    type: "text",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["form-control", {
      'is-invalid': $data.form.errors.from_name
    }])
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.from_name]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ErrorMessage, {
    name: $data.form.errors.from_name
  }, null, 8
  /* PROPS */
  , ["name"])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_34, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    disabled: $data.form.processing,
    type: "submit",
    "class": "btn btn-primary"
  }, [$data.form.processing ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Loading, {
    key: 0,
    message: "Saving..."
  })) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_36, [_hoisted_37, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Save')), 1
  /* TEXT */
  )]))], 8
  /* PROPS */
  , _hoisted_35)])])], 32
  /* HYDRATE_EVENTS */
  )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_38, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_39, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", _hoisted_40, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Send Test Mail')), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_41, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    onSubmit: _cache[10] || (_cache[10] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.testMailSend && $options.testMailSend.apply($options, arguments);
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_42, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_43, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
      return $data.testMailForm.email = $event;
    }),
    type: "email",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["form-control mail-address-width", {
      'is-invalid': $data.testMailForm.errors.email
    }])
  }, null, 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.testMailForm.email]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ErrorMessage, {
    name: $data.testMailForm.errors.email
  }, null, 8
  /* PROPS */
  , ["name"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[9] || (_cache[9] = function () {
      return $options.testMailSend && $options.testMailSend.apply($options, arguments);
    }),
    disabled: $data.testMailForm.processing,
    type: "submit",
    "class": "btn btn-primary mb-2"
  }, [$data.testMailForm.processing ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Loading, {
    key: 0,
    message: "Sending..."
  })) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_45, [_hoisted_46, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Send Email')), 1
  /* TEXT */
  )]))], 8
  /* PROPS */
  , _hoisted_44)])], 32
  /* HYDRATE_EVENTS */
  )])])])])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/admin/setting/smtp.vue?vue&type=style&index=0&id=0632203e&scoped=true&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/admin/setting/smtp.vue?vue&type=style&index=0&id=0632203e&scoped=true&lang=css ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.mail-address-width[data-v-0632203e] {\r\n        min-width: 400px;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/admin/setting/smtp.vue?vue&type=style&index=0&id=0632203e&scoped=true&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/admin/setting/smtp.vue?vue&type=style&index=0&id=0632203e&scoped=true&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_smtp_vue_vue_type_style_index_0_id_0632203e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./smtp.vue?vue&type=style&index=0&id=0632203e&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/admin/setting/smtp.vue?vue&type=style&index=0&id=0632203e&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_smtp_vue_vue_type_style_index_0_id_0632203e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_smtp_vue_vue_type_style_index_0_id_0632203e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/Pages/admin/setting/smtp.vue":
/*!***************************************************!*\
  !*** ./resources/js/Pages/admin/setting/smtp.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _smtp_vue_vue_type_template_id_0632203e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./smtp.vue?vue&type=template&id=0632203e&scoped=true */ "./resources/js/Pages/admin/setting/smtp.vue?vue&type=template&id=0632203e&scoped=true");
/* harmony import */ var _smtp_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./smtp.vue?vue&type=script&lang=js */ "./resources/js/Pages/admin/setting/smtp.vue?vue&type=script&lang=js");
/* harmony import */ var _smtp_vue_vue_type_style_index_0_id_0632203e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./smtp.vue?vue&type=style&index=0&id=0632203e&scoped=true&lang=css */ "./resources/js/Pages/admin/setting/smtp.vue?vue&type=style&index=0&id=0632203e&scoped=true&lang=css");
/* harmony import */ var C_xampp_htdocs_leave_management_system_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_leave_management_system_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_smtp_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_smtp_vue_vue_type_template_id_0632203e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-0632203e"],['__file',"resources/js/Pages/admin/setting/smtp.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/admin/setting/smtp.vue?vue&type=script&lang=js":
/*!***************************************************************************!*\
  !*** ./resources/js/Pages/admin/setting/smtp.vue?vue&type=script&lang=js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_smtp_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_smtp_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./smtp.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/admin/setting/smtp.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/admin/setting/smtp.vue?vue&type=template&id=0632203e&scoped=true":
/*!*********************************************************************************************!*\
  !*** ./resources/js/Pages/admin/setting/smtp.vue?vue&type=template&id=0632203e&scoped=true ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_smtp_vue_vue_type_template_id_0632203e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_smtp_vue_vue_type_template_id_0632203e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./smtp.vue?vue&type=template&id=0632203e&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/admin/setting/smtp.vue?vue&type=template&id=0632203e&scoped=true");


/***/ }),

/***/ "./resources/js/Pages/admin/setting/smtp.vue?vue&type=style&index=0&id=0632203e&scoped=true&lang=css":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/Pages/admin/setting/smtp.vue?vue&type=style&index=0&id=0632203e&scoped=true&lang=css ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_smtp_vue_vue_type_style_index_0_id_0632203e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./smtp.vue?vue&type=style&index=0&id=0632203e&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/admin/setting/smtp.vue?vue&type=style&index=0&id=0632203e&scoped=true&lang=css");


/***/ })

}]);
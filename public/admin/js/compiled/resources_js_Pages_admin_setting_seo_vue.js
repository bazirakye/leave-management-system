"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_admin_setting_seo_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/admin/setting/seo.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/admin/setting/seo.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  layout: "Setting",
  props: {
    seo_data: Array
  },
  data: function data() {
    return {
      showModal: false,
      form: this.$inertia.form({
        id: '',
        page_name: '',
        title: '',
        description: '',
        keywords: ''
      })
    };
  },
  methods: {
    editContent: function editContent(seo) {
      this.form.id = seo.id;
      this.form.page_name = seo.page_name;
      this.form.title = seo.title;
      this.form.description = seo.description;
      this.form.keywords = seo.keywords;
      this.showModal = true;
    },
    saveData: function saveData() {
      var _this = this;

      this.form.put(route('settings.seo.update', this.form.id), {
        onSuccess: function onSuccess() {
          _this.showModal = false;
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/admin/setting/seo.vue?vue&type=template&id=5d83d425&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/admin/setting/seo.vue?vue&type=template&id=5d83d425&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-5d83d425"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
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
  "class": "card-title"
};
var _hoisted_6 = {
  "class": "card-body table-responsive p-0"
};
var _hoisted_7 = {
  id: "customers-table",
  "class": "table",
  role: "grid"
};
var _hoisted_8 = {
  role: "row"
};
var _hoisted_9 = {
  width: "25%"
};
var _hoisted_10 = {
  width: "5%"
};
var _hoisted_11 = {
  "class": "sorting_1"
};
var _hoisted_12 = {
  "class": "mb-2"
};
var _hoisted_13 = {
  "class": "mb-2"
};
var _hoisted_14 = ["onClick"];
var _hoisted_15 = {
  key: 0
};
var _hoisted_16 = {
  "class": "modal-mask"
};
var _hoisted_17 = {
  "class": "modal-wrapper"
};
var _hoisted_18 = {
  "class": "modal-dialog",
  role: "document"
};
var _hoisted_19 = {
  "class": "modal-content"
};
var _hoisted_20 = {
  "class": "modal-header"
};
var _hoisted_21 = {
  "class": "modal-title"
};
var _hoisted_22 = {
  type: "button",
  "class": "close",
  "data-dismiss": "modal",
  "aria-label": "Close"
};
var _hoisted_23 = {
  "class": "modal-body"
};
var _hoisted_24 = {
  "class": "mb-3 row"
};
var _hoisted_25 = {
  "class": "form-group col-md-12"
};
var _hoisted_26 = ["placeholder"];
var _hoisted_27 = {
  "class": "form-group col-md-12"
};
var _hoisted_28 = ["placeholder"];
var _hoisted_29 = {
  "class": "form-group col-md-12"
};
var _hoisted_30 = ["placeholder"];
var _hoisted_31 = {
  type: "submit",
  "class": "btn btn-primary"
};
var _hoisted_32 = {
  key: 1
};

var _hoisted_33 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fa-solid fa-check mr-1"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_34 = {
  "class": "modal-footer"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");

  var _component_EditIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("EditIcon");

  var _component_Label = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Label");

  var _component_ErrorMessage = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ErrorMessage");

  var _component_Loading = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Loading");

  var _directive_tooltip = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("tooltip");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, {
    title: _ctx.__('SEO')
  }, null, 8
  /* PROPS */
  , ["title"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('SEO')), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Page Name')), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('SEO Content')), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Action')), 1
  /* TEXT */
  )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.seo_data, function (seo) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      role: "row",
      "class": "odd",
      key: seo.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(seo.page_name), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Meta Title')) + ": ", 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(seo.title), 1
    /* TEXT */
    )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Meta Description')) + ": ", 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(seo.description), 1
    /* TEXT */
    )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Meta Keywords')) + ": ", 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(seo.keywords), 1
    /* TEXT */
    )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      onClick: function onClick($event) {
        return $options.editContent(seo);
      },
      type: "button",
      "class": "btn btn-sm pl-0"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_EditIcon)], 8
    /* PROPS */
    , _hoisted_14)), [[_directive_tooltip, _ctx.__('Edit')]])])]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Details Holiday Modal  "), $data.showModal ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
    name: "fade"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", _hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.form.page_name) + " - " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('SEO')), 1
      /* TEXT */
      ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "aria-hidden": "true",
        onClick: _cache[0] || (_cache[0] = function ($event) {
          return $data.showModal = false;
        })
      }, "×")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
        onSubmit: _cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
          return $options.saveData && $options.saveData.apply($options, arguments);
        }, ["prevent"]))
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Label, {
        name: _ctx.__('Title'),
        "for": "title"
      }, null, 8
      /* PROPS */
      , ["name"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
          return $data.form.title = $event;
        }),
        type: "text",
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["form-control", {
          'is-invalid': $data.form.errors.title
        }]),
        id: "title",
        placeholder: _ctx.__('Name')
      }, null, 10
      /* CLASS, PROPS */
      , _hoisted_26), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.title]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ErrorMessage, {
        name: $data.form.errors.title
      }, null, 8
      /* PROPS */
      , ["name"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Label, {
        name: _ctx.__('Keywords'),
        "for": "email"
      }, null, 8
      /* PROPS */
      , ["name"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
          return $data.form.keywords = $event;
        }),
        type: "text",
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["form-control", {
          'is-invalid': $data.form.errors.keywords
        }]),
        id: "title",
        placeholder: _ctx.__('Keywords')
      }, null, 10
      /* CLASS, PROPS */
      , _hoisted_28), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.keywords]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ErrorMessage, {
        name: $data.form.errors.keywords
      }, null, 8
      /* PROPS */
      , ["name"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Label, {
        name: _ctx.__('Description'),
        "for": "email"
      }, null, 8
      /* PROPS */
      , ["name"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
        "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
          return $data.form.description = $event;
        }),
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["form-control", {
          'is-invalid': $data.form.errors.description
        }]),
        rows: "5",
        placeholder: _ctx.__('Description')
      }, null, 10
      /* CLASS, PROPS */
      , _hoisted_30), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.form.description]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ErrorMessage, {
        name: $data.form.errors.description
      }, null, 8
      /* PROPS */
      , ["name"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", _hoisted_31, [$data.form.processing ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Loading, {
        key: 0,
        message: "Saving..."
      })) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_32, [_hoisted_33, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Save')), 1
      /* TEXT */
      )]))])], 32
      /* HYDRATE_EVENTS */
      )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_34, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        type: "button",
        "class": "btn btn-secondary",
        onClick: _cache[5] || (_cache[5] = function ($event) {
          return $data.showModal = false;
        })
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Close')), 1
      /* TEXT */
      )])])])])])];
    }),
    _: 1
    /* STABLE */

  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/admin/setting/seo.vue?vue&type=style&index=0&id=5d83d425&scoped=true&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/admin/setting/seo.vue?vue&type=style&index=0&id=5d83d425&scoped=true&lang=css ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.modal-content[data-v-5d83d425] {\r\n    width: 800px !important;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/admin/setting/seo.vue?vue&type=style&index=0&id=5d83d425&scoped=true&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/admin/setting/seo.vue?vue&type=style&index=0&id=5d83d425&scoped=true&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_seo_vue_vue_type_style_index_0_id_5d83d425_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./seo.vue?vue&type=style&index=0&id=5d83d425&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/admin/setting/seo.vue?vue&type=style&index=0&id=5d83d425&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_seo_vue_vue_type_style_index_0_id_5d83d425_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_seo_vue_vue_type_style_index_0_id_5d83d425_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/Pages/admin/setting/seo.vue":
/*!**************************************************!*\
  !*** ./resources/js/Pages/admin/setting/seo.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _seo_vue_vue_type_template_id_5d83d425_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./seo.vue?vue&type=template&id=5d83d425&scoped=true */ "./resources/js/Pages/admin/setting/seo.vue?vue&type=template&id=5d83d425&scoped=true");
/* harmony import */ var _seo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./seo.vue?vue&type=script&lang=js */ "./resources/js/Pages/admin/setting/seo.vue?vue&type=script&lang=js");
/* harmony import */ var _seo_vue_vue_type_style_index_0_id_5d83d425_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./seo.vue?vue&type=style&index=0&id=5d83d425&scoped=true&lang=css */ "./resources/js/Pages/admin/setting/seo.vue?vue&type=style&index=0&id=5d83d425&scoped=true&lang=css");
/* harmony import */ var C_xampp_htdocs_leave_management_system_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_leave_management_system_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_seo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_seo_vue_vue_type_template_id_5d83d425_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-5d83d425"],['__file',"resources/js/Pages/admin/setting/seo.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/admin/setting/seo.vue?vue&type=script&lang=js":
/*!**************************************************************************!*\
  !*** ./resources/js/Pages/admin/setting/seo.vue?vue&type=script&lang=js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_seo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_seo_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./seo.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/admin/setting/seo.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/admin/setting/seo.vue?vue&type=template&id=5d83d425&scoped=true":
/*!********************************************************************************************!*\
  !*** ./resources/js/Pages/admin/setting/seo.vue?vue&type=template&id=5d83d425&scoped=true ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_seo_vue_vue_type_template_id_5d83d425_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_seo_vue_vue_type_template_id_5d83d425_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./seo.vue?vue&type=template&id=5d83d425&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/admin/setting/seo.vue?vue&type=template&id=5d83d425&scoped=true");


/***/ }),

/***/ "./resources/js/Pages/admin/setting/seo.vue?vue&type=style&index=0&id=5d83d425&scoped=true&lang=css":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/Pages/admin/setting/seo.vue?vue&type=style&index=0&id=5d83d425&scoped=true&lang=css ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_seo_vue_vue_type_style_index_0_id_5d83d425_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./seo.vue?vue&type=style&index=0&id=5d83d425&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/admin/setting/seo.vue?vue&type=style&index=0&id=5d83d425&scoped=true&lang=css");


/***/ })

}]);
"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_admin_setting_language_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/admin/setting/language/index.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/admin/setting/language/index.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  layout: 'Setting',
  props: {
    languages: Array,
    langInfos: Array,
    defaultLanguage: Number
  },
  data: function data() {
    return {
      isEditMode: false,
      selectedId: "",
      default_language: this.defaultLanguage,
      languageStatus: false,
      form: this.$inertia.form({
        name: "",
        code: "",
        status: true
      })
    };
  },
  methods: {
    saveData: function saveData() {
      this.isEditMode ? this.updateData() : this.createData();
    },
    createData: function createData() {
      var _this = this;

      this.form.post(route("languages.store"), {
        onSuccess: function onSuccess() {
          return _this.form.reset();
        }
      });
    },
    editLanguage: function editLanguage(language) {
      this.isEditMode = true;
      this.selectedId = language.id;
      this.form.name = language.name;
      this.form.code = language.code;
    },
    cancelEdit: function cancelEdit() {
      this.isEditMode = false;
      this.form.reset();
    },
    updateData: function updateData() {
      var _this2 = this;

      this.form.put(route("languages.update", this.selectedId), {
        onSuccess: function onSuccess() {
          _this2.isEditMode = false;

          _this2.form.reset();
        }
      });
    },
    deleteData: function deleteData(id) {
      var _this3 = this;

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
          _this3.$inertia["delete"](route("languages.destroy", id));
        }
      });
    },
    languageStatusUpdate: function languageStatusUpdate(id) {
      this.$inertia.put(route("languages.status.update", id));
    },
    statusChange: function statusChange(event) {
      this.form.status = event.target.checked;
    },
    setDefaultLanguage: function setDefaultLanguage() {
      this.$inertia.put(route("languages.set.default", this.default_language));
    },
    languageAutoComplete: function languageAutoComplete() {
      var objects = Object.keys(this.langInfos);

      for (var i = 0; i < objects.length; i++) {
        if (this.langInfos[objects[i]]['name'] == this.form.name) {
          this.form.code = this.langInfos[objects[i]]['code'];
        }
      }
    }
  },
  mounted: function mounted() {
    this.checkPagePermission('admin');
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/admin/setting/language/index.vue?vue&type=template&id=66a5ba7a&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/admin/setting/language/index.vue?vue&type=template&id=66a5ba7a&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-66a5ba7a"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  "class": "row"
};
var _hoisted_2 = {
  "class": "col-6"
};
var _hoisted_3 = {
  "class": "d-flex align-items-center mb-1 mt-3"
};
var _hoisted_4 = {
  "class": "form-row"
};
var _hoisted_5 = {
  "class": "col-auto"
};
var _hoisted_6 = {
  "for": "",
  "class": "mr-sm-2"
};
var _hoisted_7 = ["value"];
var _hoisted_8 = {
  "class": "col-auto pt-30"
};
var _hoisted_9 = {
  "class": "row justify-content-center"
};
var _hoisted_10 = {
  "class": "col-8"
};
var _hoisted_11 = {
  "class": "card mt-3"
};
var _hoisted_12 = {
  "class": "card-header"
};
var _hoisted_13 = {
  "class": "d-flex justify-content-between"
};
var _hoisted_14 = {
  "class": "card-body table-responsive p-0"
};
var _hoisted_15 = {
  "class": "table table-valign-middle"
};
var _hoisted_16 = {
  key: 0,
  "class": "badge badge-primary"
};
var _hoisted_17 = {
  "class": "switch"
};
var _hoisted_18 = ["onChange", "checked"];

var _hoisted_19 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "slider round"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_20 = {
  "class": "d-flex"
};

var _hoisted_21 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fa-solid fa-cog fa-2x text-secondary"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_22 = ["onClick"];
var _hoisted_23 = ["onClick"];
var _hoisted_24 = {
  key: 1
};
var _hoisted_25 = {
  colspan: "5",
  "class": "text-center"
};
var _hoisted_26 = {
  "class": "col-4"
};
var _hoisted_27 = {
  "class": "card mt-3"
};
var _hoisted_28 = {
  "class": "card-header"
};
var _hoisted_29 = {
  "class": "d-flex justify-content-between"
};
var _hoisted_30 = {
  key: 0
};
var _hoisted_31 = {
  key: 1
};
var _hoisted_32 = {
  "class": "card-body"
};
var _hoisted_33 = {
  "class": "mb-3"
};
var _hoisted_34 = {
  value: "",
  "class": "d-none"
};
var _hoisted_35 = ["value"];
var _hoisted_36 = {
  "class": "mb-3"
};
var _hoisted_37 = {
  value: "",
  "class": "d-none"
};
var _hoisted_38 = ["value"];
var _hoisted_39 = {
  "class": "mb-3"
};

var _hoisted_40 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1
  /* HOISTED */
  );
});

var _hoisted_41 = {
  "class": "switch"
};

var _hoisted_42 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "slider round"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_43 = ["disabled"];
var _hoisted_44 = {
  key: 1
};

var _hoisted_45 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fa-solid fa-check mr-1"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_46 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "fa-solid fa-times"
  }, null, -1
  /* HOISTED */
  );
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");

  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");

  var _component_EditIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("EditIcon");

  var _component_DeleteIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("DeleteIcon");

  var _component_Label = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Label");

  var _component_ErrorMessage = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ErrorMessage");

  var _component_Loading = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Loading");

  var _directive_tooltip = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("tooltip");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, {
    title: _ctx.__('Language List')
  }, null, 8
  /* PROPS */
  , ["title"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Set Default Language')), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "class": "custom-select mr-sm-2",
    id: "inlineFormCustomSelect",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.default_language = $event;
    })
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.languages, function (language) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      key: language.id,
      value: language.id
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(language.name), 9
    /* TEXT, PROPS */
    , _hoisted_7);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.default_language]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[1] || (_cache[1] = function () {
      return $options.setDefaultLanguage && $options.setDefaultLanguage.apply($options, arguments);
    }),
    type: "button",
    "class": "btn btn-primary"
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Save')), 1
  /* TEXT */
  )])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Language List')), 1
  /* TEXT */
  )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Name')), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Code')), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Status')), 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Action')), 1
  /* TEXT */
  )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [$props.languages && $props.languages.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    key: 0
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.languages, function (language, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
      key: index
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(language.name) + " ", 1
    /* TEXT */
    ), language.id == $props.defaultLanguage ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Default')), 1
    /* TEXT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(language.code), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
      onChange: function onChange($event) {
        return $options.languageStatusUpdate(language.id);
      },
      type: "checkbox",
      "class": "success toggle-switch",
      checked: language.status
    }, null, 40
    /* PROPS, HYDRATE_EVENTS */
    , _hoisted_18), _hoisted_19])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Link, {
      href: _ctx.route('languages.translation.edit', language.id),
      "class": "btn btn-sm pl-0"
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [_hoisted_21];
      }),
      _: 2
      /* DYNAMIC */

    }, 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["href"])), [[_directive_tooltip, _ctx.__('Translate Language')]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      onClick: function onClick($event) {
        return $options.editLanguage(language);
      },
      "class": "btn btn-sm"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_EditIcon)], 8
    /* PROPS */
    , _hoisted_22)), [[_directive_tooltip, _ctx.__('Language Edit')]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      onClick: function onClick($event) {
        return $options.deleteData(language.id);
      },
      "class": "btn btn-sm"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_DeleteIcon)], 8
    /* PROPS */
    , _hoisted_23)), [[_directive_tooltip, _ctx.__('Language Delete')]])])]);
  }), 128
  /* KEYED_FRAGMENT */
  )) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('No Data Found')), 1
  /* TEXT */
  )])]))])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_29, [!$data.isEditMode ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_30, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Language Create')), 1
  /* TEXT */
  )) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_31, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Language Edit')), 1
  /* TEXT */
  ))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    onSubmit: _cache[8] || (_cache[8] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $options.saveData && $options.saveData.apply($options, arguments);
    }, ["prevent"]))
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Label, {
    name: _ctx.__('Name')
  }, null, 8
  /* PROPS */
  , ["name"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["form-control", {
      'is-invalid': $data.form.errors.name
    }]),
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $data.form.name = $event;
    }),
    onChange: _cache[3] || (_cache[3] = function () {
      return $options.languageAutoComplete && $options.languageAutoComplete.apply($options, arguments);
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", _hoisted_34, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Select Language')), 1
  /* TEXT */
  ), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.langInfos, function (langInfo, key) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      key: key,
      value: langInfo['name']
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(langInfo['name']), 9
    /* TEXT, PROPS */
    , _hoisted_35);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 34
  /* CLASS, HYDRATE_EVENTS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.form.name]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ErrorMessage, {
    name: $data.form.errors.name
  }, null, 8
  /* PROPS */
  , ["name"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_36, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Label, {
    name: _ctx.__('Code')
  }, null, 8
  /* PROPS */
  , ["name"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["form-control", {
      'is-invalid': $data.form.errors.code
    }]),
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $data.form.code = $event;
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", _hoisted_37, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Select Language Code')), 1
  /* TEXT */
  ), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.langInfos, function (langInfo, key) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      key: key,
      value: key
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(key), 9
    /* TEXT, PROPS */
    , _hoisted_38);
  }), 128
  /* KEYED_FRAGMENT */
  ))], 2
  /* CLASS */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.form.code]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ErrorMessage, {
    name: $data.form.errors.code
  }, null, 8
  /* PROPS */
  , ["name"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_39, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Label, {
    name: _ctx.__('Status'),
    required: false
  }, null, 8
  /* PROPS */
  , ["name"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(), _hoisted_40, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_41, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
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
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $data.form.status]]), _hoisted_42])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    disabled: $data.form.processing,
    type: "submit",
    "class": "btn btn-primary"
  }, [$data.form.processing ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Loading, {
    key: 0,
    message: "Saving..."
  })) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_44, [_hoisted_45, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Save')), 1
  /* TEXT */
  )]))], 8
  /* PROPS */
  , _hoisted_43), $data.isEditMode ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    onClick: _cache[7] || (_cache[7] = function () {
      return $options.cancelEdit && $options.cancelEdit.apply($options, arguments);
    }),
    type: "button",
    "class": "btn btn-danger ml-2"
  }, [_hoisted_46, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Cancel')), 1
  /* TEXT */
  )])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 32
  /* HYDRATE_EVENTS */
  )])])])])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/admin/setting/language/index.vue?vue&type=style&index=0&id=66a5ba7a&scoped=true&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/admin/setting/language/index.vue?vue&type=style&index=0&id=66a5ba7a&scoped=true&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.switch[data-v-66a5ba7a] {\r\n        position: relative;\r\n        display: inline-block;\r\n        width: 35px;\r\n        height: 19px;\n}\r\n\r\n    /* Hide default HTML checkbox */\n.switch input[data-v-66a5ba7a] {\r\n        display: none;\n}\r\n\r\n    /* The slider */\n.slider[data-v-66a5ba7a] {\r\n        position: absolute;\r\n        cursor: pointer;\r\n        top: 0;\r\n        left: 0;\r\n        right: 0;\r\n        bottom: 0;\r\n        background-color: #ccc;\r\n        transition: .4s;\n}\n.slider[data-v-66a5ba7a]:before {\r\n        position: absolute;\r\n        content: \"\";\r\n        height: 15px;\r\n        width: 15px;\r\n        left: 3px;\r\n        bottom: 2px;\r\n        background-color: white;\r\n        transition: .4s;\n}\ninput.success:checked+.slider[data-v-66a5ba7a] {\r\n        background-color: #28a745;\n}\ninput:checked+.slider[data-v-66a5ba7a]:before {\r\n        transform: translateX(15px);\n}\r\n\r\n    /* Rounded sliders */\n.slider.round[data-v-66a5ba7a] {\r\n        border-radius: 34px;\n}\n.slider.round[data-v-66a5ba7a]:before {\r\n        border-radius: 50%;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/admin/setting/language/index.vue?vue&type=style&index=0&id=66a5ba7a&scoped=true&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/admin/setting/language/index.vue?vue&type=style&index=0&id=66a5ba7a&scoped=true&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_style_index_0_id_66a5ba7a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=style&index=0&id=66a5ba7a&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/admin/setting/language/index.vue?vue&type=style&index=0&id=66a5ba7a&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_style_index_0_id_66a5ba7a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_style_index_0_id_66a5ba7a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/Pages/admin/setting/language/index.vue":
/*!*************************************************************!*\
  !*** ./resources/js/Pages/admin/setting/language/index.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_66a5ba7a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=66a5ba7a&scoped=true */ "./resources/js/Pages/admin/setting/language/index.vue?vue&type=template&id=66a5ba7a&scoped=true");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./resources/js/Pages/admin/setting/language/index.vue?vue&type=script&lang=js");
/* harmony import */ var _index_vue_vue_type_style_index_0_id_66a5ba7a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=66a5ba7a&scoped=true&lang=css */ "./resources/js/Pages/admin/setting/language/index.vue?vue&type=style&index=0&id=66a5ba7a&scoped=true&lang=css");
/* harmony import */ var C_xampp_htdocs_leave_management_system_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_leave_management_system_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_index_vue_vue_type_template_id_66a5ba7a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-66a5ba7a"],['__file',"resources/js/Pages/admin/setting/language/index.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/admin/setting/language/index.vue?vue&type=script&lang=js":
/*!*************************************************************************************!*\
  !*** ./resources/js/Pages/admin/setting/language/index.vue?vue&type=script&lang=js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/admin/setting/language/index.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/admin/setting/language/index.vue?vue&type=template&id=66a5ba7a&scoped=true":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/Pages/admin/setting/language/index.vue?vue&type=template&id=66a5ba7a&scoped=true ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_66a5ba7a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_template_id_66a5ba7a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=template&id=66a5ba7a&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/admin/setting/language/index.vue?vue&type=template&id=66a5ba7a&scoped=true");


/***/ }),

/***/ "./resources/js/Pages/admin/setting/language/index.vue?vue&type=style&index=0&id=66a5ba7a&scoped=true&lang=css":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/Pages/admin/setting/language/index.vue?vue&type=style&index=0&id=66a5ba7a&scoped=true&lang=css ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_index_vue_vue_type_style_index_0_id_66a5ba7a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./index.vue?vue&type=style&index=0&id=66a5ba7a&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/admin/setting/language/index.vue?vue&type=style&index=0&id=66a5ba7a&scoped=true&lang=css");


/***/ })

}]);
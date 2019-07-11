(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["boxs-box-info-box-info-module"],{

/***/ "./src/app/+boxs/box-info/box-info-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/+boxs/box-info/box-info-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: BoxInfoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxInfoRoutingModule", function() { return BoxInfoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _box_info_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./box-info.component */ "./src/app/+boxs/box-info/box-info.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: '',
        component: _box_info_component__WEBPACK_IMPORTED_MODULE_2__["BoxInfoComponent"]
    }];
var BoxInfoRoutingModule = /** @class */ (function () {
    function BoxInfoRoutingModule() {
    }
    BoxInfoRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], BoxInfoRoutingModule);
    return BoxInfoRoutingModule;
}());



/***/ }),

/***/ "./src/app/+boxs/box-info/box-info.component.css":
/*!*******************************************************!*\
  !*** ./src/app/+boxs/box-info/box-info.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwLytib3hzL2JveC1pbmZvL2JveC1pbmZvLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/+boxs/box-info/box-info.component.html":
/*!********************************************************!*\
  !*** ./src/app/+boxs/box-info/box-info.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-3 col-xs-12\">\n    <mk-box-info header=\"Messages\" iconBackgroundColor=\"aqua\" iconStyleClass=\"fa fa-envelope-o\">\n      1,410\n    </mk-box-info>\n  </div>\n  <div class=\"col-md-3 col-xs-12\">\n    <mk-box-info header=\"Bookmarks\" iconBackgroundColor=\"green\" iconStyleClass=\"fa fa-flag-o\">\n      410\n    </mk-box-info>\n  </div>\n  <div class=\"col-md-3 col-xs-12\">\n    <mk-box-info header=\"Uploads\" iconBackgroundColor=\"yellow\" iconStyleClass=\"fa fa-flag-o\">\n      13,648\n    </mk-box-info>\n  </div>\n  <div class=\"col-md-3 col-xs-12\">\n    <mk-box-info header=\"Uploads\" iconBackgroundColor=\"red\" iconStyleClass=\"fa fa-star-o\">\n      93,139\n    </mk-box-info>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-3 col-xs-12\">\n    <mk-box-info header=\"Bookmarks\" footer=\"70% Increase in 30 Days\" progressWidth=\"70\" backgroundColor=\"aqua\" iconStyleClass=\"fa fa-bookmark-o\">\n      41,410\n    </mk-box-info>\n  </div>\n  <div class=\"col-md-3 col-xs-12\">\n    <mk-box-info header=\"Likes\" footer=\"70% Increase in 30 Days\" progressWidth=\"70\" backgroundColor=\"green\" iconStyleClass=\"fa fa-thumbs-o-up\">\n      41,410\n    </mk-box-info>\n  </div>\n  <div class=\"col-md-3 col-xs-12\">\n    <mk-box-info header=\"Events\" footer=\"70% Increase in 30 Days\" progressWidth=\"70\" backgroundColor=\"yellow\" iconStyleClass=\"fa fa-calendar\">\n      41,410\n    </mk-box-info>\n  </div>\n  <div class=\"col-md-3 col-xs-12\">\n    <mk-box-info header=\"Comments\" footer=\"70% Increase in 30 Days\" progressWidth=\"70\" backgroundColor=\"yellow\" iconStyleClass=\"fa fa-comments-o\">\n      41,410\n    </mk-box-info>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-6 col-xs-12\">\n    <mk-box header=\"Info Box with text header & footer\" [isRemovable]=\"false\">\n      <pre><code class=\"language-html\">&lt;mk-box-info header=\"Header text\" footer=\"Footer text\" progressWidth=\"70\" backgroundColor=\"yellow\" iconStyleClass=\"fa fa-comments-o\"&gt;\n  Content text\n&lt;/mk-box-info&gt;</code></pre>\n    </mk-box>\n  </div>\n  <div class=\"col-md-6 col-xs-12\">\n    <mk-box header=\"Info Box with HTML header & footer\" [isRemovable]=\"false\">\n      <pre><code class=\"language-html\">&lt;mk-box-info progressWidth=\"70\" backgroundColor=\"yellow\" iconStyleClass=\"fa fa-comments-o\"&gt;\n  &lt;mk-box-info-header&gt;Header HTML&lt;/mk-box-info-header&gt;\n  &lt;mk-box-info-content&gt;Content HTML&lt;/mk-box-info-content&gt;\n  &lt;mk-box-info-footer&gt;Footer HTML&lt;/mk-box-info-footer&gt;\n&lt;/mk-box-info&gt;</code></pre>\n    </mk-box>\n  </div>\n</div>\n\n<mk-box header=\"Properties\" [isRemovable]=\"false\" contentClasses=\"table-responsive\">\n  <table class=\"table table-bordered table-hover\">\n    <tbody>\n      <tr>\n        <th>Name</th>\n        <th>Type</th>\n        <th>Default</th>\n        <th>Description</th>\n      </tr>\n      <tr>\n        <td>backgroundColor</td>\n        <td>string (aqua | green | red | yellow)</td>\n        <td>null</td>\n        <td>The box background color.</td>\n      </tr>\n      <tr>\n        <td>contentStyleClass</td>\n        <td>string</td>\n        <td>info-box-number</td>\n        <td>The box content style classes.</td>\n      </tr>\n      <tr>\n        <td>contentColor</td>\n        <td>string (green | aqua | light-blue | red | yellow | mutted | rgb | rgba | hex)</td>\n        <td>null</td>\n        <td>The box content font color.</td>\n      </tr>\n      <tr>\n        <td>footer</td>\n        <td>string</td>\n        <td>null</td>\n        <td>\n          Footer text of the panel.<br/>\n          <em>Note: You can use &lt;mk-box-info-footer&gt; for HTML footer.</em>\n        </td>\n      </tr>\n      <tr>\n        <td>footerColor</td>\n        <td>string (green | aqua | light-blue | red | yellow | mutted | rgb | rgba | hex)</td>\n        <td>null</td>\n        <td>The box footer font color.</td>\n      </tr>\n      <tr>\n        <td>footerStyleClass</td>\n        <td>string</td>\n        <td>progress-description</td>\n        <td>The box footer style classes.</td>\n      </tr>\n      <tr>\n        <td>header</td>\n        <td>string</td>\n        <td>null</td>\n        <td>\n          Header text of the box.<br/>\n          <em>Note: You can use &lt;mk-box-info-header&gt; for HTML header.</em>\n        </td>\n      </tr>\n      <tr>\n        <td>headerColor</td>\n        <td>string (green | aqua | light-blue | red | yellow | mutted | rgb | rgba | hex)</td>\n        <td>null</td>\n        <td>The box header font color.</td>\n      </tr>\n      <tr>\n        <td>headerStyleClass</td>\n        <td>string</td>\n        <td>info-box-text</td>\n        <td>The box header style classes.</td>\n      </tr>\n      <tr>\n        <td>iconBackgroundColor</td>\n        <td>string (aqua | green | red | yellow)</td>\n        <td>null</td>\n        <td>The box icon background color.</td>\n      </tr>\n      <tr>\n        <td>iconColor</td>\n        <td>string (green | aqua | light-blue | red | yellow | mutted | rgb | rgba | hex)</td>\n        <td>null</td>\n        <td>The box icon font color.</td>\n      </tr>\n      <tr>\n        <td>iconStyleClass</td>\n        <td>string</td>\n        <td>ion ion-bag</td>\n        <td>The box icon style classes.</td>\n      </tr>\n      <tr>\n        <td>progressWidth</td>\n        <td>number</td>\n        <td>null</td>\n        <td>The progress bar width of the box in percentage.</td>\n      </tr>\n      <tr>\n        <td>styleClass</td>\n        <td>string</td>\n        <td>info-box</td>\n        <td>The box style classes.</td>\n      </tr>\n    </tbody>\n  </table>\n</mk-box>\n"

/***/ }),

/***/ "./src/app/+boxs/box-info/box-info.component.ts":
/*!******************************************************!*\
  !*** ./src/app/+boxs/box-info/box-info.component.ts ***!
  \******************************************************/
/*! exports provided: BoxInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxInfoComponent", function() { return BoxInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prismjs */ "./node_modules/prismjs/prism.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var BoxInfoComponent = /** @class */ (function () {
    function BoxInfoComponent() {
    }
    /**
     * @method ngAfterViewInit
     */
    BoxInfoComponent.prototype.ngAfterViewInit = function () {
        prismjs__WEBPACK_IMPORTED_MODULE_1__["highlightAll"]();
    };
    BoxInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-box-info',
            template: __webpack_require__(/*! ./box-info.component.html */ "./src/app/+boxs/box-info/box-info.component.html"),
            styles: [__webpack_require__(/*! ./box-info.component.css */ "./src/app/+boxs/box-info/box-info.component.css")]
        })
    ], BoxInfoComponent);
    return BoxInfoComponent;
}());



/***/ }),

/***/ "./src/app/+boxs/box-info/box-info.module.ts":
/*!***************************************************!*\
  !*** ./src/app/+boxs/box-info/box-info.module.ts ***!
  \***************************************************/
/*! exports provided: BoxInfoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxInfoModule", function() { return BoxInfoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _box_info_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./box-info-routing.module */ "./src/app/+boxs/box-info/box-info-routing.module.ts");
/* harmony import */ var _box_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./box-info.component */ "./src/app/+boxs/box-info/box-info.component.ts");
/* harmony import */ var angular_admin_lte__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-admin-lte */ "./library/angular-admin-lte/src/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var BoxInfoModule = /** @class */ (function () {
    function BoxInfoModule() {
    }
    BoxInfoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _box_info_routing_module__WEBPACK_IMPORTED_MODULE_2__["BoxInfoRoutingModule"],
                angular_admin_lte__WEBPACK_IMPORTED_MODULE_4__["BoxModule"],
                angular_admin_lte__WEBPACK_IMPORTED_MODULE_4__["BoxInfoModule"]
            ],
            declarations: [_box_info_component__WEBPACK_IMPORTED_MODULE_3__["BoxInfoComponent"]]
        })
    ], BoxInfoModule);
    return BoxInfoModule;
}());



/***/ })

}]);
//# sourceMappingURL=boxs-box-info-box-info-module.js.map
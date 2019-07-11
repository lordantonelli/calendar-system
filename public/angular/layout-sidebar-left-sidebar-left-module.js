(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layout-sidebar-left-sidebar-left-module"],{

/***/ "./src/app/+layout/sidebar-left/sidebar-left-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/+layout/sidebar-left/sidebar-left-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: SidebarLeftRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarLeftRoutingModule", function() { return SidebarLeftRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sidebar_left_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar-left.component */ "./src/app/+layout/sidebar-left/sidebar-left.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: '',
        component: _sidebar_left_component__WEBPACK_IMPORTED_MODULE_2__["SidebarLeftComponent"]
    }];
var SidebarLeftRoutingModule = /** @class */ (function () {
    function SidebarLeftRoutingModule() {
    }
    SidebarLeftRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SidebarLeftRoutingModule);
    return SidebarLeftRoutingModule;
}());



/***/ }),

/***/ "./src/app/+layout/sidebar-left/sidebar-left.component.html":
/*!******************************************************************!*\
  !*** ./src/app/+layout/sidebar-left/sidebar-left.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mk-box header=\"About sidebar left component\" [isCollapsable]=\"false\" [isRemovable]=\"false\">\n  <p>The sidebar left component is used for displaying the menu of the layout configuraton (see <a routerLink=\"/layout/configuration\">layout configuration</a>).<br/> Yon can also add any HTML elements which will be displayed above the menu.</p>\n</mk-box>\n\n<mk-box header=\"HTML\" [isCollapsable]=\"false\" [isRemovable]=\"false\">\n  <pre><code class=\"language-html\">&lt;mk-layout-sidebar-left&gt;\n&lt;div class=&quot;user-panel&quot;&gt;\n  &lt;div class=&quot;pull-left image&quot;&gt;\n    &lt;img src=&quot;assets/img/user2-160x160.jpg&quot; class=&quot;img-circle&quot; alt=&quot;User Image&quot;&gt;\n  &lt;/div&gt;\n  &lt;div class=&quot;pull-left info&quot;&gt;\n    &lt;p&gt;Alexander Pierce&lt;/p&gt;\n    &lt;a href=&quot;#&quot;&gt;&lt;i class=&quot;fa fa-circle text-success&quot;&gt;&lt;/i&gt; Online&lt;/a&gt;\n  &lt;/div&gt;\n&lt;/div&gt;\n&lt;form action=&quot;#&quot; method=&quot;get&quot; class=&quot;sidebar-form&quot;&gt;\n  &lt;div class=&quot;input-group&quot;&gt;\n    &lt;input type=&quot;text&quot; name=&quot;q&quot; class=&quot;form-control&quot; placeholder=&quot;Search...&quot;&gt;\n    &lt;span class=&quot;input-group-btn&quot;&gt;\n      &lt;button type=&quot;submit&quot; name=&quot;search&quot; id=&quot;search-btn&quot; class=&quot;btn btn-flat&quot;&gt;&lt;i class=&quot;fa fa-search&quot;&gt;&lt;/i&gt;\n      &lt;/button&gt;\n    &lt;/span&gt;\n  &lt;/div&gt;\n&lt;/form&gt;\n&lt;/mk-layout-sidebar-left&gt;\n</code></pre>\n</mk-box>\n\n<mk-box header=\"sidebar left menu configuration\" [isCollapsable]=\"true\" [isRemovable]=\"false\" contentStyleClasses=\"table-responsive\">\n  <pre><code class=\"language-typescript\">sidebarLeftMenu: [\n  &#123;label: 'MAIN NAVIGATION', separator: true&#125;,\n  &#123;label: 'Start', route: '/', iconClasses: 'fa fa-th'&#125;,\n  &#123;label: 'Parent', iconClasses: 'fa fa-files-o', children: [\n    &#123;label: 'Children', route: 'parent/children'&#125;,\n    &#123;label: 'Parent 2', children: [\n      &#123;label: 'Children 2', route: 'parent/parent2/children2'&#125;\n    ]&#125;\n    ...\n  ]&#125;\n]\n  </code></pre>\n</mk-box>\n\n<mk-box header=\"sidebar left menu item properties\" [isCollapsable]=\"true\" [isRemovable]=\"false\" contentStyleClasses=\"table-responsive\">\n  <table class=\"table table-bordered table-hover\">\n    <tbody>\n      <tr>\n        <th>Name</th>\n        <th>Type</th>\n        <th>Default</th>\n        <th>Description</th>\n      </tr>\n      <tr>\n        <td>Label</td>\n        <td>string</td>\n        <td>null</td>\n        <td>Set the menu item label.</td>\n      </tr>\n      <tr>\n        <td>iconClasses</td>\n        <td>string</td>\n        <td>'fa fa-circle-o'</td>\n        <td>Set the menu item iclon classes.</td>\n      </tr>\n      <tr>\n        <td>separator</td>\n        <td>boolean</td>\n        <td>false</td>\n        <td>Defines if the menu item is a separator.</td>\n      </tr>\n      <tr>\n        <td>route</td>\n        <td>string</td>\n        <td>null</td>\n        <td>Set the menu item route.</td>\n      </tr>\n      <tr>\n        <td>children</td>\n        <td>Array&lt;Item&gt;</td>\n        <td>null</td>\n        <td>Defines the item children.</td>\n      </tr>\n    </tbody>\n  </table>\n</mk-box>\n"

/***/ }),

/***/ "./src/app/+layout/sidebar-left/sidebar-left.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/+layout/sidebar-left/sidebar-left.component.ts ***!
  \****************************************************************/
/*! exports provided: SidebarLeftComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarLeftComponent", function() { return SidebarLeftComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prismjs */ "./node_modules/prismjs/prism.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SidebarLeftComponent = /** @class */ (function () {
    function SidebarLeftComponent() {
    }
    /**
     * @method ngAfterViewInit
     */
    SidebarLeftComponent.prototype.ngAfterViewInit = function () {
        prismjs__WEBPACK_IMPORTED_MODULE_1__["highlightAll"]();
    };
    SidebarLeftComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar-left',
            template: __webpack_require__(/*! ./sidebar-left.component.html */ "./src/app/+layout/sidebar-left/sidebar-left.component.html")
        })
    ], SidebarLeftComponent);
    return SidebarLeftComponent;
}());



/***/ }),

/***/ "./src/app/+layout/sidebar-left/sidebar-left.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/+layout/sidebar-left/sidebar-left.module.ts ***!
  \*************************************************************/
/*! exports provided: SidebarLeftModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarLeftModule", function() { return SidebarLeftModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _sidebar_left_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar-left-routing.module */ "./src/app/+layout/sidebar-left/sidebar-left-routing.module.ts");
/* harmony import */ var _sidebar_left_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar-left.component */ "./src/app/+layout/sidebar-left/sidebar-left.component.ts");
/* harmony import */ var angular_admin_lte__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-admin-lte */ "./library/angular-admin-lte/src/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SidebarLeftModule = /** @class */ (function () {
    function SidebarLeftModule() {
    }
    SidebarLeftModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _sidebar_left_routing_module__WEBPACK_IMPORTED_MODULE_2__["SidebarLeftRoutingModule"],
                angular_admin_lte__WEBPACK_IMPORTED_MODULE_4__["BoxModule"]
            ],
            declarations: [_sidebar_left_component__WEBPACK_IMPORTED_MODULE_3__["SidebarLeftComponent"]]
        })
    ], SidebarLeftModule);
    return SidebarLeftModule;
}());



/***/ })

}]);
//# sourceMappingURL=layout-sidebar-left-sidebar-left-module.js.map
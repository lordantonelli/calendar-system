(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layout-configuration-configuration-module"],{

/***/ "./src/app/+layout/configuration/configuration-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/+layout/configuration/configuration-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: ConfigurationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationRoutingModule", function() { return ConfigurationRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _configuration_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./configuration.component */ "./src/app/+layout/configuration/configuration.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: '',
        component: _configuration_component__WEBPACK_IMPORTED_MODULE_2__["ConfigurationComponent"]
    }];
var ConfigurationRoutingModule = /** @class */ (function () {
    function ConfigurationRoutingModule() {
    }
    ConfigurationRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ConfigurationRoutingModule);
    return ConfigurationRoutingModule;
}());



/***/ }),

/***/ "./src/app/+layout/configuration/configuration.component.html":
/*!********************************************************************!*\
  !*** ./src/app/+layout/configuration/configuration.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mk-box header=\"Configuring Layout\" [isCollapsable]=\"false\" [isRemovable]=\"false\">\n  <p>If can use the layout components or just use the presentation components of angular-admin-lte.</p>\n  <p> If you chose to use the layout you will need to:</p>\n  <ol>\n    <li>Create a layout configuration file.</li>\n    <li>Import the layout module and provide the layout configuration in your main app module.</li>\n    <li>Update the main app view.</li>\n  </ol>\n</mk-box>\n\n\n<mk-box header=\"Configuration File\" [isCollapsable]=\"false\" [isRemovable]=\"false\">\n  <pre><code class=\"language-typescript\" ngNonBindable>export var adminLteConf = &#123;\n  skin: 'blue',\n  ...\n  sidebarLeftMenu: [\n    &#123;label: 'Start', route: '/', iconClasses: 'fa fa-th'&#125;,\n    ...\n  ]\n&#125;;\n</code></pre>\n</mk-box>\n\n<mk-box header=\"Import Conf And Module\" [isCollapsable]=\"false\" [isRemovable]=\"false\">\n  <pre><code class=\"language-typescript\">import &#123; adminLteConf &#125; from './admin-lte.conf';   //Import the layout configuration.\nimport &#123; LayoutModule &#125; from 'angular-admin-lte';   //Import the layout module.\n\n@NgModule(&#123;\n  imports: [\n    ...\n    LayoutModule.forRoot(adminLteConf),   //Provide the configuration to the layout module.\n  ],\n  ...\n&#125;)\nexport class AppModule &#123;&#125;\n</code></pre>\n</mk-box>\n\n<mk-box header=\"App view HTML\" [isCollapsable]=\"false\" [isRemovable]=\"false\">\n  <pre><code class=\"language-html\">&lt;mk-layout-wrapper&gt;\n  &lt;mk-layout-sidebar-right&gt;\n    Sidebar right HTML\n  &lt;/mk-layout-sidebar-right&gt;\n  &lt;mk-layout-header&gt;\n    &lt;mk-layout-header-logo&gt;Logo HTML&lt;/mk-layout-header-logo&gt;\n    &lt;mk-layout-header-logo-mini&gt;Logo Mini HTML&lt;/mk-layout-header-logo-mini&gt;\n    Header HTML\n  &lt;/mk-layout-header&gt;\n  &lt;mk-layout-sidebar-left&gt;\n    Sidebar left HTML (just above menu)\n  &lt;/mk-layout-sidebar-left&gt;\n  &lt;mk-layout-content&gt;\n    &lt;router-outlet&gt;&lt;/router-outlet&gt;\n  &lt;/mk-layout-content&gt;\n  &lt;mk-layout-footer&gt;\n    &lt;mk-layout-footer-left&gt;\n      Footer left HTML\n    &lt;/mk-layout-footer-left&gt;\n    &lt;mk-layout-footer-right&gt;\n      Footer right HTML\n    &lt;/mk-layout-footer-right&gt;\n  &lt;/mk-layout-footer&gt;\n&lt;/mk-layout-wrapper&gt;\n</code></pre>\n</mk-box>\n\n<mk-box header=\"Configuration properties\" [isCollapsable]=\"true\" [isRemovable]=\"false\" contentStyleClasses=\"table-responsive\">\n  <table class=\"table table-bordered table-hover\">\n    <tbody>\n      <tr>\n        <th>Name</th>\n        <th>Type</th>\n        <th>Default</th>\n        <th>Description</th>\n      </tr>\n      <tr>\n        <td>skin</td>\n        <td>string ('blue' | 'black' | 'purple' | 'green' | 'red' | 'yellow' | 'blue-light' | 'black-light' | 'purple-light' | 'green-light' | 'red-light' | 'yellow-light')</td>\n        <td>'blue'</td>\n        <td>Set the theme skin.</td>\n      </tr>\n      <tr>\n        <td>isSidebarLeftCollapsed</td>\n        <td>boolean</td>\n        <td>false</td>\n        <td>Defines if the sidebar left is collapsed.</td>\n      </tr>\n      <tr>\n        <td>isSidebarLeftExpandOnOver</td>\n        <td>boolean</td>\n        <td>false</td>\n        <td>Define if sidebar left expand on mouse over.</td>\n      </tr>\n      <tr>\n        <td>isSidebarLeftMini</td>\n        <td>boolean</td>\n        <td>false</td>\n        <td>Define if sidebar left minified is visible.</td>\n      </tr>\n      <tr>\n        <td>sidebarRightSkin</td>\n        <td>string ('dark' | 'light')</td>\n        <td>'dark'</td>\n        <td>Set the sidebar right skin.</td>\n      </tr>\n      <tr>\n        <td>isSidebarRightCollapsed</td>\n        <td>boolean</td>\n        <td>true</td>\n        <td>Defines if the sidebar right is collapsed.</td>\n      </tr>\n      <tr>\n        <td>isSidebarRightOverContent</td>\n        <td>boolean</td>\n        <td>true</td>\n        <td>Defines if sidebar right slide over content.</td>\n      </tr>\n      <tr>\n        <td>layout</td>\n        <td>string ('normal' | 'boxed' | 'fixed')</td>\n        <td>'normal'</td>\n        <td>Define the layout style.</td>\n      </tr>\n    </tbody>\n  </table>\n</mk-box>\n\n<mk-box header=\"Layout setters\" [isCollapsable]=\"false\" [isRemovable]=\"false\">\n  <table class=\"table table-bordered table-hover\">\n    <tbody>\n      <tr>\n        <th>Name</th>\n        <th>Parameters</th>\n        <th>Description</th>\n      </tr>\n      <tr>\n        <td>sidebarLeftCollapsed()</td>\n        <td>boolean</td>\n        <td>Programmatically set if sidebar left is collapsed.</td>\n      </tr>\n      <tr>\n        <td>sidebarLeftExpandOnOver()</td>\n        <td>boolean</td>\n        <td>Programmatically set if sidebar left expand on over.</td>\n      </tr>\n      <tr>\n        <td>sidebarLeftExpandOnOver()</td>\n        <td>boolean</td>\n        <td>Programmatically set if sidebar left expand on over.</td>\n      </tr>\n      <tr>\n        <td>setSidebarRightSkin()</td>\n        <td>'dark' | 'light'</td>\n        <td>Programmatically defines sidebar right skin.</td>\n      </tr>\n      <tr>\n        <td>sidebarLeftMini()</td>\n        <td>boolean</td>\n        <td>Programmatically set if sidebar left collapsed is visible.</td>\n      </tr>\n      <tr>\n        <td>sidebarRightCollapsed()</td>\n        <td>boolean</td>\n        <td>Programmatically set if sidebar right is collapsed.</td>\n      </tr>\n      <tr>\n        <td>sidebarRightOverContent()</td>\n        <td>boolean</td>\n        <td>Programmatically set if sidebar right slide over content.</td>\n      </tr>\n      <tr>\n        <td>setSidebarLeftMenu()</td>\n        <td>Array</td>\n        <td>Update sidebar right menu.</td>\n      </tr>\n      <tr>\n        <td>setLayout()</td>\n        <td>string</td>\n        <td>Update layout style.</td>\n      </tr>\n      <tr>\n        <td>setSkin()</td>\n        <td>string</td>\n        <td>Update theme skin.</td>\n      </tr>\n    </tbody>\n  </table>\n</mk-box>\n\n<mk-box header=\"Layout subscriptions\" [isCollapsable]=\"false\" [isRemovable]=\"false\">\n  <table class=\"table table-bordered table-hover\">\n    <tbody>\n      <tr>\n        <th>Name</th>\n        <th>Parameters</th>\n        <th>Description</th>\n      </tr>\n      <tr>\n        <td>isSidebarLeftCollapsed</td>\n        <td>Observable&lt;boolean&gt;</td>\n        <td>Subscribe to sidebar left collapse status.</td>\n      </tr>\n      <tr>\n        <td>isSidebarLeftExpandOnOver</td>\n        <td>Observable&lt;boolean&gt;</td>\n        <td>Subscribe to sidebar left expand on over status.</td>\n      </tr>\n      <tr>\n        <td>isSidebarLeftMini</td>\n        <td>Observable&lt;boolean&gt;</td>\n        <td>Subscribe to sidebar left mini status.</td>\n      </tr>\n      <tr>\n        <td>sidebarRightSkin</td>\n        <td>Observable&lt;string&gt;</td>\n        <td>Subscribe to sidebar right skin.</td>\n      </tr>\n      <tr>\n        <td>isSidebarRightCollapsed</td>\n        <td>Observable&lt;boolean&gt;</td>\n        <td>Subscribe to sidebar right collapsed status.</td>\n      </tr>\n      <tr>\n        <td>isSidebarRightOverContent</td>\n        <td>Observable&lt;Array&gt;</td>\n        <td>Subscribe to sidebar right over content status.</td>\n      </tr>\n      <tr>\n        <td>layout</td>\n        <td>Observable&lt;string&gt;</td>\n        <td>Subscribe to layout style changes.</td>\n      </tr>\n      <tr>\n        <td>skin</td>\n        <td>Observable&lt;string&gt;</td>\n        <td>Subscribe to theme skin changes.</td>\n      </tr>\n    </tbody>\n  </table>\n</mk-box>\n"

/***/ }),

/***/ "./src/app/+layout/configuration/configuration.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/+layout/configuration/configuration.component.ts ***!
  \******************************************************************/
/*! exports provided: ConfigurationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationComponent", function() { return ConfigurationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prismjs */ "./node_modules/prismjs/prism.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ConfigurationComponent = /** @class */ (function () {
    function ConfigurationComponent() {
    }
    /**
     * @method ngAfterViewInit
     */
    ConfigurationComponent.prototype.ngAfterViewInit = function () {
        prismjs__WEBPACK_IMPORTED_MODULE_1__["highlightAll"]();
    };
    ConfigurationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-configuration',
            template: __webpack_require__(/*! ./configuration.component.html */ "./src/app/+layout/configuration/configuration.component.html")
        })
    ], ConfigurationComponent);
    return ConfigurationComponent;
}());



/***/ }),

/***/ "./src/app/+layout/configuration/configuration.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/+layout/configuration/configuration.module.ts ***!
  \***************************************************************/
/*! exports provided: ConfigurationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationModule", function() { return ConfigurationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _configuration_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./configuration-routing.module */ "./src/app/+layout/configuration/configuration-routing.module.ts");
/* harmony import */ var _configuration_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./configuration.component */ "./src/app/+layout/configuration/configuration.component.ts");
/* harmony import */ var angular_admin_lte__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-admin-lte */ "./library/angular-admin-lte/src/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ConfigurationModule = /** @class */ (function () {
    function ConfigurationModule() {
    }
    ConfigurationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _configuration_routing_module__WEBPACK_IMPORTED_MODULE_2__["ConfigurationRoutingModule"],
                angular_admin_lte__WEBPACK_IMPORTED_MODULE_4__["BoxModule"]
            ],
            declarations: [_configuration_component__WEBPACK_IMPORTED_MODULE_3__["ConfigurationComponent"]]
        })
    ], ConfigurationModule);
    return ConfigurationModule;
}());



/***/ })

}]);
//# sourceMappingURL=layout-configuration-configuration-module.js.map
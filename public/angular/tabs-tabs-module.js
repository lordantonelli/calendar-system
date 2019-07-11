(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"],{

/***/ "./src/app/+tabs/tabs-routing.module.ts":
/*!**********************************************!*\
  !*** ./src/app/+tabs/tabs-routing.module.ts ***!
  \**********************************************/
/*! exports provided: TabsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsRoutingModule", function() { return TabsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tabs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs.component */ "./src/app/+tabs/tabs.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: '',
        component: _tabs_component__WEBPACK_IMPORTED_MODULE_2__["TabsComponent"]
    }];
var TabsRoutingModule = /** @class */ (function () {
    function TabsRoutingModule() {
    }
    TabsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], TabsRoutingModule);
    return TabsRoutingModule;
}());



/***/ }),

/***/ "./src/app/+tabs/tabs.component.css":
/*!******************************************!*\
  !*** ./src/app/+tabs/tabs.component.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwLyt0YWJzL3RhYnMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/+tabs/tabs.component.html":
/*!*******************************************!*\
  !*** ./src/app/+tabs/tabs.component.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6 col-xs-12\">\n    <mk-tabs tabsColor=\"#3c763d\" [activeTabIndex]=\"1\">\n      <mk-tab header=\"Text Header\" tabColor=\"#dd4b39\">\n        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n      </mk-tab>\n      <mk-tab header=\"Text Header 2\">\n        The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages.\n      </mk-tab>\n      <mk-tab [isDisabled]=\"true\">\n        <mk-tab-header>\n          <a class=\"dropdown-toggle\" (click)=\"toggleDropdown = !toggleDropdown\">Dropdown <span class=\"caret\"></span></a>\n          <mk-dropdown [isCollapsed]=\"toggleDropdown\">\n            <mk-dropdown-menu>\n              <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\">Action</a></li>\n              <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\">Another action</a></li>\n              <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\">Something else here</a></li>\n              <li role=\"presentation\" class=\"divider\"></li>\n              <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\">Separated link</a></li>\n            </mk-dropdown-menu>\n          </mk-dropdown>\n        </mk-tab-header>\n      </mk-tab>\n    </mk-tabs>\n  </div>\n  <div class=\"col-md-6 col-xs-12\">\n    <mk-tabs>\n      <mk-tabs-header><i class=\"fa fa-th\"></i> Custom Tabs</mk-tabs-header>\n      <mk-tab>\n        <mk-tab-header>HTML Header</mk-tab-header>\n        <mk-tab-content>\n          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n        </mk-tab-content>\n      </mk-tab>\n      <mk-tab>\n        <mk-tab-header>HTML Header 2</mk-tab-header>\n        <mk-tab-content>\n          The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages.\n        </mk-tab-content>\n      </mk-tab>\n      <mk-tab [isDisabled]=\"true\">\n        <mk-tab-header>\n          <a class=\"dropdown-toggle\" (click)=\"toggleDropdown2 = !toggleDropdown2\">Dropdown <span class=\"caret\"></span></a>\n          <mk-dropdown [isCollapsed]=\"toggleDropdown2\">\n            <mk-dropdown-menu>\n              <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\">Action</a></li>\n              <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\">Another action</a></li>\n              <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\">Something else here</a></li>\n              <li role=\"presentation\" class=\"divider\"></li>\n              <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\">Separated link</a></li>\n            </mk-dropdown-menu>\n          </mk-dropdown>\n        </mk-tab-header>\n      </mk-tab>\n    </mk-tabs>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-6 col-xs-12\">\n    <mk-box header=\"Tabs with text header & footer\" [isCollapsable]=\"false\" [isRemovable]=\"false\">\n      <pre><code class=\"language-html\">&lt;mk-tabs header=\"Tabs text header\"&gt;\n  &lt;mk-tab header=\"Text Header\"&gt;\n    Tab content.\n  &lt;/mk-tab&gt;\n  &lt;mk-tab header=\"Text Header 2\"&gt;\n    Tab content 2.\n  &lt;/mk-tab&gt;\n&lt;/mk-tabs&gt;</code></pre>\n    </mk-box>\n  </div>\n  <div class=\"col-md-6 col-xs-12\">\n    <mk-box header=\"Tabs with HTML header\" [isCollapsable]=\"false\" [isRemovable]=\"false\">\n      <pre><code class=\"language-html\">&lt;mk-tabs&gt;\n  &lt;mk-tabs-header&gt;Tabs HTML header&lt;/mk-tabs-header&gt;\n  &lt;mk-tab&gt;\n    &lt;mk-tab-header&gt;HTML header&lt;/mk-tab-header&gt;\n    &lt;mk-tab-content&gt;Content&lt;/mk-tab-content&gt;\n  &lt;/mk-tab&gt;\n  &lt;mk-tab&gt;\n    &lt;mk-tab-header&gt;HTML header 2&lt;/mk-tab-header&gt;\n    &lt;mk-tab-content&gt;Content 2&lt;/mk-tab-content&gt;\n  &lt;/mk-tab&gt;\n&lt;/mk-tabs&gt;</code></pre>\n    </mk-box>\n  </div>\n</div>\n\n<mk-box header=\"Tabs Properties\" [isCollapsable]=\"true\" [isRemovable]=\"false\" contentClasses=\"table-responsive\">\n  <table class=\"table table-bordered table-hover\">\n    <tbody>\n      <tr>\n        <th>Name</th>\n        <th>Type</th>\n        <th>Default</th>\n        <th>Description</th>\n      </tr>\n      <tr>\n        <td>activatedTabIndex</td>\n        <td>number</td>\n        <td>0</td>\n        <td>Defines if the tab index to be activated on load.</td>\n      </tr>\n      <tr>\n        <td>header</td>\n        <td>string</td>\n        <td>null</td>\n        <td>\n          Header text of the tabs.<br/>\n          <em>\n            Note: You can use &lt;mk-tabs-header&gt; for HTML header.\n          </em>\n        </td>\n      </tr>\n      <tr>\n        <td>headerStyleClass</td>\n        <td>string</td>\n        <td>header pull-left</td>\n        <td>Style class of the the header.</td>\n      </tr>\n      <tr>\n        <td>navStyleClass</td>\n        <td>string</td>\n        <td>nav nav-tabs</td>\n        <td>Style class of the navigation bar.</td>\n      </tr>\n      <tr>\n        <td>contentStyleClass</td>\n        <td>string</td>\n        <td>tab-content</td>\n        <td>Style class of the content.</td>\n      </tr>\n      <tr>\n        <td>styleClass</td>\n        <td>string</td>\n        <td>nav-tabs-custom</td>\n        <td>Style class of the component.</td>\n      </tr>\n      <tr>\n        <td>tabsColor</td>\n        <td>string</td>\n        <td>null</td>\n        <td>Defines the tabs menu color.</td>\n      </tr>\n    </tbody>\n  </table>\n</mk-box>\n\n<mk-box header=\"Tabs Events\" [isCollapsable]=\"true\" [isRemovable]=\"false\" contentClasses=\"table-responsive\">\n  <table class=\"table table-bordered table-hover\">\n    <tbody>\n      <tr>\n        <th>Name</th>\n        <th>Parameters</th>\n        <th>Description</th>\n      </tr>\n      <tr>\n        <td>onClose</td>\n        <td>event.browserEvent: browser event<br/>event.index: The index of the closed tab.</td>\n        <td>Callback to invoke when tab close.</td>\n      </tr>\n      <tr>\n        <td>onOpen</td>\n        <td>event.browserEvent: browser event<br/>event.index: The index of the opened tab.</td>\n        <td>Callback to invoke when tab open.</td>\n      </tr>\n    </tbody>\n  </table>\n</mk-box>\n\n<mk-box header=\"Tab Properties\" [isCollapsable]=\"true\" [isRemovable]=\"false\" contentClasses=\"table-responsive\">\n  <table class=\"table table-bordered table-hover\">\n    <tbody>\n      <tr>\n        <th>Name</th>\n        <th>Type</th>\n        <th>Default</th>\n        <th>Description</th>\n      </tr>\n      <tr>\n        <td>header</td>\n        <td>string</td>\n        <td>null</td>\n        <td>\n          Header text of the tabs.<br/>\n          <em>\n            Note: You can use &lt;mk-tab-header&gt; for HTML header.\n          </em>\n        </td>\n      </tr>\n      <tr>\n        <td>isDisabled</td>\n        <td>string</td>\n        <td>false</td>\n        <td>\n          Defines if the tab content is openable.\n          <em>\n            Note: Useful with dropdown for example.\n          </em>\n        </td>\n      </tr>\n      <tr>\n        <td>tabColor</td>\n        <td>string</td>\n        <td>null</td>\n        <td>Defines the tab menu color.</td>\n      </tr>\n    </tbody>\n  </table>\n</mk-box>\n"

/***/ }),

/***/ "./src/app/+tabs/tabs.component.ts":
/*!*****************************************!*\
  !*** ./src/app/+tabs/tabs.component.ts ***!
  \*****************************************/
/*! exports provided: TabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsComponent", function() { return TabsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prismjs */ "./node_modules/prismjs/prism.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TabsComponent = /** @class */ (function () {
    function TabsComponent() {
        this.toggleDropdown = true;
        this.toggleDropdown2 = true;
    }
    /**
     * @method ngAfterViewInit
     */
    TabsComponent.prototype.ngAfterViewInit = function () {
        prismjs__WEBPACK_IMPORTED_MODULE_1__["highlightAll"]();
    };
    TabsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./tabs.component.html */ "./src/app/+tabs/tabs.component.html"),
            styles: [__webpack_require__(/*! ./tabs.component.css */ "./src/app/+tabs/tabs.component.css")]
        })
    ], TabsComponent);
    return TabsComponent;
}());



/***/ }),

/***/ "./src/app/+tabs/tabs.module.ts":
/*!**************************************!*\
  !*** ./src/app/+tabs/tabs.module.ts ***!
  \**************************************/
/*! exports provided: TabsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsModule", function() { return TabsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs-routing.module */ "./src/app/+tabs/tabs-routing.module.ts");
/* harmony import */ var _tabs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.component */ "./src/app/+tabs/tabs.component.ts");
/* harmony import */ var angular_admin_lte__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-admin-lte */ "./library/angular-admin-lte/src/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var TabsModule = /** @class */ (function () {
    function TabsModule() {
    }
    TabsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _tabs_routing_module__WEBPACK_IMPORTED_MODULE_2__["TabsRoutingModule"],
                angular_admin_lte__WEBPACK_IMPORTED_MODULE_4__["TabsModule"],
                angular_admin_lte__WEBPACK_IMPORTED_MODULE_4__["BoxModule"],
                angular_admin_lte__WEBPACK_IMPORTED_MODULE_4__["DropdownModule"]
            ],
            declarations: [_tabs_component__WEBPACK_IMPORTED_MODULE_3__["TabsComponent"]]
        })
    ], TabsModule);
    return TabsModule;
}());



/***/ })

}]);
//# sourceMappingURL=tabs-tabs-module.js.map
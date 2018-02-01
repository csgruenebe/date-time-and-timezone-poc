webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* unused harmony export TimeZoneAndDateFormat */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment_timezone__ = __webpack_require__("../../../../moment-timezone/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment_timezone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment_timezone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utc_helper__ = __webpack_require__("../../../../../src/app/utc-helper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_util__ = __webpack_require__("../../../../util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_styles__ = __webpack_require__("../../../../../src/app/app.styles.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.availableTimeZonesAndDateFormats = [
            { tz: 'Europe/Berlin', formatDateAndTime: 'DD. MMM. YYYY, HH:mm' },
            { tz: 'Europe/London', formatDateAndTime: 'DD MMM YYYY, HH:mm' },
            { tz: 'America/New_York', formatDateAndTime: 'MMM DD, YYYY, hh:mm a' },
            { tz: 'Japan', formatDateAndTime: 'MMM DD, YYYY, hh:mm a' },
            { tz: 'Asia/Singapore', formatDateAndTime: 'MMM DD, YYYY, hh:mm a' },
            { tz: 'Asia/Hong_Kong', formatDateAndTime: 'MMM DD, YYYY, hh:mm a' },
        ];
        this.form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            utcDate: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('2018-08-20T12:00:00.000'),
            selectedTimeZone: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null),
        });
        this.errorUtcDate = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form.get('selectedTimeZone').valueChanges.subscribe(function () {
            _this.validUtcDateResult = null;
        });
        this.form.get('utcDate').valueChanges.subscribe(function (change) {
            var tempDate = change + '+0000';
            if (__WEBPACK_IMPORTED_MODULE_3__utc_helper__["a" /* default */].isValidJavaUTCDate(tempDate)) {
                _this.validUtcDateResult = null;
                _this.validUtcDate = tempDate;
                _this.errorUtcDate = false;
            }
            else {
                _this.errorUtcDate = true;
            }
        });
        this.validUtcDate = this.form.get('utcDate').value + '+0000';
    };
    AppComponent.prototype.getTimeInTimeZoneWithFormat = function (timezone, format) {
        if (!Object(__WEBPACK_IMPORTED_MODULE_4_util__["isNullOrUndefined"])(this.validUtcDate)) {
            return __WEBPACK_IMPORTED_MODULE_2_moment_timezone__(this.validUtcDate).tz(timezone).format(format);
        }
        return '';
    };
    AppComponent.prototype.getTimeZoneOffset = function (timezone) {
        if (!Object(__WEBPACK_IMPORTED_MODULE_4_util__["isNullOrUndefined"])(this.validUtcDate)) {
            return __WEBPACK_IMPORTED_MODULE_2_moment_timezone__(this.validUtcDate).tz(timezone).format('ZZ');
        }
        return '';
    };
    AppComponent.prototype.processDateTimeChange = function (date) {
        if (__WEBPACK_IMPORTED_MODULE_3__utc_helper__["a" /* default */].isValidJavaUTCDate(date)) {
            this.validUtcDateResult = date;
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: "\n  <div class=\"header\">\n    <div class=\"container\">\n      <h1 class=\"headline\">UTC DateTime and TimeZone Flow Proof of Concept</h1>\n    </div>\n  </div>\n  <div class=\"container\">\n\n    <div class=\"row\">\n      <div class=\"col\">\n        <app-utc-date-flow-diagram style=\"width:80%;\"></app-utc-date-flow-diagram>\n      </div>\n    </div>\n\n    <div class=\"row mt-m\">\n      <div class=\"col\">\n        <div>\n          <h3>1. Set UTC DateTime in Database</h3>\n          <app-pc type=\"Database\">\n            <form [formGroup]=\"form\" class=\"form\">\n              <div class=\"fieldlabel\">UTC</div>\n              <input\n                class=\"sharedField\"\n                [class.sharedFieldHasError]=\"errorUtcDate\"\n                style=\"width:195px\" type=\"text\" formControlName=\"utcDate\" />\n              <div class=\"fieldafter\">\n                +0000\n              </div>\n            </form>\n            <div class=\"errorUtcDate\" *ngIf=\"errorUtcDate\">\n              Not a valid UTC Date in form of <br>2018-08-20T12:00:00.000+0000\n            </div>\n          </app-pc>\n        </div>\n      </div>\n      <div class=\"col\">\n        <div [formGroup]=\"form\">\n          <h3>2. Select TimeZone</h3>\n          <select\n            formControlName=\"selectedTimeZone\"\n            class=\"sharedSelect timeZoneSelect\">\n            <option\n              [value]=\"availableTimeZone.tz\"\n              *ngFor=\"let availableTimeZone of availableTimeZonesAndDateFormats\"\n            >{{availableTimeZone.tz}}</option>\n          </select>\n        </div>\n      </div>\n      <div class=\"col\">\n        <div>\n          <h3>3. Use DatePicker</h3>\n          <app-date-and-time-picker-form\n            *ngIf=\"form?.value?.selectedTimeZone\"\n            [utcDate]=\"validUtcDate\"\n            [timezone]=\"form.value.selectedTimeZone\"\n            (changed)=\"processDateTimeChange($event)\"\n          ></app-date-and-time-picker-form>\n        </div>\n      </div>\n      <div class=\"col\">\n        <div>\n          <h3>4. Utc Result for DB</h3>\n          <div class=\"utcResult\">{{validUtcDateResult ? validUtcDateResult : '...' }}</div>\n        </div>\n      </div>\n    </div>\n\n\n\n    <div class=\"mt-xl\"></div>\n    <bdd-feature>DateTimePicker Component should be TimeZone and 'daylight savings time' aware</bdd-feature>\n    <ul class=\"bdd-notes\">\n      <li>For e.g. Europe/Berlin TimeZone on 25th March 2018 at 02:00 a.m the time changes to <a href=\"https://www.timeanddate.com/time/change/germany\" target=\"_blank\">SummerTime and the clock is set to 03:00 a.m.</a></li>\n      <li>For e.g. Europe/Berlin TimeZone on 28th October 2018 at 03:00 a.m the time changes to <a href=\"https://www.timeanddate.com/time/change/germany\" target=\"_blank\">WinterTime and the clock is set to 02:00 a.m.</a></li>\n      <li>\n        At these times the timezone internally changes from <a target=\"_blank\" href=\"https://www.timeanddate.com/time/zones/cet\">CET</a> (UTC Offset +0100)\n        to <a target=\"_blank\" href=\"https://www.timeanddate.com/time/zones/cest\">CEST</a> (UTC Offset +0200).\n      </li>\n      <li>TimeZones are handled by using <a href=\"https://www.iana.org/time-zones\">IANA TZ Databases</a> which are used by all major time libraries.</li>\n      <li>The DateTimePicker Component consists of a DatePicker (Year, Month, Day) and a TimePicker (Hour, Minute, Second).</li>\n      <li>The DateTimePicker accepts UTC DateStrings (Input).</li>\n      <li>The DateTimePicker emits an UtcResultDate String on change (Output).</li>\n    </ul>\n\n    <bdd-scenario>DateTimePicker initializes with correct UTC Offset depending on TimeZone and Input Date</bdd-scenario>\n    <bdd-given>The Database Date is <bdd-code>2018-01-01T12:00:00.000+0000</bdd-code></bdd-given>\n    <bdd-and>The TimeZone is <bdd-code>Europe/Berlin</bdd-code></bdd-and>\n    <bdd-when>The DateTimePicker Component initializes</bdd-when>\n    <bdd-then>The DatePicker is set to <bdd-code>2018-01-01</bdd-code></bdd-then>\n    <bdd-and>The TimePicker is set to <bdd-code>13:00:00</bdd-code></bdd-and>\n    <bdd-and>The UTC Offset is calculated to <bdd-code>+0100</bdd-code></bdd-and>\n\n    <bdd-scenario>TimePicker change triggers UTC Offset change (no DST to DST)</bdd-scenario>\n    <bdd-given>The Database Date is <bdd-code>2018-03-24T23:00:00.000+0000</bdd-code></bdd-given>\n    <bdd-and>The TimeZone is <bdd-code>Europe/Berlin</bdd-code></bdd-and>\n    <bdd-and>The DateTimePicker Component initialized to DatePicker <bdd-code>2018-03-25</bdd-code> and TimePicker <bdd-code>00:00:00</bdd-code> with UTC Offset <bdd-code>+0100</bdd-code></bdd-and>\n    <bdd-when>The User changes TimePicker to <bdd-code>04:00:00</bdd-code></bdd-when>\n    <bdd-then>The UTC Offset changes to <bdd-code>+0200</bdd-code></bdd-then>\n    <bdd-and>The UtcResultDate emitted is <bdd-code>2018-03-25T02:00:00.000+0000</bdd-code></bdd-and>\n\n    <bdd-scenario>TimePicker change triggers UTC Offset change (DST to no DST)</bdd-scenario>\n\n\n    <bdd-scenario>DatePicker change triggers UTC Offset change (no DST to DST)</bdd-scenario>\n\n    <bdd-scenario>DatePicker change triggers UTC Offset change (DST to no DST)</bdd-scenario>\n\n\n    <div style=\"margin-top:200px;\">\n      Used Frameworks\n      - <a href=\"https://momentjs.com/\">Moment</a>\n      - <a href=\"https://momentjs.com/timezone/\">Moment Timezone</a>\n      - <a href=\"https://github.com/kekeh/mydatepicker\">kekeh/mydatepicker</a>\n    </div>\n  </div>\n  ",
            styles: [
                ".header {\n      background-color:#268383;\n      padding:20px;\n    }",
                ".headline {\n      color:#fff;\n      margin:0;\n      font-weight:300;\n    }",
                ".container {\n      max-width:1600px;\n      margin: 0 auto;\n      padding:20px;\n    }",
                ".form {\n      display:flex;\n      margin-top:6px;\n      align-items: center;\n    }",
                ".fieldlabel {\n      font-weight: 500;\n      width:40px;\n    }",
                ".fieldafter {\n      font-family: 'Roboto Mono', monospace;\n      font-size:14px;\n    }",
                ".timeZoneSelect {\n      max-width:180px;\n      margin-top:40px;\n    }",
                ".errorUtcDate {\n      background-color:#C60000;\n      color:#fff;\n      padding:4px;\n      margin-top:5px;\n    }",
                ".utcResult { font-family: 'Roboto Mono', monospace; min-width:300px; margin-top:60px;}",
                ".mt-m { margin-top:30px !important; }",
                ".mt-xl { margin-top:100px !important; }",
                ".label { width:90px; display:inline-block; }",
                '.row { display:flex; flex-direction: row; flex-wrap: wrap; }',
                '.col { flex:1; display: flex; flex-direction: row; justify-content: center; align-items: flex-start; }',
            ].concat(__WEBPACK_IMPORTED_MODULE_5__app_styles__["a" /* sharedStyles */])
        })
    ], AppComponent);
    return AppComponent;
}());

var TimeZoneAndDateFormat = /** @class */ (function () {
    function TimeZoneAndDateFormat() {
    }
    return TimeZoneAndDateFormat;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mydatepicker__ = __webpack_require__("../../../../mydatepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pc_component__ = __webpack_require__("../../../../../src/app/pc.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utc_date_flow_diagram_component__ = __webpack_require__("../../../../../src/app/utc-date-flow-diagram.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__date_and_time_picker_form_component__ = __webpack_require__("../../../../../src/app/date-and-time-picker-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__bdd_bdd_when_component__ = __webpack_require__("../../../../../src/app/bdd/bdd-when.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__bdd_bdd_then_component__ = __webpack_require__("../../../../../src/app/bdd/bdd-then.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__bdd_bdd_and_component__ = __webpack_require__("../../../../../src/app/bdd/bdd-and.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__bdd_bdd_scenario_component__ = __webpack_require__("../../../../../src/app/bdd/bdd-scenario.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__bdd_bdd_given_component__ = __webpack_require__("../../../../../src/app/bdd/bdd-given.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__bdd_bdd_feature_component__ = __webpack_require__("../../../../../src/app/bdd/bdd-feature.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__bdd_bdd_code_component__ = __webpack_require__("../../../../../src/app/bdd/bdd-code.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__pc_component__["a" /* PcComponent */],
                __WEBPACK_IMPORTED_MODULE_5__utc_date_flow_diagram_component__["a" /* UtcDateFlowDiagramComponent */],
                __WEBPACK_IMPORTED_MODULE_8__date_and_time_picker_form_component__["a" /* DateAndTimePickerFormComponent */],
                __WEBPACK_IMPORTED_MODULE_12__bdd_bdd_scenario_component__["a" /* BddScenarioComponent */],
                __WEBPACK_IMPORTED_MODULE_11__bdd_bdd_and_component__["a" /* BddAndComponent */],
                __WEBPACK_IMPORTED_MODULE_10__bdd_bdd_then_component__["a" /* BddThenComponent */],
                __WEBPACK_IMPORTED_MODULE_9__bdd_bdd_when_component__["a" /* BddWhenComponent */],
                __WEBPACK_IMPORTED_MODULE_13__bdd_bdd_given_component__["a" /* BddGivenComponent */],
                __WEBPACK_IMPORTED_MODULE_14__bdd_bdd_feature_component__["a" /* BddFeatureComponent */],
                __WEBPACK_IMPORTED_MODULE_15__bdd_bdd_code_component__["a" /* BddCodeComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_7__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2_mydatepicker__["MyDatePickerModule"],
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.styles.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export colors */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sharedStyles; });
var colors = {
    primary: '#268383',
    error: '#C60000',
};
var sharedStyles = [
    ".sharedField {\n    outline:0;\n    border:0;\n    border-bottom:2px solid " + colors.primary + ";\n    background-color:#fafafa;\n    padding:5px 10px 5px 10px;\n    font-size:1rem;\n    width:400px;\n    font-family: 'Roboto', sans-serif;\n    }",
    ".sharedFieldHasError{\n    border-bottom:2px solid " + colors.error + ";\n  }",
    ".sharedSelect {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    border-radius: 0;\n    color:#333;\n    outline:0;\n    border:0;\n    border-bottom:2px solid " + colors.primary + ";\n    padding:5px 10px 5px 10px;\n    font-size:1rem;\n    width:420px;\n    background-image: url('./assets/select-field-dropdown-icon.svg');\n    background-color:#fafafa;\n    background-position: right center;\n    background-repeat: no-repeat;\n  }",
    ".sharedSelecthasError {\n    border-bottom:2px solid " + colors.error + ";\n  }",
    /* MY DATEPICKER OVERRIDES */
    "\n  .mydp {\n    border:0 !important;\n    border-radius:0 !important;\n  }\n  .inputnoteditable {\n    border:0 !important;\n    font-size:1rem !important;\n    font-family: 'Roboto', sans-serif !important;\n    padding:5px 10px 5px 10px  !important;\n    background-color:#fafafa !important;\n  }\n  .selectiongroup {\n    border:0 !important;\n    border-radius:0 !important;\n    border-bottom:2px solid " + colors.primary + " !important;\n  }",
    /* BDD STYLES */
    ".bdd-feature-label {\n    font-size:1.5rem;\n    color: " + colors.primary + ";\n    margin-right:5px;\n  }",
    ".bdd-feature-text {\n    font-size:1.5rem;\n    color: #333;\n  }",
    ".bdd-spacer {\n    margin-top:20px !important;\n  }",
    ".bdd-notes {\n    margin:0;\n    margin-top:10px;\n  }\n  .bdd-notes li {\n    line-height:1.1rem;\n    font-size:0.8rem;\n    color:#777;\n    padding-bottom:5px;\n  }",
    ".bdd-notes a {\n    color:#777;\n  }",
    ".bdd-scenario-label {\n    color: #7D1515;\n    font-weight:bold;\n    font-size:1.2rem;\n    margin-left:10px;\n  }",
    ".bdd-scenario-text {\n    font-size:1.2rem;\n    margin-left:5px;\n  }",
    ".bdd-code {\n    font-family: 'Rboto Mono', monospace;\n    background-color:#f4f4f4;\n    font-size:0.9rem;\n  }",
    ".bdd-row {\n    display:flex;\n    margin-top:5px;\n  }",
    ".bdd-given-label, .bdd-and-label, .bdd-when-label, .bdd-then-label {\n    font-weight:bold;\n    text-align:right;\n    width:89px;\n    min-width:89px;\n    margin-right: 5px;\n  }",
    ".bdd-given-label { color: #268383; }",
    ".bdd-and-label { color: #9CCC3C; }",
    ".bdd-when-label { color: #DB8640; }",
    ".bdd-then-label { color: #DB4040; }",
    ".bdd-given-text, .bdd-and-text, .bdd-when-text, .bdd-then-text {\n    color: #333;\n  }",
];


/***/ }),

/***/ "../../../../../src/app/bdd/bdd-and.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BddAndComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_styles__ = __webpack_require__("../../../../../src/app/app.styles.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var BddAndComponent = /** @class */ (function () {
    function BddAndComponent() {
    }
    BddAndComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'bdd-and',
            template: "\n    <div class=\"bdd-row\">\n      <div class=\"bdd-and-label\">And:</div>\n      <div class=\"bdd-and-text\"><ng-content></ng-content></div>\n    </div>\n  ",
            styles: [].concat(__WEBPACK_IMPORTED_MODULE_1__app_styles__["a" /* sharedStyles */])
        })
    ], BddAndComponent);
    return BddAndComponent;
}());



/***/ }),

/***/ "../../../../../src/app/bdd/bdd-code.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BddCodeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_styles__ = __webpack_require__("../../../../../src/app/app.styles.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var BddCodeComponent = /** @class */ (function () {
    function BddCodeComponent() {
    }
    BddCodeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'bdd-code',
            template: "<span class=\"bdd-code\"><ng-content></ng-content></span>",
            styles: [].concat(__WEBPACK_IMPORTED_MODULE_1__app_styles__["a" /* sharedStyles */])
        })
    ], BddCodeComponent);
    return BddCodeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/bdd/bdd-feature.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BddFeatureComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_styles__ = __webpack_require__("../../../../../src/app/app.styles.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var BddFeatureComponent = /** @class */ (function () {
    function BddFeatureComponent() {
    }
    BddFeatureComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'bdd-feature',
            template: "\n    <div class=\"bdd-row\">\n      <div class=\"bdd-feature-label\">Feature:</div>\n      <div class=\"bdd-feature-text\"><ng-content></ng-content></div>\n    </div>\n  ",
            styles: [].concat(__WEBPACK_IMPORTED_MODULE_1__app_styles__["a" /* sharedStyles */])
        })
    ], BddFeatureComponent);
    return BddFeatureComponent;
}());



/***/ }),

/***/ "../../../../../src/app/bdd/bdd-given.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BddGivenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_styles__ = __webpack_require__("../../../../../src/app/app.styles.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var BddGivenComponent = /** @class */ (function () {
    function BddGivenComponent() {
    }
    BddGivenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'bdd-given',
            template: "\n    <div class=\"bdd-row\">\n      <div class=\"bdd-given-label\">Given:</div>\n      <div class=\"bdd-given-text\"><ng-content></ng-content></div>\n    </div>\n  ",
            styles: [].concat(__WEBPACK_IMPORTED_MODULE_1__app_styles__["a" /* sharedStyles */])
        })
    ], BddGivenComponent);
    return BddGivenComponent;
}());



/***/ }),

/***/ "../../../../../src/app/bdd/bdd-scenario.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BddScenarioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_styles__ = __webpack_require__("../../../../../src/app/app.styles.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var BddScenarioComponent = /** @class */ (function () {
    function BddScenarioComponent() {
    }
    BddScenarioComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'bdd-scenario',
            template: "\n    <div class=\"bdd-row\" style=\"margin-top:20px;\">\n      <div class=\"bdd-scenario-label\">Scenario:</div>\n      <div class=\"bdd-scenario-text\"><ng-content></ng-content></div>\n    </div>\n  ",
            styles: [].concat(__WEBPACK_IMPORTED_MODULE_1__app_styles__["a" /* sharedStyles */])
        })
    ], BddScenarioComponent);
    return BddScenarioComponent;
}());



/***/ }),

/***/ "../../../../../src/app/bdd/bdd-then.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BddThenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_styles__ = __webpack_require__("../../../../../src/app/app.styles.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var BddThenComponent = /** @class */ (function () {
    function BddThenComponent() {
    }
    BddThenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'bdd-then',
            template: "\n    <div class=\"bdd-row\">\n      <div class=\"bdd-then-label\">Then:</div>\n      <div class=\"bdd-then-text\"><ng-content></ng-content></div>\n    </div>\n  ",
            styles: [].concat(__WEBPACK_IMPORTED_MODULE_1__app_styles__["a" /* sharedStyles */])
        })
    ], BddThenComponent);
    return BddThenComponent;
}());



/***/ }),

/***/ "../../../../../src/app/bdd/bdd-when.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BddWhenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_styles__ = __webpack_require__("../../../../../src/app/app.styles.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var BddWhenComponent = /** @class */ (function () {
    function BddWhenComponent() {
    }
    BddWhenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'bdd-when',
            template: "\n    <div class=\"bdd-row\">\n      <div class=\"bdd-when-label\">When:</div>\n      <div class=\"bdd-when-text\"><ng-content></ng-content></div>\n    </div>\n  ",
            styles: [].concat(__WEBPACK_IMPORTED_MODULE_1__app_styles__["a" /* sharedStyles */])
        })
    ], BddWhenComponent);
    return BddWhenComponent;
}());



/***/ }),

/***/ "../../../../../src/app/date-and-time-picker-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateAndTimePickerFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utc_helper__ = __webpack_require__("../../../../../src/app/utc-helper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment_timezone__ = __webpack_require__("../../../../moment-timezone/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment_timezone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment_timezone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_util__ = __webpack_require__("../../../../util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_styles__ = __webpack_require__("../../../../../src/app/app.styles.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_takeUntil__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/takeUntil.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DateAndTimePickerFormComponent = /** @class */ (function () {
    function DateAndTimePickerFormComponent() {
        this.validTimezoneAwareMoment = null;
        this.preDestroy = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__["a" /* Subject */]();
        this.errors = {
            utcInputInvalid: false
        };
        this.datePicker = {
            options: {
                dateFormat: 'yyyy-mm-dd',
                editableDateField: false,
                showClearDateBtn: false,
                openSelectorOnInputClick: true,
                showInputField: true,
            }
        };
        this.timePicker = {
            hours: Array.from(new Array(24), function (val, index) { return index; }),
            minutes: Array.from(new Array(60), function (val, index) { return index; }),
            seconds: Array.from(new Array(60), function (val, index) { return index; }),
            options: {
                dateFormat: 'HH:mm:ss'
            }
        };
        this.changed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */](); // e.g. '2018-08-20T12:00:00.000+0000'
    }
    //
    // METHODS
    //
    DateAndTimePickerFormComponent.prototype.ngOnInit = function () {
        this.initDateAndTimePicker();
    };
    DateAndTimePickerFormComponent.prototype.ngOnChanges = function () {
        this.preDestroy.next(true);
        this.initDateAndTimePicker();
    };
    DateAndTimePickerFormComponent.prototype.ngOnDestroy = function () {
        this.preDestroy.next(true);
    };
    DateAndTimePickerFormComponent.prototype.initDateAndTimePicker = function () {
        console.log('initDateAndTimePicker');
        var self = this;
        if (__WEBPACK_IMPORTED_MODULE_1__utc_helper__["a" /* default */].isValidJavaUTCDate(this.utcDate)) {
            this.validTimezoneAwareMoment = null;
            this.validTimezoneAwareMoment = __WEBPACK_IMPORTED_MODULE_2_moment_timezone__(this.utcDate).tz(this.timezone);
            console.log('initDateAndTimePicker datetime:', this.validTimezoneAwareMoment.format());
            self.initDateTimePicker();
            this.errors.utcInputInvalid = false;
        }
        else {
            this.errors.utcInputInvalid = true;
        }
    };
    DateAndTimePickerFormComponent.prototype.getFormattedElement = function (format) {
        return this.validTimezoneAwareMoment.format(format);
    };
    DateAndTimePickerFormComponent.prototype.initDateTimePicker = function () {
        var _this = this;
        var datePickerModel = {
            date: {
                year: this.getFormattedElement('YYYY'),
                month: this.getFormattedElement('M'),
                day: this.getFormattedElement('D'),
            }
        };
        this.form = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormGroup */]({
            date: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](datePickerModel),
            hour: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](this.getFormattedElement('HH')),
            minute: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](this.getFormattedElement('mm')),
            second: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](this.getFormattedElement('ss')),
        });
        this.form.valueChanges.takeUntil(this.preDestroy).subscribe(function (changes) {
            _this.utcResult = _this.updateInternalMomentAndReturnUtcDate(changes);
            _this.emitChange();
        });
    };
    DateAndTimePickerFormComponent.prototype.prefixWithZero = function (num) {
        var temp = 0;
        if (Object(__WEBPACK_IMPORTED_MODULE_4_util__["isString"])(num)) {
            temp = parseInt(num, 10);
        }
        else {
            temp = num;
        }
        return temp < 10 ? "0" + temp : "" + temp;
    };
    DateAndTimePickerFormComponent.prototype.updateInternalMomentAndReturnUtcDate = function (change) {
        //
        // UPDATE DATE AND TIME
        //
        this.validTimezoneAwareMoment = __WEBPACK_IMPORTED_MODULE_2_moment_timezone__(this.validTimezoneAwareMoment
            .year(parseInt(change.date.date.year, 10))
            .month(parseInt(change.date.date.month, 10) - 1) // http://momentjs.com/docs/#/get-set/month/ !!!!
            .date(parseInt(change.date.date.day, 10))
            .hour(parseInt(change.hour, 10))
            .minute(parseInt(change.minute, 10))
            .second(parseInt(change.second, 10))).tz(this.timezone);
        console.log('updated internal datetime:', this.validTimezoneAwareMoment.format());
        //
        // BUILD NEW UTC DATE
        //
        return __WEBPACK_IMPORTED_MODULE_2_moment_timezone__(this.validTimezoneAwareMoment).tz(this.timezone).utc().format(__WEBPACK_IMPORTED_MODULE_1__utc_helper__["a" /* default */].MOMENT_UTC_FORMAT);
    };
    DateAndTimePickerFormComponent.prototype.emitChange = function () {
        this.changed.emit(this.utcResult);
    };
    DateAndTimePickerFormComponent.prototype.getUtcOffset = function () {
        return __WEBPACK_IMPORTED_MODULE_2_moment_timezone__(this.validTimezoneAwareMoment).tz(this.timezone).format('ZZ');
    };
    DateAndTimePickerFormComponent.prototype.getIsDST = function () {
        return __WEBPACK_IMPORTED_MODULE_2_moment_timezone__(this.validTimezoneAwareMoment).tz(this.timezone).isDST();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", String)
    ], DateAndTimePickerFormComponent.prototype, "utcDate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", String)
    ], DateAndTimePickerFormComponent.prototype, "timezone", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", Object)
    ], DateAndTimePickerFormComponent.prototype, "changed", void 0);
    DateAndTimePickerFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-date-and-time-picker-form',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewEncapsulation */].None,
            template: "\n    <app-pc [type]=\"timezone\" *ngIf=\"validTimezoneAwareMoment\">\n      <div *ngIf=\"!errors.utcInputInvalid\">\n        <div\n          *ngIf=\"form\"\n          [formGroup]=\"form\"\n          style=\"width:150px;\"\n        >\n          <my-date-picker\n            selectorWidth=\"100px\"\n            [options]=\"datePicker.options\"\n            formControlName=\"date\"\n          ></my-date-picker>\n        </div>\n        <div\n          *ngIf=\"form?.value.hour\"\n          [formGroup]=\"form\"\n          style=\"width:150px; margin-top:20px; display:flex; align-items: center;\"\n        >\n          <select formControlName=\"hour\" class=\"sharedSelect timePickerField\">\n            <option\n              [value]=\"prefixWithZero(hour)\"\n              *ngFor=\"let hour of timePicker.hours\"\n            >{{prefixWithZero(hour)}}</option>\n          </select>\n          <select formControlName=\"minute\" class=\"sharedSelect timePickerField\">\n            <option\n              [value]=\"prefixWithZero(minute)\"\n              *ngFor=\"let minute of timePicker.minutes\"\n            >{{prefixWithZero(minute)}}</option>\n          </select>\n          <select formControlName=\"second\" class=\"sharedSelect timePickerField\">\n            <option\n              [value]=\"prefixWithZero(second)\"\n              *ngFor=\"let second of timePicker.seconds\"\n            >{{prefixWithZero(second)}}</option>\n          </select>\n          <span>&nbsp;(HH:mm:ss)</span>\n        </div>\n        <div class=\"utcOffset\">\n          UTC Offset: {{getUtcOffset()}}\n        </div>\n        <div class=\"dst\">\n          Is <a href=\"https://momentjs.com/docs/#/query/is-daylight-saving-time/\" target=\"_blank\">DST:</a>\n          {{getIsDST() ? 'YES' : 'NO'}}\n        </div>\n      </div>\n    </app-pc>\n",
            styles: [
                ".img { width:100%; }",
                ".bug { color: #C60000;}",
                ".dst { margin-top:5px; margin-left:20px;}",
                ".timePickerField { min-width:55px; margin-right:5px; }",
                ".utcOffset { margin-top:30px; margin-left:20px; }",
            ].concat(__WEBPACK_IMPORTED_MODULE_5__app_styles__["a" /* sharedStyles */])
        })
    ], DateAndTimePickerFormComponent);
    return DateAndTimePickerFormComponent;
}());

var DatePickerSettings = /** @class */ (function () {
    function DatePickerSettings() {
    }
    return DatePickerSettings;
}());
var DateTimeFormChange = /** @class */ (function () {
    function DateTimeFormChange() {
    }
    return DateTimeFormChange;
}());


/***/ }),

/***/ "../../../../../src/app/pc.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PcComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PcComponent = /** @class */ (function () {
    function PcComponent() {
        this.style = {
            backgroundImage: '',
        };
    }
    PcComponent.prototype.ngOnInit = function () {
        if (this.type === 'Europe/Berlin') {
            this.fileSuffix = 'germany';
        }
        if (this.type === 'Europe/London') {
            this.fileSuffix = 'united_kingdom';
        }
        if (this.type === 'America/New_York') {
            this.fileSuffix = 'united_states';
        }
        if (this.type === 'Japan') {
            this.fileSuffix = 'japan';
        }
        if (this.type === 'Asia/Singapore') {
            this.fileSuffix = 'singapore';
        }
        if (this.type === 'Asia/Hong_Kong') {
            this.fileSuffix = 'hong_kong';
        }
        if (this.type === 'Database') {
            this.fileSuffix = 'database';
        }
        this.style.backgroundImage = "url('./assets/flag_" + this.fileSuffix + ".svg')";
    };
    PcComponent.prototype.ngOnChanges = function () {
        this.ngOnInit();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", String)
    ], PcComponent.prototype, "type", void 0);
    PcComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-pc',
            template: "\n    <div class=\"pc\">\n      <div class=\"pcInner\" [ngStyle]=\"style\">\n        <ng-content></ng-content>\n      </div>\n    </div>\n  ",
            styles: [
                ".pc {\n      width:300px;\n      height:230px;\n      padding:35px;\n      background-size: 372px auto;\n      background-repeat: no-repeat;\n      background-image: url('./assets/pc.png');\n    }",
                ".pcInner {\n      width:100%;\n      height: 100%;\n      background-position-x: 240px;\n      background-position-y: 130px;\n      background-size: 60px auto;\n      background-repeat: no-repeat;\n    }",
            ]
        })
    ], PcComponent);
    return PcComponent;
}());



/***/ }),

/***/ "../../../../../src/app/utc-date-flow-diagram.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtcDateFlowDiagramComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UtcDateFlowDiagramComponent = /** @class */ (function () {
    function UtcDateFlowDiagramComponent() {
    }
    UtcDateFlowDiagramComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-utc-date-flow-diagram',
            template: "<div style=\"width:100%;\">\n    <a href=\"./assets/utc-date-flow.svg\" target=\"_blank\"><img src=\"./assets/utc-date-flow.svg\" class=\"img\"/></a>\n  </div>",
            styles: [
                ".img { width:100%; }",
            ]
        })
    ], UtcDateFlowDiagramComponent);
    return UtcDateFlowDiagramComponent;
}());



/***/ }),

/***/ "../../../../../src/app/utc-helper.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var UtcHelper = /** @class */ (function () {
    function UtcHelper() {
    }
    /**
     * Returns true for '2018-08-20T12:00:00.000+0000'
     */
    UtcHelper.isValidJavaUTCDate = function (date) {
        return /^[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}.[0-9]{3}[+][0-9]{4}$/.test(date);
    };
    UtcHelper.MOMENT_UTC_FORMAT = 'YYYY-MM-DDTHH:mm:ss.SSSZZ';
    return UtcHelper;
}());
/* harmony default export */ __webpack_exports__["a"] = (UtcHelper);


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./mt": "../../../../moment/locale/mt.js",
	"./mt.js": "../../../../moment/locale/mt.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
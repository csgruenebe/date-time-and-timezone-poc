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
        this.form.get('utcDate').valueChanges.subscribe(function (change) {
            var tempDate = change + '+0000';
            if (__WEBPACK_IMPORTED_MODULE_3__utc_helper__["a" /* default */].isValidJavaUTCDate(tempDate)) {
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
            template: "\n  <div class=\"header\">\n    <div class=\"container\">\n      <h1 class=\"headline\">UTC Date Time and Timezone Flow Proof of Concept</h1>\n    </div>\n  </div>\n  <div class=\"container\">\n\n    <div class=\"row\">\n      <div class=\"col\">\n        <app-utc-date-flow-diagram style=\"width:80%;\"></app-utc-date-flow-diagram>\n      </div>\n    </div>\n\n    <div class=\"row mt-m\">\n      <div class=\"col\">\n        <div>\n          <h3>1. Set UTC DateTime in Database</h3>\n          <app-mac type=\"Database\">\n            <form [formGroup]=\"form\" class=\"form\">\n              <div class=\"fieldlabel\">UTC</div>\n              <input\n                class=\"sharedField\"\n                [class.sharedFieldHasError]=\"errorUtcDate\"\n                style=\"width:195px\" type=\"text\" formControlName=\"utcDate\" />\n              <div class=\"fieldafter\">\n                +0000\n              </div>\n            </form>\n            <div class=\"errorUtcDate\" *ngIf=\"errorUtcDate\">\n              Not a valid UTC Date in form of <br>2018-08-20T12:00:00.000+0000\n            </div>\n          </app-mac>\n        </div>\n      </div>\n      <div class=\"col\">\n        <div [formGroup]=\"form\">\n          <h3>2. Select TimeZone</h3>\n          <select\n            formControlName=\"selectedTimeZone\"\n            class=\"sharedSelect timeZoneSelect\">\n            <option\n              [value]=\"availableTimeZone.tz\"\n              *ngFor=\"let availableTimeZone of availableTimeZonesAndDateFormats\"\n            >{{availableTimeZone.tz}}</option>\n          </select>\n        </div>\n      </div>\n      <div class=\"col\">\n        <div>\n          <h3>3. Use DatePicker</h3>\n          <app-date-and-time-picker-form\n            *ngIf=\"form?.value?.selectedTimeZone\"\n            [utcDate]=\"validUtcDate\"\n            [timezone]=\"form.value.selectedTimeZone\"\n            (changed)=\"processDateTimeChange($event)\"\n          ></app-date-and-time-picker-form>\n        </div>\n      </div>\n      <div class=\"col\">\n        <div>\n          <h3>4. Utc Result for DB</h3>\n          <div class=\"utcResult\">{{validUtcDateResult ? validUtcDateResult : '...' }}</div>\n        </div>\n      </div>\n    </div>\n\n\n    <h2 class=\"mt-xl\">Daylight Saving Time</h2>\n\n    <p>On 25-03-2018 at 02:00 a.m time changes to SummerTime in Europe/Berlin/CET meaning the Clock is set to 03:00 a.m.</p>\n    <p>\n      That means internally the Timezone changes from\n      <a target=\"_blank\" href=\"https://www.timeanddate.com/time/zones/cet\">CET</a> (UTC+0100)\n      to <a target=\"_blank\" href=\"https://www.timeanddate.com/time/zones/cest\">CEST</a> (UTC+0200).\n    </p>\n\n    <div style=\"margin-top:200px;\">\n      Used Frameworks\n      - <a href=\"https://momentjs.com/\">Moment</a>\n      - <a href=\"https://momentjs.com/timezone/\">Moment Timezone</a>\n      - <a href=\"https://github.com/kekeh/mydatepicker\">kekeh/mydatepicker</a>\n    </div>\n\n\n  </div>\n  ",
            styles: [
                ".header {\n      background-color:#407F7F;\n      padding:20px;\n    }",
                ".headline {\n      color:#fff;\n      margin:0;\n    }",
                ".container {\n      max-width:1600px;\n      margin: 0 auto;\n      padding:20px;\n    }",
                ".form {\n      display:flex;\n      margin-top:6px;\n      align-items: center;\n    }",
                ".fieldlabel {\n      font-weight: 500;\n      width:40px;\n    }",
                ".fieldafter {\n      font-family: 'Roboto Mono', monospace;\n      font-size:14px;\n    }",
                ".timeZoneSelect {\n      max-width:180px;\n      margin-top:40px;\n    }",
                ".errorUtcDate {\n      background-color:#C60000;\n      color:#fff;\n      padding:4px;\n      margin-top:5px;\n    }",
                ".utcResult { font-family: 'Roboto Mono', monospace; min-width:300px; margin-top:60px;}",
                ".mt-m { margin-top:30px; }",
                ".mt-xl { margin-top:100px; }",
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mac_component__ = __webpack_require__("../../../../../src/app/mac.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utc_date_flow_diagram_component__ = __webpack_require__("../../../../../src/app/utc-date-flow-diagram.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__date_and_time_picker_form_component__ = __webpack_require__("../../../../../src/app/date-and-time-picker-form.component.ts");
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
                __WEBPACK_IMPORTED_MODULE_4__mac_component__["a" /* MacComponent */],
                __WEBPACK_IMPORTED_MODULE_5__utc_date_flow_diagram_component__["a" /* UtcDateFlowDiagramComponent */],
                __WEBPACK_IMPORTED_MODULE_8__date_and_time_picker_form_component__["a" /* DateAndTimePickerFormComponent */],
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
    primary: '#407F7F',
    error: '#C60000',
};
var sharedStyles = [
    ".sharedField {\n    outline:0;\n    border:0;\n    border-bottom:2px solid " + colors.primary + ";\n    background-color:#fafafa;\n    padding:5px 10px 5px 10px;\n    font-size:1rem;\n    width:400px;\n    font-family: 'Roboto', sans-serif;\n    }",
    ".sharedFieldHasError{\n    border-bottom:2px solid " + colors.error + ";\n  }",
    ".sharedSelect {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    border-radius: 0;\n    color:#333;\n    outline:0;\n    border:0;\n    border-bottom:2px solid " + colors.primary + ";\n    padding:5px 10px 5px 10px;\n    font-size:1rem;\n    width:420px;\n    background-image: url('./assets/select-field-dropdown-icon.svg');\n    background-color:#fafafa;\n    background-position: right center;\n    background-repeat: no-repeat;\n  }",
    ".sharedSelecthasError {\n    border-bottom:2px solid " + colors.error + ";\n  }",
    /* MY DATEPICKER OVERRIDES */
    "\n  .mydp {\n    border:0 !important;\n    border-radius:0 !important;\n  }\n  .inputnoteditable {\n    border:0 !important;\n    font-size:1rem !important;\n    font-family: 'Roboto', sans-serif !important;\n    padding:5px 10px 5px 10px  !important;\n    background-color:#fafafa !important;\n  }\n  .selectiongroup {\n    border:0 !important;\n    border-radius:0 !important;\n    border-bottom:2px solid " + colors.primary + " !important;\n  }",
];


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
            },
            formGroup: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormGroup */]({
                date: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](null)
            }),
        };
        this.timePicker = {
            hours: Array.from(new Array(24), function (val, index) { return index; }),
            minutes: Array.from(new Array(60), function (val, index) { return index; }),
            seconds: Array.from(new Array(60), function (val, index) { return index; }),
            options: {
                dateFormat: 'HH:mm:ss'
            },
            formGroup: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormGroup */]({
                hour: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](null),
                minute: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](null),
                second: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](null),
            }),
        };
        this.changed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */](); // e.g. '2018-08-20T12:00:00.000+0000'
    }
    //
    // METHODS
    //
    DateAndTimePickerFormComponent.prototype.ngOnInit = function () {
        this.initDateAndTimePicker();
        this.initChangeListener();
    };
    DateAndTimePickerFormComponent.prototype.ngOnChanges = function () {
        this.initDateAndTimePicker();
    };
    DateAndTimePickerFormComponent.prototype.initDateAndTimePicker = function () {
        if (__WEBPACK_IMPORTED_MODULE_1__utc_helper__["a" /* default */].isValidJavaUTCDate(this.utcDate)) {
            this.validTimezoneAwareMoment = __WEBPACK_IMPORTED_MODULE_2_moment_timezone__(this.utcDate).tz(this.timezone);
            this.initDatePicker();
            this.initTimePicker();
            this.errors.utcInputInvalid = false;
        }
        else {
            this.errors.utcInputInvalid = true;
        }
    };
    DateAndTimePickerFormComponent.prototype.initDatePicker = function () {
        var datePickerModel = {
            date: {
                year: parseInt(this.validTimezoneAwareMoment.format('YYYY'), 10),
                month: parseInt(this.validTimezoneAwareMoment.format('M'), 10),
                day: parseInt(this.validTimezoneAwareMoment.format('D'), 10),
            }
        };
        this.datePicker.formGroup.get('date').setValue(datePickerModel);
    };
    DateAndTimePickerFormComponent.prototype.initTimePicker = function () {
        this.timePicker.formGroup.get('hour').setValue(this.validTimezoneAwareMoment.format('HH'));
        this.timePicker.formGroup.get('minute').setValue(this.validTimezoneAwareMoment.format('mm'));
        this.timePicker.formGroup.get('second').setValue(this.validTimezoneAwareMoment.format('ss'));
    };
    DateAndTimePickerFormComponent.prototype.initChangeListener = function () {
        var _this = this;
        console.log('initChangeListener');
        this.datePicker.formGroup.get('date').valueChanges.subscribe(function (changes) {
            _this.utcResult = _this.buildJavaUtcResultDate(_this.timePicker.formGroup.value, changes);
            _this.emitChange();
        });
        this.timePicker.formGroup.valueChanges.subscribe(function (changes) {
            _this.utcResult = _this.buildJavaUtcResultDate(changes, _this.datePicker.formGroup.value.date);
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
    DateAndTimePickerFormComponent.prototype.buildJavaUtcResultDate = function (time, date) {
        var tz = this.validTimezoneAwareMoment.format('ZZ');
        var dateStringInCurrentTimeZone = date.date.year + "-" + this.prefixWithZero(date.date.month) + "-" + this.prefixWithZero(date.date.day) + "T" + time.hour + ":" + time.minute + ":" + time.second + ".000" + tz;
        return __WEBPACK_IMPORTED_MODULE_2_moment_timezone__(dateStringInCurrentTimeZone).utc().format(__WEBPACK_IMPORTED_MODULE_1__utc_helper__["a" /* default */].MOMENT_UTC_FORMAT);
    };
    DateAndTimePickerFormComponent.prototype.emitChange = function () {
        this.changed.emit(this.utcResult);
    };
    DateAndTimePickerFormComponent.prototype.getUtcOffset = function () {
        return this.validTimezoneAwareMoment.format('ZZ');
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
            template: "\n    <app-mac [type]=\"timezone\">\n      <div *ngIf=\"!errors.utcInputInvalid\">\n        <div\n          *ngIf=\"datePicker?.formGroup\"\n          [formGroup]=\"datePicker.formGroup\"\n          style=\"width:150px;\"\n        >\n          <my-date-picker\n            selectorWidth=\"100px\"\n            [options]=\"datePicker.options\"\n            formControlName=\"date\"\n          ></my-date-picker>\n        </div>\n        <div\n          *ngIf=\"timePicker?.formGroup?.value.hour\"\n          [formGroup]=\"timePicker.formGroup\"\n          style=\"width:150px; margin-top:20px; display:flex; align-items: center;\"\n        >\n          <select formControlName=\"hour\" class=\"sharedSelect timePickerField\">\n            <option\n              [value]=\"prefixWithZero(hour)\"\n              *ngFor=\"let hour of timePicker.hours\"\n            >{{prefixWithZero(hour)}}</option>\n          </select>\n          <select formControlName=\"minute\" class=\"sharedSelect timePickerField\">\n            <option\n              [value]=\"prefixWithZero(minute)\"\n              *ngFor=\"let minute of timePicker.minutes\"\n            >{{prefixWithZero(minute)}}</option>\n          </select>\n          <select formControlName=\"second\" class=\"sharedSelect timePickerField\">\n            <option\n              [value]=\"prefixWithZero(second)\"\n              *ngFor=\"let second of timePicker.seconds\"\n            >{{prefixWithZero(second)}}</option>\n          </select>\n          <span>&nbsp;(HH:mm:ss)</span>\n        </div>\n        <div class=\"utcOffset\">\n          UTC Offset: {{getUtcOffset()}}\n        </div>\n      </div>\n    </app-mac>\n",
            styles: [
                ".img { width:100%; }",
                ".result { margin-top:20px; }",
                ".timePickerField { min-width:55px; margin-right:5px; }",
                ".utcOffset { margin-top:30px; }",
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
var FormTime = /** @class */ (function () {
    function FormTime() {
    }
    return FormTime;
}());
var FormDate = /** @class */ (function () {
    function FormDate() {
    }
    return FormDate;
}());


/***/ }),

/***/ "../../../../../src/app/mac.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MacComponent; });
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

var MacComponent = /** @class */ (function () {
    function MacComponent() {
        this.style = {
            backgroundImage: '',
        };
    }
    MacComponent.prototype.ngOnInit = function () {
        if (this.type === 'Europe/Berlin') {
            this.fileSuffix = 'de';
        }
        if (this.type === 'Europe/London') {
            this.fileSuffix = 'uk';
        }
        if (this.type === 'America/New_York') {
            this.fileSuffix = 'us';
        }
        if (this.type === 'Japan') {
            this.fileSuffix = 'ja';
        }
        if (this.type === 'Asia/Singapore') {
            this.fileSuffix = 'si';
        }
        if (this.type === 'Asia/Hong_Kong') {
            this.fileSuffix = 'ho';
        }
        if (this.type === 'Database') {
            this.fileSuffix = 'db';
        }
        this.style.backgroundImage = "url('./assets/mac-" + this.fileSuffix + ".jpg')";
    };
    MacComponent.prototype.ngOnChanges = function () {
        this.ngOnInit();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", String)
    ], MacComponent.prototype, "type", void 0);
    MacComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-mac',
            template: "\n    <div\n      class=\"mac\"\n      [ngStyle]=\"style\"\n    >\n      <ng-content></ng-content>\n    </div>\n  ",
            styles: [
                '.mac { background-size: 100% auto; padding:35px; width:300px; height:230px; background-repeat: no-repeat;}',
            ]
        })
    ], MacComponent);
    return MacComponent;
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
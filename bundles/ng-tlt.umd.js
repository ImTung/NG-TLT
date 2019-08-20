(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('ng-tlt', ['exports', '@angular/core'], factory) :
    (factory((global['ng-tlt'] = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NGTLTService = /** @class */ (function () {
        function NGTLTService() {
        }
        NGTLTService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        NGTLTService.ctorParameters = function () { return []; };
        /** @nocollapse */ NGTLTService.ngInjectableDef = i0.defineInjectable({ factory: function NGTLTService_Factory() { return new NGTLTService(); }, token: NGTLTService, providedIn: "root" });
        return NGTLTService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NGTLTComponent = /** @class */ (function () {
        function NGTLTComponent() {
        }
        /**
         * @return {?}
         */
        NGTLTComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        NGTLTComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: "TLT-NG-TLT",
                        template: "\n    <p>\n      Initial v0.0.1\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        NGTLTComponent.ctorParameters = function () { return []; };
        return NGTLTComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NGTLTModule = /** @class */ (function () {
        function NGTLTModule() {
        }
        NGTLTModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [NGTLTComponent],
                        imports: [],
                        exports: [NGTLTComponent]
                    },] }
        ];
        return NGTLTModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.NGTLTService = NGTLTService;
    exports.NGTLTComponent = NGTLTComponent;
    exports.NGTLTModule = NGTLTModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ng-tlt.umd.js.map
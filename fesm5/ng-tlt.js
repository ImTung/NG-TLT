import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NGTLTService = /** @class */ (function () {
    function NGTLTService() {
    }
    NGTLTService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NGTLTService.ctorParameters = function () { return []; };
    /** @nocollapse */ NGTLTService.ngInjectableDef = defineInjectable({ factory: function NGTLTService_Factory() { return new NGTLTService(); }, token: NGTLTService, providedIn: "root" });
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
        { type: Component, args: [{
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
        { type: NgModule, args: [{
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

export { NGTLTService, NGTLTComponent, NGTLTModule };

//# sourceMappingURL=ng-tlt.js.map
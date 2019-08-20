import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NGTLTService {
    constructor() { }
}
NGTLTService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NGTLTService.ctorParameters = () => [];
/** @nocollapse */ NGTLTService.ngInjectableDef = defineInjectable({ factory: function NGTLTService_Factory() { return new NGTLTService(); }, token: NGTLTService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NGTLTComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
NGTLTComponent.decorators = [
    { type: Component, args: [{
                selector: "TLT-NG-TLT",
                template: `
    <p>
      Initial v0.0.1
    </p>
  `
            }] }
];
/** @nocollapse */
NGTLTComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NGTLTModule {
}
NGTLTModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NGTLTComponent],
                imports: [],
                exports: [NGTLTComponent]
            },] }
];

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
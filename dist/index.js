"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const forms_1 = require("@angular/forms");
const life_game_component_1 = require("./components/life-game/life-game.component");
/**
 * Component, Directive, Pipeを含まれるModule
 */
let LifeGameModule = LifeGameModule_1 = class LifeGameModule {
    static forRoot() {
        return {
            ngModule: LifeGameModule_1,
            providers: []
        };
    }
};
LifeGameModule = LifeGameModule_1 = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule
        ],
        declarations: [
            life_game_component_1.LifeGameComponent
        ],
        exports: [
            life_game_component_1.LifeGameComponent
        ],
        providers: [],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
    })
], LifeGameModule);
exports.LifeGameModule = LifeGameModule;
var LifeGameModule_1;
//# sourceMappingURL=index.js.map
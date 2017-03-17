"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const life_game_service_1 = require("./life-game.service");
let LifeGameComponent = class LifeGameComponent {
    constructor(service) {
        this.service = service;
        this.width = 1;
        this.height = 1;
        this.interval = 500;
        this.rule = null;
        this.afterGridViewInit = new core_1.EventEmitter();
    }
    ngAfterViewInit() {
        this.afterGridViewInit.emit(this.service);
    }
    onClickCell(y, x) {
        if (!this.service.gamePlayFg) {
            this.service.lifeMap[y][x] = !this.service.lifeMap[y][x];
        }
    }
    ngOnChanges(changes) {
        for (let propName in changes) {
            if ('height' === propName) {
                if (this.service.lifeMap.length <= changes[propName].currentValue) {
                    for (let y = this.service.lifeMap.length; y < changes[propName].currentValue; y++) {
                        this.service.lifeMap.push(this.getNewRow(changes[propName].currentValue));
                    }
                }
                else {
                    for (let y = this.service.lifeMap.length; y > changes[propName].currentValue; y--) {
                        this.service.lifeMap.pop();
                    }
                }
            }
            else if ('width' === propName) {
                this.service.lifeMap.forEach((row) => {
                    if (row.length <= changes[propName].currentValue) {
                        for (let x = row.length; x < changes[propName].currentValue; x++) {
                            //row.push(false);
                        }
                    }
                    else {
                        for (let x = row.length; x > changes[propName].currentValue; x--) {
                            //row.pop();
                        }
                    }
                });
            }
            else if ('interval' === propName) {
                this.service.interval = this.interval;
            }
            else if ('rule' === propName) {
                this.service.rule = this.rule;
            }
        }
    }
    getNewRow(width) {
        let row = [];
        for (let x = 0; x < width; x++) {
            row.push(false);
        }
        return row;
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], LifeGameComponent.prototype, "width", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], LifeGameComponent.prototype, "height", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], LifeGameComponent.prototype, "size", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], LifeGameComponent.prototype, "interval", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], LifeGameComponent.prototype, "rule", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], LifeGameComponent.prototype, "afterGridViewInit", void 0);
LifeGameComponent = __decorate([
    core_1.Component({
        selector: 'life-game',
        styleUrls: ['life-game.component.css'],
        moduleId: module.id, templateUrl: 'life-game.component.html',
        providers: [life_game_service_1.LifeGameService]
    }),
    __metadata("design:paramtypes", [life_game_service_1.LifeGameService])
], LifeGameComponent);
exports.LifeGameComponent = LifeGameComponent;
//# sourceMappingURL=life-game.component.js.map
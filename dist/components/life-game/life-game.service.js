"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let LifeGameService = class LifeGameService {
    constructor() {
        /**
         * Y, X
         */
        this.lifeMap = [];
        this.gamePlayFg = false;
        this.interval = 500;
        this.rule = null;
        this.thread = 0;
        this.tempLifeMap = [];
    }
    setLifeMap(lifeMap) {
        this.lifeMap = lifeMap;
        if (this.thread) {
            this.end();
            this.start();
        }
    }
    start() {
        this.copyTemp();
        this.thread = Number(setInterval(() => {
            this.lifeMap.forEach((row, y) => {
                row.forEach((cell, x) => {
                    this.doLife(y, x);
                });
            });
            this.lifeMap.forEach((row, y) => {
                row.forEach((cell, x) => {
                    this.lifeMap[y][x] = this.tempLifeMap[y][x];
                });
            });
        }, this.interval));
    }
    end() {
        clearInterval(this.thread);
        this.thread = 0;
    }
    doLife(y, x) {
        if (this.rule) {
            let cell = this.getLeftRightLifeCell(y, x);
            this.rule.some((ruleCell) => {
                let count = 0;
                cell.forEach((life, idx) => {
                    if (life === ruleCell[idx]) {
                        count++;
                    }
                });
                if (count == 3) {
                    this.tempLifeMap[y][x] = ruleCell[3];
                    return true;
                }
                else {
                    return false;
                }
            });
        }
        else {
            let count = this.getPeripheryLifeCellCount(y, x);
            if (this.lifeMap[y][x]) {
                if (count != 2 && count != 3) {
                    this.tempLifeMap[y][x] = false;
                }
            }
            else {
                if (count == 3) {
                    this.tempLifeMap[y][x] = true;
                }
            }
        }
    }
    copyTemp() {
        this.tempLifeMap = [];
        this.lifeMap.forEach((row, y) => {
            this.tempLifeMap.push([]);
            row.forEach((cell, x) => {
                if (this.lifeMap[y][x]) {
                    this.tempLifeMap[y].push(true);
                }
                else {
                    this.tempLifeMap[y].push(false);
                }
            });
        });
    }
    getLeftRightLifeCell(y, x) {
        let cell = [false, this.lifeMap[y][x], false];
        if (x - 1 >= 0) {
            cell[0] = this.lifeMap[y][x - 1];
        }
        if (x + 1 < this.lifeMap[y].length) {
            cell[2] = this.lifeMap[y][x + 1];
        }
        return cell;
    }
    getPeripheryLifeCellCount(y, x) {
        let count = 0;
        for (let tmpY = y - 1; tmpY <= y + 1; tmpY++) {
            for (let tmpX = x - 1; tmpX <= x + 1; tmpX++) {
                if (tmpY >= 0 && tmpY < this.lifeMap.length
                    && tmpX >= 0 && tmpX < this.lifeMap[tmpY].length
                    && (tmpX != x || tmpY != y)) {
                    if (this.lifeMap[tmpY][tmpX]) {
                        count++;
                    }
                }
            }
        }
        return count;
    }
};
LifeGameService = __decorate([
    core_1.Injectable()
], LifeGameService);
exports.LifeGameService = LifeGameService;
//# sourceMappingURL=life-game.service.js.map
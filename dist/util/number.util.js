"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 数値を操作する
 *
 * @type Util {static method util}
 */
class NumberUtil {
    /**
     * 文字列を数値に変換する
     *
     * @param numText     変換する数値
     * @returns {number}  変換した数値
     */
    static parseNumber(numText) {
        let num;
        if (numText.indexOf('.') >= 0) {
            num = parseFloat(numText);
        }
        else {
            num = parseInt(numText, 10);
        }
        return num;
    }
}
exports.NumberUtil = NumberUtil;
//# sourceMappingURL=number.util.js.map
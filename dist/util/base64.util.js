"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Base64形式でencode, decodeを行う。
 *
 * @type Util {static method util}
 */
class Base64Util {
    /**
     * unicode base64でencodeする
     *
     * @param str
     * @returns {string}
     */
    static encodeUnicode(str) {
        return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
            match = null;
            return String.fromCharCode(Number('0x' + p1));
        }));
    }
    /**
     * unicode base64でdecodeする
     *
     * @param str
     * @returns {string}
     */
    static decodeUnicode(str) {
        return decodeURIComponent(Array.prototype.map.call(atob(str), (c) => {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    }
}
exports.Base64Util = Base64Util;
//# sourceMappingURL=base64.util.js.map
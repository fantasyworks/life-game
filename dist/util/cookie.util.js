"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ng2_cookies_1 = require("ng2-cookies/ng2-cookies");
const json_util_1 = require("./json.util");
/**
 * クッキーをJson形式で管理する
 *
 * @type Util {static method util}
 */
class CookieUtil {
    /**
     * ObjectをJson形式でクッキーに貯蔵する。
     *
     * @param key {string}
     * @param obj {Object} 変換して貯蔵するObject
     */
    static set(key, obj) {
        ng2_cookies_1.Cookie.set(key, json_util_1.JsonUtil.serialize(obj, true));
    }
    /**
     * Json形式のクッキーをObject化する。
     *
     * @param key
     * @returns {Object} 引張て変換したObject
     */
    static get(key) {
        let jsonCookieResult = ng2_cookies_1.Cookie.get(key);
        if (jsonCookieResult) {
            return json_util_1.JsonUtil.deserialize(jsonCookieResult);
        }
        else {
            return null;
        }
    }
}
exports.CookieUtil = CookieUtil;
//# sourceMappingURL=cookie.util.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 伝送用データを操作する
 *
 * @type Util {static method util}
 */
class JsonUtil {
    /**
     * 通信でもらったデータをオブジェクト化する
     *
     * @param data
     * @returns {any}
     */
    static deserialize(data) {
        return JSON.parse(data, JsonUtil.reviveDateTime);
    }
    /**
     * Jsonデータの中でDate形式をStringに変換する
     *
     * @param key
     * @param value
     * @returns {any}
     */
    static reviveDateTime(key, value) {
        key = null;
        if (typeof value === 'string') {
            let a = /\/Date\((\d*)\)\//.exec(value);
            if (a) {
                return new Date(+a[1]);
            }
        }
        return value;
    }
    /**
     * Objectを通信用のJsonに変換する
     *
     * @param data
     * @param parseDateFg データ型を伝送用のデータに変換するか
     * @returns {string}
     */
    static serialize(data, parseDateFg = false) {
        Object.keys(data).forEach((key) => {
            if (data[key] instanceof Date) {
                if (parseDateFg) {
                    data[key] = '/Date(' + data[key].getTime() + ')/';
                }
                else {
                    data[key] = data[key].getTime();
                }
            }
        });
        return JSON.stringify(data);
    }
}
exports.JsonUtil = JsonUtil;
//# sourceMappingURL=json.util.js.map
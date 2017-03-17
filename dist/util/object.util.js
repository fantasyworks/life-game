"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * オブジェクトを操作する
 *
 * @type Util {static method util}
 */
class ObjectUtil {
    /**
     * targetにcopyObjをcopyする
     *
     * @param target
     * @param copyObj
     */
    static assign(target, copyObj) {
        return Object.assign(target, copyObj);
    }
    /**
     * 二つのオブジェクトを交換する
     *
     * @param src
     * @param tgt
     */
    static swapObject(src, tgt) {
        let tmp = Object.assign({}, src);
        Object.assign(src, tgt);
        Object.assign(tgt, tmp);
    }
    /**
     * 配列中の項目を交換する
     *
     * @param array
     * @param srcIdx
     * @param tgtInx
     */
    static swapObjectInArray(array, srcIdx, tgtInx) {
        let tmp = array[srcIdx];
        array[srcIdx] = array[tgtInx];
        array[tgtInx] = tmp;
    }
    /**
     * 二つのオブジェクトが同じなのか比較する
     *
     * @param src Object
     * @param tgt Object
     * @returns {boolean}
     */
    static equals(src, tgt) {
        let result = true;
        Object.keys(src).some((key) => {
            if (src[key] !== tgt[key]) {
                result = false;
                return true;
            }
            return false;
        });
        return result;
    }
}
exports.ObjectUtil = ObjectUtil;
//# sourceMappingURL=object.util.js.map
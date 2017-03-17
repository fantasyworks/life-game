"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Inputを操作する
 *
 * @type Util {static method util}
 */
class InputElUtil {
    /**
     * 指定した領域を選択する。
     *
     * @param el
     * @param start
     * @param end
     */
    static selectRange(el, start, end) {
        let range = null;
        if (el.createRange) {
            range = el.createTextRange();
            range.collapse(true);
            range.moveEnd('character', end);
            range.moveStart('character', start);
            range.select();
        }
        else if (el.setSelectionRange) {
            range = el.setSelectionRange(start, end);
        }
    }
}
exports.InputElUtil = InputElUtil;
//# sourceMappingURL=input-el.util.js.map
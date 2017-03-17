/**
 * Inputを操作する
 *
 * @type Util {static method util}
 */
export class InputElUtil {
  /**
   * 指定した領域を選択する。
   *
   * @param el
   * @param start
   * @param end
   */
  public static selectRange(el: any, start: number, end: number) {
    let range: any = null;
    if (el.createRange) {
      range = el.createTextRange();
      range.collapse(true);
      range.moveEnd('character', end);
      range.moveStart('character', start);
      range.select();
    } else if (el.setSelectionRange) {
      range = el.setSelectionRange(start, end);
    }
  }
}

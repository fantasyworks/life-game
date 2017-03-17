declare function escape(s: string): string;
/**
 * 数値を操作する
 *
 * @type Util {static method util}
 */
export class NumberUtil {
  /**
   * 文字列を数値に変換する
   *
   * @param numText     変換する数値
   * @returns {number}  変換した数値
   */
  public static parseNumber(numText: string): number {
    let num: number;
    if (numText.indexOf('.') >= 0) {
      num = parseFloat(numText);
    } else {
      num = parseInt(numText, 10);
    }
    return num;
  }
}

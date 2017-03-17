declare function escape(s: string): string;
/**
 * 文字列を操作する
 * @type Util {static method util}
 */
export class StringUtil {
  /**
   * 文字のサイズを測る。（EM文字は*2, 一般文字は*1.33)
   *
   * @param str
   * @returns {number}
   */
  public static getStringSize(str: string) {
    return StringUtil.getEmStringSize(str)
      + StringUtil.getNotEmStringSize(str) * 1.33;
  }

  /**
   * EM文字のサイズを測る。（文字*2)
   *
   * @param str
   * @returns {number}
   */
  public static getEmStringSize(str: string) {
    let len = 0;
    if (str && str.length > 0) {
      str = escape(str);
      for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === '%') {
          if (str.charAt(++i) === 'u') {
            i += 3;
            len += 2;
          }
          i++;
        }
      }
    }
    return len;
  }

  /**
   * EM文字以外のサイズを測る。
   *
   * @param str
   * @returns {number}
   */
  public static getNotEmStringSize(str: string) {
    let len = 0;
    if (str && str.length > 0) {
      str = escape(str);
      for (let i = 0; i < str.length; i++, len++) {
        if (str.charAt(i) === '%') {
          if (str.charAt(++i) === 'u') {
            i += 3;
            len--;
          }
          i++;
        }
      }
    }
    return len;
  }

  /**
   * 3桁区切りにする
   *
   * @param numStr
   */
  static formatCommaThreeCiphers(numStr: string): string {
    let numStrArr: string[] = numStr.split('').reverse();
    let newArr: string[] = [];
    for (let i = 0, len: number = numStrArr.length; i < len; i++) {
      newArr.push(numStrArr[i]);
      if ((i !== 0) &&
        (i !== len - 1 ) &&
        (i % 3 === 2)) {
        newArr.push(',');
      }
    }
    return newArr.reverse().join('');
  }
}

/**
 * Base64形式でencode, decodeを行う。
 *
 * @type Util {static method util}
 */
export class Base64Util {
  /**
   * unicode base64でencodeする
   *
   * @param str
   * @returns {string}
   */
  public static encodeUnicode(str: string) {
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
  public static decodeUnicode(str: string): Object {
    return decodeURIComponent(Array.prototype.map.call(atob(str), (c: string) => {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
  }
}

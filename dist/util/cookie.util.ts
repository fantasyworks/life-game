import {Cookie} from 'ng2-cookies/ng2-cookies';
import {JsonUtil} from './json.util';

/**
 * クッキーをJson形式で管理する
 *
 * @type Util {static method util}
 */
export class CookieUtil {
  /**
   * ObjectをJson形式でクッキーに貯蔵する。
   *
   * @param key {string}
   * @param obj {Object} 変換して貯蔵するObject
   */
  public static set(key: string, obj: Object) {
    Cookie.set(key, JsonUtil.serialize(obj, true));
  }

  /**
   * Json形式のクッキーをObject化する。
   *
   * @param key
   * @returns {Object} 引張て変換したObject
   */
  public static get(key: string): Object {
    let jsonCookieResult = Cookie.get(key);
    if (jsonCookieResult) {
      return JsonUtil.deserialize(jsonCookieResult);
    } else {
      return null;
    }
  }
}

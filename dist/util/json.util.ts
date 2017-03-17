/**
 * 伝送用データを操作する
 *
 * @type Util {static method util}
 */
export class JsonUtil {
  /**
   * 通信でもらったデータをオブジェクト化する
   *
   * @param data
   * @returns {any}
   */
  public static deserialize(data: string): any {
    return JSON.parse(data, JsonUtil.reviveDateTime);
  }

  /**
   * Jsonデータの中でDate形式をStringに変換する
   *
   * @param key
   * @param value
   * @returns {any}
   */
  private static reviveDateTime(key: any, value: any): any {
    key = null;
    if (typeof value === 'string') {
      let a = /\/Date\((\d*)\)\// .exec(value);
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
  public static serialize(data: any, parseDateFg = false): string {
    Object.keys(data).forEach((key: string) => {
      if (data[key] instanceof Date) {
        if (parseDateFg) {
          data[key] = '/Date(' + data[key].getTime() + ')/';
        } else {
          data[key] = data[key].getTime();
        }
      }
    });
    return JSON.stringify(data);
  }
}

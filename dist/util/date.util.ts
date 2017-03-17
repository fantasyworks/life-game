/**
 * Dateの比較結果
 *
 * @type Util {static method util}
 */
export enum DateComparisionResult {
  // a < b
  OrderedAscending = -1,
  // a === b
  OrderedSame = 0,
  // a > b
  OrderedDescending = 1
}

/**
 * 元号のタイプ
 */
export default class JapanEraType {
  // 明治
  static Meiji = 'm';

  // 大正
  static Taisho = 't';

  // 昭和
  static Showa = 's';

  // 平成
  static Heisei = 'h';
}

/**
 * Dateを操作、変換する機能の集まり
 *
 * @type Util {static method util}
 */
export class DateUtil {
  /**
   * 二つ日付を比較対象を比較して
   *
   * @param a
   * @param b
   * @returns {DateComparisionResult}
   */
  static compare(a: Date, b: Date): DateComparisionResult {
    let yearA: number = a.getFullYear();
    let monthA: number = a.getMonth();
    let dayA: number = a.getDate();
    let yearB: number = b.getFullYear();
    let monthB: number = b.getMonth();
    let dayB: number = b.getDate();
    if (yearA < yearB) {
      return DateComparisionResult.OrderedAscending;
    } else if (yearA > yearB) {
      return DateComparisionResult.OrderedDescending;
    }
    // ==================
    // yearA === yearB

    if (monthA < monthB) {
      return DateComparisionResult.OrderedAscending;
    } else if (monthA > monthB) {
      return DateComparisionResult.OrderedDescending;
    }

    // ================
    // monthA === monthB

    if (dayA < dayB) {
      return DateComparisionResult.OrderedAscending;
    } else if (dayA > dayB) {
      return DateComparisionResult.OrderedDescending;
    }

    // ================
    // dayA === dayB
    return DateComparisionResult.OrderedSame;
  }
  /**
   * 年月日からDateオブジェクトを作成
   *
   * @param year 年
   * @param month 月 ( 1スタート。0スタートではなく）
   * @param day 日
   * @returns {Date}
   */
  static convertCommonEraToDate(year: number, month: number, day: number): Date {
    return new Date(year, month - 1, day);
  }

  /**
   * Dateオブジェクトから　西暦の年月日の配列を作成
   *
   * @param date
   * @returns {number[]}
   */
  static convertDateToCommonEra(date: Date): number[] {
    return [date.getFullYear(), date.getMonth() + 1, date.getDate()];
  }

  /**
   * 元号年月日からDateオブジェクトを作成
   *
   * @param eraType 元号タイプ JapanEraType
   * @param year 年
   * @param month 月 (1スタート。0スタートではなく）
   * @param day 日
   * @returns {Date}
   */
  static convertJapanEraToDate(eraType: string, year: number, month: number, day: number): Date {
    let dateRange: any = DateUtil.getJapanEraDateRange(eraType);
    let seirekiStartYear: number = dateRange.start.getFullYear();
    let seirekiYear: number = seirekiStartYear + year - 1;
    return new Date(seirekiYear, month - 1, day);
  }

  /**
   * Dateオブジェクトから和暦の元号年月日の配列に変換
   *
   * @param date
   * @returns {(string|number)[]}
   */
  static convertDateToJapanEra(date: Date): (string|number)[] {
    let eraType: string = DateUtil.getJapanEraTypeFromDate(date);
    let gengouRange: any = DateUtil.getJapanEraDateRange(eraType);
    let seirekiYear: number = date.getFullYear();
    let gengouYear: number = seirekiYear - gengouRange.start.getFullYear() + 1;
    return [eraType, gengouYear, date.getMonth() + 1, date.getDate()];
  }

  /**
   * Dateオブジェクトから和暦の元号を取得
   *
   * @param date
   * @returns {string}
   */
  static getJapanEraTypeFromDate(date: Date): string {
    let meijiRange: any = DateUtil.getJapanEraDateRange(JapanEraType.Meiji);
    let comparisionResult: DateComparisionResult = DateUtil.compare(date, meijiRange.end);
    if (comparisionResult === DateComparisionResult.OrderedSame ||
      comparisionResult === DateComparisionResult.OrderedAscending) {
      return JapanEraType.Meiji;
    }
    let taishoRange: any = DateUtil.getJapanEraDateRange(JapanEraType.Taisho);
    comparisionResult = DateUtil.compare(date, taishoRange.end);
    if (comparisionResult === DateComparisionResult.OrderedSame ||
      comparisionResult === DateComparisionResult.OrderedAscending) {
      return JapanEraType.Taisho;
    }
    let showaRange: any = DateUtil.getJapanEraDateRange(JapanEraType.Showa);
    comparisionResult = DateUtil.compare(date, showaRange.end);
    if (comparisionResult === DateComparisionResult.OrderedSame ||
      comparisionResult === DateComparisionResult.OrderedAscending) {
      return JapanEraType.Showa;
    }
    return JapanEraType.Heisei;
  }

  /**
   * Dateオブジェクトから和暦の元号年月日の配列に変換
   *
   * @param eraType string
   * @returns {(string|number)[]}
   */
  static getJapanEraDateRange(eraType: string): any {
    if (eraType === JapanEraType.Meiji) {
      return {
        start: new Date(1868, 1 - 1, 25),
        end: new Date(1912, 7 - 1, 29)
      };
    } else if (eraType === JapanEraType.Taisho) {
      return {
        start: new Date(1912, 7 - 1, 30),
        end: new Date(1926, 12 - 1, 24)
      };
    } else if (eraType === JapanEraType.Showa) {
      return {
        start: new Date(1926, 12 - 1, 25),
        end: new Date(1989, 1 - 1, 7)
      };
    } else if (eraType === JapanEraType.Heisei) {
      return {
        start: new Date(1989, 1 - 1, 8),
        end: null
      };
    }
    return null;
  }

  /**
   * その月の最後の日を出す 30日とか31日とか
   *
   * @param month 月 (1スタート）
   * @param year 年
   */
  static getLastDateOfMonth(month: number, year: number): number {
    if (month === 1 || month === 3 || month === 5 ||
      month === 7 || month === 8 || month === 10 || month === 12) {
      return 31;
    } else if (month === 4 || month === 6 ||
      month === 9 || month === 11) {
      return 30;
    }

    // うるう年だったら
    if (this.isLeapYear(year)) {
      return 29;
    }
    // そうでなかったら うるう年じゃない
    return 28;
  }

  /**
   * うるう年か
   *
   * @param y
   * @returns {boolean}
   */
  static isLeapYear(y: number): boolean {
    if (y % 4 === 0) {
      if (y % 100 === 0) {
        if (y % 400 !== 0) {
          return false;
        }
      }
      return true;
    }
    return false;
  }

  /**
   * 誕生日を元に年齢を返す
   *
   * @param birthday
   * @returns {number} 年齢
   */
  static getAge(birthday: Date): number {
    let ageDifMs = Date.now() - birthday.getTime();
    let ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}

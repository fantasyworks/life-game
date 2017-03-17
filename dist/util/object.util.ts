/**
 * オブジェクトを操作する
 *
 * @type Util {static method util}
 */
export class ObjectUtil {
  /**
   * targetにcopyObjをcopyする
   *
   * @param target
   * @param copyObj
   */
  public static assign(target: Object, copyObj: Object): Object {
    return (<any>Object).assign(target, copyObj);
  }

  /**
   * 二つのオブジェクトを交換する
   *
   * @param src
   * @param tgt
   */
  public static swapObject(src: Object, tgt: Object) {
    let tmp: any = (<any>Object).assign({}, src);
    (<any>Object).assign(src, tgt);
    (<any>Object).assign(tgt, tmp);
  }

  /**
   * 配列中の項目を交換する
   *
   * @param array
   * @param srcIdx
   * @param tgtInx
   */
  public static swapObjectInArray(array: Array<Object>, srcIdx: number, tgtInx: number) {
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
  public static equals(src: any, tgt: any): boolean {
    let result = true;
    Object.keys(src).some((key: string) => {
      if (src[key] !== tgt[key]) {
        result = false;
        return true;
      }
      return false;
    });
    return result;
  }
}

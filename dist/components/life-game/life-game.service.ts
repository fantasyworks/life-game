import {Injectable} from "@angular/core";

@Injectable()
export class LifeGameService {
  /**
   * Y, X
   */
  public lifeMap: Array<Array<boolean>> = [];

  public gamePlayFg = false;

  public interval = 500;

  public rule: Array<Array<boolean>> = null;

  private thread: number = 0;

  private tempLifeMap: Array<Array<boolean>> = [];

  public setLifeMap(lifeMap: Array<Array<boolean>>) {
    this.lifeMap = lifeMap;

    if (this.thread) {
      this.end();
      this.start();
    }
  }

  public start() {
    this.copyTemp();
    this.thread = Number(setInterval(() => {
      this.lifeMap.forEach((row: Array<boolean>, y: number) => {
        row.forEach((cell: boolean, x: number) => {
          this.doLife(y, x);
        });
      });

      this.lifeMap.forEach((row: Array<boolean>, y: number) => {
        row.forEach((cell: boolean, x: number) => {
          this.lifeMap[y][x] = this.tempLifeMap[y][x];
        });
      });
    }, this.interval));
  }

  public end() {
    clearInterval(this.thread);
    this.thread = 0;
  }

  private doLife(y: number, x: number) {
    if (this.rule) {
      let cell = this.getLeftRightLifeCell(y, x);
      this.rule.some((ruleCell: Array<boolean>) => {
        let count = 0;
        cell.forEach((life, idx: number) => {
          if (life === ruleCell[idx]) {
            count++;
          }
        });

        if (count == 3) {
          this.tempLifeMap[y][x] = ruleCell[3];
          return true;
        } else {
          return false;
        }
      });
    } else {
      let count = this.getPeripheryLifeCellCount(y, x);
      if (this.lifeMap[y][x]) {
        if (count != 2 && count != 3) {
          this.tempLifeMap[y][x] = false;
        }
      } else {
        if (count == 3) {
          this.tempLifeMap[y][x] = true;
        }
      }
    }

  }

  private copyTemp() {
    this.tempLifeMap = [];
    this.lifeMap.forEach((row: Array<boolean>, y: number) => {
      this.tempLifeMap.push([]);
      row.forEach((cell: boolean, x: number) => {
        if (this.lifeMap[y][x]) {
          this.tempLifeMap[y].push(true);
        } else {
          this.tempLifeMap[y].push(false);
        }
      });
    });
  }

  private getLeftRightLifeCell(y: number, x: number) {
    let cell = [false, this.lifeMap[y][x], false];
    if (x - 1 >= 0) {
      cell[0] = this.lifeMap[y][x - 1];
    }

    if (x + 1 < this.lifeMap[y].length) {
      cell[2] = this.lifeMap[y][x + 1];
    }

    return cell;
  }

  private getPeripheryLifeCellCount(y: number, x: number) {
    let count = 0;

    for (let tmpY = y - 1; tmpY <= y + 1; tmpY++) {
      for (let tmpX = x - 1; tmpX <= x + 1; tmpX++) {
        if (tmpY >= 0 && tmpY < this.lifeMap.length
          && tmpX >= 0 && tmpX < this.lifeMap[tmpY].length
          && (tmpX != x || tmpY != y)) {
          if (this.lifeMap[tmpY][tmpX]) {
            count++;
          }
        }
      }
    }
    return count;
  }
}

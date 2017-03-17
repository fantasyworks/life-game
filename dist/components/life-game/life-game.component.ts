import {
  Component, Input, OnChanges, SimpleChanges, ChangeDetectorRef, EventEmitter, Output,
  AfterViewInit
} from "@angular/core";
import {LifeGameService} from "./life-game.service";

@Component({
  selector: 'life-game'
  , styleUrls: ['life-game.component.css']
  , moduleId: module.id, templateUrl: 'life-game.component.html'
  , providers: [LifeGameService]
})
export class LifeGameComponent implements OnChanges, AfterViewInit {
  @Input() width: number = 1;
  @Input() height: number = 1;
  @Input() size: 50;
  @Input() interval = 500;
  @Input() rule: Array<Array<boolean>> = null;

  @Output() afterGridViewInit = new EventEmitter<LifeGameService>();

  constructor(public service: LifeGameService) {

  }

  ngAfterViewInit() {
    this.afterGridViewInit.emit(this.service);
  }

  onClickCell(y: number, x: number) {
    if (!this.service.gamePlayFg) {
      this.service.lifeMap[y][x] = !this.service.lifeMap[y][x];
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      if ('height' === propName) {
        if (this.service.lifeMap.length <= changes[propName].currentValue) {
          for (let y = this.service.lifeMap.length; y < changes[propName].currentValue; y++) {
            this.service.lifeMap.push(this.getNewRow(changes[propName].currentValue));
          }
        } else {
          for (let y = this.service.lifeMap.length; y > changes[propName].currentValue; y--) {
            this.service.lifeMap.pop();
          }
        }
      } else if ('width' === propName) {
        this.service.lifeMap.forEach((row: Array<boolean>) => {
          if (row.length <= changes[propName].currentValue) {
            for (let x = row.length; x < changes[propName].currentValue; x++) {
              //row.push(false);
            }
          } else {
            for (let x = row.length; x > changes[propName].currentValue; x--) {
              //row.pop();
            }
          }
        });
      } else if ('interval' === propName) {
        this.service.interval = this.interval;
      } else if ('rule' === propName) {
        this.service.rule = this.rule;
      }
    }
  }

  private getNewRow(width: number) {
    let row = [];

    for (let x = 0; x < width; x++) {
      row.push(false);
    }
    return row;
  }
}

import {Component} from "@angular/core";
import {LifeGameService} from "../dist/components/life-game/life-game.service";

@Component({
  selector: 'app-root'
  , styleUrls: ['app.component.css']
  , moduleId: module.id, templateUrl: 'app.component.html'
})
export class AppComponent {
  service: LifeGameService;

  afterGridViewInit(service: LifeGameService) {
    this.service = service;
  }

  onClickStart() {
    this.service.start();
  }

  onClickEnd() {
    this.service.end();
  }
}

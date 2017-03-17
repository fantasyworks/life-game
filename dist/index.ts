import {NgModule, CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {LifeGameComponent} from "./components/life-game/life-game.component";
/**
 * Component, Directive, Pipeを含まれるModule
 */
@NgModule({
  imports: [
    CommonModule
    , FormsModule
  ],
  declarations: [
    LifeGameComponent
  ],
  exports: [
    LifeGameComponent
  ],
  providers: [
  ]
  , schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LifeGameModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: LifeGameModule,
      providers: []
    };
  }
}

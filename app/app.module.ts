import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {AppComponent} from "./app.component";
import {HttpModule} from "@angular/http";
import {LifeGameModule} from "../dist/index";

@NgModule({
  imports: [
    BrowserModule
    , FormsModule
    , HttpModule

    , LifeGameModule
  ]
  , declarations: [
    AppComponent
  ]
  , bootstrap: [AppComponent]
})
export class AppModule {
}

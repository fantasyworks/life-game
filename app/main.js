"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
const app_module_1 = require("./app.module");
const Setting_1 = require("./Setting");
Setting_1.default.settingContextPath();
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map
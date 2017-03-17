"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Setting {
    static settingContextPath() {
        Setting.CONTEXT_PATH = location.pathname.substring(location.pathname.indexOf("/"), location.pathname.lastIndexOf("/") + 1);
    }
}
exports.default = Setting;
//# sourceMappingURL=Setting.js.map
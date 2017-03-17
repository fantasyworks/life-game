export default class Setting{

    static CONTEXT_PATH:string;

    static settingContextPath(){
        Setting.CONTEXT_PATH=location.pathname.substring(location.pathname.indexOf("/"),location.pathname.lastIndexOf("/")+1)
    }
}

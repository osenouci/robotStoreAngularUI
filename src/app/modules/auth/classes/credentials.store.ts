export class CredentialsStorage {

    public get username():string {
        return localStorage.getItem("username") ? localStorage.getItem("username").trim() : null;        
    }
    public get password():string {
        return localStorage.getItem("password") ? localStorage.getItem("password").trim() : null;         
    }    
    public isCredentilsSet():boolean {
        return !!this.password && !!this.username;
    }

    public get redirectURL():string {
        return localStorage.getItem("redirect_url") ? localStorage.getItem("redirect_url").trim() : null;  
    }
    public clearRedirectURL(){
        localStorage.removeItem("redirect_url");        
    }
    public set redirectURL(value:string) {
        localStorage.setItem("redirect_url", value);
    }    
    public save(username:string, password:string) {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
    }
    public clear() {
        localStorage.clear();
    }
}
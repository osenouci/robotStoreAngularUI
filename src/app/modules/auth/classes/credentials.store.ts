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
    public save(username:string, password:string) {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
    }
    public clear() {
        localStorage.clear();
    }
}
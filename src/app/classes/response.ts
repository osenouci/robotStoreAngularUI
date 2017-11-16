export class Response {

    protected body:any;

    public get status():boolean {
        return this.body.status;
    }
    public get data():any {
        return this.body.data;
    }    
    public get error():any {
        return this.body.error;
    }    
}
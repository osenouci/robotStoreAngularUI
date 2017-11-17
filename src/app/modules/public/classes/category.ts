export class Category {

    constructor(protected _id:number, protected _name:string, protected _total:number) {
    }

    public get name():string {
        return this._name;
    } 
    public get id():number {
        return this._id;
    }     
    public get total():number {
        return this._total;
    }         
}
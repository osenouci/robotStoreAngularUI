export class Robot {

    constructor(protected _id:number, protected _name:string, protected _description:string, protected _price:number, protected _photo:string) { }
    
    public get id():number {
        return this._id;
    }
    public get name():string {
        return this._name;
    }
    public get description():string {
        return this._description;
    }
    public get price():number {
        return this._price;
    }
    public get photo():string {
        return this._photo;
    }
}
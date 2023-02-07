import { Product } from "./product";

export class Shoppinglist {
    static readonly empty=new Shoppinglist();

    departments: string[];
    products: Product[];

    constructor(source?: any)
    {
        this.departments=[];
        this.products=[];
        if(!source) return;
        if(source.departments) source.departments.forEach((department: any)=>this.departments.push(department));
        if(source.products) source.products.forEach((product: any)=>this.products.push(new Product(product)));        
    }
}

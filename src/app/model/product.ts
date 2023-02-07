export class Product {
    static readonly empty=new Product();

    static readonly STATUS_UNSELECTED=0;
    static readonly STATUS_SELECTED=1;
    static readonly STATUS_DONE=2;

    name: string;
    department: string;
    status: number;
    note: string;

    constructor(source?: any)
    {
        this.name=source?.name||"";
        this.department=source?.department||"";
        this.status=source?.status||Product.STATUS_UNSELECTED;
        this.note=source?.note||"";
    }

    valueOf(): string
    {
        return this.name;
    }

    select(note: string): void
    {
        this.status=Product.STATUS_SELECTED;
        this.note=note;
    }

    unselect(): void
    {
        this.status=Product.STATUS_UNSELECTED;
        this.note="";
    }

    compareByName(other: Product): number
    {
        return this.name.localeCompare(other.name);
    }

    compareByDepartmentAndName(other: Product, departments: string[]): number
    {
        let departmentCompare=departments.indexOf(other.department)-departments.indexOf(this.department);
        if(departmentCompare!==0) return departmentCompare;
        return this.compareByName(other);
    
    }

}

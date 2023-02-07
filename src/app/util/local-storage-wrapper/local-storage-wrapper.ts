import { BehaviorSubject } from "rxjs";

export class LocalStorageWrapper<T> {
    readonly value$=new BehaviorSubject<T>(this.load());
    private dontSave: boolean=false;

    constructor(
        public key: string,
        public defaultValueSupplier: ()=>T,
        public convertToTypeFunction: (source: any)=>T, 
        public throwParseError: boolean=true
    )
    {
        this.dontSave=true;
        this.value$.subscribe(newValue=>this.save());
    }

    getValue(): T
    {
        return this.value$.value;
    }

    setValue(newValue: T)
    {
        this.value$.next(newValue);
    }

    valueChanged(): void
    {
        this.value$.next(this.value$.value);
    }

    remove()
    {
        localStorage.removeItem(this.key);
        this.dontSave=true;
        this.value$.next(this.defaultValueSupplier());
    }

    private load(): T
    {
        const str=localStorage.getItem(this.key);
        if(str)
        {
            try
            {
                const object: any=JSON.parse(str);
                return this.convertToTypeFunction(object);
            }
            catch(err)
            {
                if(this.throwParseError)
                {
                    throw(err);
                }
                else
                {
                    return this.defaultValueSupplier();
                }
            }
        }
        else
        {
            return this.defaultValueSupplier();
        }
    }

    private save(): void
    {
        if(this.dontSave)
        {
            this.dontSave=false;
            return;
        }
        const str=JSON.stringify(this.value$.value);
        localStorage.setItem(this.key, str);
    }
}

export class ChildrenInfo{
    public count: number;
    public childrenInfo: Child[];
}

export class Child{
    public age: number;
    public studio: string;

    constructor(){
        this.studio = 'Театральная студия';
    }
}
import Record from './Record';

class Item extends Record {
    constructor(){
        super();
        this.name = '';
        this.cost = '';
        this.departament = '';
        this.category = '';
    }
    fromObject(obj){
        super.fromObject(obj);
        this.name = obj.name;
        this.cost = obj.cost;
        this.departament = obj.departament;
        this.category = obj.category;
    }
}
Item.__description__ = {
    title:"Item",
    fields:{
        ...Record.__description__.fields,
        name:{type:"string",label:"Name"},
        cost:{type:"value"},
        departament:{type:"string"},
        category:{type:"string"}
    }
}
export default Item;
import Record from './Record';

class Item extends Record {
    constructor(id,name, cost, departament, category){
        super(id);
        this.name = name;
        this.cost = cost;
        this.departament = departament;
        this.category = category;
    }
}
Item.__description__ = {
    title:"Item",
    fields:{
        ...Record.__description__.fields,
        name:{type:"string"},
        cost:{type:"double"},
        departament:{type:"string"},
        category:{type:"string"}
    }
}
export default Item;
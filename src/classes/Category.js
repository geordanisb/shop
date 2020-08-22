import Record from './Record';

class Category extends Record {
    constructor(){
        super();
        this.name = '';
        this.departament = '';
    }
    fromObject(obj){
        super.fromObject(obj);
        this.name = obj.name;
        this.departament = obj.departament;
    }
}
Category.__description__ = {
    title:"Category",
    fields:{
        ...Record.__description__.fields,
        name:{type:"string",label:"Name"},
        departament:{type:"string",label:"Departament"}
    }
}
export default Category;
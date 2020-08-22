import Record from './Record';

class Department extends Record {
    constructor(){
        super();
        this.name = '';        
    }
    fromObject(obj){
        super.fromObject(obj);
        this.name = obj.name;
    }
}
Department.__description__ = {
    title:"Department",
    fields:{
        ...Record.__description__.fields,
        name:{type:"string",label:"Name"}
    }
}
export default Department;
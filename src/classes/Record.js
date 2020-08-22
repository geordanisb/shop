class Record {
    constructor(){
        this.id='';
    }
    static getName(){
        return this.name;
    }    
    fromObject(obj){
        this.id = obj.id;
    }
}
Record.__description__ = {
    title:"Record",
    fields:{
        id:{type:"string",label:"ID"}
    }
}
export default Record;
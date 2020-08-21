class Record {
    constructor(id){
        this.id=id;
    }
    static getName(){
        return this.name;
    }    
}
Record.__description__ = {
    title:"Record",
    fields:{
        id:{type:"string"}
    }
}
export default Record;
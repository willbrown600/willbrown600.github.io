<<<<<<< HEAD
export class Comments{
    
    name = '';
    date;
    content = '';
    
    constructor(name, content){
        this.name = name;
        this.date = new Date();
        this.content = content;
        
    }
    addComment(name, comment){
        
    }

    getAllComments(name, content){
        console.log(name, content);
        //return 'Name: ' + name + 'Content:' + content; 

    }
=======
export class Comments{
    
    name = '';
    date;
    content = '';
    
    constructor(name, content){
        this.name = name;
        this.date = new Date();
        this.content = content;
        
    }
    addComment(name, comment){
        
    }

    getAllComments(name, content){
        console.log(name, content);
        //return 'Name: ' + name + 'Content:' + content; 

    }
>>>>>>> 907381b37bab4613949c90d5a77946f4e117e1c1
}
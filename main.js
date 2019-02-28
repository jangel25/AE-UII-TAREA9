var mongoose=require('mongoose');
var schema=require('./schema');

mongoose.connect('mongodb://localhost:27017/test');
var Post=mongoose.model('User2',schema,'users2');

var post=new Post({
    title:'Post1',
    author:'John Smith',
    body:'post1',
    comments:[{body:'post1',date:'12-12-12'}],
    meta: {
        votes:2,
        favs:2
    }
});

post.save(function(error){
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("saved!");
    proccess.exit(0);
});
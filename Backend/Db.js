const mongoose = require('mongoose');
const mongoURI='mongodb+srv://alpmuk2001:Yogita_26@cluster0.znxjqoi.mongodb.net/DigIn?retryWrites=true&w=majority'

const mongoDB= async()=>{
    mongoose.connect(mongoURI, {useNewUrlParser: true},async(err,result)=>{
    if(err) console.log("---",err)
    else{
        console.log("connected");
        const fetched_data= mongoose.connection.db.collection("Food_itmes");
        fetched_data.find({}).toArray( function(err,data){
            if(err) console.log(err);
            else console.log()
        })
        
    }
});


}

module.exports=mongoDB;

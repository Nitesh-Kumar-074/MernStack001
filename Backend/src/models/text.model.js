import mongoose,{Schema} from "mongoose";

const textschema = new Schema({
       value : {
              type : String,
              required : true
       }
},{
       timestamps : true
})

export const Text = mongoose.model("Text",textschema)
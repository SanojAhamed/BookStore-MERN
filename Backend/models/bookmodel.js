import mongoose from "mongoose";

const bookschema = mongoose.Schema (
    {
        title: {
            type:string,
            requried: true,
        },

        author: {
            type:String,
            requried: true,
        },

        publishyear: {
            type:Number,
            requried:true,
        },
        },
        {
            timestamp : true,
        }
    
);

const Book = mongoose.model('Cat', { name: String });

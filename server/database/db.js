import mongoose from 'mongoose'
export const Connection=async(username,password)=>{
    const URL=`mongodb+srv://${username}:${password}@cluster0.atfvfgi.mongodb.net/?retryWrites=true&w=majority`
    try {
        
        await mongoose.connect(URL,{useNewUrlParser: true, useUnifiedTopology: true})
        console.log("Database connected successfully")
    } catch (error) {
        console.log('error while connecting to database',error.message)
        
    }
}

export default Connection;
import mongoose from "mongoose";
 // for the user
const PurchaseScehma =new mongoose.Schema({
userId:{
    type:objectId,
},
courseId:{
    type:objectId
}
})

const Purchase = mongoose.model('Purcahse',PurchaseScehma)

export default Purchase
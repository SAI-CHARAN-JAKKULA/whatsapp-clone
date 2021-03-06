const mongoose = require("mongoose");
const whatsappSchema= new mongoose.Schema({
    message:String,
    name:String,
    timestamp:String
});
// export default mongoose.model('messageContent',whatsappSchema)
module.exports = mongoose.model('messageContent',whatsappSchema);
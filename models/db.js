const mongoose = require('mongoose');
const url = "mongodb+srv://phattran:<password>@cluster0.8o67f.mongodb.net/myFirstDatabase?retryWrites=true&w=majoritygit"
mongoose.connect(url, { useNewUrlParser: true }, (err) => {
    if (!err) { console.log("MongoDB Connection Succeeded"); } else {
        console.log("An Error Occured");
    }
})

require('./product.model');
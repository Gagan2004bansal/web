// Import the model
const ques = require('../models/Ques');

// Define Route Handler 
exports.getTodo = async (req, res) => {
    try {
        // fetch all todo items from Database
        const todos = await ques.find({});
        console.log(todos);
        // response 
        res.status(200)
            .json({
                success: true,
                data: todos,
                message: "Entire Todo data is fetched",
            })
    } catch (err) {
        console.log(err);
        res.status((500))
            .json({
                success: false,
                error: err.message,
                message: "Error in Fetching",
            })
    }
}
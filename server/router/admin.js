const express = require('express');
const router = express.Router();

const User = require('../model/schema');
const Image = require('../model/image');

// * admin CRUD
// * get 
router.get('/UsersData', async (req, res) => {
    try {
        const users = await User.find();
        // console.log(users);

        res.status(201).send(users);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }

});
// * to get image 

// const databaseName = "test"
router.get("/images", async (req, res) => {
    try {
        const images = await Image.find(); // Query all images
        const count = images.length; // Count the number of images

        // if there is no images error messages
        if (count === 0) {
            return res.status(404).send({
                message: "Error: No Images found",
            });
        }

        const allImages = images.map(image => ({
            _id: image._id,
            filename: image.filename,
            contentType: image.contentType,
            // ... other fields we want to include ...
        }));

        // send the allImages data to the users 
        res.send({ files: allImages });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: "Error Something went wrong",
            error,
        });
    }
});

// * post  
// router.post('/', );
// * update the user data by id 
router.patch('/updateStatus/:id', async (req, res) => {
    try {
        
        const userId = req.params.id;
        const update = req.body;

        // * update by id 
        // * { new: true } = if true, return the modified document rather than the original
        const updatedUser = await User.findByIdAndUpdate(userId, update, { new: true });
        // console.log(userId);
        // if (!updatedUser) {
        //     return res.status(404).send('User not found');
        // }
        
        res.send(updatedUser);
    } catch (error) {
        res.status(500).send('Internal Server Error');
        console.log(error);
    }

});
// * delete
router.delete('/:id', async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.send('User deleted');
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }

});

module.exports = router;
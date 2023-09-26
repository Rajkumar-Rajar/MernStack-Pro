const express = require("express")
const router = express.Router()
const user_register_detailes1 = require('./Userschema')

const multer = require('multer');
const path = require('path');


const ImageSchema = require("./Imageschema")

// ====================================================post method===================================================================================

router.post("/post_user_data", async (req, res) => {


    try {
        const { first_name, last_name, email, phone_number, password, gender, date_of_birth } = req.body

        const user_data = new user_register_detailes1({
            "first_name": first_name,
            "last_name": last_name,
            "email": email,
            "phone_number": phone_number,
            "password": password,
            "gender": gender,
            "date_of_birth": date_of_birth

        })

        await user_data.save().then(() => res.json("user data added"))

    }
    catch (error) {
        res.status(400).json("user data not added in the backend error " + error)
    }
})

// ========================================================get method===============================================================================


router.get('/get_user_data', async (req, res) => {


    try {
        user_register_detailes1.find({})
            .then((user) => res.json(user))


        // console.log(get_user,"--------------get_user________------");
    }
    catch (error) {
        res.status(400).json("data did not fetch from mongo db" + error)
    }

})

// ================================================put method=======================================================================================


router.put('/put_user_data/:id', async (req, res) => {

    try {

        const { first_name, last_name, email, phone_number, password, gender, date_of_birth } = req.body

        const put_data = {
            first_name: first_name,
            last_name: last_name,
            email: email,
            phone_number: phone_number,
            password: password,
            gender: gender,
            date_of_birth: date_of_birth
        }
        const result = await user_register_detailes1.updateOne({ _id: req.params.id }, {
            $set: {
                first_name: first_name,
                last_name: last_name,
                email: email,
                phone_number: phone_number,
                password: password,
                gender: gender,
                date_of_birth: date_of_birth
            }
        })


        if (result.modifiedCount === 1) {
            res.json('user data updated')
        }
        else {
            res.json('user did not find')
        }
    }
    catch (error) {
        res.status(400).json('user data not updated in mongo ' + error)
    }

})

// ====================================================delete method===================================================================================
router.delete('/delete_user_data/:id', async (req, res) => {


    try {

        const result = await user_register_detailes1.deleteOne({ _id: req.params.id })

        if (result.deletedCount === 1) {

            res.json("user data deleted")
        }
        else {
            res.json("user can not find")
        }

    }
    catch (error) {
        res.status(400).json('user data not delete in mongodb' + error)
    }
})

// ======================================================login details=================================================================================


router.get("/login_details", (req, res) => {

    try {
        user_register_detailes1.find({}, { first_name: 1, password: 1, email: 1 })
            .then((user) => res.json(user))

    }
    catch (error) {
        res.status(400).json('data not fetch from mongo ' + error)
    }
})

// ==========================================================chart gender-showing-pie date-line-chart adta=============================================================================


router.get('/chart_pie_line_data', async (req, res) => {

    try {
        let line_chart_data1 = []

        const pie_chart_data = await user_register_detailes1.aggregate([
            {
                $group: {
                    _id: "$gender",
                    count: { $sum: 1 }
                }
            }
        ]).then((user) => {
            line_chart_data1.push(user)

        })


        const line_chart_data = await user_register_detailes1.aggregate([
            {
                $project: {
                    first_name: 1,
                    date_of_birth: { $year: { $toDate: "$date_of_birth" } }
                }
            }
        ])
            .then((user) => {

                line_chart_data1.push(user)


            })

        const get_user = await user_register_detailes1.find()
            .then((user) => {
                line_chart_data1.push(user)
            })


        res.json(line_chart_data1)

    }

    catch (error) {
        res.status(400).json("data not fetch from mongdb" + error)
    }


})

// =========================================================image =============================================================================

const storage = multer.memoryStorage(); 

const upload = multer({ storage: storage });


router.post('/upload', upload.single('image'), (req, res) => {

    try{
        const imgBase64 = req.file.buffer.toString('base64')

       

    let newImage = new ImageSchema({

        img: {
            data: imgBase64,
            contentType: req.file.mimetype,
            
        },
        id_object:req.body.id_object,
        first_name:req.body.first_name,
    });
    newImage.save()
        .then(img => res.json("image uploaded" ))
        .catch(err => res.status(400).json('Error: ' + err));
    }

    catch(error){
        res.json("image data not forund in front end" +error)
    }
});

// ==========================================================image get-data=============================================================================


router.get('/get-image-data/:id', async (req, res) => {


    try {

        const image = await ImageSchema.find({id_object:req.params.id});

        const arrayimage = []

        for (i = 0; i < image.length; i++) {
             let ima_details={}

            const imgBase64 = `data:${image[i].img.contentType};base64,${image[i].img.data}`;
            ima_details["img"]=imgBase64,
            ima_details["first_name"]=image[i].first_name,
            ima_details["id_object"]=image[i].id_object

            arrayimage.push(ima_details)
        }

        res.send(arrayimage);

    }
    catch (error) {
        res.json("image not fetch from mongdb this api " + error)

    }
})
// ==========================================================image-get-data=============================================================================



module.exports = router;
const express = require('express');
const cors = require('cors');
const {MongoClient} = require('mongodb');
require('dotenv').config();

const restApi = async()=> {

    const client = new MongoClient(process.env.MONGO_CONNECTION);

    await client.connect()
    .then(()=>console.log("connected to Mongo"))
    .catch(err=>console.log('an error is occured : ', err));

    const userCollection = client.db('users').collection('user');

    const bcrypt = require('bcrypt');
    const saltRounds = 10;
    const app = express();

    app.use(express.json());
    app.use(cors());
    app.use(express.static('public/images'));

    app.post('/api/signup',async (req,res)=>{

    const {name , password , repassword , email, desc} = req.body;

    let filtering =  await userCollection.findOne({email : email});

    if(!name || !password || !repassword || !email){
        return res.status(400).send("fill the required form inputs please !");
    }
    
    if( name.length < 3 ){
        return  res.status(400).send("the name must be more than 3 character");
    }

    if( password !== repassword){
        return res.status(400).send("passwords must match");
    }
    if(password.length < 5 || repassword.length < 5){
        return res.status(400).send("passwords cannot be less than 5 characters");
    }

    if( !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email) ){
        return res.status(400).send("invalid email !");
    }

    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPass = await bcrypt.hash(password, salt);

    if(filtering === null) {
        await userCollection.insertOne({
            name,
            password : hashedPass,
            email,
            desc,
        });
        return res.status(200).json({message:'Success!'})
    }

    else {
        return res.status(400).send("This Email is Already Taken Before !");
    }
    
    });

    app.post('/api/login', async (req, res) => {
        const { email, password } = req.body;
    
        try {
            const findEmail = await userCollection.findOne({ email: email });
    
            if (!findEmail) {
                return res.status(400).send("Email Not found !!");
            }
    
            const validatePassword = await bcrypt.compare(password, findEmail.password);

            if (!validatePassword) {
                return res.status(400).send("Password is incorrect, try again !!");
            }
    
            console.log("Login successful");
    
            return res.status(200).json({ userId: findEmail._id.toString() });
        } catch (error) {
            console.error("Error during login:", error);
            return res.status(500).send("An error occurred, please try again later.");
        }
    });
    


    app.get('/api/images/:category', async (req, res) => {
        const { category } = req.params;
    
        const imgCollection = client.db('users').collection('gallery');
    
        let images;
        if (category === 'show all') {
            images = await imgCollection.find({}).toArray();
        } else {
            images = await imgCollection.find({"img.category" : category }).toArray();
        }

        return res.status(200).json(images);
    });

    app.listen(process.env.PORT || 5000,()=>{
    console.log("project is listening on port" , process.env.PORT || 5000);
    });
}


restApi();

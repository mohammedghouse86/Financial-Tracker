import bcrypt from 'bcrypt' // for signup  SIGNUP API
import jwt from 'jsonwebtoken';
import User from '../../../models/user';
import { connectToDB } from '../../../../utils/database';

const jwt_SECRET = "your_jwt_secret_key"; // Replace with your actual secret key

export const POST = async (req, res) => {
    const { email, name, image, password } = await req.json();

    try {
        // Connect to database
        //console.log('Trying to connect to DB');
        await connectToDB();
        //console.log('Connected to DB');

        // Check if user already exists
        const userExists = await User.findOne({ email });

        if (userExists) {
            return new Response(JSON.stringify({ success: false, message: 'User already exists' }), { status: 400 });
        }

        // Generate a salt and hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create the new user
        const newUser = await User.create({
            email,
            name: name.replace(" ", "").toLowerCase(),
            image,
            password: hashedPassword
        });

        // Generate JWT token
        const data = { user: { id: newUser._id } };
        const authtoken = jwt.sign(data, jwt_SECRET);

        // Return success response
        console.log("authtoken", authtoken);
        return new Response(JSON.stringify({ success: true, authtoken }), { status: 200 });
    } catch (error) {
        console.log("Error handling signup:", error.message);
        return new Response(JSON.stringify({ success: false, message: 'Internal Server Error' }), { status: 500 });
    }
};

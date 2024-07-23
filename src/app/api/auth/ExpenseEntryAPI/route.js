import Expense from '../../../models/expense'; // API FOR UPLOADING THE EXPENSES
import { connectToDB } from '../../../../utils/database';

export const POST = async (req, res) => {
    const { category, description, cost, cumulativecost } = await req.json();

    try {
        await connectToDB();
        console.log('Connected to DB');
        const newUser = await Expense.create({
            category,
            description,
            cost,
            cumulativecost
        });
        console.log(newUser)
        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        console.log("Error handling signup:", error.message);
        return new Response(JSON.stringify({ success: false, message: 'Internal Server Error' }), { status: 500 });
    }
};

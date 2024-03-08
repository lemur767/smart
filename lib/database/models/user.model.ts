import { Schema, model, models } from "mongoose";

export interface UUser extends Document {
    email: string,
    photo: string,
    firstname: string,
    lastname: string,
    planId: number,
    clerkId: string,
    username: string,
    creditBalance: number,
}
    

const UserSchema = new Schema({
    email: {type: String, required: true, unique: true},
    photo: {type: String, required: true, unique: true},
    firstname:{type: String},
    lastname:{type: String},
    planId:{type: Number, default: 1},
    clerkId:{type:String, required: true, unique: true},
    username:{type: String, required: true, unique: true},
    creditBalance: {type: Number, default: 0}
})

const User = models?.User || model('User', UserSchema);
export default User;

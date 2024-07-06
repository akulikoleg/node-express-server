import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
  email: {
            type: String,
            required: true,
            index: true,
            unique: true
         },
  password: {
      type: String,
      required: true,
      select: false

  },
  newname: String
});

userSchema.index({ email: 1 }, { unique: true });
export default mongoose.model('User', userSchema);
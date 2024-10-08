import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    
      username: {
        type: String,
        required:[true, "please provide a username"],
        unique: true
      },
     email: {
        type: String,
        required:[true, "please provide an email"],
        unique: true,
        lowercase: true
      },
     password: {
        type: String,
        required:[true, "please  Enter a password"],
      },

      isVerified:{
         type: Boolean,
         default: false
      },
      isAdmin:{
        type: Boolean,
        default: false
      },
      forgotPasswordToken: String,
      forgotPasswordTokenExpiry:Date,
      verifyToken: String,
      verifyTokenExpiry:Date,
            
})

// userSchema.index({ email: 1 }, { unique: true });
// userSchema.index({ username: 1 }, { unique: true });

const User = mongoose.models.users || mongoose.model("users",userSchema)

export default User
import mongoose from 'mongoose';
// import bcrypt from 'bcryptjs';

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    emailVerified : {
      type: String,
      required: true,
    },
    image : {
      type: String,
      required: false,
    },
    role: {
      type: Boolean,
      default: 'false',
    },
  },
  {
    timestamps: true,
  }
);

// Match user entered password to hashed password in database
// userSchema.methods.matchPassword = async function (enteredPassword) {
//   return await bcrypt.compare(enteredPassword, this.password);
// };

// Encrypt password using bcrypt
// userSchema.pre('save', async function (next) {
//   if (!this.isModified('password')) {
//     next();
//   }

//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
// });

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;

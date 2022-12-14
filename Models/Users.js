import mongoose from 'mongoose';
const usesrSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 50
    },
    username: {
      type: String,
      lowercase: true,
      required: true,
      min: 3,
      max: 20
    },
    fullname: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
      select: false
    },
    bio: {
      type: String,
    },
    phonenumber: {
      type: String
    },
    gender: {
      type: String
    },
    avatar: {
      public_id: {
        type: String,
        default: ""
      },
      url: {
        type: String,
        default: "https://res.cloudinary.com/abdo9/image/upload/v1672925254/images_v2tobb.jpg",
      }
    },
    isprivat: {
      type: Boolean,
      default: false
    },
    followers: {
      type: Array,
      default: []
    },
    following: {
      type: Array,
      default: []
    },
    blocklist: {
      type: Array,
      default: []
    },
    saves: [{
      type: mongoose.Schema.ObjectId,
      ref: 'Posts',
      default: []
    }],
    roles: {
      type: [String],
      default: ["user"],
    },
  },
  { timestamps: true }
);
const Users = mongoose.model('Users', usesrSchema);
export default Users;
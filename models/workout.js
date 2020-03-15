const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitness", {
  useNewUrlParser: true,
  useFindAndModify: false
});
const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
  
  day: {
    type: Date,
    default: Date.now
    },
    exercises: 
      {
        type: {
          type: String,
          required: "Enter type"
        },
        name: {
          type: String,
          trim: true,
          required: "Enter a name for your exercise"
        },
        duration: {
          type: Number,
          required: "Enter duration"
        },
        distance: {
          type: Number
        },
        weight: {
          type: Number
        },
        sets: {
          type: Number
        },
        reps: {
          type: Number
        }
    }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;

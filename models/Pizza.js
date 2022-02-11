const { Schema, model } = require("mongoose");
const dateFormat = require('../utils/dateFormat');

const PizzaSchema = new Schema(
  {
    pizzaName: {
      type: String,
    },
    createdBy: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      //***This is a Getter*** which formats timestamp data on front end
      get: (createdAtVal) => dateFormat (createdAtVal)
    },
    size: {
      type: String,
      default: "Large",
    },
    toppings: [],
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  //tell SCHEMA it can use virtuals 
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false,
  }
);

// VIRTUAL------get total count of comments and replies on retrieval
PizzaSchema.virtual("commentCount").get(function () {
  return this.comments.length;
});

const Pizza = model("Pizza", PizzaSchema);

module.exports = Pizza;

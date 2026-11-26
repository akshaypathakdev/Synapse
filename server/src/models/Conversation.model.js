import mongoose, { Schema } from "mongoose";

const ConversationSchema = new Schema(
  {
    participants: {
      type: [Schema.Types.ObjectId],
      ref: "User",
      required: true,
      validate: {
        validator: (participants) => participants.length === 2,
        message: "A private conversation must have exactly 2 participants.",
      },
    },

    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Conversation = mongoose.model("Conversation", ConversationSchema);

import mongoose, { Schema } from "mongoose";

const ReactionSchema = new Schema(
  {
    messageId: {
      type: Schema.Types.ObjectId,
      ref: "Message",
      required: true,
    },

    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    emoji: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// Prevent the same user from adding the same emoji to a message multiple times.
ReactionSchema.index({ messageId: 1, userId: 1, emoji: 1 }, { unique: true });

export const Reaction = mongoose.model("Reaction", ReactionSchema);

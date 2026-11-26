import mongoose, { Schema } from "mongoose";

const SummarySchema = new Schema(
  {
    conversationId: {
      type: Schema.Types.ObjectId,
      ref: "Conversation",
      required: true,
      index: true,
    },

    content: {
      type: String,
      required: true,
    },

    startMessageId: {
      type: Schema.Types.ObjectId,
      ref: "Message",
      required: true,
    },

    endMessageId: {
      type: Schema.Types.ObjectId,
      ref: "Message",
      required: true,
    },

    messageCount: {
      type: Number,
      required: true,
    },

    model: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Summary = mongoose.model("Summary", SummarySchema);

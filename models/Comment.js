const { Schema, model } = require ('mongoose');

const CommentSchema = new Schema ({
    writtenBy: {
        type: String
    },

    commentBody: {
        type: String
    },

    createdAr: {
        type: Date,
        default: Date.now
    }
});

const Comment = model('Comment', CommentSchema);

module.exports = Comment;
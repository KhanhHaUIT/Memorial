const Comment = require('../models/Comment.model');

module.exports = {
    // **************************
    // *  GET COMMENTS
    // **************************
    getComments: (req, res) => {
        Comment.find({
            memorialId: req.params.memorialId
        })
            .then(comments => {
                res.json(comments)
            })
            .catch(err => {
                res.json(err)
            })
    },
    // **************************
    // *  POST COMMENT
    // **************************
    postComment: (req, res) => {
        Comment.create({
            userId: req.userId,
            memorialId: req.params.memorialId,
            message: req.body.message
        })
            .then(comment => {
                res.json(comment)
            })
            .catch(err => {
                res.json(err)
            })
    },
    // **************************
    // *  DELETE COMMENT
    // **************************
    deleteComment: (req, res) => {
        Comment.findByIdAndRemove(req.params.commentId)
            .then(comment => {
                res.json(comment)
            })
            .catch(err => {
                res.json(err)
            })
    },
    // **************************
    // *  UPDATE COMMENT
    // **************************
    updateComment: (req, res) => {
        Comment.findByIdAndUpdate(req.params.commentId, {
            $set: {
                message: req.body.message
            }
        })
            .then(comment => {
                res.json(comment)
            })
            .catch(err => {
                res.json(err)
            })
    }
}
const Comment = require('../models/Comment.model');

module.exports = {
    // **************************
    // *  GET COMMENTS
    // **************************
    getComments: async (req, res) => {
        try {
            console.log(req.params)
            const comments = await Comment.find({
                memorialId: req.params.id
            }).populate('senderId', 'username');
            console.log(comments);
                res.json(comments)
        } catch (error) {
          console.log(error);
          res.status(500).json({
              status: false,   
                message: 'Server Error'
            })
        }
    },
    // **************************
    // *  POST COMMENT
    // **************************
    postComment: async (req, res) => {
        
        // Comment.create({
        //     senderId: req.userId,
        //     memorialId: req.params.id,
        //     message: req.body.message
        // })
        //     .then(comment => {
        //         res.json(comment)
        //     })
        //     .catch(err => {
        //         res.json(err)
        //     })
        try {
            let comment = await Comment.create({
                senderId: req.userId,
                memorialId: req.params.id,
                message: req.body.message
            })
            comment = await Comment.findById(comment._id).populate('senderId', 'username');
            res.json(comment)
        } catch (error) {
            console.log(error);
            res.status(500).json({
                status: false,
                message: 'Server Error'
            })
        }
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
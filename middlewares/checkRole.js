module.exports = {
    AdminRole: async (req, res, next) => {
        if (req.user.role !== 'admin') {
            return res.status(401).json({
                success: false,
                message: 'You are not authorized to access this route',
            });
        }
        next();
    },
    UserRole: async (req, res, next) => {
        if (req.user.role === 'admin' || req.user.role === 'user') {
            next();
        } else {
            res.status(403).json({
                success: false,
                message: 'You are not authorized to access this route'
            })
        }
    }
}
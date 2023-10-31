const bcrypt = require('bcrypt');

const hashPasswordmiddleware = async (req, res, next) => {
    const { PasswordHash } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(PasswordHash, 10)
        req.body.PasswordHash  = hashedPassword;
        next();
    } catch (e) {
        res.status(500).send("Failed to hashing password..");
    }
}
module.exports = hashPasswordmiddleware;
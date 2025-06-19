const multer = require("multer");

// Memory storage for uploading to Cloudinary
const storage = multer.memoryStorage();
const upload = multer({ storage });



module.exports = upload;


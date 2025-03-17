const fs = require('node:fs');
const path = require('path');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const folderName = './images';


function getLocalImages() {
    try {
        if (!fs.existsSync(folderName)) {
            fs.mkdirSync(folderName);
        }
    } catch (err) {
        console.error(err);
    }

    const images = fs.readdirSync(folderName, { withFileTypes: true });
    const imageObjects = {};

    images.forEach((image) => {
        if (image.isFile()) {
            const filePath = path.join(folderName, image.name);
            const data = fs.readFileSync(filePath);
            const base64String = data.toString('base64');
            const parsed = path.parse(image.name);
            imageObjects[parsed.name] = {
                body:base64String,
                type:parsed.ext,
        }
    }
    });

    return imageObjects;

}


module.exports = {
    getLocalImages,
}
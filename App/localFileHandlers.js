const fs = require('node:fs');
const path = require('path');

// _NOTE: this system is going to be very difficult to work with moving forward, might be worth it to plan image conversion design in the future
// Reasoning is, youtube's API not sending emote image data was a curveball, this is a patch, though a real fix might not be ready anytime soon
// _NOTE: understood underlying cause of the issues, race conditions due to multiple instances of sockets being active
// future implementations will have to account for these issues and handle protections against them


// Define the path for your JSON file
const filePath = path.join(__dirname, 'emotes.json');

function getLocalImages() {
    try {
      // Check if the JSON file exists
      if (!fs.existsSync(filePath)) {
        console.warn('Emotes JSON file does not exist.');
        return {};
      }
  
      // Read and parse the JSON file
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const imageObjects = fileContent ? JSON.parse(fileContent) : {};
  
      // Since the image data is already cleaned and stored as base64,
      // we simply return the parsed object.
      return imageObjects;
    } catch (err) {
      console.error('Error reading or parsing emotes.json:', err);
      return {};
    }
  }

// Function to update the JSON file with the new payload data,
// converting the image data to a base64 string
function updateEmotes(newPayload) {
    // Read existing data from the JSON file, if available
    let existingData = {};
    if (fs.existsSync(filePath)) {
      try {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        existingData = fileContent ? JSON.parse(fileContent) : {};
      } catch (error) {
        console.error('Error reading existing JSON file:', error);
      }
    }
  
  // Process each entry in the payload
  for (const key in newPayload) {

    const payloadEntry = newPayload[key];
    // If deletion is indicated, remove the key from the existing data
    if (payloadEntry.delete === true) {
      if (existingData.hasOwnProperty(key)) {
        console.log(`Removing key: ${key}`);
        delete existingData[key];
      }
      continue;
    }

    let { data, type } = newPayload[key];
    // Convert the image data into a Buffer if it isn't already one
    if (!Buffer.isBuffer(data)) {
      data = Buffer.from(data);
    }

    // Convert the binary data into a base64 string
    const base64Image = data.toString('base64');

    // Optionally, you can create a data URL string (if needed in your app)
    const dataURL = `data:${type};base64,${base64Image}`;

    // Optionally adjust the key name based on a regex match
    const regex = /:_\w+:/;
    const name = regex.test(key) ? key : `:_${key}:`;

    // Update the entry in existing data
    existingData[key] = {
      name,
      body: dataURL,
    };
  }

  // Write the updated object back to the JSON file
  try {
    fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2), 'utf8');
    console.log('Emotes JSON file updated successfully.');
  } catch (error) {
    console.error('Error writing JSON file:', error);
  }
}
module.exports = {
    getLocalImages,
    updateEmotes
}
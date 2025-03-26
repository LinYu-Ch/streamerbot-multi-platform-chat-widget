const fs = require('node:fs');
const path = require('path');

// _NOTE: this system is going to be very difficult to work with moving forward, might be worth it to plan image conversion design in the future
// Reasoning is, youtube's API not sending emote image data was a curveball, this is a patch, though a real fix might not be ready anytime soon

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
  let existingData = {};

  // If the file exists, read and parse its contents
  if (fs.existsSync(filePath)) {
    try {
      const fileContent = fs.readFileSync(filePath, 'utf8');
      existingData = fileContent ? JSON.parse(fileContent) : {};
    } catch (error) {
      console.error('Error reading JSON file:', error);
    }
  }

  // Process each entry in the payload
  for (const key in newPayload) {
    let { data, type } = newPayload[key];
    // Convert the image data into a Buffer if it isn't already one
    if (!Buffer.isBuffer(data)) {
      data = Buffer.from(data);
    }

    // Convert the binary data into a base64 string
    const base64Image = data.toString('base64');

    // Optionally, you can create a data URL string (if needed in your app)
    const dataURL = `data:${type};base64,${base64Image}`;

    // add regex check to match key signature to youtube data
    const regex = /:_\w+:/;

    // Update the payload with the base64 string
    newPayload[key] = {
      name: regex.test(key) ? key : `:_${key}:`,
      body: dataURL,
    };
  }

  // Merge the new payload into the existing data (update existing keys or add new ones)
  for (const key in newPayload) {
    if (key == "" || key == ":_:") continue;
    existingData[key] = newPayload[key];
  }

  // Write the updated object back to the JSON file
  try {
    fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2), 'utf8');
    console.log('Emotes JSON file updated with base64 images.');
  } catch (error) {
    console.error('Error writing JSON file:', error);
  }
}
module.exports = {
    getLocalImages,
    updateEmotes
}
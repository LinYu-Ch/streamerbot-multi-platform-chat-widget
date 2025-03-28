export class DisplayHandler {
  constructor(display, maxCount = 30) {
    this.value = 0;
    this.display = display;
    this.maxCount = maxCount;
  }

  pushToDisplay(EventObj) {
    console.log(`Event sent from: ${EventObj.eventInfo.source} of Type "${EventObj.eventInfo.type}" Has started loading`);

    let row = document.createElement("div");
    row.dataset.eventId = EventObj.eventId;
    row.dataset.senderId = EventObj.senderId;
    row.dataset.timestamp = EventObj.timestamp;
    row.dataset.eventInfo = EventObj.eventInfo;
    row.dataset.senderName = EventObj.senderName;
    
    row.innerHTML = EventObj.payload;

    // appends the row into the page
    this.display.prepend(row);
    // saves the states of the current row, so we know the original value
    let displayRecord = row.style.display ?? "initial";

    let rowImages = row.querySelectorAll("img");
    let imgCount = rowImages.length;

    // if there are images, prevent the row from loading, wait until all the images have finished loading
    if (imgCount > 0) {
      row.style.display = "none";
      rowImages.forEach((image) => {
        image.addEventListener("load", () => {
          imgCount--;
          if (imgCount >= 0) row.style.display = displayRecord;
        });
      });
    }
    
    
    this.value++;

    console.log(`Event sent from: ${EventObj.eventInfo.source} of Type "${EventObj.eventInfo.type}" has succesfully loaded`);

    if (this.value > this.maxCount) {
      this.popFromDisplay();
    }

  }

  popFromDisplay() {
    if (this.value === 0) {
      return;
    }

    this.display.lastChild.remove();
    this.value--;
  }

  removeFromDisplay(identifier) {
    // loop through each item in the display, and remove the items that match the identifier
    this.display.children.forEach((child) => {
      if (
        child.dataset.eventId === identifier ||
        child.dataset.senderId === identifier ||
        child.dataset.timestamp === identifier ||
        child.dataset.eventType === identifier ||
        child.dataset.senderName === identifier
      ) {
        // TODO: add more fancy removal effects in next version
        child.remove();
        this.value--;
      }
    });
  }
}


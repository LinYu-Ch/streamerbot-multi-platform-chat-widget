export class DisplayHandler {
  constructor(display, maxCount = 30) {
    this.value = 0;
    this.display = display;
    this.maxCount = maxCount;
  }

  pushToDisplay(EventObj) {
    let row = document.createElement("div");
    row.dataset.eventId = EventObj.eventId;
    row.dataset.senderId = EventObj.senderId;
    row.dataset.timestamp = EventObj.timestamp;
    row.dataset.eventInfo = EventObj.eventInfo;
    row.dataset.senderName = EventObj.senderName;

    row.innerHTML = EventObj.payload;

    this.display.prepend(row);
    this.value++;

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

export class DisplayHandler {
    constructor(display) {
    this.value = 0;
    this.display = display;
  }

  pushToDisplay(EventObj) {
    this.value++;
  }

  removeFromDisplay(identifier){
    // loop through each item in the display, and remove the items that match the identifier
  }
}

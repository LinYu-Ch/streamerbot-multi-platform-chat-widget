export class EventObj {
    constructor(obj) {
        this.timestamp = obj.timestamp; // date
        this.eventId = obj.eventId; // string
        this.senderId = obj.senderId; // string
        this.eventInfo = obj.eventInfo; // string
        this.senderName = obj.senderName; // string
        this.payload = obj.payload; // HTML string literal
    }
}
export class EventObj {
    constructor(obj) {
        this.eventId = obj.eventId; // string
        this.timestamp = obj.timestamp; // date
        this.eventType = obj.eventType; // string
        this.senderName = obj.senderName; // string
        this.payload = obj.payload; // HTML string literal
    }
}
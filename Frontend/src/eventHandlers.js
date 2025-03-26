import { EventObj } from "./eventObject";
import * as Templates from "./eventTemplates";

// temporary storage for current development, should be moved to its own module at a later time
function mediaEncode(messageString, emotes) {
    if (emotes.length <= 0) {
        console.log("emote not present");
        return messageString;
    };

    let messageAsArray = messageString.split("");

    // loops through the string, from higher index to lower index
    // creates a new image tag corresponding to the emote array
    // replaces the original string with an encoded html format
    for (let backItterator = emotes.length; backItterator > 0; backItterator--) {
        let currentEmote = emotes[backItterator - 1];
        let emoteSrc = currentEmote.imageUrl;
        let emoteTarget = currentEmote.startIndex;
        let keyLength = currentEmote.endIndex - emoteTarget + 1;

        let fullEmote = document.createElement("img");
        // new img element created

        fullEmote.src = emoteSrc;
        fullEmote.alt = currentEmote.name;
        console.log(fullEmote);
        messageAsArray.splice(emoteTarget, keyLength, fullEmote.outerHTML);
    }

    //emote appending successfull, returning encoded string
    return messageAsArray.join("");
}

/**
 * 
 * Creates a new youtubeMediaEncoder function which replaces keywords
 * in youtube messages with matching image elements
 * 
 * @param {list_of_emotes_and_names} youtubeEmotes 
 * @returns media encoder function
 */
function youtubeMediaEncoderFactory(youtubeEmotes) {

    const pattern = /:_[^:]+:/;

    const youtubeMediaEncoder = (messageString) => {

        if (!pattern.test(messageString)) return messageString;
        
        // YOUTUBE EMOTES FOLLOW A PATTERN OF :_body: I can run a regex on it
        // to get the final value
        for (let emote in youtubeEmotes) {
            const emoteName = youtubeEmotes[emote].name;
            const webImage = youtubeEmotes[emote].body;

            let fullEmote = document.createElement("img");

            // new img element created
            fullEmote.src = webImage;

            messageString = messageString.replaceAll(emoteName, fullEmote.outerHTML); 
        }

        return messageString;

    }

    return youtubeMediaEncoder;
}

export class EventHandlers {
    constructor(youtubeEmotes) {
        this.youtubeMediaEncoder = youtubeMediaEncoderFactory(youtubeEmotes);
    }

    /**
     * 
     * @param {streamerbot_event_object} obj 
     * @returns event handler ready payload
     */
    twitchFollow = (obj) => {
        const data = obj.data;

        // eventobj attribute definition

        // NOTE:
        /**
         * for future implementations, utilize a search function for the object, 
         * having an optional secondary attribute for which found instance of the key that should be used
         */
        let timeStamp = obj.timeStamp;
        let eventId = "nill";
        let senderId = data.user_id;
        let eventInfo = obj.event;
        let senderName = data.user_login;

        // NOTE:
        /**
         * repetition of variables seems unreasonable,
         * must think of better approach in the future,
         * likely to be solved by appropriate implementation of Listener-Adapter-Receiver architecture
         */
        let username = data.user_name;
        let platformVerb = "Has followed";

        let payload = Templates.subscriptionEvent(username, platformVerb);

        // eventobj invocation

        // NOTE: 
        /**
         * For V2, the event object can just be invoked with the constructor, 
         * current implementation is used to maintain structural similarity to avoid confusion
         * 
         */
        let eventObj = new EventObj({
            timestamp: timeStamp,
            eventId: eventId,
            senderId: senderId,
            eventInfo: eventInfo,
            senderName: senderName,
            payload: payload,
        });

        // sending out event object
        return eventObj;
    }
    /**
     * 
     * @param {streamerbot_event_object} obj 
     * @returns event handler ready payload
     */
    twitchCheer = (obj) => {
        const data = obj.data;

        let timeStamp = obj.timeStamp;
        let eventId = data.message.msgId;
        let senderId = data.userId;
        let eventInfo = obj.event;
        let senderName = data.message.channel;

        let username = data.message.username;
        let donatedAmount = data.bits;
        let donationString = `has cheered ${donatedAmount} bits!`;

        let payload = Templates.platformDonationEvent(username, donationString);

        let eventObj = new EventObj({
            timestamp: timeStamp,
            eventId: eventId,
            senderId: senderId,
            eventInfo: eventInfo,
            senderName: senderName,
            payload: payload,
        });

        return eventObj;
    }
    /**
     * 
     * @param {streamerbot_event_object} obj 
     * @returns event handler ready payload
     */
    twitchSub = (obj) => {
        const data = obj.data;

        let timeStamp = obj.timeStamp;
        let eventId = data.messageId;
        let senderId = data.user.id;
        let eventInfo = obj.event;
        let senderName = data.user.login;

        let username = data.user.name;
        let tier = `TTVSUB-${data.sub_tier}`;
        let donationString = `has subscribed`;

        let payload = Templates.platformDonationEvent(username, donationString, tier);

        let eventObj = new EventObj({
            timestamp: timeStamp,
            eventId: eventId,
            senderId: senderId,
            eventInfo: eventInfo,
            senderName: senderName,
            payload: payload,
        });

        return eventObj;

    }
    /**
     * 
     * @param {streamerbot_event_object} obj 
     * @returns event handler ready payload
     */
    twitchResub = (obj) => {
        const data = obj.data;

        let timeStamp = obj.timeStamp;
        let eventId = data.messageId;
        let senderId = data.user.id;
        let eventInfo = obj.event;
        let senderName = data.user.login;

        let username = data.user.name;
        let amount = data.cumulativeMonths;
        let tier = `TTVRESUB-${data.sub_tier}`;
        let donationString = `has resubscribed for ${amount} months!`;

        let payload = Templates.platformDonationEvent(username, donationString, tier);

        let eventObj = new EventObj({
            timestamp: timeStamp,
            eventId: eventId,
            senderId: senderId,
            eventInfo: eventInfo,
            senderName: senderName,
            payload: payload,
        });

        return eventObj;
    }
    /**
     * 
     * @param {streamerbot_event_object} obj 
     * @returns event handler ready payload
     */
    twitchGiftSub = (obj) => {
        const data = obj.data;

        let timeStamp = obj.timeStamp;
        let eventId = data.messageId;
        let senderId = data.user.id;
        let eventInfo = obj.event;
        let senderName = data.user.login;

        let sender = data.user.name;
        let receiver = data.recipient.login;
        let donationString = `has gifted a subscription to ${receiver}`;

        let payload = Templates.platformDonationEvent(sender, donationString);

        let eventObj = new EventObj({
            timestamp: timeStamp,
            eventId: eventId,
            senderId: senderId,
            eventInfo: eventInfo,
            senderName: senderName,
            payload: payload,
        });

        return eventObj;
    }
    /**
     * 
     * @param {streamerbot_event_object} obj 
     * @returns event handler ready payload
     */
    twitchGiftBomb = (obj) => {
        const data = obj.data;

        let timeStamp = obj.timeStamp;
        let eventId = data.messageId;
        let senderId = data.user.id;
        let eventInfo = obj.event;
        let senderName = data.user.login;

        let sender = data.user.name;
        let total = data.total;
        let donationString = `has gifted ${total} subscriptions`;

        let payload = Templates.platformDonationEvent(sender, donationString);

        let eventObj = new EventObj({
            timestamp: timeStamp,
            eventId: eventId,
            senderId: senderId,
            eventInfo: eventInfo,
            senderName: senderName,
            payload: payload,
        });

        return eventObj;
    }
    /**
     * 
     * @param {streamerbot_event_object} obj 
     * @returns event handler ready payload
     */
    twitchRaid = (obj) => {
        const data = obj.data;

        let timestamp = obj.timeStamp;
        let eventId = "nill";
        let senderId = data.from_broadcaster_user_id;
        let eventInfo = obj.event;
        let senderName = data.from_broadcaster_user_name;

        let username = data.from_broadcaster_user_name;
        let amount = data.viewers;
        let raidString = `Has raided with ${amount} viewers`;

        let payload = Templates.raidEvent(username, raidString);

        let eventObj = new EventObj({
            timestamp: timestamp,
            eventId: eventId,
            senderId: senderId,
            eventInfo: eventInfo,
            senderName: senderName,
            payload: payload,
        });

        return eventObj;
    }
    /**
     * 
     * @param {streamerbot_event_object} obj 
     * @returns event handler ready payload
     */
    twitchChatMessage = (obj) => {
        console.log(obj);
        const data = obj.data;
        const message = data.message;

        let timestamp = obj.timeStamp;
        let eventId = message.messageId;
        let senderId = message.userId;
        let eventInfo = obj.event;
        let senderName = message.channel;

        let username = message.username;
        let chat = mediaEncode(message.message, message.emotes);
        let platformShorthand = "TTV";
        let role = message.role > 2 ? "staff" : "";

        let payload = Templates.messageEvent(username, chat, platformShorthand, role);

        let eventObj = new EventObj({
            timestamp: timestamp,
            eventId: eventId,
            senderId: senderId,
            eventInfo: eventInfo,
            senderName: senderName,
            payload: payload,
        });

        return eventObj;
    }

    twitchChatMessageDeleted = (obj) => {
        let data = obj.data;
        return data.messageId;
    }

    twitchUserTimedOut = (obj) => {
        let data = obj.data;
        return data.messageId;
    }

    twitchUserBanned = (obj) => {
        let data = obj.data;
        return data.messageId;
    }
    /**
     * 
     * @param {streamerbot_event_object} obj 
     * @returns event handler ready payload
     */
    youtubeNewSubscriber = (obj) => {
        const data = obj.data;

        let timeStamp = obj.timeStamp;
        let eventId = null;
        let senderId = data.userId;
        let eventInfo = obj.event;
        let senderName = data.username;

        let username = data.username;
        let platformVerb = "Has subscribed";

        let payload = Templates.subscriptionEvent(username, platformVerb);

        let eventObj = new EventObj({
            timestamp: timeStamp,
            eventId: eventId,
            senderId: senderId,
            eventInfo: eventInfo,
            senderName: senderName,
            payload: payload,
        });

        return eventObj;
    }
    /**
     * 
     * @param {streamerbot_event_object} obj 
     * @returns event handler ready payload
     */
    youtubeSuperChat = (obj) => {
        const data = obj.data;

        let timeStamp = obj.timeStamp;
        let eventId = data.eventId;
        let senderId = data.user.id;
        let eventInfo = obj.event;
        let senderName = data.user.name;

        let username = data.user.name;
        let amountString = data.amount;
        let tier = `${data.tier}`;

        // this is a horrible way to do this, please change the implementation in v2. 
        // there is a dependency in the css definitions.
        // we should separate the event listeners from the display handlers, let the display handler determine the tier scheme

        let tierAttribute = {
            "1": "superchat-one",
            "2": "superchat-two",
            "3": "superchat-three",
            "4": "superchat-four",
            "5": "superchat-five",
            "6": "superchat-six",
            "7": "superchat-seven",
        }

        let payload = Templates.platformDonationEvent(username, amountString, tierAttribute[tier]);

        let eventObj = new EventObj({
            timestamp: timeStamp,
            eventId: eventId,
            senderId: senderId,
            eventInfo: eventInfo,
            senderName: senderName,
            payload: payload,
        });

        return eventObj;
    }
    /**
     * 
     * @param {streamerbot_event_object} obj 
     * @returns event handler ready payload
     */
    youtubeSuperSticker = (obj) => {
        const data = obj.data;

        let timeStamp = obj.timeStamp;
        let eventId = data.eventId;
        let senderId = data.user.id;
        let eventInfo = obj.event;
        let senderName = data.user.name;

        let username = data.user.name;
        let amountString = data.amount;
        let tier = `${data.tier}`;

        let tierAttribute = {
            "1": "superchat-one",
            "2": "superchat-two",
            "3": "superchat-three",
            "4": "superchat-four",
            "5": "superchat-five",
            "6": "superchat-six",
            "7": "superchat-seven",
        }

        let payload = Templates.platformDonationEvent(username, amountString, tierAttribute[tier]);

        let eventObj = new EventObj({
            timestamp: timeStamp,
            eventId: eventId,
            senderId: senderId,
            eventInfo: eventInfo,
            senderName: senderName,
            payload: payload,
        });

        return eventObj;
    }
    /**
     * 
     * @param {streamerbot_event_object} obj 
     * @returns event handler ready payload
     */
    youtubenewSponsor = (obj) => {
        const data = obj.data;

        let timeStamp = obj.timeStamp;
        let eventId = data.eventId;
        let senderId = data.user.id;
        let eventInfo = obj.event;
        let senderName = data.user.name;

        let username = data.user.name;
        let tierName = data.levelName;

        let subscriptionString = `just became a ${tierName}`;

        let payload = Templates.paidSubscriptionEvent(username, subscriptionString);

        let eventObj = new EventObj({
            timestamp: timeStamp,
            eventId: eventId,
            senderId: senderId,
            eventInfo: eventInfo,
            senderName: senderName,
            payload: payload,
        });

        return eventObj;
    }
    /**
     * 
     * @param {streamerbot_event_object} obj 
     * @returns event handler ready payload
     */
    youtubeMembershipGift = (obj) => {
        const data = obj.data;

        let timeStamp = obj.timeStamp;
        let eventId = data.eventId;
        let senderId = data.user.id;
        let eventInfo = obj.event;
        let senderName = data.user.name;

        let username = data.user.name;
        let amount = data.count;
        let membershiftString = amount > 1 ? "memberships" : "membership";

        let subscriptionString = `just gifted ${amount} ${membershiftString}`;

        let payload = Templates.massGiftEvent(username, subscriptionString);

        let eventObj = new EventObj({
            timestamp: timeStamp,
            eventId: eventId,
            senderId: senderId,
            eventInfo: eventInfo,
            senderName: senderName,
            payload: payload,
        });

        return eventObj;
    }
    /**
     * 
     * @param {streamerbot_event_object} obj 
     * @returns event handler ready payload
     */
    youtubeMessage = (obj) => {
        console.log(obj);
        const data = obj.data;

        let timestamp = obj.timeStamp;
        let eventId = data.eventId;
        let senderId = data.user.id;
        let eventInfo = obj.event;
        let senderName = data.user.name;

        let username = data.user.name;
        let defaultEmoteChat = mediaEncode(data.message, data.emotes);
        let chat = this.youtubeMediaEncoder(defaultEmoteChat);
        let platformShorthand = "YT";

        // this is not an ideal way to classify the actual role, but I will use it as a patch for now since I 
        // can't be bothered to go further -Todd Dec 29 2024
        let role = "";
        if (data.user.isVerified) role = "staff";
        if (data.user.isSponsor) role = "staff";
        if (data.user.isModerator) role = "staff";
        if (data.user.isOwner) role = "staff";

        let payload = Templates.messageEvent(username, chat, platformShorthand, role);

        let eventObj = new EventObj({
            timestamp: timestamp,
            eventId: eventId,
            senderId: senderId,
            eventInfo: eventInfo,
            senderName: senderName,
            payload: payload,
        });

        return eventObj;
    }
    youtubeMessageDeleted(obj) {
        /** 
         * IDK what is happening, it just kind of seems like messageDeleted events don't really show up
         * I even had my supplier give me a full 2 hour stream of user data, and nothing was found. 
         * I will assume for now that user message deletions aren't used in favor of the userbanned event
         * the user banned event and the timeout events, for the purposes of chatboxes behave the same anyways
         */
        throw new Error("Youtube Message has not been implemented");
    }
    youtubeUserBanned(obj) {
        let data = obj.data;
        return data.bannedUser.id;
    }
}


import { StreamerbotClient } from "@streamerbot/client";

import { EventObj } from "./eventObject";
import * as Templates from "./eventTemplates";
import { DisplayHandler } from "./displayHandler";

// initiating connection with streamerbot: see https://streamerbot.github.io/client/guide/events
// in the future, expected to be more custom client connection settings, like custom port, custom endpoints
const client = new StreamerbotClient();
const display = new DisplayHandler(document.getElementById("display"));

// TODO implement the client.on event handlers

/*
let eventAttributes = {
    eventId: null,
    senderId: null,
    timestamp: null,
    eventInfo: null,
    senderName: null,
    payload: null,
}
*/

// Twitch engagement events

client.on("Twitch.Follow", (obj) => {
  const data = obj.data;
  
  let timestamp = obj.timeStamp;
  let eventId = "nill";
  let senderId = data.user_id;
  let eventInfo = obj.event;
  let senderName = data.user_login;

  let username = data.user_name;
  let platformNoun = "Has followed";

  let payload = Templates.subscriptionEvent(username, platformNoun);

  let eventObj = new EventObj({
      timestamp: timestamp,
      eventId: eventId,
      senderId: senderId,
      eventInfo: eventInfo,
      senderName: senderName,
      payload: payload,
    });
  
    display.pushToDisplay(eventObj);
 });
client.on("Twitch.Cheer", (obj) => {
  const data = obj.data;

  let timestamp = obj.timeStamp;
  let eventId = data.message.msgId;
  let senderId = data.userId;
  let eventInfo = obj.event;
  let senderName = data.message.channel;

  let username = data.message.username;
  let donatedAmount = data.bits;
  let donationString = `has cheered ${donatedAmount} bits!`;

  let payload = Templates.platformDonationEvent(username, donationString);

  let eventObj = new EventObj({
    timestamp: timestamp,
    eventId: eventId,
    senderId: senderId,
    eventInfo: eventInfo,
    senderName: senderName,
    payload: payload,
  });

  display.pushToDisplay(eventObj);

});
client.on("Twitch.Sub", (obj) => {
  const data = obj.data;

  let timestamp = obj.timeStamp;
  let eventId = data.messageId;
  let senderId = data.user.id;
  let eventInfo = obj.event;
  let senderName = data.user.login;

  let username = data.user.name;
  let tier = `TTVSUB-${data.sub_tier}`;
  let donationString = `has subscribed`;

  let payload = Templates.platformDonationEvent(username, donationString, tier);

  let eventObj = new EventObj({
    timestamp: timestamp,
    eventId: eventId,
    senderId: senderId,
    eventInfo: eventInfo,
    senderName: senderName,
    payload: payload,
  });

  display.pushToDisplay(eventObj);

});
client.on("Twitch.Resub", (obj) => {
  const data = obj.data;

  let timestamp = obj.timeStamp;
  let eventId = "nill";
  let senderId = data.user.id;
  let eventInfo = obj.event;
  let senderName = data.user.login;

  let username = data.user.name;
  let amount = data.cumulativeMonths;
  let tier = `TTVRESUB-${data.sub_tier}`;
  let donationString = `has resubscribed for ${amount} months!`;

  let payload = Templates.platformDonationEvent(username, donationString, tier);

  let eventObj = new EventObj({
    timestamp: timestamp,
    eventId: eventId,
    senderId: senderId,
    eventInfo: eventInfo,
    senderName: senderName,
    payload: payload,
  });

  display.pushToDisplay(eventObj);

});
// client.on("Twitch.GiftSub", (obj) => {
// });
// client.on("Twitch.GiftBomb", (obj) => {
// });
client.on("Twitch.Raid", (obj) => {
  });

client.on("Twitch.ChatMessage", (obj) => {
  const data = obj.data;
  const message = data.message;

  let timestamp = obj.timeStamp;
  let eventId = message.messageId;
  let senderId = message.userId;
  let eventInfo = obj.event;
  let senderName = message.channel;

  let username = message.username;
  let chat = message.message;
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

  display.pushToDisplay(eventObj);
});

// twitch moderation events
client.on("Twitch.ChatMessageDeleted", (obj) => {
  let data = obj.data;
  display.removeFromDisplay(data.messageId);
});
client.on("Twitch.UserTimedOut", (obj) => {
  let data = obj.data;
  display.removeFromDisplay(data.user_id);
});
client.on("Twitch.UserBanned", (obj) => {
  let data = obj.data;
  display.removeFromDisplay(data.user_id);
});

// YouTube engagement events
/*
client.on("YouTube.NewSubscriber", (obj) => {
});
client.on("YouTube.SuperChat", (obj) => {
});
client.on("YouTube.SuperSticker", (obj) => {
});
client.on("YouTube.NewSponsor", (obj) => {
});
client.on("YouTube.MembershipGift", (obj) => {
});
*/
client.on("YouTube.Message", (obj) => {
  // console.log(obj);
  const data = obj.data;

  let timestamp = obj.timeStamp;
  let eventId = data.eventId;
  let senderId = data.user.id;
  let eventInfo = obj.event;
  let senderName = data.user.name;

  let username = data.user.name;
  let chat = data.message;
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

  display.pushToDisplay(eventObj);
});

// YouTube moderation events
client.on("YouTube.MessageDeleted", (obj) => {
  throw new Error("Youtube Message has not been implemented");
});
client.on("YouTube.UserBanned", (obj) => {
  let data = obj.data;
  display.removeFromDisplay(data.bannedUser.id);
});

// Streamelements engagement events
client.on("StreamElements.Tip", (obj) => {});

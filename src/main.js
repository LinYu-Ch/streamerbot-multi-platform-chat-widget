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
/*
client.on("Twitch.Follow", (obj) => {
});
client.on("Twitch.Cheer", (obj) => {
});
client.on("Twitch.Sub", (obj) => {
});
client.on("Twitch.Resub", (obj) => {
});
client.on("Twitch.GiftSub", (obj) => {
});
client.on("Twitch.GiftBomb", (obj) => {
});
client.on("Twitch.Raid", (obj) => {
});
*/
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
client.on("Twitch.ChatMessageDeleted", (obj) => {});
client.on("Twitch.UserTimedOut", (obj) => {});
client.on("Twitch.UserBanned", (obj) => {});

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
client.on("YouTube.MessageDeleted", (obj) => {});
client.on("YouTube.UserBanned", (obj) => {});

// Streamelements engagement events
client.on("StreamElements.Tip", (obj) => {});

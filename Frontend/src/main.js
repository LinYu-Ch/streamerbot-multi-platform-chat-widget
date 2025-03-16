import { StreamerbotClient } from "@streamerbot/client";
import { DisplayHandler } from "./displayHandler";
const display = new DisplayHandler(document.getElementById("display"));

import {
  twitchFollow,
  twitchCheer,
  twitchSub,
  twitchResub,
  twitchGiftSub,
  twitchGiftBomb,
  twitchRaid,
  twitchChatMessage,
  twitchChatMessageDeleted,
  twitchUserTimedOut,
  twitchUserBanned,
  youtubeNewSubscriber,
  youtubeSuperChat,
  youtubeSuperSticker,
  youtubenewSponsor,
  youtubeMembershipGift,
  youtubeMessage,
  youtubeMessageDeleted,
  youtubeUserBanned
} from "./eventHandlers";
// initiating connection with streamerbot: see https://streamerbot.github.io/client/guide/events
// in the future, expected to be more custom client connection settings, like custom port, custom endpoints
const client = new StreamerbotClient();

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
  display.pushToDisplay(twitchFollow(obj));
});

client.on("Twitch.Cheer", (obj) => {
  display.pushToDisplay(twitchCheer(obj));
});

client.on("Twitch.Sub", (obj) => {
  display.pushToDisplay(twitchSub(obj));
});

client.on("Twitch.Resub", (obj) => {
  display.pushToDisplay(twitchResub(obj));
});

client.on("Twitch.GiftSub", (obj) => {
  display.pushToDisplay(twitchGiftSub(obj));
});

client.on("Twitch.GiftBomb", (obj) => {
  display.pushToDisplay(twitchGiftBomb(obj));
});

client.on("Twitch.Raid", (obj) => {
  display.pushToDisplay(twitchRaid(obj));
});

client.on("Twitch.ChatMessage", (obj) => {
  display.pushToDisplay(twitchChatMessage(obj));
});

// twitch moderation events
client.on("Twitch.ChatMessageDeleted", (obj) => {
  display.removeFromDisplay(twitchChatMessageDeleted(obj));
});

client.on("Twitch.UserTimedOut", (obj) => {
  display.removeFromDisplay(twitchUserTimedOut(obj));
});

client.on("Twitch.UserBanned", (obj) => {
  display.removeFromDisplay(twitchUserBanned(obj));
});

// YouTube engagement events
client.on("YouTube.NewSubscriber", (obj) => {
  display.pushToDisplay(youtubeNewSubscriber(obj));
});
client.on("YouTube.SuperChat", (obj) => {
  display.pushToDisplay(youtubeSuperChat(obj));
});

// supersticker object signature not found, using superchat signature as placeholder
// should be noted in case of test failures
client.on("YouTube.SuperSticker", (obj) => {
  display.pushToDisplay(youtubeSuperSticker(obj));
});

client.on("YouTube.NewSponsor", (obj) => {
  display.pushToDisplay(youtubenewSponsor(obj));
});
client.on("YouTube.MembershipGift", (obj) => {
  display.pushToDisplay(youtubeMembershipGift(obj));
});

client.on("YouTube.Message", (obj) => {
  display.pushToDisplay(youtubeMessage(obj));
});

// YouTube moderation events
client.on("YouTube.MessageDeleted", (obj) => {
  display.removeFromDisplay(youtubeMessageDeleted(obj));
});

client.on("YouTube.UserBanned", (obj) => {
  display.removeFromDisplay(youtubeUserBanned(obj));
});

// Streamelements engagement events
client.on("StreamElements.Tip", (obj) => {
  throw new console.error("Developer error: Streamelements tips have not been implemented");

});

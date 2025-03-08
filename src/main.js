import { StreamerbotClient } from "@streamerbot/client";
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
  twitchFollow(obj);
});

client.on("Twitch.Cheer", (obj) => {
  twitchCheer(obj);
});

client.on("Twitch.Sub", (obj) => {
  twitchSub(obj);
});

client.on("Twitch.Resub", (obj) => {
  twitchResub(obj);
});

client.on("Twitch.GiftSub", (obj) => {
  twitchGiftSub(obj);
});

client.on("Twitch.GiftBomb", (obj) => {
  twitchGiftBomb(obj);
});

client.on("Twitch.Raid", (obj) => {
  twitchRaid(obj);
});

client.on("Twitch.ChatMessage", (obj) => {
  twitchChatMessage(obj);
});

// twitch moderation events
client.on("Twitch.ChatMessageDeleted", (obj) => {
  twitchChatMessageDeleted(obj);
});

client.on("Twitch.UserTimedOut", (obj) => {
  twitchUserTimedOut(obj);
});

client.on("Twitch.UserBanned", (obj) => {
  twitchUserBanned(obj);
});

// YouTube engagement events
client.on("YouTube.NewSubscriber", (obj) => {
  youtubeNewSubscriber(obj);
});
client.on("YouTube.SuperChat", (obj) => {
  youtubeSuperChat(obj);
});

// supersticker object signature not found, using superchat signature as placeholder
// should be noted in case of test failures
client.on("YouTube.SuperSticker", (obj) => {
  youtubeSuperSticker(obj);
});

client.on("YouTube.NewSponsor", (obj) => {
  youtubenewSponsor(obj);
});
client.on("YouTube.MembershipGift", (obj) => {
  youtubeMembershipGift(obj);
});

client.on("YouTube.Message", (obj) => {
  youtubeMessage(obj);
});

// YouTube moderation events
client.on("YouTube.MessageDeleted", (obj) => {
  youtubeMessageDeleted(obj);
});

client.on("YouTube.UserBanned", (obj) => {
  youtubeUserBanned(obj);
});

// Streamelements engagement events
client.on("StreamElements.Tip", (obj) => {
  throw new console.error("Developer error: Streamelements tips have not been implemented");

});

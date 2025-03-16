import { StreamerbotClient } from "@streamerbot/client";
import { DisplayHandler } from "./displayHandler";
import { io } from "socket.io-client";
const display = new DisplayHandler(document.getElementById("display"));

// IMPORTANT: event handlers return payload data
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

// block of code sets up a new socket instance to communicate with backend
const PORT = 10890;
const socket = io(`http://localhost:${PORT}`);

// functions object is a hashmap ADT to make handler string <-> function changes easier
const FUNCTIONS = {
    "twitchFollow" : twitchFollow,
    "twitchCheer" : twitchCheer,
    "twitchSub" : twitchSub,
    "twitchResub" : twitchResub,
    "twitchGiftSub" : twitchGiftSub,
    "twitchGiftBomb" : twitchGiftBomb,
    "twitchRaid" : twitchRaid,
    "twitchChatMessage" : twitchChatMessage,
    "twitchChatMessageDeleted" : twitchChatMessageDeleted,
    "twitchUserTimedOut" : twitchUserTimedOut,
    "twitchUserBanned" : twitchUserBanned,
    "youtubeNewSubscriber" : youtubeNewSubscriber,
    "youtubeSuperChat" : youtubeSuperChat,
    "youtubeSuperSticker" : youtubeSuperSticker,
    "youtubenewSponsor" : youtubenewSponsor,
    "youtubeMembershipGift" : youtubeMembershipGift,
    "youtubeMessage" : youtubeMessage,
    "youtubeMessageDeleted" : youtubeMessageDeleted,
    "youtubeUserBanned" : youtubeUserBanned
}

// command objects only received after connection has been fully established, otherwise it won't even fire
socket.on("connect", () => {
  console.log("(SBCHAT) MAIN connection with backend server established on port: ", PORT);
  
  socket.on("command", (obj)=>{
    const eventType = obj.eventType;
    const data = obj.eventData;
    const handler = FUNCTIONS[eventType];
    display.pushToDisplay(handler(data));
  });
});


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

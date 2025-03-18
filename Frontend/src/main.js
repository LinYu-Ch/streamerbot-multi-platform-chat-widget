import { StreamerbotClient } from "@streamerbot/client";
import { DisplayHandler } from "./displayHandler";
import { EventHandlers } from "./eventHandlers";
import { io } from "socket.io-client";
const display = new DisplayHandler(document.getElementById("display"));

// initiating connection with streamerbot: see https://streamerbot.github.io/client/guide/events
// in the future, expected to be more custom client connection settings, like custom port, custom endpoints
const client = new StreamerbotClient();

// block of code sets up a new socket instance to communicate with backend
const PORT = 10890;
const socket = io(`http://localhost:${PORT}`);

// command objects only received after connection has been fully established, otherwise it won't even fire
socket.on("connect", () => {
  console.log("(SBCHAT) MAIN connection with backend server established on port: ", PORT);

  socket.on("staticData", (obj) => {
    console.log("Server side data has been received");
    const events = new EventHandlers(obj);

    // functions object is a hashmap ADT to make handler string <-> function changes easier
  const FUNCTIONS = {
    "twitchFollow": events.twitchFollow,
    "twitchCheer": events.twitchCheer,
    "twitchSub": events.twitchSub,
    "twitchResub": events.twitchResub,
    "twitchGiftSub": events.twitchGiftSub,
    "twitchGiftBomb": events.twitchGiftBomb,
    "twitchRaid": events.twitchRaid,
    "twitchChatMessage": events.twitchChatMessage,
    "twitchChatMessageDeleted": events.twitchChatMessageDeleted,
    "twitchUserTimedOut": events.twitchUserTimedOut,
    "twitchUserBanned": events.twitchUserBanned,
    "youtubeNewSubscriber": events.youtubeNewSubscriber,
    "youtubeSuperChat": events.youtubeSuperChat,
    "youtubeSuperSticker": events.youtubeSuperSticker,
    "youtubenewSponsor": events.youtubenewSponsor,
    "youtubeMembershipGift": events.youtubeMembershipGift,
    "youtubeMessage": events.youtubeMessage,
    "youtubeMessageDeleted": events.youtubeMessageDeleted,
    "youtubeUserBanned": events.youtubeUserBanned,
  }
    
    socket.on("command", (obj) => {
      const eventType = obj.eventType;
      const data = obj.eventData;
      const handler = FUNCTIONS[eventType];
      display.pushToDisplay(handler(data));
    });
  });


  // Twitch engagement events
  client.on("Twitch.Follow", (obj) => {
    display.pushToDisplay(events.twitchFollow(obj));
  });

  client.on("Twitch.Cheer", (obj) => {
    display.pushToDisplay(events.twitchCheer(obj));
  });

  client.on("Twitch.Sub", (obj) => {
    display.pushToDisplay(events.twitchSub(obj));
  });

  client.on("Twitch.Resub", (obj) => {
    display.pushToDisplay(events.twitchResub(obj));
  });

  client.on("Twitch.GiftSub", (obj) => {
    display.pushToDisplay(events.twitchGiftSub(obj));
  });

  client.on("Twitch.GiftBomb", (obj) => {
    display.pushToDisplay(events.twitchGiftBomb(obj));
  });

  client.on("Twitch.Raid", (obj) => {
    display.pushToDisplay(events.twitchRaid(obj));
  });

  client.on("Twitch.ChatMessage", (obj) => {
    display.pushToDisplay(events.twitchChatMessage(obj));
  });

  // twitch moderation events
  client.on("Twitch.ChatMessageDeleted", (obj) => {
    display.removeFromDisplay(events.twitchChatMessageDeleted(obj));
  });

  client.on("Twitch.UserTimedOut", (obj) => {
    display.removeFromDisplay(events.twitchUserTimedOut(obj));
  });

  client.on("Twitch.UserBanned", (obj) => {
    display.removeFromDisplay(events.twitchUserBanned(obj));
  });

  // YouTube engagement events
  client.on("YouTube.NewSubscriber", (obj) => {
    display.pushToDisplay(events.youtubeNewSubscriber(obj));
  });
  client.on("YouTube.SuperChat", (obj) => {
    display.pushToDisplay(events.youtubeSuperChat(obj));
  });

  // supersticker object signature not found, using superchat signature as placeholder
  // should be noted in case of test failures
  client.on("YouTube.SuperSticker", (obj) => {
    display.pushToDisplay(events.youtubeSuperSticker(obj));
  });

  client.on("YouTube.NewSponsor", (obj) => {
    display.pushToDisplay(events.youtubenewSponsor(obj));
  });
  client.on("YouTube.MembershipGift", (obj) => {
    display.pushToDisplay(events.youtubeMembershipGift(obj));
  });

  client.on("YouTube.Message", (obj) => {
    display.pushToDisplay(events.youtubeMessage(obj));
  });

  // YouTube moderation events
  client.on("YouTube.MessageDeleted", (obj) => {
    display.removeFromDisplay(events.youtubeMessageDeleted(obj));
  });

  client.on("YouTube.UserBanned", (obj) => {
    display.removeFromDisplay(events.youtubeUserBanned(obj));
  });

  // Streamelements engagement events
  client.on("StreamElements.Tip", (obj) => {
    throw new console.error("Developer error: Streamelements tips have not been implemented");

  });
});
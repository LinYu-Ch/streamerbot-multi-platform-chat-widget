/** 
 * part of front end testing environment, 
 * disconnected from streamerbot: Results may varry depending on how up to date
 * test events are
 * _METADATA: Last modified(march 8)
*/
import {
    twitchFollow,
    twitchCheer,
    twitchSub,
    twitchResub,
    twitchGiftSub,
    twitchGiftBomb,
    twitchRaid,
    twitchChatMessage,
    youtubeNewSubscriber,
    youtubeSuperChat,
    youtubeSuperSticker,
    youtubenewSponsor,
    youtubeMembershipGift,
    youtubeMessage,
} from "./eventHandlers";

import {
    generateTwitchFollow,
    generateTwitchResub,
    generateTwitchSub,
    generateTwitchGiftBomb,
    generateTwitchGiftSub,
    generateTwitchCheer,
    generateTwitchRaid,
    generateTwitchChatMessage,
    generateEmoteOnlyTwitchChatMessage,
    generateYoutubeNewSubscriber,
    generateYoutubeMessage,
    generateEmoteOnlyYoutubeMessage,
    generateYoutubeNewSponsor,
    generateYoutubeMembershipGift,
    generateYoutubeSuperChat,
} from "./testEvents"

const eventMappings = [
    { id: "twitchFollow", generator: generateTwitchFollow, handler: twitchFollow },
    { id: "twitchCheer", generator: generateTwitchCheer, handler: twitchCheer },
    { id: "twitchSub", generator: generateTwitchSub, handler: twitchSub },
    { id: "twitchResub", generator: generateTwitchResub, handler: twitchResub },
    { id: "twitchGiftSub", generator: generateTwitchGiftSub, handler: twitchGiftSub },
    { id: "twitchGiftBomb", generator: generateTwitchGiftBomb, handler: twitchGiftBomb },
    { id: "twitchRaid", generator: generateTwitchRaid, handler: twitchRaid },
    { id: "twitchChatMessage", generator: generateTwitchChatMessage, handler: twitchChatMessage },
    { id: "twitchEmoteOnlyMessage", generator: generateEmoteOnlyTwitchChatMessage, handler: twitchChatMessage },
    { id: "youtubeNewSubscriber", generator: generateYoutubeNewSubscriber, handler: youtubeNewSubscriber },
    { id: "youtubeSuperChat", generator: generateYoutubeSuperChat, handler: youtubeSuperChat },
    { id: "youtubenewSponsor", generator: generateYoutubeNewSponsor, handler: youtubenewSponsor },
    { id: "youtubeMembershipGift", generator: generateYoutubeMembershipGift, handler: youtubeMembershipGift },
    { id: "youtubeMessage", generator: generateYoutubeMessage, handler: youtubeMessage },
    { id: "youtubeEmoteOnlyMessage", generator: generateEmoteOnlyYoutubeMessage, handler: youtubeMessage },
    { id: "youtubeSuperSticker", generator: generateYoutubeSuperChat, handler: youtubeSuperSticker },
  ];
  
  eventMappings.forEach(({ id, generator, handler }) => {
    const btn = document.getElementById(id);
    if (btn) {
      btn.addEventListener("click", () => {
        const eventData = generator();
        handler(eventData);
      });
    }
  });
  
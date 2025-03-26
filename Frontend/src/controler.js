/** 
 * part of front end testing environment, 
 * disconnected from streamerbot: Results may varry depending on how up to date
 * test events are
 * _METADATA: Last modified(march 15)
*/
import { io } from "socket.io-client";

const PORT = 10890;
const socket = io(`http://localhost:${PORT}`);

function sendToServer(payload, socket, channel) {
  console.log("sending:", payload);
  socket.emit(channel, payload);
}

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
  { id: "twitchFollow", generator: generateTwitchFollow, handler: "twitchFollow" },
  { id: "twitchCheer", generator: generateTwitchCheer, handler: "twitchCheer" },
  { id: "twitchSub", generator: generateTwitchSub, handler: "twitchSub" },
  { id: "twitchResub", generator: generateTwitchResub, handler: "twitchResub" },
  { id: "twitchGiftSub", generator: generateTwitchGiftSub, handler: "twitchGiftSub" },
  { id: "twitchGiftBomb", generator: generateTwitchGiftBomb, handler: "twitchGiftBomb" },
  { id: "twitchRaid", generator: generateTwitchRaid, handler: "twitchRaid" },
  { id: "twitchChatMessage", generator: generateTwitchChatMessage, handler: "twitchChatMessage" },
  { id: "twitchEmoteOnlyMessage", generator: generateEmoteOnlyTwitchChatMessage, handler: "twitchChatMessage" },
  { id: "youtubeNewSubscriber", generator: generateYoutubeNewSubscriber, handler: "youtubeNewSubscriber" },
  { id: "youtubeSuperChat", generator: generateYoutubeSuperChat, handler: "youtubeSuperChat" },
  { id: "youtubenewSponsor", generator: generateYoutubeNewSponsor, handler: "youtubenewSponsor" },
  { id: "youtubeMembershipGift", generator: generateYoutubeMembershipGift, handler: "youtubeMembershipGift" },
  { id: "youtubeMessage", generator: generateYoutubeMessage, handler: "youtubeMessage" },
  { id: "youtubeEmoteOnlyMessage", generator: generateEmoteOnlyYoutubeMessage, handler: "youtubeMessage" },
  { id: "youtubeSuperSticker", generator: generateYoutubeSuperChat, handler: "youtubeSuperSticker" },
];

socket.on("connect", () => {

  console.log("(SBCHAT) CONTROLER connection with backend server established on port: ", PORT);
  eventMappings.forEach(({ id, generator, handler }) => {
    const btn = document.getElementById(id);
    if (btn) {
      btn.addEventListener("click", () => {
        const eventData = generator();
        const eventPayload = {
          eventType: handler,
          eventData: eventData,
        }
        sendToServer(eventPayload, socket, "control");
      });
    }
  });

  const youtubeEmoteForm = document.getElementById('youtube-emote-inputs');
  const youtubeEmoteFormSubmit = document.getElementById('save-emotes');

  youtubeEmoteFormSubmit.addEventListener('click', () => {
    const formData = new FormData(youtubeEmoteForm);
    const formPayload = {};

    // separating form data into an array of values so its easier to throw into the payloads
    let tempNameValue = "";
    const regex = /:_([\w]+):/;
    Array.from(formData.values()).forEach((value, index) => {

      // if index isn't even, if its a name
      if (index % 2 === 0) {
        tempNameValue = value.replace(regex, '$1');
        if (tempNameValue === "") return;
      } else {
        if (value.size == 0) return;
        formPayload[tempNameValue] = {
          data: value,
          type: value.type,
        }
      }
    });

    sendToServer(formPayload, socket, "emotes");
  })

  
  const emoteBlockFactory = (emoteInputBlock, label = null, image = null) => {
    const newEmoteBlock = emoteInputBlock.cloneNode(true);
    emoteForm.prepend(newEmoteBlock);

    const fileInput = newEmoteBlock.querySelector('.upload-emote');
    const emoteLabel = newEmoteBlock.querySelector('.label-emote');
    const emotePreview = newEmoteBlock.querySelector('.emote-preview');
    const deleteBlock = newEmoteBlock.querySelector('.remove-emote');

    emotePreview.src = image ?? "";
    emoteLabel.value = label ?? "";

    // detects change on file input, then sets the emote preview to the image
    // reference: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file
    fileInput.addEventListener('change', () => {
      const curFiles = fileInput.files;
      if (curFiles.length === 0) { console.error('File input unsuccessful'); return }
      emotePreview.src = URL.createObjectURL(curFiles[0]);
    });

    deleteBlock.addEventListener('click', () => {
      newEmoteBlock.remove();
    });
  }
  // logic to create and manage the state of add youtube emote blocks
  const emoteForm = document.getElementById('youtube-emote-inputs');
  const emoteInputBlock = document.getElementById('emote-input-block');
  const addEmote = document.getElementById('add-emote');
  
  // adds a new emote block and attatches event listeners to them
  addEmote.addEventListener("click", () => {
    emoteBlockFactory(emoteInputBlock);
  });
  
  socket.on('staticData', (youtubeEmotes)=>{

    
    for (let emote in youtubeEmotes) {
      const emoteName = youtubeEmotes[emote].name;
      const webImage = youtubeEmotes[emote].body;
      
      const onScreenEmotes = document.querySelectorAll(".label-emote");
      const onScreenValues = Array.from(onScreenEmotes);
      const onScreenNames = onScreenValues.map((value)=>value.value);
      if (onScreenNames.includes(emoteName) || onScreenNames.includes(`:_${emoteName}:`) || onScreenNames.includes(emoteName.replace(/:_([\w]+):/, "$1"))) continue;

      emoteBlockFactory(emoteInputBlock, emoteName, webImage);
  }
  })
});


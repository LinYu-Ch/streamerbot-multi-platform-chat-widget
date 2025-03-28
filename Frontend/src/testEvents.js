// general loops
const customNames = ["Amigravity", "Teacuppity", "Luke", "Mile", "OmegaPendragon", "SeriouslyifyouhaveanamethislongIhateyou"];
let nameIndex = 0;
function nextName() {
    const name = customNames[nameIndex];
    nameIndex = (nameIndex + 1) % customNames.length;
    return name;
}

const customTwitchMessages = [
    {
        message: "This is a 1 line message",
        emotes: [],
        parts: [{ text: "This is a 1 line message" }]
    },
    {
        message: "This is a longer message which may go over 1 line",
        emotes: [],
        parts: [{ text: "This is a longer message which may go over 1 line" }]

    },
    {
        message: "This is a message that should contain an emote seolHehe",
        emotes: [{
            "id": "emotesv2_2edf51379a5947f3ae12812a1c504b7e",
            "type": "Twitch",
            "name": "seolHehe",
            "startIndex": 47,
            "endIndex": 54,
            "imageUrl": "https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_2edf51379a5947f3ae12812a1c504b7e/default/dark/2.0"
        }],
        parts: [
            {
                type: "text",
                text: "This is a message that should contain an emote "
            },
            {
                "source": "Twitch",
                "imageUrl": "https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_2edf51379a5947f3ae12812a1c504b7e/default/dark/2.0",
                "type": "emote",
                "text": "seolHehe"
            }
        ]
    },
    {
        // emote only message
        message: "niupaoDance",
        emotes: [{
            "id": "emotesv2_f337fee9a11a41c1bfbd61e0bf95f255",
            "type": "Twitch",
            "name": "niupaoDance",
            "startIndex": 0,
            "endIndex": 10,
            "imageUrl": "https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_f337fee9a11a41c1bfbd61e0bf95f255/default/dark/2.0"
        }],
        parts: [
            {
                "source": "Twitch",
                "imageUrl": "https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_f337fee9a11a41c1bfbd61e0bf95f255/default/dark/2.0",
                "type": "emote",
                "text": "niupaoDance"
            }
        ]
    },
    {
        // emotes message
        message: "niupaoDance seolHehe",
        emotes: [{
            "id": "emotesv2_f337fee9a11a41c1bfbd61e0bf95f255",
            "type": "Twitch",
            "name": "niupaoDance",
            "startIndex": 0,
            "endIndex": 10,
            "imageUrl": "https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_f337fee9a11a41c1bfbd61e0bf95f255/default/dark/2.0"
        },
        {
            "id": "emotesv2_2edf51379a5947f3ae12812a1c504b7e",
            "type": "Twitch",
            "name": "seolHehe",
            "startIndex": 12,
            "endIndex": 19,
            "imageUrl": "https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_2edf51379a5947f3ae12812a1c504b7e/default/dark/2.0"
        }],
        parts: [
            {
                "source": "Twitch",
                "imageUrl": "https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_f337fee9a11a41c1bfbd61e0bf95f255/default/dark/2.0",
                "type": "emote",
                "text": "niupaoDance"
            },
            {
                "type": "text",
                "text": " "
            },
            {
                "source": "Twitch",
                "imageUrl": "https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_2edf51379a5947f3ae12812a1c504b7e/default/dark/2.0",
                "type": "emote",
                "text": "seolHehe"
            },
        ],
    }

];
let twitchMessageIndex = 0;
function nextTwitchMessage() {
    const message = customTwitchMessages[twitchMessageIndex];
    twitchMessageIndex = (twitchMessageIndex + 1) % customTwitchMessages.length;
    return message;
}

const donationAmounts = [2, 5, 10, 20, 50, 100, 500];
let donationIndex = 0;
function nextDonationAmount() {
    const amount = donationAmounts[donationIndex];
    donationIndex = (donationIndex + 1) % donationAmounts.length;
    return amount;
}

const giftSubscriptionAmounts = [1, 5, 10, 20, 50, 100];
let paidSubIndex = 0;
function nextGiftAmount() {
    const amount = giftSubscriptionAmounts[paidSubIndex];
    paidSubIndex = (paidSubIndex + 1) % giftSubscriptionAmounts.length;
    return amount;
}


// twitch loops
const twitchSubTiers = [1000, 2000, 3000];
let twitchSubIndex = 0;
function nextSubTier() {
    const tier = twitchSubTiers[twitchSubIndex];
    twitchSubIndex = (twitchSubIndex + 1) % twitchSubTiers.length;
    return tier;
}

const bitAmounts = [1, 100, 1000, 5000, 10000, 25000, 50000];
let bitIndex = 0;
function nextBitTier() {
    const tier = bitAmounts[bitIndex];
    bitIndex = (bitIndex + 1) % bitAmounts.length;
    return tier;
}

const twitchRoleCap = 6;
let twitchRoleCount = 0;
function nextTwitchRole() {
    const role = twitchRoleCount;
    twitchRoleCount++;
    twitchRoleCount = twitchRoleCount % twitchRoleCap;
    return role;
}
// youtube loops
const customYoutubeMessages = [
    {
        message: "This is a 1 line message",
        emotes: [],
        parts: [{ text: "This is a 1 line message" }]
    },
    {
        message: "This is a longer message which may go over 1 line",
        emotes: [],
        parts: [{ text: "This is a longer message which may go over 1 line" }]
    },
    {
        message: ":face-red-heart-shape: This is a message that contains an emote",
        emotes: [
            {
                "type": "youtube",
                "name": ":face-red-heart-shape:",
                "startIndex": 0,
                "endIndex": 21,
                "imageUrl": "https://yt3.ggpht.com/I0Mem9dU_IZ4a9cQPzR0pUJ8bH-882Eg0sDQjBmPcHA6Oq0uXOZcsjPvPbtormx91Ha2eRA=w24-h24-c-k-nd"
            }
        ],
        parts: [
            {
                "emoji": ":face-red-heart-shape:",
                "image": "https://yt3.ggpht.com/I0Mem9dU_IZ4a9cQPzR0pUJ8bH-882Eg0sDQjBmPcHA6Oq0uXOZcsjPvPbtormx91Ha2eRA=w24-h24-c-k-nd",
                "startIndex": 0,
                "endIndex": 21,
                "text": ":face-red-heart-shape:"
            },
            {
                "type": "text",
                "text": " This is a message that contains an emote"
            }

        ]
    },
    {
        "message": ":face-red-heart-shape::face-red-heart-shape:",
        "emotes": [
            {
                "type": "youtube",
                "name": ":face-red-heart-shape:",
                "startIndex": 0,
                "endIndex": 21,
                "imageUrl": "https://yt3.ggpht.com/I0Mem9dU_IZ4a9cQPzR0pUJ8bH-882Eg0sDQjBmPcHA6Oq0uXOZcsjPvPbtormx91Ha2eRA=w24-h24-c-k-nd"
            },
            {
                "type": "youtube",
                "name": ":face-red-heart-shape:",
                "startIndex": 22,
                "endIndex": 43,
                "imageUrl": "https://yt3.ggpht.com/I0Mem9dU_IZ4a9cQPzR0pUJ8bH-882Eg0sDQjBmPcHA6Oq0uXOZcsjPvPbtormx91Ha2eRA=w24-h24-c-k-nd"
            }
        ],
        "parts": [
            {
                "emoji": ":face-red-heart-shape:",
                "image": "https://yt3.ggpht.com/I0Mem9dU_IZ4a9cQPzR0pUJ8bH-882Eg0sDQjBmPcHA6Oq0uXOZcsjPvPbtormx91Ha2eRA=w24-h24-c-k-nd",
                "startIndex": 0,
                "endIndex": 21,
                "text": ":face-red-heart-shape:"
            },
            {
                "emoji": ":face-red-heart-shape:",
                "image": "https://yt3.ggpht.com/I0Mem9dU_IZ4a9cQPzR0pUJ8bH-882Eg0sDQjBmPcHA6Oq0uXOZcsjPvPbtormx91Ha2eRA=w24-h24-c-k-nd",
                "startIndex": 22,
                "endIndex": 43,
                "text": ":face-red-heart-shape:"
            }
        ],
    },


];


let youtubeMessageIndex = 0;
function nextYoutubeMessage() {
    const message = customYoutubeMessages[youtubeMessageIndex];
    youtubeMessageIndex = (youtubeMessageIndex + 1) % customYoutubeMessages.length;
    return message;
}

const youtubeMembershipTiers = ["tier 1", "tier 2", "tier 3"];
let youtubeMembershipIndex = 0;
function nextYoutubeTier() {
    const tier = youtubeMembershipTiers[youtubeMembershipIndex];
    youtubeMembershipIndex = (youtubeMembershipIndex + 1) % youtubeMembershipTiers.length;
    return tier;
}

const youtubeRoleCap = 3;
let youtubeRoleCount = 0;
function nextYoutubeRole() {
    const role = youtubeRoleCount;
    youtubeRoleCount++;
    youtubeRoleCount = youtubeRoleCount % youtubeRoleCap;
    return role;
}
function generateBroadcast() {
    // Using a fixed set of tags for broadcast. You can customize these as needed.
    const tags = ["full playthrough", "full game", "vtuber"];
    return {
        id: uuidv4().slice(0, 12),
        channelId: randomYouTubeId(),
        liveChatId: uuidv4().replace(/-/g, "").slice(0, 24),
        title: "Random Broadcast Title",
        description: "This is a random broadcast description.",
        categoryId: 0, // not used
        privacy: "public",
        publishedAt: getTimestamp(),
        scheduledStartTime: getTimestamp(),
        scheduledEndTime: getTimestamp(5),
        actualStartTime: getTimestamp(),
        actualEndTime: getTimestamp(5),
        tags: tags.slice(0, Math.floor(Math.random() * tags.length) + 1),
        defaultLanguage: "en",
        defaultAudioLanguage: "en",
        status: "live"
    };
}

let currentYoutubeBroadcast = generateBroadcast();

function getTimestamp(offset = 0) {
    const dateOffset = offset * 60 * 60 * 1000;
    return new Date(dateOffset).toISOString();
}

function randomColor() {
    const randomHex = Math.floor(Math.random() * 0xffffff)
        .toString(16)
        .padStart(6, "0");
    return `#${randomHex.toUpperCase()}`;
}

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

function randomYouTubeId(prefix = "UC") {
    const idLength = 22 - prefix.length;
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-";
    let id = prefix;
    for (let i = 0; i < idLength; i++) {
        id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
}


function generateYouTubeUser() {
    const userId = randomYouTubeId();
    const userRole = nextYoutubeRole();
    return {
        id: userId,
        url: `http://www.youtube.com/channel/${userId}`,
        name: nextName(),
        profileImageUrl: "https://yt3.ggpht.com/EDFnfj5OT0u-URTXvsZNCeRI66GDTKipMyBcUtKLuszrod_NuHBJ8XmJmz5686149S7K9xiZSxk=s88-c-k-c0x00ffffff-no-rj",
        isOwner: userRole == 3,
        isModerator: userRole == 2,
        isSponsor: userRole == 1,
        isVerified: userRole == 0
    };
}

// Twitch Event generators
export function generateTwitchFollow() {
    const username = nextName();
    return {
        timeStamp: getTimestamp(),
        event: { source: "Twitch", type: "Follow" },
        data: {
            user_id: String(Math.floor(Math.random() * 90000000) + 10000000),
            user_login: username,
            user_name: username,
            followed_at: getTimestamp(),
            is_test: false
        }
    };
}

export function generateTwitchResub() {
    const username = nextName();
    return {
        timeStamp: getTimestamp(),
        event: { source: "Twitch", type: "ReSub" },
        data: {
            cumulativeMonths: 2,
            durationMonths: 2,
            streakMonths: 2,
            subTier: nextSubTier(),
            isPrime: false,
            isGift: false,
            gifterIsAnonymous: false,
            text: "",
            parts: [],
            user: {
                role: nextTwitchRole(),
                badges: [],
                color: randomColor(),
                subscribed: true,
                monthsSubscribed: 2,
                id: String(Math.floor(Math.random() * 90000000) + 10000000),
                login: username,
                name: username,
                type: "twitch"
            },
            messageId: uuidv4(),
            systemMessage: `${username} resubscribed`,
            isTest: false,
        }
    };
}

export function generateTwitchSub() {
    const username = nextName();
    return {
        timeStamp: getTimestamp(),
        event: { source: "Twitch", type: "Sub" },
        data: {
            sub_tier: nextSubTier(),
            is_prime: false,
            duration_months: 1,
            user: {
                role: nextTwitchRole(),
                badges: [], // add samples if you need to simulate these
                color: randomColor(),
                subscribed: true,
                monthsSubscribed: 1,
                id: String(Math.floor(Math.random() * 90000000) + 10000000),
                login: username,
                name: username,
                type: "twitch"
            },
            messageId: uuidv4(),
            systemMessage: `${username} has subscribed`,
            isTest: false,
        }
    };
}

export function generateTwitchGiftBomb() {
    function randomRecipient() {
        const username = nextName();
        return {
            id: String(Math.floor(Math.random() * 9000000) + 1000000),
            login: username,
            name: username,
            type: "twitch"
        };
    }
    const numRecipients = nextGiftAmount();
    const recipients = Array.from({ length: numRecipients }, randomRecipient);
    const username = nextName();
    return {
        timeStamp: getTimestamp(),
        event: { source: "Twitch", type: "GiftBomb" },
        data: {
            id: String(Math.floor(Math.random() * 1e20) + 1e19),
            total: recipients.length,
            cumulative_total: numRecipients,
            sub_tier: nextSubTier(),
            recipients: recipients,
            user: {
                role: nextTwitchRole(),
                badges: [], // implement if you need to test these
                color: randomColor(),
                subscribed: false,
                monthsSubscribed: 0,
                id: String(Math.floor(Math.random() * 90000000) + 10000000),
                login: username,
                name: username,
                type: "twitch"
            },
            messageId: uuidv4(),
            systemMessage: `${nextName} has gifted ${numRecipients} subs`,
            isTest: false,
        }
    };
}

export function generateTwitchGiftSub() {
    const username = nextName();
    const recepientName = nextName();
    return {
        timeStamp: getTimestamp(),
        event: { source: "Twitch", type: "GiftSub" },
        data: {
            durationMonths: 1,
            cumlativeTotal: 1,
            recipient: {
                id: String(Math.floor(Math.random() * 9000000) + 1000000),
                login: recepientName,
                name: recepientName,
                type: "twitch"
            },
            subTier: nextSubTier(),
            communityGiftId: String(Math.floor(Math.random() * 1e20) + 1e19),
            fromCommunitySubGift: false,
            randomCommunitySubGift: false,
            communitySubGiftCount: 1,
            communitySubGiftCumulativeTotal: 100,
            user: {
                role: nextTwitchRole(),
                badges: [],
                color: randomColor(),
                subscribed: true,
                monthsSubscribed: Math.floor(Math.random() * 24) + 1,
                id: String(Math.floor(Math.random() * 90000000) + 10000000),
                login: username,
                name: username,
                type: "twitch"
            },
            messageId: uuidv4(),
            systemMessage: `${username} has gifted a sub`,
            isTest: false,
        }
    };
}

export function generateTwitchCheer() {
    // NOTE: add these later
    // const cheerEmote = {
    //     bits: 100,
    //     color: "#9C3EE8",
    //     type: "CheerEmote",
    //     name: "Cheer",
    //     startIndex: 0,
    //     endIndex: 7,
    //     imageUrl: "https://example.com/cheer.gif"
    // };
    const msgId = uuidv4();
    const userId = String(Math.floor(Math.random() * 9000000) + 1000000);
    const username = nextName();
    const role = nextTwitchRole();
    const color = randomColor();
    const subTier = nextSubTier();
    const payload = nextTwitchMessage();
    return {
        timeStamp: getTimestamp(),
        event: { source: "Twitch", type: "Cheer" },
        data: {
            bits: nextBitTier(),
            cheerEmotes: [],
            message: {
                internal: false,
                msgId: msgId,
                userId: userId,
                username: username,
                role: role,
                subscriber: true,
                subscriptionTier: subTier,
                displayName: username,
                color: color,
                channel: "example_channel",
                message: payload.message,
                isHighlighted: false,
                isMe: false,
                isCustomReward: false,
                isAnonymous: false,
                isReply: false,
                bits: nextBitTier(),
                firstMessage: false,
                returningChatter: false,
                hasBits: true,
                emotes: payload.emotes,
                cheerEmotes: [],
                badges: [],
                monthsSubscribed: 1,
                isTest: false,
                sharedChat: false,
                sourceBadges: []
            },
            user: {
                role: role,
                badges: [],
                color: color,
                subscribed: true,
                subscriptionTier: subTier,
                monthsSubscribed: 2,
                id: userId,
                login: username,
                name: username,
                type: "twitch"
            },
            messageId: msgId,
            meta: {},
            anonymous: false,
            text: payload.message,
            emotes: [],
            parts: payload.parts,
            isReply: false,
            isSharedChat: false,
            isTest: false,
        }
    };
}

export function generateTwitchRaid() {
    const source = nextName();
    const destination = nextName();
    return {
        timeStamp: getTimestamp(),
        event: { source: "Twitch", type: "Raid" },
        data: {
            from_broadcaster_user_id: String(Math.floor(Math.random() * 900000) + 100000),
            from_broadcaster_user_login: source,
            from_broadcaster_user_name: source,
            to_broadcaster_user_id: String(Math.floor(Math.random() * 900000) + 100000),
            to_broadcaster_user_login: destination,
            to_broadcaster_user_name: destination,
            viewers: Math.floor(Math.random() * 1000) + 1,
            is_test: false,
        },
        _time: getTimestamp(),
        id: uuidv4(),
        _search: "Twitch - Raid"
    };
}

export function generateTwitchChatMessage() {
    const msgId = uuidv4();
    const userId = String(Math.floor(Math.random() * 9000000) + 1000000);
    const username = nextName();
    const role = nextTwitchRole();
    const color = randomColor();
    const payload = nextTwitchMessage();


    return {
        timeStamp: getTimestamp(),
        event: { source: "Twitch", type: "ChatMessage" },
        data: {
            message: {
                internal: false,
                msgId: msgId,
                clientNonce: msgId.replace(/-/g, ""),
                userId: userId,
                username: username,
                role: role,
                subscriber: true,
                displayName: username,
                color: color,
                channel: "example_channel",
                message: payload.message,
                isHighlighted: false,
                isMe: false,
                isCustomReward: false,
                isAnonymous: false,
                isReply: false,
                bits: 0,
                firstMessage: false,
                returningChatter: false,
                hasBits: false,
                emotes: payload.emotes,
                cheerEmotes: [],
                badges: [],
                monthsSubscribed: 3,
                isTest: false,
                sharedChat: false,
                sourceBadges: []
            },
            user: {
                name: username,
                id: userId,
                login: username,
                role: role,
                subscribed: true,
                type: "twitch",
                badges: [],
                color: color,
                monthsSubscribed: 2
            },
            messageId: msgId,
            meta: {},
            anonymous: false,
            text: payload.message,
            emotes: payload.emotes,
            parts: payload.parts,
            isReply: false,
            isSharedChat: false,
            isTest: false,
        }
    };
}

export function generateEmoteOnlyTwitchChatMessage() {
    const msgId = uuidv4();
    const userId = String(Math.floor(Math.random() * 9000000) + 1000000);
    const username = nextName();
    const role = nextTwitchRole();
    const color = randomColor();
    const payload = {
        // emote only message
        message: "niupaoDance",
        emotes: [{
            "id": "emotesv2_f337fee9a11a41c1bfbd61e0bf95f255",
            "type": "Twitch",
            "name": "niupaoDance",
            "startIndex": 0,
            "endIndex": 10,
            "imageUrl": "https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_f337fee9a11a41c1bfbd61e0bf95f255/default/dark/2.0"
        }],
        parts: [
            {
                "source": "Twitch",
                "imageUrl": "https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_f337fee9a11a41c1bfbd61e0bf95f255/default/dark/2.0",
                "type": "emote",
                "text": "niupaoDance"
            }
        ]
    };

    return {
        timeStamp: getTimestamp(),
        event: { source: "Twitch", type: "ChatMessage" },
        data: {
            message: {
                internal: false,
                msgId: msgId,
                clientNonce: msgId.replace(/-/g, ""),
                userId: userId,
                username: username,
                role: role,
                subscriber: true,
                displayName: username,
                color: color,
                channel: "example_channel",
                message: payload.message,
                isHighlighted: false,
                isMe: false,
                isCustomReward: false,
                isAnonymous: false,
                isReply: false,
                bits: 0,
                firstMessage: false,
                returningChatter: false,
                hasBits: false,
                emotes: payload.emotes,
                cheerEmotes: [],
                badges: [],
                monthsSubscribed: 3,
                isTest: false,
                sharedChat: false,
                sourceBadges: []
            },
            user: {
                name: username,
                id: userId,
                login: username,
                role: role,
                subscribed: true,
                type: "twitch",
                badges: [],
                color: color,
                monthsSubscribed: 2
            },
            messageId: msgId,
            meta: {},
            anonymous: false,
            text: payload.message,
            emotes: payload.emotes,
            parts: payload.parts,
            isReply: false,
            isSharedChat: false,
            isTest: false,
        }
    };
}



// youtube event generators
export function generateYoutubeNewSubscriber() {
    const timestamp = getTimestamp();
    return {
        timeStamp: timestamp,
        event: { source: "YouTube", type: "NewSubscriber" },
        data: {
            createdAt: timestamp,
            username: nextName(),
            userId: randomYouTubeId(),
            avatar: "https://yt3.ggpht.com/EDFnfj5OT0u-URTXvsZNCeRI66GDTKipMyBcUtKLuszrod_NuHBJ8XmJmz5686149S7K9xiZSxk=s88-c-k-c0x00ffffff-no-rj",
            isTest: false,
        }
    };
}

export function generateYoutubeNewSponsor() {
    const timestamp = getTimestamp();
    return {
        timeStamp: timestamp,
        event: { source: "YouTube", type: "NewSponsor" },
        data: {
            levelName: nextYoutubeTier(),
            isUpgrade: false,
            broadcast: generateBroadcast(),
            eventId: uuidv4(),
            user: generateYouTubeUser(),
            publishedAt: timestamp
        }
    };
}

export function generateYoutubeMembershipGift() {
    const timestamp = getTimestamp();
    return {
        timeStamp: timestamp,
        event: { source: "YouTube", type: "MembershipGift" },
        data: {
            count: nextGiftAmount(),
            tier: nextYoutubeTier(),
            broadcast: generateBroadcast(),
            eventId: uuidv4(),
            user: generateYouTubeUser(),
            publishedAt: timestamp
        }
    };
}

export function generateYoutubeSuperChat() {
    const amount = nextDonationAmount();
    const microAmount = amount * 100000;
    const timeStamp = getTimestamp();
    const payload = nextYoutubeMessage();
    return {
        timeStamp: timeStamp,
        event: { source: "YouTube", type: "SuperChat" },
        data: {
            message: payload.message,
            currencyCode: "USD",
            microAmount: microAmount,
            amount: amount,
            tier: nextYoutubeTier(),
            broadcast: generateBroadcast(),
            eventId: uuidv4(),
            user: generateYouTubeUser(),
            publishedAt: timeStamp
        }
    };
}

export function generateYoutubeMessage() {
    const payload = nextYoutubeMessage();
    const timestamp = getTimestamp();
    return {
        timeStamp: timestamp,
        event: { source: "YouTube", type: "Message" },
        data: {
            message: payload.message,
            emotes: payload.emotes,
            parts: payload.parts,
            broadcast: generateBroadcast(),
            eventId: uuidv4(),
            user: generateYouTubeUser(),
            publishedAt: timestamp
        }
    };
}

export function generateEmoteOnlyYoutubeMessage() {
    // const payload = {
    //     "message": ":face-red-heart-shape::face-red-heart-shape:",
    //     "emotes": [
    //         {
    //             "type": "youtube",
    //             "name": ":face-red-heart-shape:",
    //             "startIndex": 0,
    //             "endIndex": 21,
    //             "imageUrl": "https://yt3.ggpht.com/I0Mem9dU_IZ4a9cQPzR0pUJ8bH-882Eg0sDQjBmPcHA6Oq0uXOZcsjPvPbtormx91Ha2eRA=w24-h24-c-k-nd"
    //         },
    //         {
    //             "type": "youtube",
    //             "name": ":face-red-heart-shape:",
    //             "startIndex": 22,
    //             "endIndex": 43,
    //             "imageUrl": "https://yt3.ggpht.com/I0Mem9dU_IZ4a9cQPzR0pUJ8bH-882Eg0sDQjBmPcHA6Oq0uXOZcsjPvPbtormx91Ha2eRA=w24-h24-c-k-nd"
    //         }
    //     ],
    //     "parts": [
    //         {
    //             "emoji": ":face-red-heart-shape:",
    //             "image": "https://yt3.ggpht.com/I0Mem9dU_IZ4a9cQPzR0pUJ8bH-882Eg0sDQjBmPcHA6Oq0uXOZcsjPvPbtormx91Ha2eRA=w24-h24-c-k-nd",
    //             "startIndex": 0,
    //             "endIndex": 21,
    //             "text": ":face-red-heart-shape:"
    //         },
    //         {
    //             "emoji": ":face-red-heart-shape:",
    //             "image": "https://yt3.ggpht.com/I0Mem9dU_IZ4a9cQPzR0pUJ8bH-882Eg0sDQjBmPcHA6Oq0uXOZcsjPvPbtormx91Ha2eRA=w24-h24-c-k-nd",
    //             "startIndex": 22,
    //             "endIndex": 43,
    //             "text": ":face-red-heart-shape:"
    //         }
    //     ],
    // };

    const payload = {
        "message": ":_7cry: :_7cry: :_7cry: :_7cry:",
        "emotes": [],
        "parts": [],
    };
    const timestamp = getTimestamp();
    return {
        timeStamp: timestamp,
        event: { source: "YouTube", type: "Message" },
        data: {
            message: payload.message,
            emotes: payload.emotes,
            parts: payload.parts,
            broadcast: generateBroadcast(),
            eventId: uuidv4(),
            user: generateYouTubeUser(),
            publishedAt: timestamp
        }
    };
}

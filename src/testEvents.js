// TODO: Set up custom names
// TODO: Set up a UUID generator

// TODO: Set up User package generator (MSG + USER RANK + USER ID)
// TODO: Set up Message pack generator (MSG + User)
// TODO: Set up donation event pack generator (User + Donation ~+ Message)
// NOTE: Youtube and twitch objects have different signatures, may be difficult
// to make uniform generators

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
        message: "This is supposed to be an emote message, but todd was too lazy to work on it when he was building the tests",
        emotes: [],
        parts: [{ text: "This is supposed to be an emote message, but todd was too lazy to work on it when he was building the tests"}]
    }
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
        publishedAt: systemTimestamp(),
        scheduledStartTime: systemTimestamp(),
        scheduledEndTime: systemTimestamp(5),
        actualStartTime: systemTimestamp(),
        actualEndTime: systemTimestamp(5),
        tags: tags.slice(0, Math.floor(Math.random() * tags.length) + 1),
        defaultLanguage: "en",
        defaultAudioLanguage: "en",
        status: "live"
    };
}

let currentYoutubeBroadcast = generateBroadcast();

function systemTimestamp(offset = 0) {
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


export function generateYouTubeUser() {
    const id = randomYouTubeId();
    const role = nextYoutubeRole();
    return {
        id: id,
        url: `http://www.youtube.com/channel/${id}`,
        name: nextName(),
        profileImageUrl: "https://yt3.ggpht.com/EDFnfj5OT0u-URTXvsZNCeRI66GDTKipMyBcUtKLuszrod_NuHBJ8XmJmz5686149S7K9xiZSxk=s88-c-k-c0x00ffffff-no-rj",
        isOwner: role == 3,
        isModerator: role == 2,
        isSponsor: role == 1,
        isVerified: role == 0
    };
}

export function generateTwitchFollow() {
    const name = nextName();
    return {
        timeStamp: systemTimestamp(),
        event: { source: "Twitch", type: "Follow" },
        data: {
            user_id: String(Math.floor(Math.random() * 90000000) + 10000000),
            user_login: name,
            user_name: name,
            followed_at: systemTimestamp(),
            is_test: false
        }
    };
}

export function generateTwitchResub() {
    const name = nextName();
    return {
        timeStamp: systemTimestamp(),
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
                login: name,
                name: name,
                type: "twitch"
            },
            messageId: uuidv4(),
            systemMessage: `${name} resubscribed`,
            isTest: false,
        }
    };
}

export function generateTwitchSub() {
    const name = nextName();
    return {
        timeStamp: systemTimestamp(),
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
                login: name,
                name: name,
                type: "twitch"
            },
            messageId: uuidv4(),
            systemMessage: `${name} has subscribed`,
            isTest: false,
        }
    };
}

export function generateTwitchGiftBomb() {
    function randomRecipient() {
        const name = nextName();
        return {
            id: String(Math.floor(Math.random() * 9000000) + 1000000),
            login: name,
            name: name,
            type: "twitch"
        };
    }
    const numRecipients = nextGiftAmount();
    const recipients = Array.from({ length: numRecipients }, randomRecipient);
    const name = nextName();
    return {
        timeStamp: systemTimestamp(),
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
                login: name,
                name: name,
                type: "twitch"
            },
            messageId: uuidv4(),
            systemMessage: `${nextName} has gifted ${numRecipients} subs`,
            isTest: false,
        }
    };
}

export function generateTwitchGiftSub() {
    let recepient = nextName();
    let name = nextName();
    return {
        timeStamp: systemTimestamp(),
        event: { source: "Twitch", type: "GiftSub" },
        data: {
            durationMonths: 1,
            cumlativeTotal: 1,
            recipient: {
                id: String(Math.floor(Math.random() * 9000000) + 1000000),
                login: recepient,
                name: recepient,
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
                login: name,
                name: name,
                type: "twitch"
            },
            messageId: uuidv4(),
            systemMessage: `${name} has gifted a sub`,
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
    const name = nextName();
    const role = nextTwitchRole();
    const color = randomColor();
    const subTier = nextSubTier();
    const payload = nextTwitchMessage();
    return {
        timeStamp: systemTimestamp(),
        event: { source: "Twitch", type: "Cheer" },
        data: {
            bits: nextBitTier(),
            cheerEmotes: [],
            message: {
                internal: false,
                msgId: msgId,
                userId: userId,
                username: name,
                role: role,
                subscriber: true,
                subscriptionTier: subTier,
                displayName: name,
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
                login: name,
                name: name,
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
        timeStamp: systemTimestamp(),
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
        _time: systemTimestamp(),
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
        timeStamp: systemTimestamp(),
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
/*let tempYt = {
    "NewSubscriber":
    {
        "timeStamp": "2025-01-01T21:47:44.6169586-04:00",
        "event": {
            "source": "YouTube",
            "type": "NewSubscriber"
        },
        "data": {
            "createdAt": "2025-01-02T01:47:44.6159584Z",
            "username": "Annie",
            "userId": "UChgXpIBuclMMOVyT7lHUgDw",
            "avatar": "https://yt3.ggpht.com/w2Y9BrOrcNyMhtRmdRDTTUf-5qULyA4KFUxezieQUJ_skl_ihor-gP3fc3JZ6LVz087PVg3vVw=s88-c-k-c0x00ffffff-no-rj",
            "isTest": false
        }
    },
    "Message":
    {
        "timeStamp": "2025-02-03T20:22:02.5939917-04:00",
        "event": {
            "source": "YouTube",
            "type": "Message"
        },
        "data": {
            "message": "HOWLER DANCE",
            "emotes": [],
            "parts": [
                {
                    "text": "HOWLER DANCE"
                }
            ],
            "broadcast": {
                "id": "Xdq0hQ2ehM4",
                "channelId": "UCs9R9zahJh7Idakz-4enVSA",
                "liveChatId": "KicKGFVDczlSOXphaEpoN0lkYWt6LTRlblZTQRILWGRxMGhRMmVoTTQ",
                "title": "I'm back Poppy... | Yuzuya Streams Poppy Playtime Chapter 4",
                "description": "Like my YT Streams? Come hang out on twitch! https://www.twitch.tv/yuzuya\n\nMain VA Channel @YUZUYARU \n\nModel Credits: \nL2D: Iron Vertex - https://x.com/iron_vertex\n\u30de\u30de: SuteinuA - https://x.com/SuteinuA\n\nChapters:\nStarting Soon 00:00\nChatting 03:50",
                "categoryId": "20",
                "privacy": "public",
                "publishedAt": "2025-02-03T20:04:38Z",
                "scheduledStartTime": "2025-02-04T00:00:00Z",
                "scheduledEndTime": "2025-02-04T00:09:35.5197575Z",
                "actualStartTime": "2025-02-04T00:09:35.5197575Z",
                "actualEndTime": "2025-02-04T00:09:35.5197575Z",
                "tags": [
                    "yuzuya",
                    "yuya",
                    "yuzuya va",
                    "yuzuya vt",
                    "vtuber",
                    "male vtuber",
                    "yuya vtuber",
                    "yuzuya vtuber",
                    "suteinua",
                    "iron vertex",
                    "howlers",
                    "wolf",
                    "wolf boy",
                    "wolf vtuber",
                    "liver",
                    "game",
                    "vtuber stream",
                    "vtuber liver",
                    "audio",
                    "yuya vt",
                    "indie horror games",
                    "scary games",
                    "envtuber",
                    "poppy playtime",
                    "chapter 4",
                    "full playthrough",
                    "full game"
                ],
                "defaultLanguage": "en",
                "defaultAudioLanguage": "en",
                "status": "live"
            },
            "eventId": "LCC.EhwKGkNKYU41X3JmcUlzREZRUV9yUVlkQUM4OC1R",
            "user": {
                "id": "UC4UMTj91zUpnTYjwIEGO8Rg",
                "url": "http://www.youtube.com/channel/UC4UMTj91zUpnTYjwIEGO8Rg",
                "name": "AshGreyWolf \ud83d\udc3a\u26e9\ufe0f",
                "profileImageUrl": "https://yt3.ggpht.com/EDFnfj5OT0u-URTXvsZNCeRI66GDTKipMyBcUtKLuszrod_NuHBJ8XmJmz5686149S7K9xiZSxk=s88-c-k-c0x00ffffff-no-rj",
                "isOwner": false,
                "isModerator": false,
                "isSponsor": false,
                "isVerified": false
            },
            "publishedAt": "2025-02-03T20:22:00.332605-04:00"
        }
    },
    "NewSponsor":
    {
        "timeStamp": "2025-02-03T20:32:06.110782-04:00",
        "event": {
            "source": "YouTube",
            "type": "NewSponsor"
        },
        "data": {
            "levelName": "Howler",
            "isUpgrade": false,
            "broadcast": {
                "id": "Xdq0hQ2ehM4",
                "channelId": "UCs9R9zahJh7Idakz-4enVSA",
                "liveChatId": "KicKGFVDczlSOXphaEpoN0lkYWt6LTRlblZTQRILWGRxMGhRMmVoTTQ",
                "title": "I'm back Poppy... | Yuzuya Streams Poppy Playtime Chapter 4",
                "description": "Like my YT Streams? Come hang out on twitch! https://www.twitch.tv/yuzuya\n\nMain VA Channel @YUZUYARU \n\nModel Credits: \nL2D: Iron Vertex - https://x.com/iron_vertex\n\u30de\u30de: SuteinuA - https://x.com/SuteinuA\n\nChapters:\nStarting Soon 00:00\nChatting 03:50",
                "categoryId": "20",
                "privacy": "public",
                "publishedAt": "2025-02-03T20:04:38Z",
                "scheduledStartTime": "2025-02-04T00:00:00Z",
                "scheduledEndTime": "2025-02-04T00:09:35.5197575Z",
                "actualStartTime": "2025-02-04T00:09:35.5197575Z",
                "actualEndTime": "2025-02-04T00:09:35.5197575Z",
                "tags": [
                    "yuzuya",
                    "yuya",
                    "yuzuya va",
                    "yuzuya vt",
                    "vtuber",
                    "male vtuber",
                    "yuya vtuber",
                    "yuzuya vtuber",
                    "suteinua",
                    "iron vertex",
                    "howlers",
                    "wolf",
                    "wolf boy",
                    "wolf vtuber",
                    "liver",
                    "game",
                    "vtuber stream",
                    "vtuber liver",
                    "audio",
                    "yuya vt",
                    "indie horror games",
                    "scary games",
                    "envtuber",
                    "poppy playtime",
                    "chapter 4",
                    "full playthrough",
                    "full game"
                ],
                "defaultLanguage": "en",
                "defaultAudioLanguage": "en",
                "status": "live"
            },
            "eventId": "LCC.EhwKGkNMTFZzSnJpcUlzREZmRVJzd0FkZ1NZeFJB",
            "user": {
                "id": "UCN6xMBUOYSP7r2VlJOwlIsA",
                "url": "http://www.youtube.com/channel/UCN6xMBUOYSP7r2VlJOwlIsA",
                "name": "Kendra Tyler",
                "profileImageUrl": "https://yt3.ggpht.com/ytc/AIdro_mvQ96mNMYncfLIZTqmlfkTLxE0zyZnRnlqpJE1_voym4I=s88-c-k-c0x00ffffff-no-rj",
                "isOwner": false,
                "isModerator": false,
                "isSponsor": true,
                "isVerified": false
            },
            "publishedAt": "2025-02-03T20:32:03.421822-04:00"
        }
    },
    "MembershipGift":
    {
        "timeStamp": "2025-02-03T20:32:48.3990164-04:00",
        "event": {
            "source": "YouTube",
            "type": "MembershipGift"
        },
        "data": {
            "count": 5,
            "tier": "Howler",
            "broadcast": {
                "id": "Xdq0hQ2ehM4",
                "channelId": "UCs9R9zahJh7Idakz-4enVSA",
                "liveChatId": "KicKGFVDczlSOXphaEpoN0lkYWt6LTRlblZTQRILWGRxMGhRMmVoTTQ",
                "title": "I'm back Poppy... | Yuzuya Streams Poppy Playtime Chapter 4",
                "description": "Like my YT Streams? Come hang out on twitch! https://www.twitch.tv/yuzuya\n\nMain VA Channel @YUZUYARU \n\nModel Credits: \nL2D: Iron Vertex - https://x.com/iron_vertex\n\u30de\u30de: SuteinuA - https://x.com/SuteinuA\n\nChapters:\nStarting Soon 00:00\nChatting 03:50",
                "categoryId": "20",
                "privacy": "public",
                "publishedAt": "2025-02-03T20:04:38Z",
                "scheduledStartTime": "2025-02-04T00:00:00Z",
                "scheduledEndTime": "2025-02-04T00:09:35.5197575Z",
                "actualStartTime": "2025-02-04T00:09:35.5197575Z",
                "actualEndTime": "2025-02-04T00:09:35.5197575Z",
                "tags": [
                    "yuzuya",
                    "yuya",
                    "yuzuya va",
                    "yuzuya vt",
                    "vtuber",
                    "male vtuber",
                    "yuya vtuber",
                    "yuzuya vtuber",
                    "suteinua",
                    "iron vertex",
                    "howlers",
                    "wolf",
                    "wolf boy",
                    "wolf vtuber",
                    "liver",
                    "game",
                    "vtuber stream",
                    "vtuber liver",
                    "audio",
                    "yuya vt",
                    "indie horror games",
                    "scary games",
                    "envtuber",
                    "poppy playtime",
                    "chapter 4",
                    "full playthrough",
                    "full game"
                ],
                "defaultLanguage": "en",
                "defaultAudioLanguage": "en",
                "status": "live"
            },
            "eventId": "LCC.EhwKGkNQbV81cWJpcUlzREZjRDhGZ2tkTmpRblRB",
            "user": {
                "id": "UCMhjeGvx_1PLV3A2E-WD5wQ",
                "url": "http://www.youtube.com/channel/UCMhjeGvx_1PLV3A2E-WD5wQ",
                "name": "Lilac_Lovez",
                "profileImageUrl": "https://yt3.ggpht.com/FlGTGcBfyGCWkwf0r1zxdL2h33bQFkObeVde340ZtYHoZEHDwoUC94Z7xwX42U7fAI9H7i3Nsg=s88-c-k-c0x00ffffff-no-rj",
                "isOwner": false,
                "isModerator": false,
                "isSponsor": true,
                "isVerified": false
            },
            "publishedAt": "2025-02-03T20:32:46.723823-04:00"
        }
    },
    "SuperChat":
    {
        "timeStamp": "2025-02-03T20:33:05.7651623-04:00",
        "event": {
            "source": "YouTube",
            "type": "SuperChat"
        },
        "data": {
            "message": "To Our Wolf Prince:Happy Early Birthday Yuya.(You're a fossil now yeah? What were the Dinosaurs like?/j) Lots of love to yah truly and good to see yah",
            "currencyCode": "USD",
            "microAmount": 5000000,
            "amount": "$5.00",
            "tier": 3,
            "broadcast": {
                "id": "Xdq0hQ2ehM4",
                "channelId": "UCs9R9zahJh7Idakz-4enVSA",
                "liveChatId": "KicKGFVDczlSOXphaEpoN0lkYWt6LTRlblZTQRILWGRxMGhRMmVoTTQ",
                "title": "I'm back Poppy... | Yuzuya Streams Poppy Playtime Chapter 4",
                "description": "Like my YT Streams? Come hang out on twitch! https://www.twitch.tv/yuzuya\n\nMain VA Channel @YUZUYARU \n\nModel Credits: \nL2D: Iron Vertex - https://x.com/iron_vertex\n\u30de\u30de: SuteinuA - https://x.com/SuteinuA\n\nChapters:\nStarting Soon 00:00\nChatting 03:50",
                "categoryId": "20",
                "privacy": "public",
                "publishedAt": "2025-02-03T20:04:38Z",
                "scheduledStartTime": "2025-02-04T00:00:00Z",
                "scheduledEndTime": "2025-02-04T00:09:35.5197575Z",
                "actualStartTime": "2025-02-04T00:09:35.5197575Z",
                "actualEndTime": "2025-02-04T00:09:35.5197575Z",
                "tags": [
                    "yuzuya",
                    "yuya",
                    "yuzuya va",
                    "yuzuya vt",
                    "vtuber",
                    "male vtuber",
                    "yuya vtuber",
                    "yuzuya vtuber",
                    "suteinua",
                    "iron vertex",
                    "howlers",
                    "wolf",
                    "wolf boy",
                    "wolf vtuber",
                    "liver",
                    "game",
                    "vtuber stream",
                    "vtuber liver",
                    "audio",
                    "yuya vt",
                    "indie horror games",
                    "scary games",
                    "envtuber",
                    "poppy playtime",
                    "chapter 4",
                    "full playthrough",
                    "full game"
                ],
                "defaultLanguage": "en",
                "defaultAudioLanguage": "en",
                "status": "live"
            },
            "eventId": "LCC.EhwKGkNJdlU5cTNpcUlzREZRX2I0d2NkdEl3NXF3",
            "user": {
                "id": "UCK_h6uKB-MWsXWiPmGhMmNw",
                "url": "http://www.youtube.com/channel/UCK_h6uKB-MWsXWiPmGhMmNw",
                "name": "Makie Shy",
                "profileImageUrl": "https://yt3.ggpht.com/UxBxvMkLmkb11fuN78EpR39ZrjJ_0B5GSwSZPq9VrrwFU4y1N9o8Okd27BE4p74iUskGjW02_A=s88-c-k-c0x00ffffff-no-rj",
                "isOwner": false,
                "isModerator": false,
                "isSponsor": true,
                "isVerified": false
            },
            "publishedAt": "2025-02-03T20:33:03.71954-04:00"
        }
    },
}

let tempTwt = {
    "Follow":
    {
        "timeStamp": "2025-01-01T20:29:09.3522134-04:00",
        "event": {
            "source": "Twitch",
            "type": "Follow"
        },
        "data": {
            "user_id": "209221266",
            "user_login": "raptorbait529",
            "user_name": "RaptorBait529",
            "followed_at": "2025-01-02T00:29:09.4839085Z",
            "is_test": false
        }
    },
    "ReSub":
    {
        "timeStamp": "2025-01-01T20:30:35.7380173-04:00",
        "event": {
            "source": "Twitch",
            "type": "ReSub"
        },
        "data": {
            "cumulativeMonths": 5,
            "durationMonths": 0,
            "streakMonths": 5,
            "subTier": "1000",
            "isPrime": false,
            "isGift": false,
            "gifterIsAnonymous": false,
            "text": "HELLLOOOOO EVERYONE!!!!!!! yuzuyaLove yuzuyaLove yuzuyaLove  HAPPY NEW YEARS!!",
            "parts": [
                {
                    "type": "text",
                    "text": "HELLLOOOOO EVERYONE!!!!!!! "
                },
                {
                    "source": "Twitch",
                    "imageUrl": "https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_b8ed49532b6040a8a5e5e0065964ec43/default/dark/3.0",
                    "type": "emote",
                    "text": "yuzuyaLove"
                },
                {
                    "type": "text",
                    "text": " "
                },
                {
                    "source": "Twitch",
                    "imageUrl": "https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_b8ed49532b6040a8a5e5e0065964ec43/default/dark/3.0",
                    "type": "emote",
                    "text": "yuzuyaLove"
                },
                {
                    "type": "text",
                    "text": " "
                },
                {
                    "source": "Twitch",
                    "imageUrl": "https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_b8ed49532b6040a8a5e5e0065964ec43/default/dark/3.0",
                    "type": "emote",
                    "text": "yuzuyaLove"
                },
                {
                    "type": "text",
                    "text": "  HAPPY NEW YEARS!!"
                }
            ],
            "user": {
                "role": 1,
                "badges": [
                    {
                        "name": "subscriber",
                        "version": "3",
                        "imageUrl": "https://static-cdn.jtvnw.net/badges/v1/7f41bfd4-d478-42fb-bb99-e9bcfc89dece/3",
                        "info": "5"
                    },
                    {
                        "name": "sub-gifter",
                        "version": "5",
                        "imageUrl": "https://static-cdn.jtvnw.net/badges/v1/ee113e59-c839-4472-969a-1e16d20f3962/3",
                        "info": ""
                    }
                ],
                "color": "#DAA520",
                "subscribed": true,
                "monthsSubscribed": 5,
                "id": "805908104",
                "login": "k0tathepanda",
                "name": "k0tathepanda",
                "type": "twitch"
            },
            "messageId": "8df9c179-31c4-4e42-9112-baf00b9483c7",
            "systemMessage": "k0tathepanda subscribed at Tier 1. They've subscribed for 5 months, currently on a 5 month streak!",
            "isTest": false
        }
    },
    "Sub":
    {
        "timeStamp": "2025-01-01T20:32:37.3634541-04:00",
        "event": {
            "source": "Twitch",
            "type": "Sub"
        },
        "data": {
            "sub_tier": "1000",
            "is_prime": false,
            "duration_months": 6,
            "user": {
                "role": 0,
                "badges": [
                    {
                        "name": "subscriber",
                        "version": "0",
                        "imageUrl": "https://static-cdn.jtvnw.net/badges/v1/614897e7-6506-477d-bec9-abc101ffc66f/3",
                        "info": "1"
                    },
                    {
                        "name": "premium",
                        "version": "1",
                        "imageUrl": "https://static-cdn.jtvnw.net/badges/v1/bbbe0db0-a598-423e-86d0-f9fb98ca1933/3",
                        "info": ""
                    }
                ],
                "color": "#D2691E",
                "subscribed": true,
                "monthsSubscribed": 1,
                "id": "20137024",
                "login": "djtigon",
                "name": "DJTigon",
                "type": "twitch"
            },
            "messageId": "55b1d2a1-5119-4a73-be2d-3b951dee893a",
            "systemMessage": "DJTigon subscribed at Tier 1.",
            "isTest": false
        }
    },
    "GiftBomb":
    {
        "timeStamp": "2025-01-01T20:33:03.3610342-04:00",
        "event": {
            "source": "Twitch",
            "type": "GiftBomb"
        },
        "data": {
            "id": "10795720321683053740",
            "total": 5,
            "cumulative_total": 13,
            "sub_tier": "1000",
            "recipients": [
                {
                    "id": "1046012855",
                    "login": "kitsune_susu",
                    "name": "kitsune_susu",
                    "type": "twitch"
                },
                {
                    "id": "275100624",
                    "login": "zrotu",
                    "name": "Zrotu",
                    "type": "twitch"
                },
                {
                    "id": "467411752",
                    "login": "saigakoga",
                    "name": "SaigaKoga",
                    "type": "twitch"
                },
                {
                    "id": "1053540592",
                    "login": "a10l104",
                    "name": "a10l104",
                    "type": "twitch"
                },
                {
                    "id": "848606293",
                    "login": "jypical",
                    "name": "Jypical",
                    "type": "twitch"
                }
            ],
            "user": {
                "role": 1,
                "badges": [
                    {
                        "name": "subscriber",
                        "version": "12",
                        "imageUrl": "https://static-cdn.jtvnw.net/badges/v1/f9a7968e-c434-4db9-a373-6542344fb8b5/3",
                        "info": "16"
                    },
                    {
                        "name": "bits",
                        "version": "1000",
                        "imageUrl": "https://static-cdn.jtvnw.net/badges/v1/83a8d3fc-a997-43b0-abd6-be0d4921a541/3",
                        "info": ""
                    }
                ],
                "color": "#DAA520",
                "subscribed": true,
                "monthsSubscribed": 16,
                "id": "608833195",
                "login": "dobadobax",
                "name": "dobadobax",
                "type": "twitch"
            },
            "messageId": "95487383-872f-42be-9439-a32e03464341",
            "systemMessage": "dobadobax is gifting 5 Tier 1 Subs to Yuzuya's community! They've gifted a total of 13 in the channel!",
            "isTest": false
        }
    },
    "GiftSub":
    {
        "timeStamp": "2025-01-01T20:33:03.372803-04:00",
        "event": {
            "source": "Twitch",
            "type": "GiftSub"
        },
        "data": {
            "durationMonths": 1,
            "cumlativeTotal": 0,
            "recipient": {
                "id": "1046012855",
                "login": "kitsune_susu",
                "name": "kitsune_susu",
                "type": "twitch"
            },
            "subTier": "1000",
            "communityGiftId": "10795720321683053740",
            "fromCommunitySubGift": true,
            "randomCommunitySubGift": true,
            "communitySubGiftCount": 5,
            "communitySubGiftCumulativeTotal": 5,
            "user": {
                "role": 1,
                "badges": [
                    {
                        "name": "subscriber",
                        "version": "12",
                        "imageUrl": "https://static-cdn.jtvnw.net/badges/v1/f9a7968e-c434-4db9-a373-6542344fb8b5/3",
                        "info": "16"
                    },
                    {
                        "name": "sub-gifter",
                        "version": "10",
                        "imageUrl": "https://static-cdn.jtvnw.net/badges/v1/d333288c-65d7-4c7b-b691-cdd7b3484bf8/3",
                        "info": ""
                    }
                ],
                "color": "#DAA520",
                "subscribed": true,
                "monthsSubscribed": 16,
                "id": "608833195",
                "login": "dobadobax",
                "name": "dobadobax",
                "type": "twitch"
            },
            "messageId": "8c6ae17d-bf2a-4cd4-b993-bc697fab1bb1",
            "systemMessage": "dobadobax gifted a Tier 1 sub to kitsune_susu!",
            "isTest": false
        }
    },
    "Cheer":
    {
        "timeStamp": "2025-01-01T20:36:04.0470069-04:00",
        "event": {
            "source": "Twitch",
            "type": "Cheer"
        },
        "data": {
            "bits": 100,
            "cheerEmotes": [
                {
                    "bits": 100,
                    "color": "#9c3ee8",
                    "type": "CheerEmote",
                    "name": "Cheer",
                    "startIndex": 0,
                    "endIndex": 7,
                    "imageUrl": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/animated/100/4.gif"
                }
            ],
            "message": {
                "internal": false,
                "msgId": "fcbb9471-03e0-41d7-b99b-15fa4a217af3",
                "userId": "561810978",
                "username": "hope_95z",
                "role": 3,
                "subscriber": true,
                "subscriptionTier": "1000",
                "displayName": "hope_95z",
                "color": "#00FF7F",
                "channel": "yuzuya",
                "message": "Cheer100 Happy New Year \ud83d\udc9a",
                "isHighlighted": false,
                "isMe": false,
                "isCustomReward": false,
                "isAnonymous": false,
                "isReply": false,
                "bits": 100,
                "firstMessage": false,
                "returningChatter": false,
                "hasBits": true,
                "emotes": [],
                "cheerEmotes": [
                    {
                        "bits": 100,
                        "color": "#9c3ee8",
                        "type": "CheerEmote",
                        "name": "Cheer",
                        "startIndex": 0,
                        "endIndex": 7,
                        "imageUrl": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/animated/100/4.gif"
                    }
                ],
                "badges": [
                    {
                        "name": "moderator",
                        "version": "1",
                        "imageUrl": "https://static-cdn.jtvnw.net/badges/v1/3267646d-33f0-4b17-b3df-f923a41db1d0/3",
                        "info": ""
                    },
                    {
                        "name": "subscriber",
                        "version": "12",
                        "imageUrl": "https://static-cdn.jtvnw.net/badges/v1/f9a7968e-c434-4db9-a373-6542344fb8b5/3",
                        "info": "20"
                    },
                    {
                        "name": "bits",
                        "version": "1000",
                        "imageUrl": "https://static-cdn.jtvnw.net/badges/v1/83a8d3fc-a997-43b0-abd6-be0d4921a541/3",
                        "info": ""
                    }
                ],
                "monthsSubscribed": 20,
                "isTest": false,
                "sharedChat": false,
                "sourceBadges": []
            },
            "user": {
                "role": 3,
                "badges": [
                    {
                        "name": "moderator",
                        "version": "1",
                        "imageUrl": "https://static-cdn.jtvnw.net/badges/v1/3267646d-33f0-4b17-b3df-f923a41db1d0/3",
                        "info": ""
                    },
                    {
                        "name": "subscriber",
                        "version": "12",
                        "imageUrl": "https://static-cdn.jtvnw.net/badges/v1/f9a7968e-c434-4db9-a373-6542344fb8b5/3",
                        "info": "20"
                    },
                    {
                        "name": "bits",
                        "version": "1000",
                        "imageUrl": "https://static-cdn.jtvnw.net/badges/v1/83a8d3fc-a997-43b0-abd6-be0d4921a541/3",
                        "info": ""
                    }
                ],
                "color": "#00FF7F",
                "subscribed": true,
                "subscriptionTier": "1000",
                "monthsSubscribed": 20,
                "id": "561810978",
                "login": "hope_95z",
                "name": "hope_95z",
                "type": "twitch"
            },
            "messageId": "fcbb9471-03e0-41d7-b99b-15fa4a217af3",
            "meta": {
                "internal": false,
                "firstMessage": false,
                "returningChatter": false,
                "isHighlighted": false,
                "isMe": false,
                "isCustomReward": false,
                "isTest": false
            },
            "anonymous": false,
            "text": "Cheer100 Happy New Year \ud83d\udc9a",
            "emotes": [],
            "parts": [
                {
                    "bits": 100,
                    "color": "#9c3ee8",
                    "imageUrl": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/animated/100/4.gif",
                    "type": "cheer",
                    "text": "Cheer"
                },
                {
                    "type": "text",
                    "text": " Happy New Year \ud83d\udc9a"
                }
            ],
            "isReply": false,
            "isSharedChat": false,
            "isTest": false
        }
    },
    "Raid": {
        "timeStamp": "2024-12-29T07:04:57.8287717-08:00",
        "event": {
            "source": "Twitch",
            "type": "Raid"
        },
        "data": {
            "from_broadcaster_user_id": "19264788",
            "from_broadcaster_user_login": "nightbot",
            "from_broadcaster_user_name": "Nightbot",
            "to_broadcaster_user_id": "241438845",
            "to_broadcaster_user_login": "oneaveragecaret",
            "to_broadcaster_user_name": "OneAverageCaret",
            "viewers": 1,
            "is_test": true
        },
        "_time": "2024-12-29T15:04:57.834116039Z",
        "id": "c5fbe23d-4fd6-4db2-aea8-e429bdd9e3c1",
        "_search": "Twitch - Raid"
    },
    "ChatMessage": {
        "timeStamp": "2024-12-28T21:01:08.7216756-08:00",
        "event": {
            "source": "Twitch",
            "type": "ChatMessage"
          },
        "data": {
            "message": {
                "internal": false,
                "msgId": "2f06d4aa-e784-4a62-a42f-8a4c87b0eb21",
                "clientNonce": "7e0bf043cb67b465558f0574334750a5",
                "userId": "241438845",
                "username": "oneaveragecaret",
                "role": 4,
                "subscriber": false,
                "displayName": "OneAverageCaret",
                "color": "#EC942D",
                "channel": "oneaveragecaret",
                "message": "arstsra",
                "isHighlighted": false,
                "isMe": false,
                "isCustomReward": false,
                "isAnonymous": false,
                "isReply": false,
                "bits": 0,
                "firstMessage": false,
                "returningChatter": false,
                "hasBits": false,
                "emotes": [],
                "cheerEmotes": [],
                "badges": [
                    {
                        "name": "broadcaster",
                        "version": "1",
                        "imageUrl": "https://static-cdn.jtvnw.net/badges/v1/5527c58c-fb7d-422d-b71b-f309dcb85cc1/3",
                        "info": ""
                    },
                    {
                        "name": "bits-charity",
                        "version": "1",
                        "imageUrl": "https://static-cdn.jtvnw.net/badges/v1/a539dc18-ae19-49b0-98c4-8391a594332b/3",
                        "info": ""
                    }
                ],
                "monthsSubscribed": 0,
                "isTest": false,
                "sharedChat": false,
                "sourceBadges": []
            },
            "user": {
                "name": "OneAverageCaret",
                "id": "241438845",
                "login": "oneaveragecaret",
                "role": 4,
                "subscribed": false,
                "type": "twitch",
                "badges": [
                    {
                        "name": "broadcaster",
                        "version": "1",
                        "imageUrl": "https://static-cdn.jtvnw.net/badges/v1/5527c58c-fb7d-422d-b71b-f309dcb85cc1/3",
                        "info": ""
                    },
                    {
                        "name": "bits-charity",
                        "version": "1",
                        "imageUrl": "https://static-cdn.jtvnw.net/badges/v1/a539dc18-ae19-49b0-98c4-8391a594332b/3",
                        "info": ""
                    }
                ],
                "color": "#EC942D",
                "monthsSubscribed": 0,
            },
            "messageId": "2f06d4aa-e784-4a62-a42f-8a4c87b0eb21",
            "meta": {
                "internal": false,
                "clientNonce": "7e0bf043cb67b465558f0574334750a5",
                "firstMessage": false,
                "returningChatter": false,
                "isHighlighted": false,
                "isMe": false,
                "isCustomReward": false,
                "isTest": false
            },
            "anonymous": false,
            "text": "arstsra",
            "emotes": [],
            "parts": [
                {
                    "type": "text",
                    "text": "arstsra"
                }
            ],
            "isReply": false,
            "isSharedChat": false,
            "isTest": false
        }
    }
}
*/

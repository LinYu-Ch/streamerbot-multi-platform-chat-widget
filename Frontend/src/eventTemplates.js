export const messageEvent = (username, message, platform, roleTierAttribute = "none")=>{
    let payload = `<div class="chat__wrapper" data-role="${roleTierAttribute}">
      <div class="chat__username">
        <p class="chat__platform-identifier" data-platform="${platform}">${platform}</p>
        <p class="chat__username-text">${username}</p>
      </div>
      <div class="chat__content">
          <p class="chat__content-message">
            ${message}
          </p>
      </div>
    </div>`
    return payload;
  }
export const subscriptionEvent = (username, platformVerb)=>{
    let payload = `<div class="event__wrapper">
    <div class="event__body">
            <div class="event__username">${username}</div>
            <div class="event__content--action">${platformVerb}</div>
        </div>
  </div>`
  return payload;
}
export const paidSubscriptionEvent = (username, subscriptionString)=>{
    let payload = `<div class="event__wrapper">
    <div class="event__body">
            <div class="event__username">${username}</div>
            <div class="event__content--action">gifted ${subscriptionString}</div>
        </div>
  </div>`
  return payload;
}
/* external donation events are for 3rd party platforms that conduct in direct currencies
  which don't have inbuilt platform specific attributes
*/
export const externalDonationEvent = (username, donationString)=>{
    let payload = `<div class="event__wrapper">
    <div class="event__body">
            <div class="event__username">${username}</div>
            <div class="event__content--action">${donationString}</div>
        </div>
  </div>`
  return payload;
}
/* external donation events are for platform centered operations which usually include tiers
colors, and various currencies
*/
export const platformDonationEvent = (username, donationString, eventTierAttribute = null)=>{
    let payload = `<div class="event__wrapper" data-tier="${eventTierAttribute}">
    <div class="event__body">
            <div class="event__username">${username}</div>
            <div class="event__content--action">${donationString}</div>
        </div>
  </div>`
  return payload;
}

// NOTE:
// do these really need to be different templates?
export const giftEvent = (username, giftString)=>{
    let payload = `<div class="event__wrapper">
    <div class="event__body">
            <div class="event__username">${username}</div>
            <div class="event__content--action">${giftString}</div>
        </div>
  </div>`
  return payload;
}
export const massGiftEvent = (username, giftString)=>{
    let payload = `<div class="event__wrapper">
    <div class="event__body">
            <div class="event__username">${username}</div>
            <div class="event__content--action">${giftString}</div>
        </div>
  </div>`
  return payload;
}
export const raidEvent = (username, raidString)=>{
  let payload = `<div class="event__wrapper">
  <div class="event__body">
          <div class="event__username">${username}</div>
          <div class="event__content--action">${raidString}</div>
      </div>
</div>`
return payload;
}
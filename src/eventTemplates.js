// Todo: implement the templates


export const messageEvent = (username, message, platform)=>{
    throw new Error('This template has not yet been implemented');    
}
export const subscriptionEvent = (username, platform)=>{
    throw new Error('This template has not yet been implemented');    
}
export const paidSubscriptionEvent = (username, amount, platform)=>{
    throw new Error('This template has not yet been implemented');    
}
export const donationEvent = (username, amount, currency)=>{
    throw new Error('This template has not yet been implemented');    
}
export const giftEvent = (username, amount, platform)=>{
    throw new Error('This template has not yet been implemented');    
}
export const massGiftEvent = (username, amount, platform)=>{
    throw new Error('This template has not yet been implemented');    
}


// these should be handled separately
export const messageDeleteEvent = ()=>{}
export const userDeleteEvent = ()=>{}
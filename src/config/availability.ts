// ---------------------------------------------------------------------------
// "First 5 Teachers" special offer availability config
// ---------------------------------------------------------------------------
// HOW TO USE:
// - `totalSlots` is the total number of discounted spots in the offer.
// - `remainingSlots` is how many spots are still available.
//
// IMPORTANT: This number should only be edited manually by the site owner,
// after a real teacher has confirmed their order and paid the InstaPay
// deposit (see the Payment Method section). It is not decremented
// automatically by a button click, page view, or form submission.
//
// WORKFLOW:
// 1. A teacher submits the lead form choosing the Grade 9 + Grade 10
//    special offer, or messages on WhatsApp.
// 2. The site owner confirms the order + deposit manually.
// 3. The site owner opens this file and decreases `remainingSlots` by 1.
// 4. When `remainingSlots` reaches 0, the Special Offer section
//    automatically disappears from the homepage — see
//    src/components/sections/special-offer.tsx.
// ---------------------------------------------------------------------------

export const totalSlots = 5;
export const remainingSlots = 5; // <-- Update this number manually as spots are confirmed

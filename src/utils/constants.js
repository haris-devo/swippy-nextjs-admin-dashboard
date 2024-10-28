export const CTA_SNAPCHAT = {
    APP_INSTALL: [
      { label: "Book Now", value: "BOOK_NOW" },
      { label: "Donate", value: "DONATE" },
      { label: "Download", value: "DOWNLOAD" },
      { label: "Get Now", value: "GET_NOW" },
      { label: "Install Now", value: "INSTALL_NOW" },
      { label: "Order Now", value: "ORDER_NOW" },
      { label: "Play", value: "PLAY" },
      { label: "Shop Now", value: "SHOP_NOW" },
      { label: "Sign Up", value: "SIGN_UP" },
      { label: "Try", value: "TRY" },
      { label: "Use App", value: "USE_APP" },
      { label: "Watch", value: "WATCH" },
      { label: "Vote", value: "VOTE" },
      { label: "Directions", value: "DIRECTIONS" },
      { label: "Play Game", value: "PLAY_GAME" }
    ],
    WEB_VIEW: [
      { label: "Apply Now", value: "APPLY_NOW" },
      { label: "More", value: "MORE" },
      { label: "Order Now", value: "ORDER_NOW" },
      { label: "Play", value: "PLAY" },
      { label: "Read", value: "READ" },
      { label: "Shop Now", value: "SHOP_NOW" },
      { label: "Show", value: "SHOW" },
      { label: "Sign Up", value: "SIGN_UP" },
      { label: "View", value: "VIEW" },
      { label: "Show", value: "SHOW" },
      { label: "Watch", value: "WATCH" },
      { label: "Donate", value: "DONATE" },
      { label: "Download", value: "DOWNLOAD" },
      { label: "Apply Now", value: "APPLY_NOW" },
      { label: "Order Now", value: "ORDER_NOW" },
      { label: "Respond", value: "RESPOND" },
      { label: "Buy Tickets", value: "BUY_TICKETS" },
      { label: "Showtimes", value: "SHOWTIMES" },
      { label: "Book Now", value: "BOOK_NOW" },
      { label: "Get Now", value: "GET_NOW" },
      { label: "Listen", value: "LISTEN" },
      { label: "Try", value: "TRY" },
      { label: "Vote", value: "VOTE" },
      { label: "View Menu", value: "VIEW_MENU" },
      { label: "Pre Register", value: "PRE_REGISTER" },
      { label: "Play Game", value: "PLAY_GAME" }
    ]
  };
  
  export function formatNumber(num) {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M'; // Millions
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'k'; // Thousands
    }
    return num.toString(); // Less than 1000
  }
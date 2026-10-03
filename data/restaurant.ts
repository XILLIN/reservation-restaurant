export const restaurant = {
  name: "Maison Ember",
  descriptor: "A Bangkok fire kitchen",
  address: "27 Soi Sukhumvit 31, Watthana, Bangkok 10110",
  phone: "+66 2 258 4418",
  email: "table@maisonember.com",
  hours: [
    { days: "Tuesday – Thursday", time: "17:30 – 23:00" },
    { days: "Friday – Sunday", time: "17:30 – 00:00" },
    { days: "Monday", time: "Closed" },
  ],
} as const;

export const menuSections = [
  {
    id: "starters",
    itemIds: ["scallop", "tomato", "marrow"],
    items: [
      { id: "scallop", price: 680, tag: "shellfish" },
      { id: "tomato", price: 420, tag: "plant" },
      { id: "marrow", price: 560, tag: "" },
    ],
  },
  {
    id: "fire",
    itemIds: ["duck", "wagyu", "fish"],
    items: [
      { id: "duck", price: 1280, tag: "" },
      { id: "wagyu", price: 2400, tag: "forTwo" },
      { id: "fish", price: 1180, tag: "daily" },
    ],
  },
  {
    id: "dessert",
    itemIds: ["cheesecake", "cacao"],
    items: [
      { id: "cheesecake", price: 380, tag: "" },
      { id: "cacao", price: 420, tag: "" },
    ],
  },
] as const;

export const seatingOptions = [
  { id: "dining-room", nameKey: "dining", detailKey: "diningDetail", available: true },
  { id: "terrace", nameKey: "terrace", detailKey: "terraceDetail", available: true },
  { id: "chefs-counter", nameKey: "counter", detailKey: "counterDetail", available: false },
] as const;

export const timeSlots = ["17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00"] as const;

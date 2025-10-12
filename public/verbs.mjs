const verbs = {
  paradigms: [
    { front: "বল imp.", back: "বল্\nবল\nবলুক\nবলুন" },
    { front: "খোলা imp.", back: "খোল্\nখোল\nখোলুক\nখোলুন" },
    { front: "খেলা imp.", back: "খেল\nখোল\nখেলুক\nখেলুন\nখেলুন" },
    { front: "চেনা imp.", back: "চেন্\nচেন\nচিনুক\nচিনুন" },
    { front: "জানা imp.", back: "জান্\nজান\nজানুক\nজানুন" },
    { front: "হওয়া imp.", back: "হ\nহও\nহোক\nহোন" },
    { front: "ধোয়া imp.", back: "ধো\nধোও\nধুক\nধুন" },
    { front: "খাওয়া imp.", back: "খা\nখাও\nখাক\nখান" },
    { front: "দেওয়া imp.", back: "দে\nদাও\nদিক\nদিন" },

    { front: "বলা simple pres.", back: "বলি\nবলিস\nবল\nবলে\nবলেন" },
    { front: "খোলা simple pres.", back: "খুলি\nখুলিস\nখোল\nখোলে\nখোলেন" },
    { front: "খেলা simple pres.", back: "খেলি\nখেলিস\nখেল\nখেলে\nখেলেন" },
    { front: "চেনা simple pres.", back: "চিনি\nচিনিস\nচেন\nচেনে\nচেনেন" },
    { front: "জানা simple pres.", back: "জানি\nজানিস\nজান\nজানে\nজানেন" },
    { front: "হওয়া simple pres.", back: "হই\nহোস\nহও\nহয়\nহন" },
    { front: "ধোয়া simple pres.", back: "ধুই\nধুস\nধোও\nধোয়\nধোন" },
    { front: "খাওয়া simple pres.", back: "খাই\nখাস\nখাও\nখায়\nখান" },
    { front: "দেওয়া simple pres.", back: "দিই\nদিস\nদাও\nদেয়\nদেন" },
    { front: "যাওয়া simple pres.", back: "যাই\nযাস\nযাও\nযায়\nযান" },

    { front: "বলা pres. prog.", back: "বলছি\nবলছিস\nবলছ\nবলছে\nবলছেন" },
    { front: "খোলা pres. prog.", back: "খুলছি\nখুলছিস\nখুলছ\nখুলছে\nখুলছেন" },
    { front: "খেলা pres. prog.", back: "খেলছি\nখেলছিস\nখেলছ\nখেলছে\nখেলছেন" },
    { front: "চেনা pres. prog.", back: "ছিনছি\nছিনছিস\nছিনছ\nছিনছে\nছিনছেন" },
    { front: "জানা pres. prog.", back: "জানছি\nজানছিস\nজানছ\nজানছে\nজানছেন" },
    { front: "হওয়া pres. prog.", back: "হচ্ছি\nহচ্ছিস\nহচ্ছ\nহচ্ছে\nহচ্ছেন" },
    {
      front: "ধোয়া pres. prog.",
      back: "ধুচ্ছি\nধুচ্ছিস\nধুচ্ছ\nধুচ্ছে\nধুচ্ছেন",
    },
    {
      front: "খাওয়া pres. prog.",
      back: "খাচ্ছি\nখাচ্ছিস\nখাচ্ছ\nখাচ্ছে\nখাচ্ছেন",
    },
    {
      front: "দেওয়া pres. prog.",
      back: "দিচ্ছি\nদিচ্ছিস\nদিচ্ছ\nদিচ্ছে\nদিচ্ছেন",
    },
    {
      front: "যাওয়া pres. prog.",
      back: "যাচ্ছি\nযাচ্ছিস\nযাচ্ছ\nযাচ্ছে\nযাচ্ছেন",
    },

    { front: "বলা pres. perf.", back: "বলেছি\nবলেছিস\nবলেছ\nবলেছে\nবলেছেন" },
    {
      front: "খোলা pres. perf.",
      back: "খুলেছি\nখুলেছিস\nখুলেছ\nখুলেছ\nখুলেছেন",
    },
    {
      front: "খেলা pres. perf.",
      back: "খেলেছি\nখেলেছিস\nখেলেছ\nখেলেছে\nখেলেছেন",
    },
    {
      front: "চেনা pres. perf.",
      back: "ছিনেছি\nছিনেছিস\nছিনেছ\nছিনেছে\nছিনেছেন",
    },
    {
      front: "জানা pres. perf.",
      back: "জেনেছি\nজেনেছিস\nজেনেছ\nজেনেছে\nজেনেছেন",
    },
    {
      front: "হওয়া pres. perf.",
      back: "হয়েচ্ছি\nহয়েচ্ছিস\nহয়েচ্ছ\nহয়েচ্ছে\nহয়েচ্ছেন",
    },
    {
      front: "ধোয়া pres. perf.",
      back: "ধুয়েচ্ছি\nধুয়েচ্ছিস\nধুয়েচ্ছ\nধুয়েচ্ছে\nধুয়েচ্ছেন",
    },
    {
      front: "খাওয়া pres. perf.",
      back: "খেয়েচ্ছি\nখেয়েচ্ছিস\nখেয়েচ্ছ\nখেয়েচ্ছে\nখেয়েচ্ছেন",
    },
    {
      front: "দেওয়া pres. perf.",
      back: "দিয়েচ্ছি\nদিয়েচ্ছিস\nদিয়েচ্ছ\nদিয়েচ্ছে\nদিয়েচ্ছেন",
    },
    {
      front: "যাওয়া pres. perf.",
      back: "গিয়েছি\nগিয়েছিস\nগিয়েছ\nগিয়েছে\nগিয়েছেন",
    },

    { front: "বলা simple past", back: "বললাম\nবললি\nবললে\nবলল\nবললেন" },
    { front: "খোলা simple past", back: "খুললাম\nখুললি\nখুললে\nখুলল\nখুললেন" },
    { front: "খেলা simple past", back: "খেললাম\nখেললি\nখেললে\nখেলল\nখেললেন" },
    { front: "চেনা simple past", back: "চিনলাম\nচিনলি\nচিনলে\nচিনল\nচিনলেন" },
    { front: "জানা simple past", back: "জানলাম\nজানলি\nজানলে\nজানল\nজানলেন" },
    { front: "হওয়া simple past", back: "হলাম\nহলি\nহলে\nহল\nহলেন" },
    { front: "ধোয়া simple past", back: "ধুলাম\nধুলি\nধুলে\nধুল\nধুলেন" },
    { front: "খাওয়া simple past", back: "খেলাম\nখেলি\nখেলে\nখেল\nখেলেন" },
    { front: "দেওয়া simple past", back: "দিলাম\nদিলি\nদিলে\nদিল\nদিলেন" },
    { front: "যাওয়া simple past", back: "গেলাম\nগেলি\nগেলে\nগেল\nগেলেন" },

    {
      front: "বলা past prog.",
      back: "বলছিলাম\nবলছিলি\nবলছিলে\nবলছিল\nবলছিলেন",
    },
    {
      front: "খোলা past prog.",
      back: "খুলছিলাম\nখুলছিলি\nখুলছিলে\nখুলছচিল\nখুলছিলেন",
    },
    {
      front: "খেলা past prog.",
      back: "খেলছিলাম\nখেলছিলি\nখেলছিলে\nখেলছিল\nখেলছিলেন",
    },
    { front: "চেনা past prog.", back: "চিনছিলাম\nচিনছিলি\nচিনছিল\nচিনছিলেন" },
    {
      front: "জানা past prog.",
      back: "জানছিলাম\nজানছিলি\nজানছিলে\nজানছিল\nজানছিলেন",
    },
    {
      front: "হওয়া past prog.",
      back: "হচ্ছিলাম\nহচ্ছিলি\nহচ্ছিলে\nহচ্ছিল\nহচ্ছিলেন",
    },
    {
      front: "ধোয়া past prog.",
      back: "ধুচ্ছিলাম\nধুচ্ছিলি\nধুচ্ছিলে\nধুচ্ছিল\nধুচ্ছিলেন",
    },
    {
      front: "খাওয়া past prog.",
      back: "খাচ্ছিলাম\nখাচ্ছিলি\nখাচ্ছিলে\nখাচ্ছিল\nখাচ্ছিলেন",
    },
    {
      front: "দেওয়া past prog.",
      back: "দিচ্ছিলাম\nদিচ্ছিলি\nদিচ্ছিলে\nদিচ্ছিল\nদিচ্ছিলেন",
    },
    {
      front: "যাওয়া past prog.",
      back: "যাচ্ছিলাম\nযাচ্ছিলি\nযাচ্ছিলে\nযাচ্ছিলো\nযাচ্ছিলেন",
    },
    {
      front: "বলা past perf.",
      back: "বলেছিলাম\nবলেছিলি\nবলেছিলে\nবলেছিল\nবলেছিলেন",
    },
    {
      front: "খোলা past perf.",
      back: "খুলেছিলাম\nখুলেছিলি\nখুলেছিলে\nখুলেছিল\nখুলেছিলেন",
    },
    {
      front: "খেলা past perf.",
      back: "খেলেছিলাম\nখেলেছিলি\nখেলেছিলে\nখেলেছিল\nখেলেছিলেন",
    },
    {
      front: "চেনা past perf.",
      back: "চিনেছিলাম\nচিনেছিলি\nচিনেছিলে\nচিনেছিল\nচিনেছিলেন",
    },
    {
      front: "জানা past perf.",
      back: "জেনেছিলাম\nজেনেছিলি\nজেনেছিলে\nজেনেছিল\nজেনেছিলেন",
    },
    {
      front: "হওয়া past perf.",
      back: "হয়েছিলাম\nহয়েছিলি\nহয়েছিলে\nহয়েছিল\nহয়েছিলেন",
    },
    {
      front: "ধোয়া past perf.",
      back: "ধুয়েছিলাম\nধুয়েছিলি\nধুয়েছিলে\nধুয়েছিল\nধুয়েছিলেন",
    },
    {
      front: "খাওয়া past perf.",
      back: "খেয়েছিলাম\nখেয়িছিলি\nখেয়েছিলে\nখেয়েছিল\nখেয়েছিলেন",
    },
    {
      front: "দেওয়া past perf.",
      back: "দিয়েছিলাম\nদিয়েছিলি\nদিয়েছিলে\nদিয়েছিল\nদিয়েছিলেন",
    },
    {
      front: "যাওয়া past perf.",
      back: "গিয়েছিলাম\nগিয়েছিলি\nগিয়েছিলে\nগিয়েছিল\nগিয়েছিলেন",
    },
    { front: "বলা hab. past", back: "বলতাম\nবলতিস\nবলতি\nবলত\nবলতেন" },
    { front: "খোলা hab. past", back: "খুলতাম\nখুলতিস\nখুলতে\nখুলত\nখুলতেন" },
    { front: "খেলা hab. past", back: "খেলতাম\nখেলতিস\nখেলতে\nখেলত\nখেলতেন" },
    { front: "চেনা hab. past", back: "চিনতাম\nচিনতিস\nচিনতে\nচিনত\nচিনতেন" },
    { front: "জানা hab. past", back: "জনতাম\nজানতিস\nজানতে\nজানত\nজানতেন" },
    { front: "হওয়া hab. past", back: "হতাম\nহতিস\nহতে\nহত\nহতেন" },
    { front: "ধোয়া hab. past", back: "ধুতাম\nধুতিস\nধুতে\nধুত\nধুতেন" },
    { front: "খাওয়া hab. past", back: "খেতাম\nখেতিস\nখেতে\nখেত\nখেতেন" },
    { front: "দেওয়া hab. past", back: "দিতাম\nদিতিস\nদিতে\nদিত\nদিতেন" },
    { front: "যাওয়া hab. past", back: "যেতাম\nযেতিস\nযেতে\nযেত\nযেতেন" },
    { front: "বলা future", back: "বলব\nবলবি\nবলবে\nবলবে\nবলবেন" },
    { front: "খোলা future", back: "খুলব\nখুলবি\nখুলবে\nখুলবে\nখুলবেন" },
    { front: "খেলা future", back: "খেলব\nখেলবি\nখেলবে\nখেলবে\nখেলবেন" },
    { front: "চেনা future", back: "চিনব\nচিনবি\nচিনবে\nচিনবে\nচিনবেন" },
    { front: "জানা future", back: "জানব\nজানবি\nজানবে\nজানবে\nজানবেন" },
    { front: "হওয়া future", back: "হব\nহবি\nহবে\nহবে\nহবেন" },
    { front: "ধোয়া future", back: "ধোব\nধোবি\nধোবে\nধোবে\nধোবেন" },
    { front: "খাওয়া future", back: "খাব\nখাবি\nখাবে\nখাবে\nখাবেন" },
    { front: "দেওয়া future", back: "দেব\nদেবি\nদেবে\nদেবে\nদেবেন" },
    { front: "যাওয়া future", back: "যাবো\nযাবি\nযাবে\nযাবে\nযাবেন" },
  ],
  "verb endings": [
    { front: "simple present", back: "-ই\n-ইস\n-∅\n-এ\n-এন" },
    { front: "present progressive", back: "-ছি\nছিস\n-ছ\n-ছে\n-ছেন" },
    { front: "present perfect", back: "-এছি\n-এছিস\n-এছ\n-এছে\n-এছেন" },
    { front: "simple past", back: "-লাম\n-লি\n-লে\n-ল\n-লেন" },
    { front: "past progressive", back: "-ছিলাম\n-ছিলি\n-ছিলে\n-ছিল\n-ছিলেন" },
    { front: "past perfect", back: "-এছিলাম\n-এছিলি\n-এছিলে\n-এছিল\n-এছিলেন" },
    { front: "habitual past", back: "-তাম\n-তিস\n-তি\n-ত\n-তেন" },
    { front: "future", back: "-ব/-বো\n-বি\n-বে\n-বে\n-বেন" },
  ],
};
export default verbs;

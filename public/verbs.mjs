const verbs = {
  paradigms: [
    { front: "শোনা simple pres.", back: "শুনি\nশুনিস\nশোনো\nশোনেন\nশোনে" },
    { front: "থাকা simple pres.", back: "থাকি\nথাকিস\nথাকো\nথাকেন\nথাকে" },
    { front: "হওয়া simple pres.", back: "হই\nহস\nহও\nহন\nহয়" },
    { front: "খাওয়া simple pres.", back: "খাই\nখাস\nখাও\nখান\nখায়" },
    { front: "চাওয়া simple pres.", back: "চাই\nচাস\nচাও\nচান\nচায়" },
    { front: "শেখানো simple pres.", back: "শেখাই\nশেখাস\nশেখাও\nশেখান\nশেখায়" },
    {
      front: "কামড়ানো simple pres.",
      back: "কামড়াই\nকামড়াস\nকামড়াও\nকামড়ান\nকামড়ায়",
    },
    { front: "আছ- simple pres.", back: "আছি\nআছিস\nআছ\nআছেন\nআছে" },
    { front: "দেওয়া simple pres.", back: "দিই\nদিস\nদাও\nদেন\nদেয়" },
    { front: "নেওয়া simple pres.", back: "নিই\nনিস\nনাও\nনেন\nনেয়" },
    { front: "ন- simple pres.", back: "নই\nনস\nনও\nনন\nনয়" },

    { front: "শোনা pres. imp.", back: "শুনি\nশোন\nশোনো/শোন\nশুনুন\nশুনুক" },
    { front: "থাকা pres. imp.", back: "থাকি\nথাক\nথাকো/থাক\nথাকুন\nথাকুক/থাক" },
    { front: "হওয়া pres. imp.", back: "হই\nহ\nহও\nহন\nহক" },
    { front: "খাওয়া pres. imp.", back: "খাই\nখা\nখাও\nখান\nখাক" },
    { front: "চাওয়া pres. imp.", back: "চাই\nচা\nচাও\nচাইয়েন\nচাক" },
    { front: "শেখানো pres. imp.", back: "শেখাই\nশেখা\nশেখাও\nশেখান\nশেখাক" },
    {
      front: "কামড়ানো pres. imp.",
      back: "কামড়াই\nকামড়া\nকামড়াও\nকামড়ান\nকামড়াক",
    },
    { front: "আসা pres imp.", back: "আসি\nআয়\nএস\nআসুন\nআসুক" },

    { front: "শোনা pres. impf.", back: "শুনছি\nশুনছিস\nশুনছো\nশুনছেন\nশুনছে" },
    { front: "থাকা pres. impf.", back: "থাকছি\nথাকছিস\nথাকছো\nথাকছেস\nথাকছে" },
    { front: "হওয়া pres. impf.", back: "হচ্ছি\nহচ্ছিস\nহচ্ছো\nহচ্ছেন\nহচ্ছে" },
    {
      front: "খাওয়া pres. impf.",
      back: "খাচ্ছি\nখাচ্ছিস\nখাচ্ছো\nখাচ্ছেন\nখাচ্ছে",
    },
    { front: "চাওয়া pres. impf.", back: "চাইছি\nচাইচিস\nচাইছো\nচাইছেন\nচাইছে" },
    {
      front: "শেখানো pres. impf.",
      back: "শেখাচ্ছি\nশেখাচ্ছিস\nশেখাচ্ছো\nশেখাচ্ছেন\nশেখাচ্ছে",
    },
    {
      front: "কামড়ানো pres. impf.",
      back: "কামড়াচ্ছি\nকামড়াচ্ছিস\nকামড়াচ্ছো\nকামড়াচ্ছেন\nকামড়াচ্ছে",
    },

    {
      front: "শোনা pres. perf.",
      back: "শুনেছি\nশুনেছিস\nশুনেছো\nশুনেছেন\nশুনেছে",
    },
    {
      front: "থাকা pres. perf.",
      back: "থেকেছি\nথাকেছিশ\nথেকেছো\nথেকেছেন\nথেকেছে",
    },
    { front: "হওয়া pres. perf.", back: "হয়েছি\nহয়েছিস\nহয়েছো\nহয়েছেন\nহয়েছে" },
    {
      front: "থাওয়া pres. perf.",
      back: "খেয়েছি\nখেয়েছিস\nখেয়েছো\nখেয়েছেন\nখেয়েছে",
    },
    {
      front: "চাওয়া pres. perf.",
      back: "চেয়েছি\nচেয়েছিস\nচেয়েছো\nচেয়েছেন\nচেয়েছে",
    },
    {
      front: "শেখানো pres. perf.",
      back: "শিখেয়েছি\nশিখেয়েছিস\nশিখেয়েছো\nশিখেয়েছেন\nশিখেয়েছে",
    },
    {
      front: "কামড়ানো pres. perf.",
      back: "কামড়িয়েছি\nকামড়িয়েছিস\nকামড়িয়েছো\nকামড়িয়েছেন\nকামড়িয়েছে",
    },
    {
      front: "যাওয়া pres. perf.",
      back: "গিয়েছি/গেছি\nগিয়েছিস/গেছিস\nগিয়েছ/গেছ\nগিয়েছেন/গেছেন\nগিয়েছে/গেছে",
    },

    { front: "শোনা simple fut.", back: "শুনবো\nশুনবি\nশুনবে\nশুনবেন\nশুনবে" },
    { front: "থাকা simple fut.", back: "থাকবো\nথাকবি\nথাকবে\nথাকবেন\nথাকবে" },
    { front: "হওয়া simple fut.", back: "হব\nহবি\nহবে\nহবেন\nহবে" },
    { front: "খাওয়া simple fut.", back: "খাব\nখাবি\nখাবে\nখাবেন\nখাবে" },
    { front: "চায়া simple fut.", back: "চাইব\nচাইবি\nচাইবে\nচাইবেন\nচাইবে" },
    {
      front: "শেখানো simple fut.",
      back: "শেখাব\nশেখাবি\nশেখাবে\nশেখাবেন\nশেখাবে",
    },
    {
      front: "কামড়ানো simple fut.",
      back: "কামড়াব\nকামড়াবি\nকামড়াবে\nকামড়াবেন\nকামড়াবে",
    },

    { front: "শোনা fut. imp.", back: "শুনবো\nশুনিস\nশুনো\nশুনবেন\nশুনবে" },
    { front: "থাকা fut. imp.", back: "থাকবো\nথাকিস\nথেকো\nথাকবেন\nথাকবে" },
    { front: "হওয়া fut. imp.", back: "হবো\nহস\nহও\nহবেন\nহবে" },
    { front: "খাওয়া fut. imp.", back: "খাবো\nখাস\nখেও\nখাবেন\nখাবে" },
    { front: "চাওয়া fut. imp.", back: "চাইবো\nচাস\nচেও\nচাইবেন\nচাইবে" },
    {
      front: "শেখানো fut. imp.",
      back: "শেখাবো\nশেখাস\nশিখিও\nশেখাবেন\nশেখাবে",
    },
    {
      front: "বামড়ানো fut. imp.",
      back: "কামড়াবো\nকামড়াস\nকামড়িও\nকামড়াবেন\nকামরাবে",
    },

    { front: "শোনা simple past", back: "শুনলাম\nশুনলি\nশুনলে\nশুনলেন\nশুনলো" },
    { front: "থাকা simple past", back: "থাকলাম\nথাকলি\nথাকলে\nথাকলেন\nথাকলো" },
    { front: "হওয়া simple past", back: "হলাম\nহলি\nহলে\nহলেন\nহলো" },
    { front: "খাওয়া simple past", back: "খেলাম\nখেলি\nখেলে\nখেলেন\nখেলো" },
    { front: "চাওয়া simple past", back: "চাইলাম\nচাইলি\nচাইলে\nচাইলেন\nচাইলো" },
    {
      front: "শেখানো simple past",
      back: "শেখালাম\nশেখালি\nশেখালে\nশেখালেন\nশেখালো",
    },
    {
      front: "কামড়ানো simple past",
      back: "কামড়ালাম\nকামড়ালি\nকামড়ালে\nকামড়ালেন\nকামড়ালো",
    },
    { front: "আছ- simple past", back: "ছিলাম\nছিলি\nছিলে\nছিলেন\nছিল" },
    { front: "যাওয়া simple past", back: "গেলাম\nগেলি\nগেলে\nগেলেন\nগেল" },
    { front: "আসা simple past", back: "এলাম\nএলি\nএলে\nএলেন\nএল" },

    {
      front: "শোনা cond./past hab.",
      back: "শুনতাম\nশুনতিস\nশুনতে\nশুনতেন\nশুনতো",
    },
    {
      front: "থাকা cond./past hab.",
      back: "থাকতাম\nথাকতিস\nথাকতে\nথাকতেন\nথাকতো",
    },
    { front: "হওয়া cond./past hab.", back: "হতাম\nহতিস\nহতে\nহতেন\nহতো" },
    { front: "খাওয়া cond./past hab.", back: "খেতাম\nখেতিস\nখেতে\nখেতেন\nখেতো" },
    {
      front: "চাওয়া cond./past hab.",
      back: "চাইতাম\nচাইতিস\nচাভতে\nচাইতেন\nচাইতো",
    },
    {
      front: "শেখানো cond./past hab.",
      back: "শেখাতাম\nশেখাতিস\nশেখাতে\nশেখাতেন\nশেখাতো",
    },
    {
      front: "কামড়ানো cond./past hab.",
      back: "কামড়াতাম\nকামড়াতিস\nকামড়াতে\nকামড়াতেন\nকামড়াতো",
    },

    {
      front: "শোনা past impf.",
      back: "শুনছিলাম\nশুনছিলি\nশুনছিলে\nশুনছিলেন\nশুনছিলো",
    },
    {
      front: "থাকা past impf.",
      back: "থাকছিলাম\nথাকছিলি\nথাকছিলে\nথাকছিলেন\nথাকছিলো",
    },
    {
      front: "হওয়া past impf.",
      back: "হচ্ছিলাম\nহাচ্ছিলি\nহচ্ছিলে\nহচ্ছিলেন\nহচ্ছিলো",
    },
    {
      front: "খাওয়া past impf.",
      back: "খাচ্ছিলাম\nখাচ্ছিলি\nখাচ্ছিলে\nখচ্ছিলেন\nখাচ্ছিলো",
    },
    {
      front: "চাওয়া past impf.",
      back: "চাইছিলাম\nচাইছিলি\nচাইছিলে\nখাইছিলেন\nচাইছিলো",
    },
    {
      front: "শেখানো past impf.",
      back: "শেখাচ্ছিলাম\nশেখাচ্ছিলি\nশেখাচ্ছিলে\nশেখাচ্ছিলেন\nশেখাচ্ছিলো",
    },
    {
      front: "কামড়ানো past impf.",
      back: "কামড়াচ্ছিলাম\nকামড়াচ্ছিলি\nকামড়াচ্ছিলে\nকামড়াচ্ছিলেন\nকামড়াচ্ছিলো",
    },

    {
      front: "শোনা past perf.",
      back: "শুনেছিলাম\nশুনেছিলি\nশুনেছিলে\nশুনেছিলেন\nশুনেছিলো",
    },
    {
      front: "থাকা past perf.",
      back: "থেকেছিলাম\nথেকেছিলি\nথেকেছিলে\nথেকেছিলেন\nথেকেছিলো",
    },
    {
      front: "হওয়া past perf.",
      back: "হয়েছিলাম\nহয়েছিলি\nহয়েছিলে\nহয়েছিলেন\nহয়েছিলো",
    },
    {
      front: "খাওয়া past perf.",
      back: "খেয়েছিলাম\nখেয়েছিলি\nখেয়েছিলে\nখেয়েছিলেন\nখেয়েছিলো",
    },
    {
      front: "চাওয়া past perf.",
      back: "চেয়েছিলাম\nচেয়েছিলি\nচেয়েছিলে\nচেয়েছিলেন\nচেয়েছিলো",
    },
    {
      front: "শেখানো past perf.",
      back: "শিখিয়েছিলাম\nশিখিয়েছিলি\nশিখিয়েছিলে\nশিখিয়েছিলেন\nশিখিয়েছিলো",
    },
    {
      front: "কামড়ানো past perf.",
      back: "কামড়িয়েছিলাম\nকামড়িয়েছিলি\nকামড়িয়েছিলে\nকামড়িয়েছিলেন\nকামড়িয়েছিলো",
    },
    {
      front: "যাওয়া past perf.",
      back: "গিয়েছিলাম/গেছিলাম\nগিয়েছিলি/গেছিলি\nগিয়েছিলে/গেছিলে\nগিয়েছিলেন/গেছিলেন\nগিয়েছিল/গেছিল",
    },

    { front: "শোনা participles", back: "শুনে\nশুনতে\nশুনলে" },
    { front: "থাকা participles", back: "থেকে\nথাকতে\nথাকলে" },
    { front: "হওয়া participles", back: "হয়ে\nহতে\nহলে" },
    { front: "খাওয়া participles", back: "খেয়ে\nখেতে\nখেলে" },
    { front: "চাওয়া participles", back: "চেয়ে\nচাইতে\nচাইলে" },
    { front: "শেখানো participles", back: "শিখিয়ে\nশেখাতে\nশেখালে" },
    { front: "কামড়ানো participles", back: "কামড়িয়ে/তামড়ে\nকামড়াতে\nকামড়ালে" },
  ],
  "verb endings": [
    { front: "simple present", back: "-ই\n-ইস\n-∅\n-এন\n-এ" },
    { front: "present imperfect", back: "-ছি\nছিস\n-ছ\n-ছেন\n-ছে" },
    { front: "present perfect", back: "-এছি\n-এছিস\n-এছ\n-এছেন\n-এছে" },
    { front: "simple past", back: "-লাম\n-লি\n-লে\n-লেন\n-ল" },
    { front: "past imperfect", back: "-ছিলাম\n-ছিলি\n-ছিলে\n-ছিলেন\n-ছিল" },
    { front: "past perfect", back: "-এছিলাম\n-এছিলি\n-এছিলে\n-এছিলেন\n-এছিল" },
    { front: "conditional/habitual past", back: "-তাম\n-তিস\n-তি\n-তেন\n-ত" },
    { front: "simple future", back: "-ব/-বো\n-বি\n-বে\n-বেন\n-বে" },
    { front: "present imperative", back: "-ই\n-∅\n-ও\n-(উ)ন\n-(উ)ক" },
    { front: "future imperative", back: "-বো\n-বিস\n-ও\n-বেন\n-বে" },
  ],
};
export default verbs;

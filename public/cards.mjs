// replace this with your own flashcards
// `cards: Record<string, Array<{front: string, back: string}>>`
import mango from "./mango.mjs";
import misc from "./misc.mjs";
import textbook from "./textbook.mjs";
import verbs from "./verbs.mjs";
const cards = {
  ...textbook,
  ...mango,
  ...misc,
  ...verbs,
};

export default cards;

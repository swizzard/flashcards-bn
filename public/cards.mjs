// replace this with your own flashcards
// `cards: Record<string, Array<{front: string, back: string}>>`
import mango from "./mango.mjs";
import misc from "./misc.mjs";
import textbook from "./textbook.mjs";
const cards = {
  ...textbook,
  ...mango,
  ...misc,
};

export default cards;

/**
 * Shared emoji constants — single source of truth for both client and server.
 */

const ALLOWED_REACTIONS = {
  "👍": "Like",
  "❤️": "Love",
  "👀": "Seen",
  "🎉": "Celebrate",
  "🤔": "Question",
  "😂": "Funny",
  "➕": "Plus One",
};

const ALLOWED_REACTION_EMOJIS = Object.keys(ALLOWED_REACTIONS);

module.exports = { ALLOWED_REACTIONS, ALLOWED_REACTION_EMOJIS };

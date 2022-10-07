const plugin = require("tailwindcss/plugin");

const shadowPlugin = plugin(function ({ addUtilities }) {
  addUtilities({
    ".card-shadow": {
      "box-shadow": "0 0 12px rgba(71, 84, 103, 0.08)",
    },
    ".tooltip-shadow": {
      "box-shadow": "0 4px 12px rgba(71, 84, 103, 0.12)",
    },
    ".tablet-menu-shadow": {
      "box-shadow": "0 8px 24px rgba(71, 84, 103, 0.24)",
    },
  });
});

module.exports = shadowPlugin;

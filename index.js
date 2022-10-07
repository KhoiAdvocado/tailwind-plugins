const plugin = require("tailwindcss/plugin");

const typoPlugin = plugin(function ({ addUtilities, theme, e }) {
  const utilities = [
    {
      [`.${e("h1")}`]: {
        fontSize: "32px",
        fontWeight: 800,
        lineHeight: "44px",
      },
    },
    {
      [`.${e("h2")}`]: {
        fontSize: "24px",
        fontWeight: 700,
        lineHeight: "36px",
      },
    },
    {
      [`.${e("h3")}`]: {
        fontSize: "20px",
        fontWeight: 700,
        lineHeight: "30px",
      },
    },
    {
      [`.${e("h4")}`]: {
        fontSize: "18px",
        fontWeight: 700,
        lineHeight: "26px",
      },
    },
    {
      [`.${e("h5")}`]: {
        fontSize: "24px",
        fontWeight: 700,
        lineHeight: "36px",
      },
    },
    {
      [`.${e("h6")}`]: {
        fontSize: "14px",
        fontWeight: 700,
        lineHeight: "24px",
      },
    },
    {
      [`.${e("h7")}`]: {
        fontSize: "12px",
        fontWeight: 700,
        lineHeight: "18px",
      },
    },
    {
      [`.${e("h8")}`]: {
        fontSize: "10px",
        fontWeight: 700,
        lineHeight: "16px",
      },
    },

    {
      [`.${e("p1")}`]: {
        fontSize: "18px",
        fontWeight: 400,
        lineHeight: "28px",
      },
    },
    {
      [`.${e("p2")}`]: {
        fontSize: "18px",
        fontWeight: 500,
        lineHeight: "28px",
      },
    },
    {
      [`.${e("p3")}`]: {
        fontSize: "16px",
        fontWeight: 400,
        lineHeight: "24px",
      },
    },
    {
      [`.${e("p4")}`]: {
        fontSize: "16px",
        fontWeight: 500,
        lineHeight: "24px",
      },
    },
    {
      [`.${e("p5")}`]: {
        fontSize: "14px",
        fontWeight: 400,
        lineHeight: "24px",
      },
    },
    {
      [`.${e("p6")}`]: {
        fontSize: "14px",
        fontWeight: 500,
        lineHeight: "24px",
      },
    },
    {
      [`.${e("p7")}`]: {
        fontSize: "12px",
        fontWeight: 400,
        lineHeight: "18px",
      },
    },
    {
      [`.${e("p8")}`]: {
        fontSize: "12px",
        fontWeight: 500,
        lineHeight: "18px",
      },
    },
  ];
  addUtilities(utilities);
});

module.exports = typoPlugin;

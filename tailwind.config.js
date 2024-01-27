/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      h1: ["76px", "76px"],
      h2: ["61px", "61px"],
      h3: ["49px", "49px"],
      h4: ["39px", "39px"],
      h5: ["31px", "31px"],
      h6: ["25px", "25px"],
      h7: ["20px", "20px"],
      text_16: ["16px", "28px"],
      text_14: ["14px", "24px"],
      small_text_12: ["12px", "14px"],
      field_text_14: ["14px", "16px"],
      button: ["14px", "16px"],
      menu_links: ["13px", "20px"],
      menu_items: ["14px", "20px"],
    },

    extend: {
      fontWeight: {
        lightplus: "350",
      },
      colors: {
        my_black: "#555563",
        accent_blue: "#00B9F2",
        accent_green: "#009649",
        translucent_bg: "#FFFFFFCC",
        stroke: "#0000001A",
        my_gray: "#838393",
        field_border: "#BEBEBE",
        background: "#F5F5F5",
        text_on_image: "#FFFFFF",
        bg_50: "#FFFFFF80",
        text_on_image_faint: "#FFFFFFB2",
      },
    },
  },
  plugins: [],
}

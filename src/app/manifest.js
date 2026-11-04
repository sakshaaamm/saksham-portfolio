export default function manifest() {
  return {
    name:             "Saksham — AI Engineer",
    short_name:       "Saksham",
    description:      "Portfolio of Saksham, an AI engineer building applied machine learning products.",
    start_url:        "/",
    display:          "standalone",
    background_color: "#080808",
    theme_color:      "#3b6ef5",
    lang:             "en",
    icons: [
      { src: "/photo/favicon-blue.png", sizes: "192x192", type: "image/png" },
      { src: "/photo/favicon-blue.png", sizes: "512x512", type: "image/png" },
    ],
  };
}

import type { Config } from "tailwindcss"

export default <Partial<Config>>{
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue"
  ],
  theme: {
    extend: {
      colors: {
        bg: "#f7f3ed",
        text: "#111111",
        muted: "#6f6a63",
        line: "#ded8cf",
        accent: "#343434",
        soft: "#ebe3d7"
      },
      fontFamily: {
        body: ["Anonymous Pro", "monospace"],
        headline: ["Anonymous Pro", "monospace"],
        soft: ["Anonymous Pro", "monospace"]
      }
    }
  }
}

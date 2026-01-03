const translations = {
  ja: {
    title: "レトロゲームボックス",
    play: "プレイ",
    score: "スコア",
    highScore: "ハイスコア",
    gameOver: "ゲームオーバー",
    retry: "リトライ",
    backToMenu: "メニューに戻る",
    games: {
      snake: "レトロ・スネーク",
      minesweeper: "マインスイーパー",
      breakout: "ブロック崩し"
    }
  },
  en: {
    title: "Retro Game Box",
    play: "Play",
    score: "Score",
    highScore: "High Score",
    gameOver: "Game Over",
    retry: "Retry",
    backToMenu: "Back to Menu",
    games: {
      snake: "Retro Snake",
      minesweeper: "Minesweeper",
      breakout: "Breakout"
    }
  }
};

type Language = "ja" | "en";

const getLanguage = (): Language => {
  const lang = navigator.language || "en";
  return lang.startsWith("ja") ? "ja" : "en";
};

export const i18n = translations[getLanguage()];
export default i18n;

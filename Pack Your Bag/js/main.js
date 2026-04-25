import { INTRO_LINE } from "./data.js";
import { typeLine } from "./ui.js";
import { PackYourBagGame } from "./game.js";

const introScreen = document.getElementById("intro-screen");
const gameScreen = document.getElementById("game-screen");
const typedLine = document.getElementById("typed-line");
const startBtn = document.getElementById("start-btn");

const elements = {
  lessonNameEl: document.getElementById("lesson-name"),
  timerEl: document.getElementById("timer"),
  scoreEl: document.getElementById("score"),
  roundEl: document.getElementById("round-indicator"),
  itemsGrid: document.getElementById("items-grid"),
  bagDropzone: document.getElementById("bag-dropzone"),
  bagItems: document.getElementById("bag-items"),
  submitRoundBtn: document.getElementById("submit-round-btn"),
  feedback: document.getElementById("feedback")
};

const game = new PackYourBagGame(elements);

async function runIntro() {
  await new Promise((resolve) => setTimeout(resolve, 2400));
  await typeLine(INTRO_LINE, typedLine, 42);
  startBtn.classList.remove("hidden");
}

function startGame() {
  introScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");
  elements.submitRoundBtn.disabled = false;
  elements.submitRoundBtn.textContent = "Submit Round";
  game.start();
}

elements.submitRoundBtn.addEventListener("click", () => {
  game.finishRound(false);
});

startBtn.addEventListener("click", startGame);
runIntro();

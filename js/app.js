import BinaryCalculator from "./BinaryCalculator";
import DecCalculator from "./DecCalculator";
import "../scss/main.scss";

document.addEventListener("DOMContentLoaded", () => {
  const bitCalc = new BinaryCalculator(".binary-calculator");
  const decCalc = new DecCalculator(".dec-calculator");
});

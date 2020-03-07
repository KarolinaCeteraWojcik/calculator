import Calculator from "./Calculator";

class DecCalculator extends Calculator {
  constructor(settings) {
    super(settings);
    super.initEvents();
  }

add(numberX, numberY) {
    let result = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = numberX.length - 1; i >= 0; i--) {
        let carryBit = numberX[i] + numberY[i] + result[i];
        if (carryBit >= 10) {
            result[i] = carryBit - 10;
            result[i - 1] = 1;
        } else {
            result[i] = carryBit;
        }
    }
    return result;
}

changeNumber(root) {
  const activeElement = root.querySelector('.active');
  activeElement.contentEditable = 'true';
  activeElement.parentElement.addEventListener('click', () => {
      document.querySelector('#tooltip-window').style.display = 'block';
    });
}

updateResult() {
    let root = this.$calculatorDOMElement;
    let $resultNumber = root.querySelectorAll(".result-bit .active");
    const reversedArray = this.resultNumberArray.reverse();
    $resultNumber.forEach((resultElement,index, array) => {
        resultElement.textContent = reversedArray[index];
    });
}

initEvents() {
      const root = this.$calculatorDOMElement;
      const plus = root.querySelector('.operator-bar span');
      plus.addEventListener('click', () => {
          this.checkNumber();
          this.updateResult();
      })
};

  /**
   * Zaimplementuj kalkulator dziesiętny
   */
}

export default DecCalculator;

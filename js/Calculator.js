/* abstract */

class Calculator {
  constructor(selectorName) {
    this.name = selectorName;
    this.$calculatorDOMElement = document.querySelector(selectorName);

    // pozostałe właściwości to puste tablice, które przechowują dane (liczby) z drzewa DOM znajdujące się spanach będących kolejnymi liczbami kalkulatora

    this.firstNumberArray = [];
    this.secondNumberArray = [];
    this.resultNumberArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.initEvents();
  }

  /* Abstract method add numbers in two array
  *  @param {array} numberX First number
  *  @param {array} numberY Second number
  *  @return {array}
  */
  add(numberX, numberY) {
    console.error("Powinieneś zaimplementować tą metodę w klasie dziedziczącej. ");
    return [0, 0, 0, 0, 0, 0, 0, 0];
  }

  /* Abstract method changing number
  *  @param {jQuery element} root Parent element
  */
  changeNumber(root) {
    console.error("Powinieneś zaimplementować tą metodę w klasie dziedziczącej. ");
  }

  /* Abstract method changing Result
  */
  updateResult() {
    console.error("Powinieneś zaimplementować tą metodę w klasie dziedziczącej. ");
  }

  /* Get the name of calculator selector
  *  @return {string}
  */

  getName() {
    return `Hello I am ${this.name}`;
  }

  /* Check what number is set in both numbers and add
  *  @return {string}
  */
  checkNumber() {
    let root = this.$calculatorDOMElement;
    let $firstNumber = root.querySelectorAll(".group-number label:first-child");
    let $secondNumber = root.querySelectorAll(".group-number label:nth-child(2)");
    let $resultNumber = root.querySelectorAll(".group-number .result-bit");

    for (let i = $firstNumber.length - 1, j = 0; i >= 0; i--, j++) {
      const parsedFirstNumber = parseInt($firstNumber[j].querySelector(".active").innerText);
      const parsedSecondNumber = parseInt($secondNumber[j].querySelector(".active").innerText);
      const parsedResult = parseInt($resultNumber[j].querySelector(".active").innerText);

     if (isNaN(parsedFirstNumber) || isNaN(parsedSecondNumber)) {
       alert('Możesz wprowadzać tylko liczby!');
       return false;
     } else if
        ((parsedFirstNumber > 9 || parsedSecondNumber > 9)
         || (parsedFirstNumber < 0 || parsedSecondNumber < 0)) {
        alert('Podaj liczbę od 0 do 9!');
       return false;
     }

      this.firstNumberArray[i] = parsedFirstNumber;
      this.secondNumberArray[i] = parsedSecondNumber;
      this.resultNumberArray[i] = parsedResult;
    }
    this.resultNumberArray = this.add(this.firstNumberArray, this.secondNumberArray);
  }

  /* Set event click on number
  */

  initEvents() {
    this.$calculatorDOMElement.addEventListener("click", (event) => {
      if (event.target.parentElement.classList.contains("display-number")) {
        const parentLabel = event.target.parentElement;
        this.changeNumber(parentLabel);
      }
    });
  }
}

export default Calculator;

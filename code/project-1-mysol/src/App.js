import Header from "./components/Header/Header";
import InvestForm from "./components/InvestForm/InvestForm";
import ResultTable from "./components/ResultTable/ResultTable";
import {useState} from "react";
import {formatter} from "./util/utils";

function App() {
  const [yearlyData, setYearlyData] = useState([]);

  const calculateHandler = (userInput) => {
    let yearlyDataInner = [];
    let interestSum = 0;
    let contributionSum = 0;

    let currentSavings = +userInput.currSavings; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput.yearlyContrib; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput.expReturn / 100;
    const duration = +userInput.duration;

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      interestSum += yearlyInterest;
      contributionSum += yearlyContribution;
      yearlyDataInner.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: formatter.format(yearlyInterest),
        totalInterest: formatter.format(interestSum),
        savingsEndOfYear: formatter.format(currentSavings),
        yearlyContribution: formatter.format(currentSavings + contributionSum),
      });
    }

    console.log(yearlyDataInner);

    setYearlyData(yearlyDataInner);
  };

  return (
    <div >
      <Header />
      <InvestForm onSubmit={calculateHandler} />
      <ResultTable yearlyData={yearlyData} />
    </div>
  );
}

export default App;

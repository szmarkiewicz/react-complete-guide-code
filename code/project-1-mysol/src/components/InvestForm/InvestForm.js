import {useState} from "react";
import styles from './InvestForm.module.css';

export default function InvestForm(props){
    const [currSavings, setCurrSavings] = useState('');
    const [yearlyContrib, setYearlyContrib] = useState('');
    const [expReturn, setExpReturn] = useState('');
    const [duration, setDuration] = useState('');

    return (
        <form className={styles["form"]} onSubmit={(e) => {
            e.preventDefault();
            props.onSubmit({
            currSavings: currSavings,
            yearlyContrib: yearlyContrib,
            expReturn: expReturn,
            duration: duration
        });}}>
            <div className={styles["input-group"]}>
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input type="number" value={currSavings} id="current-savings"
                           onChange={(e) => setCurrSavings(e.target.value)}/>
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                    <input type="number" id="yearly-contribution" value={yearlyContrib}
                           onChange={(e) => setYearlyContrib(e.target.value)}/>
                </p>
            </div>
            <div className={styles["input-group"]}>
                <p>
                    <label htmlFor="expected-return">
                        Expected Interest (%, per year)
                    </label>
                    <input type="number" id="expected-return" value={expReturn}
                           onChange={(e) => setExpReturn(e.target.value)}/>
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input type="number" id="duration" value={duration}
                           onChange={(e) => setDuration(e.target.value)}/>
                </p>
            </div>
            <p className={styles.actions}>
                <button type="reset" className={styles["buttonAlt"]} onClick={() => {
                    setExpReturn('');
                    setDuration('');
                    setCurrSavings('');
                    setYearlyContrib('');
                }}>
                    Reset
                </button>
                <button type="submit" className={styles["button"]}>
                    Calculate
                </button>
            </p>
        </form>
    );
}
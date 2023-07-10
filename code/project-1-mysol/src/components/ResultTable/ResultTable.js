import styles from './ResultTable.module.css';

export default function ResultTable(props){
    return (
        <div className={styles['table-container']}>
            {props.yearlyData.length === 0 ? <p>
                    No data available.
                </p> :
                <table className={styles["result"]}>
                    <thead>
                    <tr>
                        <th>Year</th>
                        <th>Total Savings</th>
                        <th>Interest (Year)</th>
                        <th>Total Interest</th>
                        <th>Invested Capital</th>
                    </tr>
                    </thead>
                    <tbody>
                        {props.yearlyData.map((item) => <tr>
                            <td>{item.year}</td>
                            <td>{item.savingsEndOfYear}</td>
                            <td>{item.yearlyInterest}</td>
                            <td>{item.totalInterest}</td>
                            <td>{item.yearlyContribution}</td>
                        </tr>)}
                    </tbody>
                </table>}
        </div>
    );
}
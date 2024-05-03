const TransactionTable = (props) => {
    const data=props.data;
    return ( 
        <div className="transactionTable ">
            
            <table>
            <tr>
                <th>Date</th>
                <th>Narration</th>
                <th>Cheque/ Reference </th>
                <th>Value Date</th>
                <th>Withdrawal</th>
                <th>Deposit</th>
                <th>Closing Balance</th>
            </tr>
            {data.map((transaction)=>(
                <tr>
                    <td>{transaction.Date}</td>
                    <td>{transaction.Narration}</td>
                    <td>{transaction.ch_ref}</td>
                    <td>{transaction.ValueDate}</td>
                    <td>{transaction. Widthdraw}</td>
                    <td>{transaction.Deposit}</td>
                    <td>{transaction.closingBalance}</td>
                </tr>
            ))}
            </table>
            
        </div>
     );
}
 
export default TransactionTable;
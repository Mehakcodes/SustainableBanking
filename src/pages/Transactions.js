import TransactionTable from "../components/TransactionTable";

const Transactions = () => {
    const transactionData=[
        {
            Date:'2021-10-10',
            Narration:'vbfbtgn bhyrby bty bn tybn ty b ty b ty bt yb t ',
            ch_ref:'123456789', 
            ValueDate:'2021-10-10',
            Widthdraw:'1000',
            Deposit:'0',
            closingBalance:'1000'
        },
        {
            Date:'2021-10-10',
            Narration:'vbfbtgn bhyrby bty bn tybn ty b ty b ty bt yb t ',
            ch_ref:'123456789',
            ValueDate:'2021-10-10',
            Widthdraw:'0',
            Deposit:'1000',
            closingBalance:'1000'
        },
        {
            Date:'2021-10-10',
            Narration:'vbfbtgn bhyrby bty bn tybn ty b ty b ty bt yb t ',
            ch_ref:'123456789',
            ValueDate:'2021-10-10',
            Widthdraw:'1000',
            Deposit:'0',
            closingBalance:'1000'
        },
    ]
    return ( 
        <div className="transactions">
            <h1 className="pb-3 text-3xl font-bold text-center mt-8"   >Transactions</h1>
            <TransactionTable data={transactionData}/>
        </div>
     );
}
 
export default Transactions;
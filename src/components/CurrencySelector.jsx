const CurrencySelector = ({currency, onCurrencyChange}) => {
    return ( 
        <div className="controls">
            <label htmlFor="currency">Currency: </label>
            <select value={currency} id="currency" onChange={(e) => onCurrencyChange(e.target.value)}>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="gbp">GBP</option>
                <option value="jpy">JPY</option>
                <option value="chf">CHF</option>
            </select>
        </div>
    );
}
 
export default CurrencySelector;
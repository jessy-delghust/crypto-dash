import { Link } from "react-router";
import { formatPrice } from "../utils/CurrencyUtils";

const CoinCard = ({coin, currency}) => {
    return ( 
      <Link to={`/coin/${coin.id}`}>
        <div className="coin-card">
          <div className="coin-header">
            <img src={coin.image} alt={coin.name} className="coin-image" />
            <div>
              <h2>{coin.name}</h2>
              <p className="symbol">{coin.symbol.toUpperCase()}</p>
            </div>
          </div>
          <p>Price: {formatPrice(coin.current_price, currency)}</p>
          <p className={coin.price_change_percentage_24h >= 0 ? 'positive' : 'negative'}>
            {coin.price_change_percentage_24h.toFixed(2)} %
          </p>
          <p>
            Market Cap: {coin.market_cap.toLocaleString()}
          </p>
        </div>
      </Link>
    );
}
 
export default CoinCard;
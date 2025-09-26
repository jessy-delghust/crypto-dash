export const currencySymbols = {
    usd: '$',
    eur: '€',
    gbp: '£',
    jpy: '¥',
    chf: 'CHF'
};

export function formatPrice(amount, currencyCode, locale = 'en-US') {
    if (amount == null) return 'N/A';
    try {
        return new Intl.NumberFormat(locale, {
            style: 'currency',
            currency: currencyCode.toUpperCase(),
            minimumFractionDigits: 0,
            maximumFractionDigits: 2,
        }).format(amount);
    } catch (e) {
        const symbol = currencySymbols[currencyCode.toLowerCase()] || '';
        return `${symbol}${amount.toLocaleString(locale, {
            minimumFractionDigits: 0,
            maximumFractionDigits: 2,
        })}`;
    }
}
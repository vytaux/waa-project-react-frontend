function formatMoney(amount, locale = 'en-US', currency = 'USD') {
    return amount.toLocaleString(locale, {
        style: 'currency',
        currency,
        minimumFractionDigits: 0,
    });
}

export default formatMoney;
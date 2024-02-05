function formatMoney(amount, locale = 'en-US', currency = 'USD') {
    return amount.toLocaleString(locale, {
        style: 'currency',
        currency,
    });
}

export default formatMoney;
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('currencyForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const fromCurrency = document.getElementById('fromCurrency').value;
        const toCurrency = document.getElementById('toCurrency').value;
        const amount = parseFloat(document.getElementById('amount').value);

        if (!amount || amount <= 0) {
            document.getElementById('conversionResult').innerText = "Please enter a valid amount.";
            return;
        }

        fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}?apiKey=7c258bf6bd5b3aa7e0585ecc`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok: ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                if (data && data.rates) {
                    const rate = data.rates[toCurrency];
                    if (rate) {
                        const result = amount * rate;
                        document.getElementById('conversionResult').innerText = `${amount} ${fromCurrency} is equivalent to ${result.toFixed(2)} ${toCurrency} at an exchange rate of ${rate}.`;
                    } else {
                        document.getElementById('conversionResult').innerText = "Failed to retrieve conversion rate for selected currencies.";
                    }
                } else {
                    document.getElementById('conversionResult').innerText = "Failed to fetch currency data.";
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                document.getElementById('conversionResult').innerText = "Error fetching conversion data: " + error.message;
            });
    });
});

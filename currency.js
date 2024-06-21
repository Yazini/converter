document.getElementById('convert').addEventListener('click', function() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
    const url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const rate = data.rates[toCurrency];
            const result = amount * rate;
            document.getElementById('result').innerText = `Converted Amount: ${result.toFixed(2)} ${toCurrency}`;
        })
        .catch(error => {
            console.error('Error fetching exchange rates:', error);
            document.getElementById('result').innerText = 'Error fetching exchange rates.';
        });
});

# API Integration Details

### Public API Used
The job assessment provided two options, CoinGecko and CoinCap to fetch live prices of crytpocurrencies, and I chose to use CoinCap, since it seemed a little easier to navigate. 

In this API, I used the 'assets' feacher using the https://api.coincap.io/v2/assets link. I decided on this because it returned the list of cryptocurrencies in order of rank, which I thought would be the most useful information to provide on the page. Furthermore, you can filter by name by adding a specific coin id you want eg. https://api.coincap.io/v2/assets/bitcoin, which helped with my search feature. 

### How I Called It

In order to actually call the API, I use the javascript fetch feature, and created a function that essentially grabs all of the json data that is pulled from the assets, and then manually grabs the id and usd price and sets variables with useState. Because I wanted the data to load into the display when the page loaded, I had a useEffect to call the function and display the data. 

For simplicity, I just made a copy of that function for the search feature, but grabbed the information from the searchbar and tried to see if the coin they searched for existed. If it did, I would return and display that price, otherwise I would display an error message. 
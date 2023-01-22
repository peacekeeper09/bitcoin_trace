const btcPriceElement = document.getElementById("btc-price");
      const twitterFeedElement = document.getElementById("twitter-feed");

      // Use a cryptocurrency API to fetch the latest Bitcoin price in USD
      fetch("https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD")
        .then(response => response.json())
        .then(data => {
          btcPriceElement.innerText = data.USD;
        });
      
      // Use Twitter API to fetch the latest tweet from https://twitter.com/Bitcoin
      twitterFeedElement.innerHTML = '<a class="twitter-timeline" data-height="400" data-theme="dark" href="https://twitter.com/Bitcoin?ref_src=twsrc%5Etfw">Tweets by Bitcoin</a>';
      twttr.widgets.load();
const btcPriceElement = document.getElementById("btc-price");
      const twitterFeedElement = document.getElementById("twitter-feed");

      // some comment for future use C9
      fetch("https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD")
        .then(response => response.json())
        .then(data => {
          btcPriceElement.innerText = data.USD;
        });
      // some comment for future use C10
      twitterFeedElement.innerHTML = '<a class="twitter-timeline" data-height="400" data-theme="dark" href="https://twitter.com/Bitcoin?ref_src=twsrc%5Etfw">Tweets by Bitcoin</a>';
      twttr.widgets.load();

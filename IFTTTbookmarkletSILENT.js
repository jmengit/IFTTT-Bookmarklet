//IFTTT Bookmarklet With 3 Optional Values - This version sends the info to IFTTT silently - You will receive no confirmation
//Replace params with your IFTTT values
//Event and Key please replace with your IFTTT event name and your IFTTT webhooks key
//Also choose your 3 body values - can be strings and/or javascript variables and properties
//If not using all body params delete the line in the "var params" declaration as well as the relevent part of "const url"
//See here for more info about IFTTT webhooks - https://ifttt.com/maker_webhooks
javascript:(
  function() {
    var params = {
      event:'YOUR_IFTTT_EVENT',
      key:'YOUR_IFTTT_KEY',
      val1:'Test Value',
      val2:document.title,
      val3:window.location.href
    };
    const url =`https://maker.ifttt.com/trigger/${params.event.trim()}/with/key/${params.key.trim()}?value1=${params.val1.trim()}&value2=${params.val2.trim()}&value3=${params.val3.trim()}`;
    const http = new XMLHttpRequest();
    http.open("GET", url);
    http.send();
  }
)();

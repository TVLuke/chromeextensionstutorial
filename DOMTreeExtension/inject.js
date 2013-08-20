document.body.style.backgroundColor='yellow'

var c = document.body.innerHTML;

chrome.runtime.sendMessage({greeting: "hello", content: c}, function(response) {
  console.log(response.farewell);
});
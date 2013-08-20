var x = true;
console.log("Hello World!");
chrome.alarms.onAlarm.addListener(onAlarm);
chrome.browserAction.onClicked.addListener(function(tab) {
onBrowsClick(tab);
});
chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) 
	{
    		console.log(sender.tab ? "from a content script:" + sender.tab.url :	"from the extension");
    		if (request.greeting == "hello")
		{
			console.log(request.content);
      		sendResponse({farewell: "goodbye"});
		}
  });



function onBrowsClick(tab) 
{
	console.log("onClickListener");
	if(x)
	{
		x=false;
		chrome.browserAction.setIcon({path: "16x16b.png"});
	}
	else
	{
		x=true;
		chrome.browserAction.setIcon({path: "16x16.png"});
	}
	chrome.tabs.executeScript(tab.id,{file:"inject.js"});
}

chrome.alarms.create('refresh', {periodInMinutes: 1});

function onAlarm(alarm) 
{
	console.log('Got alarm', alarm);
  	// |alarm| can be undefined because onAlarm also gets called from
  	// window.setTimeout on old chrome versions.
  	if (alarm && alarm.name == 'refresh') 
	{
		console.log("Hello World!");
		chrome.alarms.create('refresh', {periodInMinutes: 1});
//var xhr = new XMLHttpRequest();
//xhr.open("GET", "http://10.0.1.14:8081/contexttypes", true);
//xhr.onreadystatechange = function() 
//{
	
  	//if (xhr.readyState == 4) 
	//{
    		// JSON.parse does not evaluate the attacker's scripts.
    		//var resp = JSON.parse(xhr.responseText);
  	//}
//}
//xhr.send();

  	}	 
	else 
	{
	}
}


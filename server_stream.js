const http = require('http');
const youtube = require('youtube-audio-stream');



function handleRequest(req, res) {

	console.log('hit');
	var getAudio = function (req, res) {
		var requestUrl = 'http://youtube.com/watch?v=eLi0HsaLIYc' //+ req.params.videoId
		try {
			youtubeStream(requestUrl).pipe(res)
		} catch (exception) {
			res.status(500).send(exception)
		}
	}
}

var server = http.createServer(handleRequest);

//Lets start our server
server.listen(8000, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", 8000);
});

$(function(){
	$("#search").submit(function(e){
		e.preventDefault();
		var searchTerm = $("#query").val();
		getRequest(searchTerm);
	});

	function getRequest(searchTerm) {
		var params = {
			part: "snippet",
			key: "AIzaSyBhjtDGFP2io6tZ40hqCUXrNkEfJzpzpFg",
			q: searchTerm
		};
		url = "https://www.googleapis.com/youtube/v3/search";
		
		$.getJSON(url, params, function(data){
			//console.log(data.items[0].snippet.thumbnails);
			showResults(data.items);
		});
	}

	function showResults(results) {
		var html = "";
		$.each(results, function(index, value){
			console.log(results[index].snippet.thumbnails.medium);
			html += "<img src='" + results[index].snippet.thumbnails.medium.url + "'>";
		});
		$('#search-results').html(html);
	}
});
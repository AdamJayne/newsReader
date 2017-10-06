var $source = $("#source");
var $sortBy = $("#sortBy");
var $articles = $("#article");
var articleTemplate = ""+
	'<li class= "list-group-item headlineBox">'+
	'<img src="{{urlToImage}}" />' +
	'<h3>{{title}}</h3>'+
	'<a href="{{url}}" class="btn btn-default visitPage" target="_empty">Visit</a>'+
	'<button class="btn btn-default addToReading">Read Later</button>'+
	'</li>';
function buildArticles(title){
	$('#newsArticles').append(Mustache.render(articleTemplate, title));
};

function buildReader(){};

function emptyHeadlines(){
	$('#newsArticles').empty();
}
function toggleButton(){
	$('.dark').fadeTo(500, 0.6);
	$('.light').fadeTo(500, 1);
}

$(document).ready(function(){
	var apiKey="1a40e0b58fa246f7908d3945a594f006";
	var apiInfo = {
		polygon: 'https://newsapi.org/v1/articles?source=polygon&sortBy=top&apiKey=',
		arsTechnica: 'https://newsapi.org/v1/articles?source=ars-technica&sortBy=top&apiKey=',
		engadget: 'https://newsapi.org/v1/articles?source=engadget&sortBy=latest&apiKey=',
		ign: 'https://newsapi.org/v1/articles?source=ign&sortBy=latest&apiKey=',
		hacker: 'https://newsapi.org/v1/articles?source=hacker-news&sortBy=top&apiKey=',
		redcode: 'https://newsapi.org/v1/articles?source=recode&sortBy=top&apiKey=',
		crunch: 'https://newsapi.org/v1/articles?source=techcrunch&sortBy=top&apiKey=',
		verge: 'https://newsapi.org/v1/articles?source=the-verge&sortBy=top&apiKey=',
		fortune: 'https://newsapi.org/v1/articles?source=fortune&sortBy=top&apiKey=',
		nextWeb: 'https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey='
	}
	// Polygon news source
	$('#polygonImg').on('click', function(){
		emptyHeadlines();
		$('.dark').addClass('light').removeClass('dark');
		$('#polygonImg').removeClass("light").addClass("dark");
		toggleButton();
		$.ajax({
			type: 'GET',
			url: apiInfo.polygon + apiKey,
			success: function(data){
				$.each(data.articles, function(i, key){
					buildArticles(key);
				});
			}
		});
	});
	//Ars Technica Source
	$('#arsTechnicaImg').on('click', function(){
		emptyHeadlines();
		$('.dark').addClass('light').removeClass('dark');
		$('#arsTechnicaImg').removeClass("light").addClass("dark");
		toggleButton();
		$.ajax({
			type: 'GET',
			url: apiInfo.arsTechnica+apiKey,
			success: function(data){
				$.each(data.articles, function(i, key){
					buildArticles(key);
				});
			}
		});
	});
	//Engadget Source
	$('#engadgetImg').on('click', function(){
		console.log('this is working');
		emptyHeadlines();
		$('.dark').addClass('light').removeClass('dark');
		$('#engadgetImg').removeClass("light").addClass("dark");
		toggleButton();
		$.ajax({
			type: 'GET',
			url: apiInfo.engadget+apiKey			
			}).done(function(data){
				$.each(data.articles, function(i, key){
					buildArticles(key);
				});
			}).fail(function(){
				alert('Engadget is down at the moment')
			})
			
		});
	//IGN source
	$('#ignImg').on('click', function(){
		console.log('this is working');
		emptyHeadlines();
		$('.dark').addClass('light').removeClass('dark');
		$('#ignImg').removeClass("light").addClass("dark");
		toggleButton();
		$.ajax({
			type: 'GET',
			url: apiInfo.ign +apiKey			
			}).done(function(data){
				$.each(data.articles, function(i, key){
					buildArticles(key);
				});
			}).fail(function(){
				alert('IGN is down at the moment')
			})
			
		});
	//Hacker News Source
	$('#hackImg').on('click', function(){
		console.log('this is working');
		emptyHeadlines();
		$('.dark').addClass('light').removeClass('dark');
		$('#hackImg').removeClass("light").addClass("dark");
		toggleButton();

		$.ajax({
			type: 'GET',
			url: apiInfo.hacker+apiKey,
			
			}).done(function(data){
				$.each(data.articles, function(i, key){
					buildArticles(key);
				});
			}).fail(function(){
				alert('Hacker News is down at the moment')
			})
			
		});
	//Redcode Source
	$('#redcodeImg').on('click', function(){
		console.log('this is working');
		emptyHeadlines();
		$('.dark').addClass('light').removeClass('dark');
		$('#redcodeImg').removeClass("light").addClass("dark");
		toggleButton();

		$.ajax({
			type: 'GET',
			url: apiInfo.redcode+apiKey,
			
			}).done(function(data){
				$.each(data.articles, function(i, key){
					buildArticles(key);
				});
			}).fail(function(){
				alert('Redcode is down at the moment')
			})
			
		});
	//Tech Crunch Source
	$('#techcrunchImg').on('click', function(){
		console.log('this is working');
		emptyHeadlines();
		$('.dark').addClass('light').removeClass('dark');
		$('#techcrunchImg').removeClass("light").addClass("dark");
		toggleButton();

		$.ajax({
			type: 'GET',
			url: apiInfo.crunch+apiKey,
			
			}).done(function(data){
				$.each(data.articles, function(i, key){
					buildArticles(key);
				});
			}).fail(function(){
				alert('Tech Crunch is down at the moment')
			})
			
		});
	//The Verge Source
	$('#vergeImg').on('click', function(){
		console.log('this is working');
		emptyHeadlines();
		$('.dark').addClass('light').removeClass('dark');
		$('#vergeImg').removeClass("light").addClass("dark");
		toggleButton();

		$.ajax({
			type: 'GET',
			url: apiInfo.verge+apiKey,
			
			}).done(function(data){
				$.each(data.articles, function(i, key){
					buildArticles(key);
				});
			}).fail(function(){
				alert('The Verge is down at the moment')
			})
			
		});
	//Fortune Source
	$('#fortuneImg').on('click', function(){
		console.log('this is working');
		emptyHeadlines();
		$('.dark').addClass('light').removeClass('dark');
		$('#fortuneImg').removeClass("light").addClass("dark");
		toggleButton();


		$.ajax({
			type: 'GET',
			url: apiInfo.fortune+apiKey,
			
			}).done(function(data){
				$.each(data.articles, function(i, key){
					buildArticles(key);
				});
			}).fail(function(){
				alert('Fortune is down at the moment')
			})
			
		});
	//The Next Web Source
	$('#nextwebImg').on('click', function(){
		console.log('this is working');
		emptyHeadlines();
		$('.dark').addClass('light').removeClass('dark');
		$('#nextwebImg').removeClass("light").addClass("dark");
		toggleButton();


		$.ajax({
			type: 'GET',
			url: apiInfo.nextWeb+apiKey
			}).done(function(data){
				$.each(data.articles, function(i, key){
					buildArticles(key);
				});
			}).fail(function(){
				alert('The Next Web is down at the moment')
			});
		});
});
var app = angular.module("Portfolio", []);
var currentDate = new Date();

app.controller("Content", function($scope) {
	$scope.currentYear = currentDate.getFullYear();
	$scope.siteTitle = "Robbie Antenesse";
	$scope.summaryTitle = "At a Glance";
	$scope.traits = [
		{
			"name"		: "Fast",
			"icon"		: "images/icons/fast.png",
			"details"	: "Finishes presentable prototypes in 7–10 days"
		},
		{
			"name"		: "Flexible",
			"icon"		: "images/icons/flexible.png",
			"details"	: "Learns new APIs and converts code between languages"
		},
		{
			"name"		: "Resourceful",
			"icon"		: "images/icons/resourceful.png",
			"details"	: "Finds the most cost-effective solutions to problems"
		}
	];
	knuthShuffle($scope.traits);

	$scope.skillsTitle = "Skills";
	$scope.skills = [
		{
			"name"			: "AngularJS",
			"icon"			: "images/icons/angular.png",
			"specifics"	: "Website templating and auto-populating",
			"yearBegan"	: 2016,
			"links"			: [
											"https://alamantus.github.io"
										]
		},
		{
			"name"			: "Bootstrap",
			"icon"			: "images/icons/bootstrap.png",
			"specifics"	: "Clean, consistent website styling",
			"yearBegan"	: 2013,
			"links"			: [
											"https://alamantus.github.io",
											"http://insanityjam.com"
										]
		},
		{
			"name"			: "C# .NET",
			"icon"			: "images/icons/csharp.png",
			"specifics"	: "Game Development in Unity 3D Game Engine",
			"yearBegan"	: 2013,
			"links"			: [
											"https://alamantus.itch.io"
										]
		},
		{
			"name"			: "CSS3",
			"icon"			: "images/icons/css.png",
			"specifics"	: "Extensive web templating and styling experience",
			"yearBegan"	: 2010,
			"links"			: [
											"http://www.alamantus.com",
											"http://lexicon.ga"
										]
		},
		{
			"name"			: "HTML5",
			"icon"			: "images/icons/html.png",
			"specifics"	: "Extensive web templating and styling experience",
			"yearBegan"	: 2010,
			"links"			: [
											"http://www.alamantus.com",
											"http://lexicon.ga"
										]
		},
		{
			"name"			: "JavaScript",
			"icon"			: "images/icons/javascript.png",
			"specifics"	: "Clean, efficient EMCA2015 (ES6) programming for fast, interactive websites",
			"yearBegan"	: 2012,
			"links"			: [
											"https://github.com/Alamantus"
										]
		},
		{
			"name"			: "jQuery",
			"icon"			: "images/icons/jquery.png",
			"specifics"	: "Easy understanding of APIs to make JavaScript programming easier",
			"yearBegan"	: 2013,
			"links"			: [
											"http://checkpointer.tk"
										]
		},
		{
			"name"			: "MySQL",
			"icon"			: "images/icons/mysql.png",
			"specifics"	: "Database design, management, and API calls",
			"yearBegan"	: 2010,
			"links"			: [
											"http://lexicon.ga",
											"http://checkpointer.tk",
											"http://graceaware.com"
										]
		},
		{
			"name"			: "NodeJS",
			"icon"			: "images/icons/node.png",
			"specifics"	: "Experience with command line tools and package management with NPM",
			"yearBegan"	: 2016,
			"links"			: [
											"https://github.com/Alamantus"
										]
		},
		{
			"name"			: "PHP",
			"icon"			: "images/icons/php.png",
			"specifics"	: "Vanilla PHP and API construction",
			"yearBegan"	: 2012,
			"links"			: [
											"http://lexicon.ga",
											"http://checkpointer.tk",
											"http://graceaware.com"
										]
		},
		{
			"name"			: "Sass",
			"icon"			: "images/icons/sass.png",
			"specifics"	: "Clean, readable stylesheets for improved styling management",
			"yearBegan"	: 2016,
			"links"			: [
											"https://alamantus.github.io",
											"http://playchompy.com"
										]
		},
		{
			"name"			: "Wordpress",
			"icon"			: "images/icons/wordpress.png",
			"yearBegan"	: 2008,
			"specifics"	: "Site management and theme customization",
			"links"			: [
											"http://graceaware.com"
										]
		}
	];
	knuthShuffle($scope.skills);

	$scope.informationTitle = "About Me";
	$scope.information = [
		{
			"heading"	: "My Story",
			"text"		: "Blah blah blah."
		},
		{
			"heading"	: "My Interests",
			"text"		: "Blah blah blah."
		}
	];
	$scope.projectsTitle = "Portfolio";
	$scope.projects = [
		{
			"name"				: "This AngularJS Website",
			"thumbnail"		: "images/thumbnails/angular.png",
			"startDate"		: "March 20, 2016",
			"endDate"			: "March 21, 2016",
			"snippet"			: "blah blah blah",
			"details"			: "blah blah blah blah blah blah"
		},
		{
			"name"				: "This AngularJS Website",
			"thumbnail"		: "images/thumbnails/angular.png",
			"startDate"		: "March 20, 2016",
			"endDate"			: "March 21, 2016",
			"snippet"			: "blah blah blah",
			"details"			: "blah blah blah blah blah blah"
		}
	];
});

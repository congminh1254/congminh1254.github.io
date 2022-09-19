var app = document.getElementById("app");

var typewriter = new Typewriter(app, {
	loop: false,
	delay: 30,
	autoStart: true,
	cursor: "█",
	strings: ["Hi, I'm <span class='name'>Minh</span> :)"],
});

typewriter
	.typeString("I'm a <span class='role'>Software Engineer (Backend)</span>")
	.pauseFor(1000)
	.typeString(
		"<br/><br/>My favorite programming language is <span class='language'>Python, NodeJS</span>, but I also know <span class='language'>C#</span> and <span class='language'>Java</span> a little bit in Flutter"
	)
	.pauseFor(1000)
	.typeString(
		"<br/><br/>I have experience with <span class='language'>Django, ASP.NET Core, Socket.io, Firebase</span> and building <span class='language'>open source SDK</span>"
	)
	.pauseFor(1000)
	.typeString(
		"<br/><br/>Press <span class='key'>Enter</span> to go to my Github, or <span class='key'>Space</span> to go to my LinkedIn"
	)
	.callFunction(() => {
		document.addEventListener("keypress", (e) => {
			if (e.key === "Enter") {
				window.location.href = "https://github.com/congminh1254";
			} else if (e.key === " ") {
				window.location.href =
					"https://www.linkedin.com/in/minhnc1254/";
			}
		});
	});

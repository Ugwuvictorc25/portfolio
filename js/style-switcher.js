const switchToggler = document.querySelector(".style-switcher-toggler");

switchToggler.addEventListener("click", function () {
	document.querySelector(".style-switcher").classList.toggle("open");
});

window.addEventListener("scroll", function () {
	if (document.querySelector(".style-switcher").classList.contains("open")) {
		alert(12345);
		document.querySelector(".style-switcher").classList.remove("open");
	}
});



const alternateStyle = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
	alternateStyle.forEach((style) => {
		if (style.getAttribute("title") === color) {
			style.removeAttribute("disabled");
		} else {
			style.setAttribute("disabled", true);
		}
	});
}

const dayNight = document.querySelector(".day-night");

dayNight.addEventListener("click", function () {
	dayNight.querySelector("i").classList.toggle("fa-sun");
	dayNight.querySelector("i").classList.toggle("fa-moon");
	document.body.classList.toggle("dark");
});

window.addEventListener("load", function () {
	if (document.body.classList.contains("dark")) {
		dayNight.querySelector("i").classList.add("fa-sun");
	} else {
		dayNight.querySelector("i").classList.add("fa-moon");
	}
});

const word = " web developer";
let i = 0;
const wordLength = word.length;
let acces = true;

function count() {
	if (acces) {
		document.querySelector(".typing").textContent = word.slice(i);
		i++;
		if (i === wordLength - 1) {
			acces = false;
		}
	}

	if (!acces) {
		document.querySelector(".typing").textContent = word.slice(i);
		i--;
		if (i === 0) {
			acces = true;
		}
	}
	setTimeout(count, 300);
}
count();


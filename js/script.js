const nav = document.querySelector(".nav");
const navList = nav.querySelectorAll("li");
const totalNavList = navList.length;
const allSection = document.querySelectorAll(".section");
("nav-toggler");

function removeBackSection() {
	allSection.forEach((item) => item.classList.remove("back-section"));
}

function addBackSection(item, index) {
	if (!index) {
		item.classList.add("back-section");
	} else {
		allSection[index].classList.add("back-section");
	}
}

navList.forEach((item) => {
	const a = item.querySelector("a");

	a.addEventListener("click", function (e) {
		navList.forEach((item) => {
			removeBackSection();
			allSection.forEach((item) => {
				if (item.classList.contains("active")) {
					addBackSection(item);

					// item.classList.add("back-section");
				}
			});
			item.querySelector("a").classList.remove("active");
		});
		this.classList.add("active");

		showSection(this);
		if (window.innerWidth < 1200) {
			asideSectionTogglerBtn();
		}
	});
});

function showSection(element) {
	allSection.forEach((item) => item.classList.remove("active"));
	const target = element.getAttribute("href").slice(1);

	document.querySelector("#" + target).classList.add("active");
}

function updateNav(element) {
	navList.forEach((item) => item.querySelector("a").classList.remove("active"));
	const target = element.getAttribute("href").slice(1);

	navList.forEach((item) => {
		if (target === item.querySelector("a").getAttribute("href").slice(1)) {
			item.querySelector("a").classList.add("active");
		}
	});
}
document.querySelector(".hire-me").addEventListener("click", function () {
	const sectionIndex = this.getAttribute("data-section-index");
	updateNav(this);
	showSection(this);
	addBackSection(allSection[sectionIndex]);
});

const navTogglerBtn = document.querySelector(".nav-toggler");
const aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", () => {
	asideSectionTogglerBtn();
});

function asideSectionTogglerBtn() {
	aside.classList.toggle("open");
	navTogglerBtn.classList.toggle("open");
	allSection.forEach((item) => item.classList.toggle("open"));
}

document.querySelector("body").addEventListener("scroll", function () {
	if (document.querySelector(".style-switcher").classList.contains("open")) {
		document.querySelector(".style-switcher").classList.remove("open");
	}
});

allSection.forEach((item) =>
	item.addEventListener("scroll", () => {
		if (document.querySelector(".style-switcher").classList.contains("open")) {
			document.querySelector(".style-switcher").classList.remove("open");
		}
	})
);

document.querySelector("body").addEventListener("scroll", () => alert("body"));

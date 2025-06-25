const people = [
	{
		AsamiNo: 1,
		name: 'মাইন উদ্দিন @ পারভেজ',
		fatherName: 'মৃত মান্নান',
		address: 'গ্রাম- বংশীনগর, উপজেলা/থানা- মির্জাপুর, জেলা-টাঙ্গাইল, বাংলাদেশ',
		image: './images/main-uddin.jpg',
		mobile: 'red',
		facebook1: 'https://facebook.com/monir',
		facebook2: '',
		viewimage: './images/main-uddin.jpg',
		viewIdCard: '',
	},
	{
		AsamiNo: 2,
		name: 'হায়দারুজ্জামান @ হায়দার',
		fatherName: 'মৃত সিরাজুল ইসলমা (করম)',
		address: 'সাং- উত্তর পেকুয়া, উপজেলা/থানা- মির্জাপুর, জেলা-টাঙ্গাইল, বাংলাদেশ',
		image: './images/hyder/hyder1.jpg',
		mobile: '01718515514',
		facebook1: 'https://www.facebook.com/profile.php?id=100010133940559',
		facebook2: 'https://web.facebook.com/haider.sheikh.331096?_rdc=1&_rdr#',
		viewimage: './hyder.html',
		Nid: 'red',
		viewIdCard: '',
	},
	{
		AsamiNo: 3,
		name: 'আনোয়ার',
		fatherName: 'মৃত সিরাজ',
		address: 'গ্রাম- হাতিবান্ধা (পূর্বপাড়া), উপজেলা/থানা- সখিপুর, জেলা-টাঙ্গাইল, বাংলাদেশ',
		image: './images/anwar.jpg',
		mobile: 'red',
		facebook1: '',
		facebook2: '',
		viewimage: './images/anwar.jpg',
		viewIdCard: '',
	},
	{
		AsamiNo: 4,
		name: 'জিন্নাহ',
		fatherName: 'অজ্ঞাত',
		address: 'গ্রাম- সিঙ্গারডাক, উপজেলা/থানা- বাসাইল, জেলা-টাঙ্গাইল, বাংলাদেশ',
		image: '',
		mobile: 'red',
		facebook1: '',
		facebook2: '',
		viewimage: '',
		viewIdCard: '',
	},
	{
		AsamiNo: 5,
		name: 'সজিব',
		fatherName: 'আনোয়ার',
		address: 'গ্রাম- হাতিবান্ধা (পূর্বপাড়া), উপজেলা/থানা- সখিপুর, জেলা-টাঙ্গাইল, বাংলাদেশ',
		image: './images/5.Sojib.png',
		mobile: '',
		facebook1: '',
		facebook2: '',
		viewimage: './images/5.Sojib.png',
		viewIdCard: '',
	},
	{
		AsamiNo: 6,
		name: 'মাহফুজা আক্তার',
		fatherName: 'মৃত মান্নান',
		address: 'গ্রাম- বংশীনগর, উপজেলা/থানা- মির্জাপুর, জেলা-টাঙ্গাইল, বাংলাদেশ',
		image: './images/mafuja.jpg',
		mobile: '',
		facebook1: '',
		facebook2: '',
		viewimage: './images/mafuja.jpg',
		viewIdCard: '',
	},
	{
		AsamiNo: 7,
		name: 'রুমেলা',
		fatherName: '',
		address: 'গ্রাম- হাতিবান্ধা (পূর্বপাড়া), উপজেলা/থানা- সখিপুর, জেলা-টাঙ্গাইল, বাংলাদেশ',
		image: '',
		mobile: '',
		facebook1: '',
		facebook2: '',
		viewimage: '',
		viewIdCard: '',
	},
	{
		AsamiNo: 8,
		name: 'গোল বাহার',
		fatherName: 'মৃত তমেজ উদ্দিন',
		address: 'গ্রাম- হাতিবান্ধা (পূর্ব পাড়া), উপজেলা/থানা- সখিপুর, জেলা-টাঙ্গাইল, বাংলাদেশ',
		image: '',
		mobile: '',
		facebook1: '',
		facebook2: '',
		viewimage: '',
		viewIdCard: '',
	},
	{
		AsamiNo: 9,
		name: 'রমিছা',
		fatherName: '',
		address: 'গ্রাম- সিঙ্গারডাক, উপজেলা/থানা- বাসাইল, জেলা-টাঙ্গাইল, বাংলাদেশ',
		image: '',
		mobile: '',
		facebook1: '',
		facebook2: '',
		viewimage: '',
		viewIdCard: '',
	},
	{
		AsamiNo: 10,
		name: 'সেলিম',
		fatherName: 'মৃত রবু মিয়া',
		address: 'সোং-তারাবাড়ী, উপজেলা/থানা- বাসাইল, জেলা-টাঙ্গাইল, বাংলাদেশ',
		image: '',
		mobile: '',
		facebook1: '',
		facebook2: '',
		viewimage: '',
		viewIdCard: '',
	},
	{
		AsamiNo: 11,
		name: 'রাশেদ',
		fatherName: 'অজ্ঞাত',
		address: 'গ্রাম- বাথুলী সাদী (বাথুলি), উপজেলা/থানা- বাসাইল, জেলা-টাঙ্গাইল, বাংলাদেশ',
		image: '',
		mobile: 'red',
		facebook1: '',
		facebook2: '',
		viewimage: '',
		viewIdCard: '',
	},
	{
		AsamiNo: 12,
		name: 'আজিম উদ্দিন',
		fatherName: 'মৃত সিরাজ',
		address: 'গ্রাম- পেকুয়া (উত্তর পেকুয়া), উপজেলা/থানা- মির্জাপুর, জেলা-টাঙ্গাইল, বাংলাদেশ',
		image: '',
		mobile: '',
		facebook1: '',
		facebook2: '',
		viewimage: '',
		viewIdCard: '',
	},
	{
		AsamiNo: 13,
		name: 'পারভীন',
		fatherName: '',
		address: 'গ্রাম- বংশীনগর, উপজেলা/থানা- মির্জাপুর, জেলা-টাঙ্গাইল, বাংলাদেশ',
		image: './images/parvin.png',
		mobile: '',
		facebook1: '',
		facebook2: '',
		viewimage: './images/parvin.png',
		viewIdCard: '',
	},
	{
		AsamiNo: 14,
		name: 'শাহজাহান',
		fatherName: 'মৃত রহিম উদ্দিন',
		address: 'গ্রাম- ঘেচুয়া, উপজেলা/থানা- সখিপুর, জেলা-টাঙ্গাইল, বাংলাদেশ',
		image: './images/shajahan.png',
		mobile: '',
		facebook1: '',
		facebook2: '',
		viewimage: './images/shajahan.png',
		viewIdCard: '',
		more: './shajahan.html',
	},
	{
		AsamiNo: 15,
		name: 'ফারুক',
		fatherName: 'হবি সর্দার',
		address: 'গ্রাম- ঘেচুয়া, উপজেলা/থানা- সখিপুর, জেলা-টাঙ্গাইল, বাংলাদেশ',
		image: './images/faruk.png',
		mobile: '',
		facebook1: '',
		facebook2: '',
		viewimage: './images/faruk.png',
		viewIdCard: '',
		more: './faruk.html',
	},
	{
		AsamiNo: 16,
		name: 'জাফর',
		fatherName: 'মৃত রমিজ উদ্দিন',
		address: 'গ্রাম- খেচুয়া, উপজেলা/থানা- সখিপুর, জেলা-টাঙ্গাইল, বাংলাদেশ',
		image: './images/jafor.jpg',
		mobile: '',
		facebook1: '',
		facebook2: '',
		viewimage: './images/jafor.jpg',
		viewIdCard: '',
	},
	{
		AsamiNo: 17,
		name: 'শরিফ',
		fatherName: 'শাজাহান',
		address: 'গ্রাম- ঘেচুয়া, সখিপুর, টাঙ্গাইল',
		image: '',
		mobile: '',
		facebook1: '',
		facebook2: '',
		viewimage: '',
		viewIdCard: '',
	},
	{
		AsamiNo: 18,
		name: 'সজিব',
		fatherName: 'মুত জয়নাল',
		address: 'গ্রাম- ঘেচুয়া, উপজেলা/থানা- সখিপুর, জেলা-টাঙ্গাইল, বাংলাদেশ',
		image: '',
		mobile: '',
		facebook1: '',
		facebook2: '',
		viewimage: '',
		viewIdCard: '',
	},
	{
		AsamiNo: 19,
		name: 'শাহ আলম',
		fatherName: 'সিরাজ ফকির',
		address: 'গ্রাম- ঘেচুয়া, উপজেলা/থানা- সখিপুর, জেলা-टাঙ্গাইল, বাংলাদেশ',
		image: '',
		mobile: '',
		facebook1: '',
		facebook2: '',
		viewimage: '',
		viewIdCard: '',
	},
	{
		AsamiNo: 20,
		name: 'ছবুর উদ্দিন',
		fatherName: 'রহিজ উদ্দিন',
		address: 'গ্রাম- ঘেচুয়া, উপজেলা/থানা- সখিপুর, জেলা-টাঙ্গাইল, বাংলাদেশ',
		image: '',
		mobile: '',
		facebook1: '',
		facebook2: '',
		viewimage: '',
		viewIdCard: '',
	},
	{
		AsamiNo: 21,
		name: 'নাছির',
		fatherName: 'শাহ আলম',
		address: 'গ্রাম- ঘেচুয়া, উপজেলা/থানা- সখিপুর, জেলা-টাঙ্গাইল, বাংলাদেশ',
		image: '',
		mobile: '',
		facebook1: '',
		facebook2: '',
		viewimage: '',
		viewIdCard: '',
	},
	{
		AsamiNo: 22,
		name: 'জাহিদ',
		fatherName: 'শাবলু',
		address: 'গ্রাম- ঘেচুয়া, উপজেলা/থানা- সখিপুর, জেলা-টাঙ্গাইল, বাংলাদেশ',
		image: '',
		mobile: '',
		facebook1: '',
		facebook2: '',
		viewimage: '',
		viewIdCard: '',
	},
	{
		AsamiNo: 23,
		name: 'হাফিজ উদ্দিন',
		fatherName: 'মৃত জয়েন উদ্দিন',
		address: 'গ্রাম- পেকুয়া (উত্তর পেকুয়া), উপজেলা/থানা- মির্জাপুর, জেলা-টাঙ্গাইল, বাংলাদেশ',
		image: '',
		mobile: '',
		facebook1: '',
		facebook2: '',
		viewimage: '',
		viewIdCard: '',
	},
	{
		AsamiNo: 24,
		name: 'অজ্ঞাতনামা ১৫/২০ জন',
		fatherName: '',
		address: '',
		image: '',
		mobile: '',
		facebook1: '',
		facebook2: '',
		viewimage: '',
		viewIdCard: '',
	},
];

const container = document.getElementById('profilesContainer');

people.forEach((person) => {
	const card = document.createElement('div');
	card.className = 'profile-card';

	const image = person.image || 'https://via.placeholder.com/120';
	const name = person.name || 'Unknown';

	// Start building the card HTML
	card.innerHTML = `
    <img src="${image}" alt="${name}" />
    <h2>${name}</h2>
  `;

	// Render all other fields dynamically
	for (const key in person) {
		if (['name', 'image', 'facebook1', 'more', 'viewimage', 'viewIdCard', 'facebook2'].includes(key)) continue;

		const value = person[key];
		const label = key
			.replace(/([A-Z])/g, ' $1') // split camelCase
			.replace(/^./, (str) => str.toUpperCase()); // capitalize first letter

		card.innerHTML += `<p><strong>${label}:</strong> ${value}</p>`;
	}

	// Facebook link separately
	if (person.facebook1) {
		card.innerHTML += `<a href="${person.facebook1}" target="_blank">Facebook Profile</a> <br> `;
	}
	if (person.facebook2) {
		card.innerHTML += `<a href="${person.facebook2}" target="_blank">Facebook Profile 2</a> <br> `;
	}

	// Other profile link should add like previous

	if (person.viewimage) {
		card.innerHTML += `<a href="${person.viewimage}" target="_blank">View Image</a> </br>`;
	}

	if (person.viewIdCard) {
		card.innerHTML += `<a href="${person.viewIdCard}" target="_blank">View Id Card</a>`;
	}
	if (person.more) {
		card.innerHTML += `<a href="${person.more}" target="_blank">view more</a>`;
	}

	container.appendChild(card);
});

function makeRedTextRed(node) {
	// Ignore non-text nodes like scripts, styles, inputs
	if (node.nodeType === Node.TEXT_NODE && node.nodeValue.includes('red')) {
		const span = document.createElement('span');
		const parts = node.nodeValue.split(/(red)/); // keep 'red' in result
		parts.forEach((part) => {
			if (part === 'red') {
				const redSpan = document.createElement('span');
				redSpan.style.color = 'red';
				redSpan.textContent = part;
				span.appendChild(redSpan);
			} else {
				span.appendChild(document.createTextNode(part));
			}
		});
		node.parentNode.replaceChild(span, node);
	} else if (node.nodeType === Node.ELEMENT_NODE && !['SCRIPT', 'STYLE', 'TEXTAREA', 'INPUT'].includes(node.tagName)) {
		Array.from(node.childNodes).forEach(makeRedTextRed);
	}
}

// Run after page is loaded
document.addEventListener('DOMContentLoaded', () => {
	makeRedTextRed(document.body);
});

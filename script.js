const people = [
	{
		name: 'মাইন উদ্দিন @ পারভেজ',
		AsamiNo: 1,
		fatherName: 'মৃত মান্নান',
		address: 'বংশীনগর , মির্জাপুর , টাংগাইল',
		image: './images/main-uddin.jpg',
		mobile: 'red',
		// bloodGroup: 'O+',
		// email: 'monir@example.com',
		facebook1: 'https://facebook.com/monir',
		viewimage: './images/main-uddin.jpg',
	},
	{
		name: 'হায়দারুজ্জামান @ হায়দার',
		AsamiNo: 2,
		image: './images/hyder/hyder1.jpg',
		mobile: '01718515514',
		facebook1: 'https://www.facebook.com/profile.php?id=100010133940559',
		facebook2: 'https://web.facebook.com/haider.sheikh.331096?_rdc=1&_rdr#',
		viewimage: './hyder.html',
	},
	{
		name: '',
		AsamiNo: 0,
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

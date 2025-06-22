const people = [
	{
		name: 'পারভেজ',
		AsamiNo: 1,
		fatherName: 'মাইন উদ্দিন @ পারভেজ',
		address: 'বংশীনগর , মির্জাপুর , টাংগাইল',
		image: './images/Screenshot_2.png',
		mobile: '01973326253',
		bloodGroup: 'O+',
		email: 'monir@example.com',
		// facebook: 'https://facebook.com/monir',
		// more: './parvez.html',
	},
	{
		name: 'হায়দারুজ্জামান @ হায়দার',
		image: '',
		mobile: '01888888888',
		website: 'https://sumi.me',
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
		if (['name', 'image', 'facebook', 'more'].includes(key)) continue;

		const value = person[key];
		const label = key
			.replace(/([A-Z])/g, ' $1') // split camelCase
			.replace(/^./, (str) => str.toUpperCase()); // capitalize first letter

		card.innerHTML += `<p><strong>${label}:</strong> ${value}</p>`;
	}

	// Facebook link separately
	if (person.facebook) {
		card.innerHTML += `<a href="${person.facebook}" target="_blank">Facebook Profile</a> <br> `;
	}

	// Other profile link should add like previous

	if (person.more) {
		card.innerHTML += `<a href="${person.more}" target="_blank">more</a>`;
	}

	container.appendChild(card);
});

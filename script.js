const people = [
	{
		name: 'মাইন উদ্দিন @ পারভেজ',
		AsamiNo: 1,
		fatherName: 'মৃত মান্নান',
		address: 'বংশীনগর , মির্জাপুর , টাংগাইল',
		image: './images/main-uddin.jpg',
		mobile: '',
		// bloodGroup: 'O+',
		// email: 'monir@example.com',
		// facebook: 'https://facebook.com/monir',
		viewimage: './images/main-uddin.jpg',
	},
	{
		name: 'হায়দারুজ্জামান @ হায়দার',
		image: '',
		mobile: '01718515514',
	},
  {
		name: '',
		AsamiNo: 00 ,
		fatherName: '',
		address: '',
		image: '',
		mobile: '',
		// bloodGroup: 'O+',
		// email: 'monir@example.com',
		// facebook: 'https://facebook.com/monir',
		viewimage: './images/main-uddin.jpg',
    viewIdCard : './images/main-uddin.jpg'
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
		if (['name', 'image', 'facebook', 'more', 'viewimage' , 'viewIdCard'].includes(key)) continue;

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

	if (person.viewimage) {
		card.innerHTML += `<a href="${person.viewimage}" target="_blank">View Image</a> </br>`;
	}
	if (person.viewIdCard) {
		card.innerHTML += `<a href="${person.viewIdCard}" target="_blank">View Id Card</a>`;
	}

	container.appendChild(card);
});

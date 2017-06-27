
const post = {
	author: {
		id: 855,
		name: 'Namkai',
	}
	id: 123,
	name: 'Test',
	comments: [
		{
			id: 512,
			text: 'hello',
			author: {
				id: 899,
				name: 'Nestor'
			}
		},
		{
			id: 513,
			text: 'yo',
			author: {
				id: 899,
				name: 'Nestor'
			}
		}
	]
};

const normalizedData = {
	results: 123,
	entities: {
		comments: {
			512: {
				id: 512,
				text: 'hello',
				author: 899,
			},
			513: {
				id: 513,
				text: 'yo',
				author: 899,
			},
			514: {
				id: 514,
				text: 'one more',
				author: 900
			}
		},
		authors: {
			899: {
				id: 899,
				name: 'Nestor'
			},
			898: {
				id: 898,
				name: 'Namkai'
			},
			900: {
				id: 900,
				name: 'Tyler'
			}
		},
		posts: {
			123: {
				id: 123,
				name: 'Test',
				comments: [512,513],
				author: 898
			}
		}
	}
}

const state = {
	entities: {
		comments: {
			612: {
				id: 612,
				text: 'hello this is me',
				author: 898,
			}
		},
		authors: {
			899: {
				id: 899,
				name: 'Nestor'
			},
			898: {
				id: 898,
				name: 'Namkai'
			}
		},
		posts: {
			222: {
				id: 222,
				name: 'Test 222',
				comments: [612],
				author: 899
			}
		}
	}
}

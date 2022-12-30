const { writeFileSync } = require('fs')
const Buffer = require('buffer').Buffer
const getStuff = async () => {
	let headersList = {
		'Content-Type': 'application/json',
		Authorization: 'b185eabe-bdde-49ed-9c1f-ab1d48bb49a3',
	}

	let bodyContent = JSON.stringify({
		code: "function () {\n  console.log('hello world');\n}",
		fileName: 'test.js',
		language: 'JavaScript',
		theme: 'github-dark-dimmed',
		background: 'linear-gradient(354deg,  #FF75B5, #FFB86C)',
		paddingLeft: 30,
		paddingRight: 30,
		paddingTop: 40,
		paddingBottom: 100,
		profileInfo: {
			showFullname: true,
			showUsername: true,
			showAvatar: true,
			position: 'bottom-center',
		},
		aspectRatio: {
			width: 16,
			height: 9,
		},
	})

	let response = await fetch('https://api.snappify.com/snap/simple', {
		method: 'POST',
		body: bodyContent,
		headers: headersList,
	})

	let blob = await response.blob()
	const buffer = Buffer.from(await blob.arrayBuffer())
	writeFileSync('./mypic.png', buffer)
}

getStuff()

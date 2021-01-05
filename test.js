const r = require('./index.js');

r.top_posts("memes", 10).then(results => {
	const post = results[Math.floor(Math.random() * results.length)].data.permalink;
	console.log(post);
	r.get_post(post).then(post_info => {
		console.log(post_info);
	});
});

r.search('memes', 10).then(results => {
	console.log(results);
});
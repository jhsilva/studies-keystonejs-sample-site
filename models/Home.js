var keystone = require('keystone');

/**
 * Home Model
 * =============
 */

var Home = new keystone.List('Home', {
	autokey: { from: 'name', path: 'key', unique: true },
});

Home.add({
	name: { type: String, required: true }
});

Home.register();

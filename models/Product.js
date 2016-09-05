var keystone = require('keystone');

/**
 * Product Model
 * =============
 */

var Product = new keystone.List('Product', {
	autokey: { from: 'name', path: 'key', unique: true },
});

Product.add({
	name: { type: String, required: true }
});

Product.register();

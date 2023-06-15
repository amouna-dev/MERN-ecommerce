const Product = require('../models/product');

exports.getNewArrivals = async (req, res) => {
	const sortBy = req.query.sortBy ? req.query.sortBy : 'desc';
	const limit = req.query.limit ? parseInt(req.query.limit) : parseInt(3);

	try {
		const newArrivals = await Product.find({})
			.sort({ createdAt: sortBy })
			.limit(limit);

		res.status(200).send({ newArrivals });
	} catch (err) {
		console.log(err);
		res.status(500).send({msg: 'Please try again later'});
	}
};

exports.searchByQueryType = async (req, res) => {
	const { type, query } = req.body;

	try {
		let products= [];

		switch (type) {
			case 'text':
				products = await Product.find({ $text: { $search: query } });
				break;
			case 'category':
				products = await Product.find({ category: query });
				break;
		}

		if (products.length == 0) {
			products = await Product.find({});
		}

		res.status(200).send({ response: products });
	} catch (err) {
		console.log(err);
		res.status(500).send({ msg: 'Please try again later' });
	}
};
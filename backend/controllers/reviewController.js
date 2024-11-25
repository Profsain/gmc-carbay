const Review = require('../models/Review');
exports.addReview = async (req, res) => {
    try {
    const review = await Review.create({ ...req.body, user:
    req.user.userId });
    res.status(201).json(review);
    } catch (error) {
    res.status(400).json({ error: error.message });
    }
};
exports.getReviews = async (req, res) => {
    try {
    const reviews = await Review.find({ car: req.params.carId
    }).populate('user', 'name');
    res.json(reviews);
    } catch (error) {
    res.status(400).json({ error: error.message });
    }
};

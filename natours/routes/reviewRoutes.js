const express = require('express');
const reviewController = require('../controllers/reviewController');
const authController = require('../controllers/authController');

// mergeParams merges parameters from other routes that also use review router into review router.
// This gives review router access to the tourId paremeter from the tour router.
const router = express.Router({ mergeParams: true });

router
  .route('/')
  .get(reviewController.getAllReviews)
  .post(
    authController.protect,
    authController.restrictTo('user'),
    reviewController.createReview
  );

router.route('/:id').delete(reviewController.deleteReview);

module.exports = router;

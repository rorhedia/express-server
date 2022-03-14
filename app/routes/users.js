const express = require( 'express' );
const router = express.Router();
const { getItems, getItem, createItem, updateItem, deleteItem } = require( '../controllers/users' );
const checkOrigin = require( '../middleware/origin' );

router.get( '/', checkOrigin, getItems );
router.get( '/:id', checkOrigin, getItem );
router.post( '/', checkOrigin, createItem );
router.patch( '/:id', checkOrigin, updateItem );
router.delete( '/:id', checkOrigin, deleteItem );

module.exports = router;
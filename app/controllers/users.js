const { httpErrors } = require( '../helpers/handleError' );

const getItems = ( req, res ) => {
    try {
        res.status( 200 ).json( { data: 'OK' } )
    } catch ( e ) {
        httpErrors( res, e );
    }
}

const getItem = ( req, res ) => {
    try {
        res.status( 200 ).json( { data: 'OK' } )
    } catch ( e ) {
        httpErrors( res, e );
    }
}

const createItem = ( req, res ) => {
    try {
        res.status( 200 ).json( { data: 'OK' } )
    } catch ( e ) {
        httpErrors( res, e );
    }
}

const updateItem = ( req, res ) => {
    try {
        res.status( 200 ).json( { data: 'OK' } )
    } catch ( e ) {
        httpErrors( res, e );
    }
}

const deleteItem = ( req, res ) => {
    try {
        res.status( 200 ).json( { data: 'OK' } )
    } catch ( e ) {
        httpErrors( res, e );
    }
}

module.exports = {
    getItems,
    getItem,
    createItem,
    updateItem,
    deleteItem
}
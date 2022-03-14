const { httpErrors } = require( '../helpers/handleError' );
const userModel = require( './../models/users' );

const getItems = async ( req, res ) => {
    try {
        const result = await userModel.find();
        res.status( 200 ).json( { data: result } )
    } catch ( e ) {
        httpErrors( res, e );
    }
}

const getItem = async ( req, res ) => {
    try {
        const { id } = req.params;
        const result = await userModel.findById( id )
        res.status( 200 ).json( { data: result } )
    } catch ( e ) {
        httpErrors( res, e );
    }
}

const createItem = async ( req, res ) => {
    try {
        const { name, age, email } = req.body;
        const result = await userModel.create( {
            name, age, email
        } );

        res.status( 200 ).json( { data: result } )
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
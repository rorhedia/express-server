const checkOrigin = ( req, res, next ) => {
    const { authorization } = req.headers;
    if ( authorization === 'token' ) {
        next();
    } else {
        res.status( 401 ).json( { data: 'Error no token' } );
    }
}

module.exports = checkOrigin;
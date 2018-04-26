module.exports = {
    database: 'mongodb://root:michael13@ds115758.mlab.com:15758/elearn',
    port: 8080,
    secretKey: 'haile123',

    facebook: {
        clientID: '1829896673980350',
        clientSecret: 'ae8831008c4546b6c3e28be489f7ae10',
        profileFields: ['emails', 'displayName'],
        callbackURL: 'https://localhost:8080/auth/facebook/callback',
        passReqToCallback: true,
    }
}


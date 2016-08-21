var chai = require('chai'),
    should = chai.should,
    expect = chai.expect,
    ucbclient = require('../index').client;

var config = {
    schemaurl: 'https://build-api.cloud.unity3d.com/api/v1/api.json'
}

var testClient;
before(function(done) {
    ucbclient(config.schemaurl, function(client) {
        testClient = client;
        done();
    });
});

describe('#client', function() {

    it('is an object', function() {
        expect(testClient).to.be.a('object');
    });

    it('has builds', function() {
        expect(testClient).to.have.property('builds');
    });

    it('has buildtargets', function() {
        expect(testClient).to.have.property('buildtargets');
    });

    it('has orgs', function() {
        expect(testClient).to.have.property('orgs');
    });

    it('has users', function() {
        expect(testClient).to.have.property('users');
    });

    it('has credentials', function() {
        expect(testClient).to.have.property('credentials');
    });

    it('has shares', function() {
        expect(testClient).to.have.property('shares');
    });

    it('fails to get self user without token', function(done) {
        testClient.users.getUserSelf()
            .then(function(user) {

            })
            .catch(function(error) {
                expect(error.status).to.equal(401);
                done();
            });
    });
});
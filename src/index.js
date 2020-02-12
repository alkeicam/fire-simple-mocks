// Sinon is a library used for mocking or verifying function calls in JavaScript.
const sinon = require('sinon');
const admin = require('firebase-admin');
const functions = require('firebase-functions');

class FunctionsMock {
    constructor() {
        this.stub = sinon.stub(functions, 'config');      
        
        this.instance = Math.round(Math.random() * 2000);
    }

    stubConfig(configValue) {        
        this.stub.returns(configValue);        
        return this.stub;
    }
}

class AuthMock {
    constructor() {
        this.authStub = sinon.stub(admin, 'auth');
        this.getUserStub = undefined;
        this.setCustomUserClaimsStub = undefined;
        this.generatePasswordResetLinkStub = undefined;
        this.generateEmailVerificationLinkStub = undefined;
        this.instance = Math.round(Math.random() * 2000);
    }

    getUser() { };
    getUserByEmail() { };
    createUser() { };
    setCustomUserClaims() { };
    generatePasswordResetLink() {};
    generateEmailVerificationLink() {};

    stubGenerateEmailVerificationLink(resultPromise) {
        var that = this;
        if (!this.generateEmailVerificationLinkStub) {
            this.generateEmailVerificationLinkStub = sinon.stub(this, 'generateEmailVerificationLink');
        }
        this.generateEmailVerificationLinkStub.returns(resultPromise);


        this.authStub.get(function getterFn() {
            return () => {
                return that;
            };
        })

        return this.generateEmailVerificationLinkStub;
    }

    stubGenerateEmailVerificationLinkWithMatcher(resultPromise, matcher) {
        var that = this;
        if (!this.generateEmailVerificationLinkStub) {
            this.generateEmailVerificationLinkStub = sinon.stub(this, 'generateEmailVerificationLink');
        }
        this.generateEmailVerificationLinkStub.withArgs(matcher).returns(resultPromise);


        this.authStub.get(function getterFn() {
            return () => {
                return that;
            };
        })
        return this.generateEmailVerificationLinkStub
    }

    stubGeneratePasswordResetLink(resultPromise) {
        var that = this;
        if (!this.generatePasswordResetLinkStub) {
            this.generatePasswordResetLinkStub = sinon.stub(this, 'generatePasswordResetLink');
        }
        this.generatePasswordResetLinkStub.returns(resultPromise);


        this.authStub.get(function getterFn() {
            return () => {
                return that;
            };
        })

        return this.generatePasswordResetLinkStub;
    }

    stubGeneratePasswordResetLinkWithMatcher(resultPromise, matcher) {
        var that = this;
        if (!this.generatePasswordResetLinkStub) {
            this.generatePasswordResetLinkStub = sinon.stub(this, 'generatePasswordResetLink');
        }
        this.generatePasswordResetLinkStub.withArgs(matcher).returns(resultPromise);


        this.authStub.get(function getterFn() {
            return () => {
                return that;
            };
        })
        return this.generatePasswordResetLinkStub
    }

    stubSetCustomUserClaims(resultPromise) {
        var that = this;
        if (!this.setCustomUserClaimsStub) {
            this.setCustomUserClaimsStub = sinon.stub(this, 'setCustomUserClaims');
        }
        this.setCustomUserClaimsStub.returns(resultPromise);


        this.authStub.get(function getterFn() {
            return () => {
                return that;
            };
        })

        return this.setCustomUserClaimsStub;
    }

    stubSetCustomUserClaimsWithMatcher(resultPromise, matcher) {
        var that = this;
        if (!this.setCustomUserClaimsStub) {
            this.setCustomUserClaimsStub = sinon.stub(this, 'setCustomUserClaims');
        }
        this.setCustomUserClaimsStub.withArgs(matcher).returns(resultPromise);


        this.authStub.get(function getterFn() {
            return () => {
                return that;
            };
        })
        return this.setCustomUserClaimsStub
    }



    stubGetUser(userRecordPromise) {
        var that = this;
        var stub = sinon.stub(this, 'getUser').returns(userRecordPromise);



        this.authStub.get(function getterFn() {
            return () => {
                return that;
            };
        })

        return stub;

    };

    stubGetUserWithMatcher(userRecordPromise, matcher) {
        var that = this;
        if (!this.getUserStub) {
            this.getUserStub = sinon.stub(this, 'getUser');
        }
        this.getUserStub.withArgs(matcher).returns(userRecordPromise);


        this.authStub.get(function getterFn() {
            return () => {
                return that;
            };
        })
        return this.getUserStub;
    }
    stubGetUserByEmail(userRecordPromise) {
        var that = this;
        var stub = sinon.stub(this, 'getUserByEmail').returns(userRecordPromise);



        this.authStub.get(function getterFn() {
            return () => {
                return that;
            };
        })

        return stub;

    };

    stubGetUserByEmailWithMatcher(userRecordPromise, matcher) {
        var that = this;
        if (!this.getUserByEmailStub) {
            this.getUserByEmailStub = sinon.stub(this, 'getUserByEmail');
        }
        this.getUserByEmailStub.withArgs(matcher).returns(userRecordPromise);


        this.authStub.get(function getterFn() {
            return () => {
                return that;
            };
        })
        return this.getUserByEmailStub;
    }

    stubCreateUser(userRecordPromise, matcher) {
        var that = this;
        if (!this.createUserStub) {
            this.createUserStub = sinon.stub(this, 'createUser');
        }
        this.createUserStub.returns(userRecordPromise);


        this.authStub.get(function getterFn() {
            return () => {
                return that;
            };
        })
        return this.createUserStub;

    }

    stubCreateUserWithMatcher(userRecordPromise, matcher) {
        var that = this;
        if (!this.createUserStub) {
            this.createUserStub = sinon.stub(this, 'createUser');
        }
        this.createUserStub.withArgs(matcher).returns(userRecordPromise);


        this.authStub.get(function getterFn() {
            return () => {
                return that;
            };
        })
        return this.createUserStub;
    }

    stubsRestore() {
        if (this.getUser.restore instanceof Function) {
            this.getUser.restore();
            this.getUserStub = undefined;
            this.generatePasswordResetLinkStub = undefined;
            this.generateEmailVerificationLinkStub = undefined;
        }
    }
}

class DatabaseMock {
    constructor() {
        this.dbStub = sinon.stub(admin, 'database');
        this.refStub = undefined;
        this.instance = Math.round(Math.random() * 2000);
    }

    ref() { };

    stubRef(referenceMock) {
        var that = this;
        sinon.stub(this, 'ref').returns(referenceMock);



        this.dbStub.get(function getterFn() {
            return () => {
                return that;
            };
        })

    };

    stubRefWithMatcher(referenceMock, matcher) {
        var that = this;
        if (!this.refStub) {
            this.refStub = sinon.stub(this, 'ref');
        }
        this.refStub.withArgs(matcher).returns(referenceMock);


        this.dbStub.get(function getterFn() {
            return () => {
                return that;
            };
        })
    }

    stubsRestore() {
        if (this.ref.restore instanceof Function) {
            this.ref.restore();
            this.refStub = undefined;
        }
    }
}

class ReferenceMock {
    constructor() {
        this.instance = Math.round(Math.random() * 2000);
    }
    push() { };
    set() { };
    update() { };
    once() { };
    remove() { };
    orderByChild() { };
    equalTo() { };
    limitToFirst() { };
    limitToLast() { };
    startAt() { };
    endAt() { };

    stubEndAt(){
        return sinon.stub(this, 'endAt').returns(this);
    }
    stubStartAt() {
        
        return sinon.stub(this, 'startAt').returns(this);
    }
    stubLimitToLast() {
        return sinon.stub(this, 'limitToLast').returns(this);
        
    }

    stubLimitToFirst() {
        return sinon.stub(this, 'limitToFirst').returns(this);
    }
    stubOrderByChild() {
        return sinon.stub(this, 'orderByChild').returns(this);        
    }

    stubEqualTo() {
        return sinon.stub(this, 'equalTo').returns(this);
    }

    stubKey(key) {
        this.key = key;
        return this.key;
    }

    stubRef(referenceMock) {
        this.ref = referenceMock;
        return this.ref;
    }

    stubOnce(promise) {
        return sinon.stub(this, 'once').returns(promise);
    }

    stubPush(referenceMock) {
        return sinon.stub(this, 'push').returns(referenceMock);
    }

    stubRemove() {
        return sinon.stub(this, 'remove').resolves();
    }

    stubSet(promise) {
        return sinon.stub(this, 'set').returns(promise);
    }

    stubUpdate(promise) {
        return sinon.stub(this, 'update').returns(promise);
    }

    spyOnSet() {
        var s = sinon.spy(this, 'set');
        return s;
    }

    stubsRestore() {
        if (this.push.restore instanceof Function) this.push.restore();
        if (this.set.restore instanceof Function) this.set.restore();
        if (this.update.restore instanceof Function) this.update.restore();
        if (this.once.restore instanceof Function) this.once.restore();
    }
};

class SnapshotMock {
    constructor() {
        this.instance = Math.round(Math.random() * 2000);
        this.forEachArrayElements = [];
    }

    val() { };
    forEach() { };
    exists() { }

    stubExists(returnBoolean) {
        return sinon.stub(this, 'exists').returns(returnBoolean);

    }

    stubVal(returnObject) {
        return sinon.stub(this, 'val').returns(returnObject);
    }

    stubRef(referenceMock) {
        this.ref = referenceMock;
        return this.ref;
    }

    stubKey(key) {
        this.key = key;
        return this.key;
    }

    _forEachStubbedFunction(callback) {
        this.forEachArrayElements.forEach(element => {
            callback.call(this, element)
        })
    }

    stubForEach(snapshotsArray) {
        var that = this;
        snapshotsArray.forEach(element => {
            that.forEachArrayElements.push(element);
        })
        this.forEach = this._forEachStubbedFunction
    }

    stubsRestore() {
        if (this.val.restore instanceof Function) this.val.restore();
        this.forEachArrayElements.length = 0;
    }


}

module.exports = {
    ReferenceMock,
    DatabaseMock,
    SnapshotMock,
    AuthMock
}
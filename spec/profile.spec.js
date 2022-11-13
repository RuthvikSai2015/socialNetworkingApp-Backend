// /*
//  * Test suite for profile
//  */
require('es6-promise').polyfill();
require('isomorphic-fetch');
// const {Profiles: Profile} = require("./dbConnect");

const url = path => `http://localhost:3000${path}`;
// new Profile({
//     username: username,
//     headline: username + 's initial headline',
//     followers: [],
//     email: req.body.email,
//     zipcode: req.body.zipcode,
//     dob: req.body.dob,
//     avatar: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4e/DWLeebron.jpg/220px-DWLeebron.jpg'
// }).save()
describe('Validate Profile functionality', () => {
    let regUser = {username: 'mrj3', password: '1234'};
    // beforeEach((done) => {
    //     fetch(url('/login'), {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(regUser)
    //     }).then(temp => temp.json()).then((res) =>{cookie = 'sid=' + res['sid']; done();})
    // })
    it('should get correct headline', (done) => {

        fetch(url('/headline/test'),{
            method: 'GET',
            headers: {'Content-Type': 'application/json' }
        }).then(res => res.json()).then(res => {
            expect(res.username).toEqual('test');
            expect(res.headline).toEqual('tests initial headline');
            done();
        })
    });

    it('should put correct headline to given user', (done) => {
      let newHeadline = "this is new headline";
        fetch(url('/headline'),{
            method: 'PUT',
            headers: {'Content-Type': 'application/json' },
            body: JSON.stringify({"headline": newHeadline})
        }).then(res => res.json()).then(res => {
            // expect(res.status).to.equal(200);
            expect(res.headline).toEqual(newHeadline);
            done();
        })
    })
})
/*
 * Test suite for articles
 */
require('es6-promise').polyfill();
require('isomorphic-fetch');
const url = path => `http://localhost:3000${path}`;
describe('Validate Article functionality', () => {

    it('should get current user articles', (done) => {
        fetch(url('/articles'), {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        })
            .then(res => {
                expect(res.status).toEqual(200)
                return res.json()
            })
            .then(res => {
                expect(res.length).toEqual(0)
                done();
            })

    })
    it('should add an articles to the current user articles', (done) => {
        let temp = {text: "This is a test article"}
        fetch(url('/article'), {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({"text": "This is a test article"})
        }).then(res => {
            expect(res.status).toEqual(200)
            done();
        })

    })

    it('should put an articles to the current user articles', (done) => {
        let temp = {text: "This is a test article"}
        fetch(url('/articles/1'), {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({"text": "This is a test article"})
        }).then(res => {
            expect(res.status).toEqual(200)
            done();
        })

    })

})





        // fetch(url('/articles'), {
        //     method: 'GET',
        // })
        //     .then(res =>
        //         {expect(res.articles.length).toEqual(200)
        //         })
        //     .then(res => {
        //     num = res.articles.length;
        //     done();
        // })
    // })
    // it ('should add a new article for the logged in user', (done) => {
    //     // fetch(url('/'))
    // })
    // it('should give me current user articles', (done) => {
    //     fetch(url('/articles'), {
    //         method: 'GET',
    //         headers: { 'Content-Type': 'application/json' },
    //     }).then(res => res.json()).then(res => {
    //        expect(res.status).toEqual(200);
    //     }).then(res => {
    //         expect(num).toEqual(res.articles.length - 1);
    //         done();
    //     })
    // });
//
//     it('should add new article with successive article id, return list of articles with new article', (done) => {
//         // add a new article
//         // verify you get the articles back with new article
//         // verify the id, author, content of the new article
//         let post = {author: 'Tom', body: 'A new post'};
//         fetch(url('/article'), {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(post)
//         }).then(res => res.json()).then(res => {
//             if (res instanceof Array) {
//                //TODO test new article expected id, author, post
//             }
//             done(new Error('Not Implemented'));
//         })
//     });
//
//     it('should return an article with a specified id', (done) => {
//
//         //call GET /articles/id with the chosen id
//         // validate that the correct article is returned
//         //TODO test article expected id, author, post
//         fetch(url('/articles/' + 3))
//         done(new Error('Not Implemented'));
//     })
// });

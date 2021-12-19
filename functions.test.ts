const {shuffleArray} = require('./utils')

describe('shuffleArray', () => {

    test('check that shuffleArray returns an array', () => {
        
        expect(shuffleArray).toEqual('[]');


        });

    test('check that all the same items are in the array', () => {
        expect(shuffleArray).toEqual(5);
    });  

});
const Validate = require('../lib/validate')
const index = require('../index')

describe('Validate', () => {
    describe('character', () => {
        it('should return true if characters are less than or equal to 3 characters', () => {
            const logoName = true;
            const validate = new Validate();
            expect(validate.character('abc')).toEqual(logoName);
        });
        it('should return false if characters are more than 3 characters', () => {
            const logoName = false;
            const validate = new Validate();
            expect(validate.character('abcd')).toEqual(logoName);
        });
    });
})
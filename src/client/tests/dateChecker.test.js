const dateChecker = require('../js/dateChecker');

//Checking Valid Date
test('Check if date is in number format', () => {
    expect(dateChecker('12/06/2000')).toBeTruthy();
});

test('Date must be less than or equal to 31', () => {
    expect(dateChecker('31/06/2000')).toBeTruthy();
});

test('Date must be less than or equal to 31', () => {
    expect(dateChecker('32/06/2000')).toBeFalsy();
});

//Check for Valid Month

test('Month must be less than or equal to 12', () => {
    expect(dateChecker('31/12/2000')).toBeTruthy();
});

test('Month must be less than or equal to 12', () => {
    expect(dateChecker('31/13/2000')).toBeFalsy();
});
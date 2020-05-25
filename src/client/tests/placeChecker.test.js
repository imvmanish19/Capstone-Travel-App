const placeCheck = require('../js/placeChecker');

//Check if place is a text
test('If Place Value is Text Or Not', () => {
    expect(placeCheck('America')).toBeTruthy();
});

//Testing With Numbers

test('If Place Value is Text Or Not', () => {
    expect(placeCheck('America1')).toBeFalsy();
});

test('If Place Value is Text Or Not', () => {
    expect(placeCheck('1America')).toBeFalsy();
});

test('If Place Value is Text Or Not', () => {
    expect(placeCheck('Ame1rica')).toBeFalsy();
});

test('If Place Value is Text Or Not', () => {
    expect(placeCheck('123')).toBeFalsy();
});
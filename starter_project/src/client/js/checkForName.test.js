import { checkForName } from './checkForName';

global.alert = jest.fn();

test('checkForName calls alert for valid captain name', () => {
    checkForName('Picard');
    expect(alert).toHaveBeenCalledWith('Welcome, Captain Picard!');
});

test('checkForName calls alert for invalid name', () => {
    checkForName('Smith');
    expect(alert).toHaveBeenCalledWith('Please enter a valid captain name (e.g., Picard, Janeway).');
});

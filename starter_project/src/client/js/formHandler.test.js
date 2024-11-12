import { handleSubmit, sendDataToServer, displayResults } from './formHandler';
import { validateURL } from './urlValidator';

jest.mock('./urlValidator');
global.alert = jest.fn();

test('handleSubmit calls alert for invalid URL', () => {
    document.body.innerHTML = '<input id="name" value="invalid url">';
    validateURL.mockReturnValue(false);
    handleSubmit({ preventDefault: jest.fn() });
    expect(alert).toHaveBeenCalledWith("Please enter a valid URL.");
});

test('sendDataToServer fetches data and calls displayResults on success', async () => {
    const mockResponse = { sentiment: 'positive' };
    global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve(mockResponse),
    });
    const displayResultsMock = jest.spyOn(document, 'getElementById').mockReturnValue({
        innerText: ''
    });
    await sendDataToServer('https://example.com');
    expect(displayResultsMock).toHaveBeenCalledWith(mockResponse);
});

test('displayResults updates result div correctly', () => {
    document.body.innerHTML = '<div id="result"></div>';
    displayResults({ sentiment: 'positive' });
    expect(document.getElementById('result').innerText).toBe('Sentiment: positive');
});

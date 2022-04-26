const {Builder, Capabilities, By} = require('selenium-webdriver');
const { addMovie, deleteMovie, crossMovie, uncrossMovie } = require('../functions/movie')

require('chromedriver');
const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeAll(async () => driver.get('http://127.0.0.1:5500/movieList/index.html'));

afterAll(async () => driver.quit());

describe('Movies', () => {
    test('add Movie', async () => {
        await addMovie(driver);
        await driver.sleep(500);
    });
    
    test('cross out Movie', async () => {
        await crossMovie(driver)
        await driver.sleep(500);
    });
    
    test('uncross Movie', async () => {
        await uncrossMovie(driver);
        await driver.sleep(500);
    });
    
    test('delete Movie', async () => {
        await deleteMovie(driver);
        await driver.sleep(500);
    });
});


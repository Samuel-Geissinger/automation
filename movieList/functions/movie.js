const { By } = require('selenium-webdriver');


const addMovie = async driver => {
    await driver.findElement(By.xpath('//input[1]')).sendKeys('Movie Name');
    await driver.findElement(By.xpath('//button[1]')).click();

    const movie = await driver.findElement(By.xpath('//li')).isDisplayed();

    expect(movie).toBeTruthy();
}


const deleteMovie = async (driver) => {
    await driver.findElement(By.xpath('//li/button')).click();
    const t = await driver.findElement(By.xpath('//aside')).getText();
    const str = t.split(' ');
    expect(str[str.length - 1]).toBe('deleted!');
}

const crossMovie = async (driver) => {
    await driver.findElement(By.xpath('//li/span')).click();
    const t = await driver.findElement(By.xpath('//aside')).getText();
    const str = t.split(' ');
    expect(str[str.length - 1]).toBe('watched!');
}

const uncrossMovie = async (driver) => {
    await driver.findElement(By.xpath('//li/span')).click();
    const t = await driver.findElement(By.xpath('//aside')).getText();
    const str = t.split(' ');
    expect(str[str.length - 1]).toBe('back!');
}

module.exports =  {
    addMovie,
    deleteMovie,
    crossMovie,
    uncrossMovie
}
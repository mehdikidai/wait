const wait = async (delay = 1000) =>
    new Promise((resolve) => setTimeout(resolve, delay));

module.exports = wait;


const wait = async (delay = 1000) => {

    return new Promise((resolve) => setTimeout(resolve, delay));

};

export default wait;

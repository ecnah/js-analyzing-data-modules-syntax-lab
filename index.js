
require('datejs');

function combineUsers(...args) {
    // Initialize the return object
    const combinedObject = {
        users: []
    };

    // Loop through args and merge the arrays
    for (const arr of args) {
        combinedObject.users = [...combinedObject.users, ...arr];
    }

    // Get today's date in M/d/yyyy format
    combinedObject.merge_date = Date.today().toString('M/d/yyyy');

    // Return the combined object
    return combinedObject;
}

// Example usage
console.log(combineUsers(
    ['Alice', 'Bob'],
    ['Charlie', 'David'],
    ['Eve']
));

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};
if (Array.isArray(range)) {
    console.log("The variable 'range' is an array.");
    range.forEach(function(item) {
        console.log(item);
    });
} else {
    console.log("The variable 'range' is not an array.");
    // Handle the case where 'range' is not an array
}

// Example of usage
function isFacetMapping(facet) {
    // Implementation of isFacetMapping function
    return facet && facet.type === 'mapping'; // Example condition
}

let facet = { type: 'mapping' };
let spec = { columns: ['Name', 'Age', 'Gender'] };

if (isFacetMapping(facet) && spec.columns) {
    console.log('Both conditions are true');
    // Add your code here for handling the conditions
} else {
    console.log('Either condition is false');
    // Add alternative code here if needed
}

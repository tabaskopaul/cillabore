// Example implementation of isFieldDef function
function isFieldDef(obj) {
  // Check if obj is a non-null object and contains specific properties
  return obj && typeof obj === 'object' && 'field' in obj && 'type' in obj;
}

// Example implementation of isBinParams function
function isBinParams(bin) {
  // Check if bin is a non-null object and contains specific binning parameters
  return bin && typeof bin === 'object' && ('maxbins' in bin || 'step' in bin);
}

// Example usage
let enc = {
  field: 'age',
  type: 'quantitative',
  bin: {
    maxbins: 10
  }
};

if (isFieldDef(enc) && isBinParams(enc.bin)) {
  console.log('Both conditions are satisfied.');
} else {
  console.log('One or both conditions are not satisfied.');
}

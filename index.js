// arrayUtils.js

const arrayUtils = {

    // Remove duplicate values from an array
    removeDuplicates: (arr) => {
      return [...new Set(arr)];
    },
  
    // Get the maximum number in the array
    maxNumber: (arr) => {
      return Math.max(...arr);
    },
  
    // Get the minimum number in the array
    minNumber: (arr) => {
      return Math.min(...arr);
    }
  
  };
  
  module.exports = arrayUtils;
  
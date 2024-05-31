var singleNumber = function(nums) {
  var xor = nums
    .reduce((acc, cur) => acc ^ cur, 0);
  var uniqBitPos = xor.toString(2).length - 1;
  var xor2 = nums
    .filter(num => (num >> uniqBitPos & 1) == 0)
    .reduce((acc, cur) => acc ^ cur, 0);
  return [xor2, xor2 ^ xor];
};
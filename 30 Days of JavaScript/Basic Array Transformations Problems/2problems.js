const haystack = 'leetcode';
const needle = 'leeto';

var strStr = function (haystack, needle) {
  if (needle === '') return 0;

  for (let i = 0; i < haystack.length - needle.length; i++) {
    if (haystack.indexOf(needle, i) === i) {
      return i;
    }
  }
  return -1;
};

const result = strStr(haystack, needle);
console.log(result);

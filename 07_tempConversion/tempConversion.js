const ftoc = function(fT) {
  let cT = (fT - 32) * 5.0 / 9;
  cT = Math.round(cT * 10) / 10;
  return cT;
};

const ctof = function(cT) {
  let fT = (cT * 9.0/5) + 32;
  fT = Math.round(fT * 10) / 10;
  return fT;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

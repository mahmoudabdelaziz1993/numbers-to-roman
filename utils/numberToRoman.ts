export const ConverToRoman = (num: number) => {
  let res = "";
  while (num) {
    if (num >= 1000) {
      res += "M";
      num -= 1000;
    }
    if (num >= 500) {
      res += "D";
      num -= 500;
    }
    if (num >= 100) {
      res += "C";
      num -= 100;
    }
    if (num >= 50) {
      res += "L";
      num -= 50;
    }
    if (num >= 10) {
      res += "X";
      num -= 10;
    }
    if (num >= 5) {
      res += "V";
      num -= 5;
    }
    if (num < 5 && num !== 0) {
      res += "I";
      num -= 1;
    }
  }

  return res;
};

export const ConverToDesimal = (str: string) => {
  function charToInt(char: string): number {
    switch (char) {
      case "I":
        return 1;

      case "V":
        return 5;

      case "X":
        return 10;

      case "L":
        return 50;

      case "C":
        return 100;

      case "D":
        return 500;

      case "M":
        return 1000;

      default:
        break;
    }
  }
  str = str.toUpperCase();
  let res = charToInt(str.charAt(0));
  let curr, befor;
  for (let i = 1; i < str.length; i++) {
    curr = charToInt(str.charAt(i));
    befor = charToInt(str.charAt(i - 1));
    if (curr <= befor) {
      res += curr;
    } else {
      res = res - 2 * befor + curr;
    }
  }
  return res;
};

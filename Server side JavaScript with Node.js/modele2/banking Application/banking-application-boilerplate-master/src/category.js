// var categories = {
//   PL: "Personal Loan",
//   VL: "Vehicle Loan",
//   EL: "Education Loan",
//   HL: "Home Loan"
// };

var category = function category(key) {

  // Write the Logic here

  // if (!categories[key]) {
  //   categories[key] = key;
  //   return console.log(`Category  ${key} added succefully`)
  // } else {
  //   return console.log(`Category  ${key} already exists`)
  // }

  // const categories = {
  //   PL: "Personal Loan",
  //   VL: "Vehicle Loan",
  //   EL: "Education Loan",
  //   HL: "Home Loan"
  // };
  // return categories[key.toUpperCase()];


  switch (key) {
    case 'pl':
      return "Personal Loan"

    case 'pm':
      return "Private Loan"

    case 'Vl':
      return "vehicule Loan"

    case 'EL':
      return 'Education Loan'

    case 'EL':
      return 'Education Loan'

    default:
      return ''


  }


};

module.exports = {
  category: category
};
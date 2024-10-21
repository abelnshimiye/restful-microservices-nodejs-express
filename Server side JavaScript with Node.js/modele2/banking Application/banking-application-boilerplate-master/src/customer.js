var customerList = [

];

// Function to check for duplicates
// const isDuplicateCustomer = (CustomerId) => {
//       return customerList.some(customer => customer.CustomerId === CustomerId);
// };

const addCustomer = (CustomerId, CustomerName, CustomerAge, CustomerAddress, CustomerContactNumber, Category) => {
      // Write the Logic here

      if (customerList.find((x) => x[0] == CustomerId) === undefined) {
            // const category = Category;

            customerList.push([CustomerId, CustomerName, CustomerAge, CustomerAddress, CustomerContactNumber, Category])

            // console.log(`Customer with ID ${CustomerId} added successfully.`);
      }
};

const updateCustomer = (CustomerId, CustomerName, CustomerAge, CustomerAddress, CustomerContactNumber, Category) => {
      let index = customerList.findIndex((customer) => customer[0] == CustomerId)

      customerList[index] = [CustomerId, CustomerName, CustomerAge, CustomerAddress, CustomerContactNumber, Category]
}

const getAllCustomers = () => {

      // console.log("All customers:", customerList);
      return customerList;
}

module.exports = { addCustomer, updateCustomer, getAllCustomers }
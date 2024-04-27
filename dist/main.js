"use strict";
function getCustomer(id) {
    return id === 0 ? null : { JoinedDate: new Date() };
}
let customer = getCustomer(1);
// ? <== this means in TS Optional property access 
console.log(customer === null || customer === void 0 ? void 0 : customer.JoinedDate.getHours());
//# sourceMappingURL=main.js.map
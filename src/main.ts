// Optional property access
type Customer = {
  JoinedDate: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { JoinedDate: new Date() };
}

let customer = getCustomer(1)
// ? <== this means in TS Optional property access 
console.log(customer?.JoinedDate);

function getAddressCity(address) {
    return address?.city || "Unknown";
  }
  
  // Example usage
  const address = { street: '123 Main St', country: 'USA' };
  const city = getAddressCity(address);
  console.log(city);
  
const logDriverNames = function(drivers) {
  drivers.forEach(function(driver) {console.log(driver.name)});
}

function logDriversByHometown(drivers, ht) {
  drivers.forEach(function(driver) {
    if (driver.hometown === ht) {
      console.log(driver.name);
    }
  });
}

const driversByRevenue = function(drivers) {
  return drivers.slice().sort(function(a, b){
    return a.revenue - b.revenue;
  })
}

const driversByName = function(drivers) {
  return drivers.slice().sort(function(a, b){
    return a.name.localeCompare(b.name);
  })
}

const totalRevenue = function(drivers) {
  return drivers.slice().reduce(function(total, driver){
    return driver.revenue + total;
  }, 0)
}

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length;
}

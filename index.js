// Code your solution in this file!
function logDriverNames(drivers){
  drivers.forEach(function(driver){
    console.log(driver.name)
  })
}

function logDriversByHometown(drivers, location){

  drivers.forEach(function(driver){
    if (location === driver.hometown){
      console.log(driver.name);
    }
  })
}

function driversByRevenue(drivers){
  const newDrivers = [...drivers]
  return newDrivers.sort(function(driver1, driver2){
    return driver1.revenue - driver2.revenue;
  })
}

function driversByName(drivers){
  const newDrivers = [...drivers]
  return newDrivers.sort(function(driver1, driver2){
    return driver1.name.localeCompare(driver2.name);
  })
}


function totalRevenue(drivers){
  const func = function(agg, driver){
    return agg + driver.revenue;
  }
  const total = drivers.reduce(func, 0)
  return total
}

function averageRevenue(drivers){
  return totalRevenue(drivers)/drivers.length;
}

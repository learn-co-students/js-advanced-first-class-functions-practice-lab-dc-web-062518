function logDriverNames(drivers) {
  drivers.forEach(function(element){
    console.log(element.name)
  })
}

function logDriversByHometown(drivers,location){
  drivers.forEach(function(element){
    if(element.hometown === location){
      console.log(element.name)
    }
  })
}


function driversByRevenue(drivers){
    const drivers2 = [...drivers]
    return drivers2.sort(function (a, b) {
    return a.revenue - b.revenue;
  });

}

function driversByName(drivers) {
  const drivers2 = [...drivers]

  return drivers2.sort(function (a, b) {
  return a.name.localeCompare(b.name)})
}

function totalRevenue(drivers){
  var initialValue = 0;
  var sum = drivers.reduce(
      (accumulator, currentValue) => accumulator + currentValue.revenue
      ,initialValue
  );
  return sum;
}

function averageRevenue(drivers){
  let sum = totalRevenue(drivers)

  return sum/drivers.length
}

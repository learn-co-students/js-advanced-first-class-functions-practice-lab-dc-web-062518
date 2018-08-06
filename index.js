// Code your solution in this file!
function logDriverNames(array) {
  array.forEach(function (element) {
    console.log(element.name)
  })
}

function logDriversByHometown(array, location) {
  const newArray = array.filter(function(element) {
    return element.hometown === location
  })
  newArray.forEach(function (element) {
    console.log(element.name)
  })
}

function driversByRevenue(array) {
  const newArray = [...array]
  newArray.sort(function(a, b) {
    return a.revenue - b.revenue
  })
  return newArray
}

function driversByName(array) {
  const newArray = [...array]
  newArray.sort(function(a, b) {
    return a.name.localeCompare(b.name)
  })
  return newArray
}

function totalRevenue(array) {
  function reducer (agg, element) {return agg + element.revenue}
  console.log(array)
  console.log(array.reduce(reducer, 0))
  return array.reduce(reducer, 0)
}

function averageRevenue(array) {
  return totalRevenue(array)/array.length
}

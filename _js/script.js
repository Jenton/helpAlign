
var MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var numMonth = [0,1,2,3,4,5,6,7,8,9,10,11];
var results = [];
var results2 = [];
$(document).ready(function(){

/*  $.getJSON( "_data/data.json", function(data) {
    results = data;

    });*/
  $.getJSON( "_data/gdp2012.json", function(data) {
    results2 = data;
  });
  /*  //create a placeholder object for each department
    var deptInfoTech = createDeptObject();
    var deptExecutive = createDeptObject();
    var deptFacilities = createDeptObject();
    var deptFinance = createDeptObject();
    var deptHumanResources = createDeptObject();
    var deptMarketing = createDeptObject();
    var deptSales = createDeptObject();
    var deptTechSupport = createDeptObject();
      
*/
    //this function goes through each line in the data set.
    $.each(results, function(lineNo, line){
      //console.log(line);
      //console.log(line);

});
    $.each(results2, function(lineNo, line){
      //console.log(line);
      console.log(line);
    });
   /*   switch(line["Department"]) {
        case "InfoTech":
          switchPopulateBudgets(deptInfoTech, line);
          break;
        case "Executive":
          switchPopulateBudgets(deptExecutive, line);
          break;
        case "Facilities":
          switchPopulateBudgets(deptFacilities, line);
          break;
        case "Finance":
          switchPopulateBudgets(deptFinance, line);
          break;        
        case "HumanResources":
          switchPopulateBudgets(deptHumanResources, line);
          break;        
        case "Marketing":
          switchPopulateBudgets(deptMarketing, line);
          break;        
        case "Sales":
          switchPopulateBudgets(deptSales, line);
          break;        
        case "TechSupport":
          switchPopulateBudgets(deptTechSupport, line);
          break;              
      };
    });

  //populate Monthly Data
  var monthsToShow = 11;
    $(".container").append("<div class='department' id='deptInfoTech'><h2>Information Technology</h2>");
    for (var i =0; i < monthsToShow; i++) {
      populateMonthData(deptInfoTech,numMonth[i]);
    };
    $(".container").append("</div><div class='department' id='deptExecutive'><h2>Executive</h2>");
    for (var i =0; i < monthsToShow; i++) {
      populateMonthData(deptExecutive,numMonth[i]);
    };
    $(".container").append("</div><div class='department' id='deptFacilities'><h2>Facilities</h2>");
    for (var i =0; i < monthsToShow; i++) {
      populateMonthData(deptFacilities,numMonth[i]);
    };
    $(".container").append("</div><div class='department' id='deptFinance'><h2>Finance</h2>");
    for (var i =0; i < monthsToShow; i++) {
      populateMonthData(deptFinance,numMonth[i]);
    };    
    $(".container").append("<div class='department' id='deptHumanResources'><h2>Human Resources</h2>");
    for (var i =0; i < monthsToShow; i++) {
      populateMonthData(deptHumanResources,numMonth[i]);
    };
    $(".container").append("</div><div class='department' id='deptMarketing'><h2>Marketing</h2>");
    for (var i =0; i < monthsToShow; i++) {
      populateMonthData(deptMarketing,numMonth[i]);
    };
    $(".container").append("</div><div class='department' id='deptSales'><h2>Sales</h2>");
    for (var i =0; i < monthsToShow; i++) {
      populateMonthData(deptSales,numMonth[i]);
    };
    $(".container").append("</div><div class='department' id='deptTechSupport'><h2>Technical Support</h2>");
    for (var i =0; i < monthsToShow; i++) {
      populateMonthData(deptTechSupport,numMonth[i]);
    };
    $(".container").append("</div>");

  });

});

function populateMonthData(departmentData, numMonth, month) {

  //populating options object
  var options = {
  chart: {
    renderTo: "chart",
    inverted: true
  },
  title: {
    text: ''
  },
  subtitle: {
    text: '',
  },
  xAxis: {
    categories: ' '
  },
  yAxis: {
    title: {
      text: ''
    },
    endOnTick: false,
  },
  series: [{
    name: "",
    data: [],
    pointPadding: 0.1
  }, {
    name: "",
    data: [],
    pointPadding: 0.0
  }],
  legend: {
    enabled: false
  },
  credits: {
    enabled: false
  }
};

  //customizing the options object
  //departmentData[0] is actual numbers
  //departmentData[1] is project numbers
  actual = departmentData[0].data[numMonth];
  budget = departmentData[1].data[numMonth];

  //change where chart renders to
  var newDiv = departmentData[2].department + MONTHS[numMonth];
  var cont = "dept" + departmentData[2].department;

  //adding the charts dynamically to the page
  options.chart["renderTo"] = newDiv;
  $('#' + cont).append("<div class='chart' id='"+ newDiv + "'></div>");  
  console.log(Math.abs(departmentData[2].overUnder[numMonth]));
  
  //this code highlights charts where the percent difference from the projected budget is very severe
  if (Math.abs(departmentData[2].overUnder[numMonth]) >= 45) {
    options.chart["backgroundColor"] = "#FAA0AB";
    
  } else if (Math.abs(departmentData[2].overUnder[numMonth]) >= 20) {
    options.chart["backgroundColor"] = "#FAF7A0";    
  } else {

  };
*/  

});
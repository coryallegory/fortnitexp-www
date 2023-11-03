function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function isToday(someDate) {
  today = new Date();
  return someDate.getDate() == today.getDate() &&
    someDate.getMonth() == today.getMonth() &&
    someDate.getFullYear() == today.getFullYear();
}

var dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
var dateNoYearOptions = { month: 'long', day: 'numeric' };
var today = new Date();
var seasonStart = new Date("11/03/2023");
var seasonEnd = new Date("12/02/2023");
var daysRemaining = Math.ceil( (seasonEnd.getTime() - today.getTime()) / (1000 * 3600 * 24) ) + 1;
var daysTotal = Math.ceil( (seasonEnd.getTime() - seasonStart.getTime()) / (1000 * 3600 * 24) );
var xp50PerDay = totalPerLevel[50]/daysTotal;
var xp70PerDay = totalPerLevel[70]/daysTotal;

function populateSummary() {

  var percentage = Math.floor(100-daysRemaining*100/daysTotal);

  $("#summary").append("<span class=\"text-danger\">" + daysRemaining + "</span>/" + daysTotal + " Days Remaining. We\'re " + percentage + "% there.");
    
  $("#50card .card-body").append("<p class=\"card-text text-center\">" +
    numberWithCommas(totalPerLevel[50]) + " XP Total." +
    "<br/>" +
    numberWithCommas(Math.ceil(xp50PerDay)) + " XP/day." +
    "</p>");
    $("#70card .card-body").append("<p class=\"card-text text-center\">" +
    numberWithCommas(totalPerLevel[70]) + " XP Total." +
    "<br/>" +
    numberWithCommas(Math.ceil(xp70PerDay)) + " XP/day." +
    "</p>");

}


function populateXpTable() {
  var tbody = $("#xpTable tbody");

  var level;
  for (level=2; level < xpPerLevel.length && level <= totalPerLevel.length; level++) {
    tbody.append("<tr>" + 
    "<th scope=\"row\">" + (level-1) + " &rarr; " + level + "</th>" +
    "<td>" + numberWithCommas(xpPerLevel[level]) + "</td>" +
    "<td>" + numberWithCommas(totalPerLevel[level]) + "</td>" +
    "</tr>");
  }
}


var days50Data = [];
var days70Data = [];
var daysDateData = [];
function populateDaysTable() {

  var tbody = $("#daysTable tbody");

  var day;
  var levelTo50 = 2;
  var levelTo70 = 2;
  for (day=1; day <= daysTotal; day++) {
    var xp50Target = Math.round(xp50PerDay * day);
    while (totalPerLevel[levelTo50] < xp50Target) {
      levelTo50++;
    }
    days50Data.push(levelTo50);
    var xp70Target = Math.round(xp70PerDay * day);
    while (totalPerLevel[levelTo70] < xp70Target) {
      levelTo70++;
    }
    days70Data.push(levelTo70);

    var rowDate = new Date(seasonStart.getTime());
    rowDate.setDate(seasonStart.getDate() + day - 1);
    daysDateData.push(rowDate.toLocaleDateString("en-US", dateNoYearOptions));

    var addedStyle = "";
    if (isToday(rowDate)) {
      addedStyle = " class=\"today bg-warning\" ";

      $("#target50level").text(levelTo50);
      $("#target70level").text(levelTo70);
    }

    tbody.append("<tr id=\"day" + day + "\" " + addedStyle + ">" + 
    "<th scope=\"row\">" + day + " (" + rowDate.toLocaleDateString("en-US", dateNoYearOptions) + ")</td>" +
    "<td>" + levelTo50 + " (" + numberWithCommas(xp50Target) + " XP)</td>" +
    "<td>" + levelTo70 + " (" + numberWithCommas(xp70Target) + " XP)</td>" +
    "</tr>");
  }
}

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
var seasonStart = new Date("03/16/2021");
var seasonEnd = new Date("06/09/2021");
var daysRemaining = Math.ceil( (seasonEnd.getTime() - today.getTime()) / (1000 * 3600 * 24) );
var daysTotal = Math.ceil( (seasonEnd.getTime() - seasonStart.getTime()) / (1000 * 3600 * 24) );


function populateSummary() {

  var percentage = Math.floor(100-daysRemaining/0.85);

  $("#summary").append("<span class=\"text-danger\">" + daysRemaining + "</span>/85 Days Remaining. We\'re " + percentage + "% there.");
    
  $("#100card .card-body").append("<p class=\"card-text\">" +
    numberWithCommas(totalPerLevel[100]) + " Total XP Required" +
    "<br/>" +
    numberWithCommas(Math.ceil(totalPerLevel[100]/daysRemaining)) + " XP/day" +
    "</p>");
    $("#225card .card-body").append("<p class=\"card-text\">" +
    numberWithCommas(totalPerLevel[225]) + " Total XP Required" +
    "<br/>" +
    numberWithCommas(Math.ceil(totalPerLevel[225]/daysRemaining)) + " XP/day" +
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


var days100Data = [];
var days225Data = [];
var daysDateData = [];
function populateDaysTable() {

  var tbody = $("#daysTable tbody");

  var day;
  var xp100PerDay = totalPerLevel[100]/daysTotal;
  var xp225PerDay = totalPerLevel[225]/daysTotal;
  var levelTo100 = 2;
  var levelTo225 = 2;
  for (day=1; day <= daysTotal; day++) {
    var xp100Target = Math.round(xp100PerDay * day);
    while (totalPerLevel[levelTo100] < xp100Target) {
      levelTo100++;
    }
    days100Data.push(levelTo100);
    var xp225Target = Math.round(xp225PerDay * day);
    while (totalPerLevel[levelTo225] < xp225Target) {
      levelTo225++;
    }
    days225Data.push(levelTo225);

    var rowDate = new Date(seasonStart.getTime());
    rowDate.setDate(seasonStart.getDate() + day - 1);
    daysDateData.push(rowDate.toLocaleDateString("en-US", dateNoYearOptions));

    var addedStyle = "";
    if (isToday(rowDate)) {
      addedStyle = "id=\"today\" class=\"bg-warning\" ";

      $("#target100level").text(levelTo100);
      $("#target225level").text(levelTo225);
    }

    tbody.append("<tr " + addedStyle + ">" + 
    "<th scope=\"row\">" + day + " (" + rowDate.toLocaleDateString("en-US", dateNoYearOptions) + ")</td>" +
    "<td>" + levelTo100 + " (" + numberWithCommas(xp100Target) + " XP)</td>" +
    "<td>" + levelTo225 + " (" + numberWithCommas(xp225Target) + " XP)</td>" +
    "</tr>");
  }
}

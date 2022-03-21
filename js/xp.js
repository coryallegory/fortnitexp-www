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
var seasonStart = new Date("03/20/2022");
var seasonEnd = new Date("06/03/2022");
var daysRemaining = Math.ceil( (seasonEnd.getTime() - today.getTime()) / (1000 * 3600 * 24) );
var daysTotal = Math.ceil( (seasonEnd.getTime() - seasonStart.getTime()) / (1000 * 3600 * 24) );
var xp100PerDay = totalPerLevel[100]/daysTotal;
var xp200PerDay = totalPerLevel[200]/daysTotal;

function populateSummary() {

  var percentage = Math.floor(100-daysRemaining*100/daysTotal);

  $("#summary").append("<span class=\"text-danger\">" + daysRemaining + "</span>/" + daysTotal + " Days Remaining. We\'re " + percentage + "% there.");
    
  $("#100card .card-body").append("<p class=\"card-text\">" +
    numberWithCommas(totalPerLevel[100]) + " Total XP Required" +
    "<br/>" +
    numberWithCommas(Math.ceil(xp100PerDay)) + " XP/day" +
    "</p>");
    $("#200card .card-body").append("<p class=\"card-text\">" +
    numberWithCommas(totalPerLevel[200]) + " Total XP Required" +
    "<br/>" +
    numberWithCommas(Math.ceil(xp200PerDay)) + " XP/day" +
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
var days200Data = [];
var daysDateData = [];
function populateDaysTable() {

  var tbody = $("#daysTable tbody");

  var day;
  var levelTo100 = 2;
  var levelTo200 = 2;
  for (day=1; day <= daysTotal; day++) {
    var xp100Target = Math.round(xp100PerDay * day);
    while (totalPerLevel[levelTo100] < xp100Target) {
      levelTo100++;
    }
    days100Data.push(levelTo100);
    var xp200Target = Math.round(xp200PerDay * day);
    while (totalPerLevel[levelTo200] < xp200Target) {
      levelTo200++;
    }
    days200Data.push(levelTo200);

    var rowDate = new Date(seasonStart.getTime());
    rowDate.setDate(seasonStart.getDate() + day - 1);
    daysDateData.push(rowDate.toLocaleDateString("en-US", dateNoYearOptions));

    var addedStyle = "";
    if (isToday(rowDate)) {
      addedStyle = " class=\"today bg-warning\" ";

      $("#target100level").text(levelTo100);
      $("#target200level").text(levelTo200);
    }

    tbody.append("<tr id=\"day" + day + "\" " + addedStyle + ">" + 
    "<th scope=\"row\">" + day + " (" + rowDate.toLocaleDateString("en-US", dateNoYearOptions) + ")</td>" +
    "<td>" + levelTo100 + " (" + numberWithCommas(xp100Target) + " XP)</td>" +
    "<td>" + levelTo200 + " (" + numberWithCommas(xp200Target) + " XP)</td>" +
    "</tr>");
  }
}

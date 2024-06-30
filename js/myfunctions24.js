//$   function c(toConsole)

//$   function r(min, max)  Random integers, can be just 'max'



function c(toConsole) {
    console.log(toConsole);
}

function r(min, max) {
    // 2.0, accepts single value for 1-x
    if (max === undefined) {
        max = min;
        min = 1;
    }
    const randomNumber = min - 1 + Math.ceil(Math.random() * (max + 1 - min));
    return randomNumber;
}

function getTime() {
    var today = new Date();
    var codeMonth = today.getMonth() + 1;
    var codeDay = today.getDate();
    if (codeDay < 10) {
      codeDay = "0" + codeDay;
    }
    var codeMinute = today.getMinutes();
    var codeHour = today.getHours();
    if (codeMinute < 10) {
      codeMinute = "0" + codeMinute;
    }
    if (codeHour < 10) {
      codeHour = "0" + codeHour;
    }
    var codeYear = today.getFullYear() - 2000;
    var dateTime =
      codeMonth + "" + codeDay + "" + codeYear + "." + codeHour + "" + codeMinute;
    // document.getElementById(`timeStamp`).innerHTML = dateTime;
    t = setTimeout(function () {
      getTime();
    }, 30000);
    return dateTime;
  }
  
  function getCompleteDate() {
    const today = new Date();
    return today;
  }
  
  function getMinute() {
    const today = new Date();
    const codeMinute = today.getMinutes();
    if (codeMinute < 10) {
      codeMinute = "0" + codeMinute;
    }
    return codeMinute;
  }
  
  function getMinute00() {
    const today = new Date();
    let codeMinute = today.getMinutes();
    if (codeMinute < 10) {
      codeMinute = "0" + codeMinute;
    }
    return codeMinute;
  }
  
  function getHour() {
    const today = new Date();
    let codeHour = today.getHours();
    if (codeHour > 12) {
      codeHour = codeHour - 12;
    }
    return codeHour;
  }
  
  function getAmPm() {
    let amPm = "am";
    const today = new Date();
    let codeHour = today.getHours();
    if (codeHour > 12) {
      amPm = "pm";
    }
    return amPm;
  }
  
  function getHour00() {
    const today = new Date();
    const codeHour = today.getHours();
    if (codeHour > 12) {
      codeHour = codeHour - 12;
    }
    if (codeHour < 10) {
      codeHour = "0" + codeHour;
    }
    return codeHour;
  }
  
  function get24Hour() {
    const today = new Date();
    const codeHour = today.getHours();
    return codeHour;
  }
  
  function get24Hour00() {
    const today = new Date();
    const codeHour = today.getHours();
    if (codeHour < 10) {
      codeHour = "0" + codeHour;
    }
    return codeHour;
  }
  
  function getDayVerbal() {
    const today = new Date();
    const codeDay = today.getDay() + 1;
    return theDay[codeDay];
  }
  
  function getDay00() {
    const today = new Date();
    const codeDay = today.getDate();
    if (codeDay < 10) {
      codeDay = "0" + codeDay;
    }
    return codeDay;
  }
  
  function getDay() {
    const today = new Date();
    const codeDay = today.getDate();
    return codeDay;
  }
  
  function getMonthVerbal() {
    const today = new Date();
    const codeMonth = today.getMonth() + 1;
    return theMonth[codeMonth];
  }
  
  function getMonth00() {
    const today = new Date();
    const codeMonth = today.getMonth() + 1;
    if (codeMonth < 10) {
      codeMonth = "0" + codeMonth;
    }
    return codeMonth;
  }
  
  function getMonth() {
    const today = new Date();
    const codeMonth = today.getMonth() + 1;
    return codeMonth;
  }
  
  function getYear00() {
    const today = new Date();
    const codeYear = today.getYear() - 100;
    if (codeYear < 10) {
      codeMYear = "0" + codeYear;
    }
    return codeYear;
  }
  
  function getYear() {
    const today = new Date();
    const codeYear = today.getYear() + 1900;
    return codeYear;
  }
  
  function t() {
    const now = new Date();
    eventTimestamp = now.getTime();
    // c(eventTimestamp);
    return eventTimestamp;
  }



var theDay = new Array(
    "Zero",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  );
  var theDayMin3 = new Array(
    "Zero",
    "Sun.",
    "Mon.",
    "Tues.",
    "Wed.",
    "Thurs.",
    "Fri.",
    "Sat."
  );
  var theDayMin2 = new Array("Zero", "S", "M", "Tu", "W", "Th", "F", "S");
  var theDayMin1 = new Array("Zero", "S", "M", "T", "W", "T", "F", "S");
  var theMonth = new Array(
    "Zero",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  );
  var theMonthMin = new Array(
    "Zero",
    "Jan.",
    "Feb.",
    "Mar.",
    "Apr.",
    "May",
    "June",
    "July",
    "Aug.",
    "Sept.",
    "Oct.",
    "Nov.",
    "Dec."
  );
function showDateTimeFormat() {
    const today = new Date();
    const formattedDate = new Intl.DateTimeFormat("en-US").format(today);
    const consoleFunctioningMessage = `
  Console functioning: ${getDayVerbal()}, ${getMonthVerbal()} ${getDay()} at ${getHour()}:${getMinute00()}${getAmPm()}
    `;
    return consoleFunctioningMessage;
  }
  showDateTimeFormat();
  
  console.log(`%c${showDateTimeFormat()}`, "font-size: 20px; color: gray");
  
  
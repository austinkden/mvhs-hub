// --------------------------------------------------------------------------- Initializing Variables

const nowForTotalSecondCalculation = new Date();
let totalSeconds = (nowForTotalSecondCalculation.getHours() * 3600) + (nowForTotalSecondCalculation.getMinutes() * 60) + nowForTotalSecondCalculation.getSeconds();
let lunchSelect = "X";
const classCompletedElement = document.getElementById("class-completed");
const classTimerElement = document.getElementById("class-timer");
const dayCompletedElement = document.getElementById("day-completed");
const dayTimerElement = document.getElementById("day-timer");
const lunchDivElement = document.getElementById("lunch-select");
const aLunchElement = document.getElementById("lunch-a");
const bLunchElement = document.getElementById("lunch-b");
const dayOfWeek = new Date().getDay();
const clockElement = document.getElementById("clock");

// --------------------------------------------------------------------------- Lunch
aLunchElement.addEventListener("click", () => {
  if (lunchSelect === "X") {
    lunchSelect = "A";
    lunch("a");
    lunchDivElement.style.borderColor = "green";
    lunchDivElement.style.boxShadow = "0px 0px 10px 8px green";
    bLunchElement.style.transform = "scale(0.85)";
    aLunchElement.style.filter = "brightness(2)";
    aLunchElement.style.borderRadius = "20px";
    bLunchElement.style.borderRadius = "8px";
    bLunchElement.style.filter = "brightness(0.25)";
    bLunchElement.style.cursor = "default";
    setTimeout(() => {
      let opacity = 1;
      const interval = setInterval(() => {
        opacity -= 0.1;
        lunchDivElement.style.opacity = opacity;
  
        if (opacity <= -0.35) {
          clearInterval(interval);
          lunchDivElement.style.display = "none";
        }
  
      }, 50);
    }, 250); 
    setTimeout(() => {
        document.getElementById("actions").style.display = "flex";
    }, 1000);

  } else {
    lunchDivElement.style.borderColor = "white";
    lunchDivElement.style.boxShadow = "0px 0px 10px 8px white";
    lunchDivElement.style.backgroundColor = "orange";
    console.log("Lunch selection issue")
    setTimeout(() => { location.reload(true); }, 350);
  }
});

bLunchElement.addEventListener("click", () => {
  if (lunchSelect === "X") {
    lunchSelect = "B";
    lunch("b");
    lunchDivElement.style.borderColor = "green";
    lunchDivElement.style.boxShadow = "0px 0px 10px 8px green";
    aLunchElement.style.transform = "scale(0.85)";
    bLunchElement.style.filter = "brightness(2)";
    bLunchElement.style.borderRadius = "20px";
    aLunchElement.style.borderRadius = "8px";
    aLunchElement.style.filter = "brightness(0.25)";
    aLunchElement.style.cursor = "default";
    setTimeout(() => {
      let opacity = 1;
      const interval = setInterval(() => {
        opacity -= 0.1;
        lunchDivElement.style.opacity = opacity;
  
        if (opacity <= -0.35) {
          clearInterval(interval);
          lunchDivElement.style.display = "none";
        }

      }, 50);
    }, 250); 
    setTimeout(() => {
      document.getElementById("actions").style.display = "flex";
  }, 1000);
  } else {
    lunchDivElement.style.borderColor = "white";
    lunchDivElement.style.boxShadow = "0px 0px 10px 8px white";
    lunchDivElement.style.backgroundColor = "orange";
    console.log("Lunch selection issue")
    setTimeout(() => { location.reload(true); }, 350);
  }
});

// --------------------------------------------------------------------------- Data

console.log("dayOfWeek = " + dayOfWeek);

if ((dayOfWeek === 0) || (dayOfWeek === 6)) {
  document.getElementById("class").style.display = "none";
  document.getElementById("day").style.display = "none";
  document.getElementById("lunch-select").style.display = "none";
  console.log("Weekend")
}

function lunch(wave) {
  if (((dayOfWeek === 1) || (dayOfWeek === 3)) && (wave === "a")) {

    console.log("📅 Monday/Wednesday - A Lunch")
    mwClass1start = 465 * 60; // 07:45 - Period 1
    mwClass1end = 559 * 60; // 09:19
    mwClass2start = 564 * 60; // 09:24 - Period 2
    mwClass2end = 658 * 60; // 10:58
    mwClass3start = 658 * 60; // 10:58 - Lunch
    mwClass3end = 692 * 60; // 11:32 
    mwClass4start = 697 * 60; // 11:37 - Period 3
    mwClass4end = 791 * 60; // 13:11
    mwClass5start = 796 * 60; // 13:16 - Period 4
    mwClass5end = 890 * 60; // 14:50

    classBar();

  } else if (((dayOfWeek === 2) || (dayOfWeek === 4)) && (wave === "a")) {

    console.log("📅 Tuesday/Thursday - A Lunch")
    ttClass1start = 485 * 60; // 08:05 - Period 5
    ttClass1end = 579 * 60; // 09:39
    ttClass2start = 579 * 60; // 09:39 - Homeroom
    ttClass2end = 589 * 60 // 10:39
    ttClass3start = 589 * 60; // 10:39 - SAS/Eagle Time
    ttClass3end = 656 * 60; // 10:56
    ttClass4start = 656 * 60; // 10:56 - Lunch
    ttClass4end = 692 * 60; // 11:32
    ttClass5start = 697 * 60; // 11:37 - Period 6
    ttClass5end = 791 * 60; // 13:11
    ttClass6start = 796 * 60; // 13:16 - Period 7
    ttClass6end = 890 * 60; // 14:50

    classBar();

  } else if ((dayOfWeek === 5) && (wave === "a") ) {

    console.log("📅 Friday - A Lunch");
    fClass1start = 465 * 60; // 07:45 - Period 1
    fClass1end = 516 * 60; // 08:36
    fClass2start = 521 * 60; // 08:41 - Period 2
    fClass2end = 572 * 60; // 09:32
    fClass3start = 577 * 60; // 09:37 - Period 3
    fClass3end = 628 * 60; // 10:28
    fClass4start = 633 * 60; // 10:33 - Period 4
    fClass4end = 684 * 60; // 11:24
    fClass5start = 684 * 60; // 11:24 - Lunch
    fClass5end = 722 * 60; // 12:02
    fClass6start = 727 * 60; // 12:07 - Period 5
    fClass6end = 778 * 60; // 12:58
    fClass7start = 783 * 60; // 13:03 - Period 6
    fClass7end = 834 * 60; // 13:54
    fClass8start = 839 * 60; // 13:59 - Period 7
    fClass8end = 890 * 60; // 14:50

    classBar();

  } else if (((dayOfWeek === 1) || (dayOfWeek === 3)) && (wave === "b")) {

    console.log("📅 Monday/Wednesday - B Lunch")
    mwClass1start = 465 * 60; // 07:45 - Period 1
    mwClass1end = 559 * 60; // 09:19
    mwClass2start = 564 * 60; // 09:24 - Period 2
    mwClass2end = 658 * 60; // 10:58
    mwClass3start = 663 * 60; // 11:03 - Period 3
    mwClass3end = 757 * 60; // 12:37
    mwClass4start = 757 * 60; // 12:37 - Lunch
    mwClass4end = 791 * 60; // 13:11
    mwClass5start = 796 * 60; // 13:16 - Period 4
    mwClass5end = 890 * 60; // 14:50

    classBar();

  } else if (((dayOfWeek === 2) || (dayOfWeek === 4)) && (wave === "b")) {

    console.log("📅 Tuesday/Thursday - B Lunch")
    ttClass1start = 485 * 60; // 08:05 - Period 5
    ttClass1end = 579 * 60; // 09:39
    ttClass2start = 579 * 60; // 09:39 - Homeroom
    ttClass2end = 589 * 60 // 10:39
    ttClass3start = 589 * 60; // 10:39 - SAS/Eagle Time
    ttClass3end = 656 * 60; // 10:56
    ttClass4start = 661 * 60; // 11:01 - Period 6
    ttClass4end = 755 * 60; // 12:35
    ttClass5start = 755 * 60; // 12:35 - Lunch
    ttClass5end = 791 * 60; // 13:11
    ttClass6start = 796 * 60; // 13:16 - Period 7
    ttClass6end = 890 * 60; // 14:50

    classBar();

  } else if ((dayOfWeek === 5) && (wave === "b") ) {

    console.log("📅 Friday - B Lunch")
    fClass1start = 465 * 60; // 07:45 - Period 1
    fClass1end = 516 * 60; // 08:36
    fClass2start = 521 * 60; // 08:41 - Period 2
    fClass2end = 572 * 60; // 09:32
    fClass3start = 577 * 60; // 09:37 - Period 3
    fClass3end = 628 * 60; // 10:28
    fClass4start = 633 * 60; // 10:33 - Period 4
    fClass4end = 684 * 60; // 11:24
    fClass5start = 689 * 60; // 11:29 - Period 5
    fClass5end = 740 * 60; // 12:20
    fClass6start = 740 * 60; // 12:20 - Lunch
    fClass6end = 778 * 60; // 12:58
    fClass7start = 783 * 60; // 13:03 - Period 6
    fClass7end = 834 * 60; // 13:54
    fClass8start = 839 * 60; // 13:59 - Period 7
    fClass8end = 890 * 60; // 14:50

    classBar();

  } else {
    console.error("No schedule could be created - it is most likely the weekend");
  }

  if ((wave === "a") || (wave === "b")) {
  } else {
    console.error("Neither lunch selected to execute classBar functions");
  }
}

// --------------------------------------------------------------------------- Clock

setInterval(() => {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  clock.textContent = `${hours}:${minutes}`;
}, 500);

// --------------------------------------------------------------------------- Day Bar

if ((dayOfWeek === 1) || (dayOfWeek === 3) || (dayOfWeek === 5)) {
  if ((totalSeconds > 465 * 60) && (totalSeconds < 890 * 60)) {
    const interval = setInterval(() => {

      const now = new Date();
      const totalSeconds = (now.getHours() * 3600) + (now.getMinutes() * 60) + now.getSeconds();
      const schoolSeconds = totalSeconds - (465 * 60);
      const progress = (schoolSeconds / ((890 - 465) * 60)) * 100;
      dayCompletedElement.style.width = progress + "%";

      const remainingTime = (890 * 60) - totalSeconds;
      const hoursRemaining = Math.floor(remainingTime / 3600);
      const minutesRemaining = Math.floor((remainingTime % 3600) / 60);
      const secondsRemaining = remainingTime % 60;
      dayTimerElement.textContent = `${hoursRemaining.toString().padStart(2, '0')}:${minutesRemaining.toString().padStart(2, '0')}:${secondsRemaining.toString().padStart(2, '0')}`;

      if (totalSeconds >= (890 * 60)) {
        clearInterval(interval);
        dayCompletedElement.style.width = "0%";
      }

    }, 1000);
  }
}

if ((dayOfWeek === 2) || (dayOfWeek === 4)) {
  if ((totalSeconds > 485 * 60) && (totalSeconds < 890 * 60)) {
    const interval = setInterval(() => {

      const now = new Date();
      const totalSeconds = (now.getHours() * 3600) + (now.getMinutes() * 60) + now.getSeconds();
      const schoolSeconds = totalSeconds - (485 * 60);
      const progress = (schoolSeconds / ((890 - 485) * 60)) * 100;
      dayCompletedElement.style.width = progress + "%";

      const remainingTime = (890 * 60) - totalSeconds;
      const hoursRemaining = Math.floor(remainingTime / 3600);
      const minutesRemaining = Math.floor((remainingTime % 3600) / 60);
      const secondsRemaining = remainingTime % 60;
      dayTimerElement.textContent = `${hoursRemaining.toString().padStart(2, '0')}:${minutesRemaining.toString().padStart(2, '0')}:${secondsRemaining.toString().padStart(2, '0')}`;

      if (totalSeconds >= (890 * 60)) {
        clearInterval(interval);
        dayCompletedElement.style.width = "0%";
      }

    }, 1000);
  }
}

// --------------------------------------------------------------------------- Class Bar with Class Timer

function classBar() {setInterval(classBar, 500);

  if (dayOfWeek === 1 || dayOfWeek === 3) {
    if (totalSeconds >= mwClass1start && totalSeconds < mwClass1end) {
      // Class 1
      updateClassBar(mwClass1start, mwClass1end);
    } else if (totalSeconds >= mwClass2start && totalSeconds < mwClass2end) {
      // Class 2
      updateClassBar(mwClass2start, mwClass2end);
    } else if (totalSeconds >= mwClass3start && totalSeconds < mwClass3end) {
      // Class 3
      updateClassBar(mwClass3start, mwClass3end);
    } else if (totalSeconds >= mwClass4start && totalSeconds < mwClass4end) {
      // Class 4
      updateClassBar(mwClass4start, mwClass4end);
    } else if (totalSeconds >= mwClass5start && totalSeconds < mwClass5end) {
      // Class 5
      updateClassBar(mwClass5start, mwClass5end);
    }
  } else if (dayOfWeek === 2 || dayOfWeek === 4) {
    if (totalSeconds >= ttClass1start && totalSeconds < ttClass1end) {
      // Class 1
      updateClassBar(ttClass1start, ttClass1end);
    } else if (totalSeconds >= ttClass2start && totalSeconds < ttClass2end) {
      // Class 2
      updateClassBar(ttClass2start, ttClass2end);
    } else if (totalSeconds >= ttClass3start && totalSeconds < ttClass3end) {
      // Class 3
      updateClassBar(ttClass3start, ttClass3end);
    } else if (totalSeconds >= ttClass4start && totalSeconds < ttClass4end) {
      // Class 4
      updateClassBar(ttClass4start, ttClass4end);
    } else if (totalSeconds >= ttClass5start && totalSeconds < ttClass5end) {
      // Class 5
      updateClassBar(ttClass5start, ttClass5end);
    } else if (totalSeconds >= ttClass6start && totalSeconds < ttClass6end) {
      // Class 6
      updateClassBar(ttClass6start, ttClass6end);
    }
  } else if (dayOfWeek === 5) {

    if (totalSeconds >= fClass1start && totalSeconds < fClass1end) {
      // Class 1
      updateClassBar(fClass1start, fClass1end);
    } else if (totalSeconds >= fClass2start && totalSeconds < fClass2end) {
      // Class 2
      updateClassBar(fClass2start, fClass2end);
    } else if (totalSeconds >= fClass3start && totalSeconds < fClass3end) {
      // Class 3
      updateClassBar(fClass3start, fClass3end);
    } else if (totalSeconds >= fClass4start && totalSeconds < fClass4end) {
      // Class 4
      updateClassBar(fClass4start, fClass4end);
    } else if (totalSeconds >= fClass5start && totalSeconds < fClass5end) {
      // Class 5
      updateClassBar(fClass5start, fClass5end);
    } else if (totalSeconds >= fClass6start && totalSeconds < fClass6end) {
      // Class 6
      updateClassBar(fClass6start, fClass6end);
    } else if (totalSeconds >= fClass7start && totalSeconds < fClass7end) {
      // Class 7
      updateClassBar(fClass7start, fClass7end);
    } else if (totalSeconds >= fClass8start && totalSeconds < fClass8end) {
      // Class 8
      updateClassBar(fClass8start, fClass8end);
    }
  }
}

function updateClassBar(start, end) {
  const now = new Date();
  const totalSeconds = (now.getHours() * 3600) + (now.getMinutes() * 60) + now.getSeconds();
  const classSeconds = totalSeconds - start;
  const progress = (classSeconds / (end - start)) * 100;
  classCompletedElement.style.width = progress + "%";

  const remainingTime = end - totalSeconds;
  const hoursRemaining = Math.floor(remainingTime / 3600);
  const minutesRemaining = Math.floor((remainingTime % 3600) / 60);
  const secondsRemaining = remainingTime % 60;
  classTimerElement.textContent = `${hoursRemaining.toString().padStart(2, '0')}:${minutesRemaining.toString().padStart(2, '0')}:${secondsRemaining.toString().padStart(2, '0')}`;

  if (totalSeconds >= end) {
    classCompletedElement.style.width = "0%";
    classTimerElement.textContent = "00:00:00";
  }

  const interval = setInterval(() => {
    const now = new Date();
    const totalSeconds = (now.getHours() * 3600) + (now.getMinutes() * 60) + now.getSeconds();
    const classSeconds = totalSeconds - start;
    const progress = (classSeconds / (end - start)) * 100;
    classCompletedElement.style.width = progress + "%";

    const remainingTime = end - totalSeconds;
    const hoursRemaining = Math.floor(remainingTime / 3600);
    const minutesRemaining = Math.floor((remainingTime % 3600) / 60);
    const secondsRemaining = remainingTime % 60;
    classTimerElement.textContent = `${hoursRemaining.toString().padStart(2, '0')}:${minutesRemaining.toString().padStart(2, '0')}:${secondsRemaining.toString().padStart(2, '0')}`;

    if (totalSeconds >= end) {
      clearInterval(interval);
      classCompletedElement.style.width = "0%";
      classTimerElement.textContent = "00:00:00";
    }
  }, 500);
}

// --------------------------------------------------------------------------- Actions

document.getElementById("googleSearch").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
      event.preventDefault(); // Prevent form submission if any
      const query = document.getElementById("googleSearch").value;
      window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, "_blank");
      setTimeout(() => { document.getElementById("googleSearch").value = ""; }, 250);
  }
});

document.getElementById("openCanvas").addEventListener("click", function() {
  window.open(`https://dcsdk12.instructure.com`, "_blank");
});

document.getElementById("openChatGPT").addEventListener("click", function() {
  window.open(`https://chatgpt.com`, "_blank");
});

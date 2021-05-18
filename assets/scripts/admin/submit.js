---
---

// ========================== //
// SUBMIT AN EVENT
// ========================== //

// The purpose of the functions below is to take form fields and
// turn them into something that can be easily pasted
// straight into a Jekyll markdown file.
//
// These functions are simpler versions of the functions above
// and used only on the /admin/submit/event page


function checkEmptyPostFields() {
  var postTitle = document.getElementById("post-title").value;
  var postExcerpt = document.getElementById("post-excerpt").value;

  var emptyfields = "";

  if (postTitle == "") {
    emptyfields += "❌ Post title \n";
  }
  if (postExcerpt == "") {
    emptyfields += "❌ Post summary \n";
  }

  return emptyfields;
}

function postInfoToMarkdown() {
  var postTitle = document.getElementById("post-title").value;
  var postExcerpt = document.getElementById("post-excerpt").value;

  var postPublishYear = document.getElementById("post-year").value;
  var postPublishMonth = document.getElementById("post-month").value;
  var postPublishDay = document.getElementById("post-day").value;

  if (postPublishYear == "" || postPublishMonth == "" || postPublishDay == "") {
    var date = new Date();

    var postPublishYear = date.getFullYear();
    var postPublishMonth = ("00" + (date.getMonth() + 1)).slice(-2);
    var postPublishDay = ("00" + date.getDate()).slice(-2);

    console.info("No date was set so the publish date was set to today's date");
    var postPublishDate = postPublishYear + "-" + postPublishMonth + "-" +  postPublishDay;
  } else {
    var postPublishDate = postPublishYear + "-" + postPublishMonth + "-" +  postPublishDay;
  }

  var postAuthorName = document.getElementById("post-author-name").value;
  var postCategories = document.getElementById("post-categories").value;
  var postCategories = postCategories.toLowerCase();

  var postPermalink = "/news/" + postPublishYear + "/" + postPublishMonth + "/" + postPublishDay + "/" + postTitle.replace(/([^a-z0-9]+)/gi, '-');

  var postcontent = "";

  postcontent += "---\n" // Do not remove – must be present

  postcontent += "layout: format/post\n";
  postcontent += "date: " + postPublishDate + " \# YYYY-MM-DD \n";
  postcontent += "title: \"" + postTitle + "\"\n";
  postcontent += "excerpt: \"" + postExcerpt + "\"\n";
  if (postAuthorName != "") {
    postcontent += "author: \"" + postAuthorName + "\"\n";
  }
  if (postCategories != "") {
    postcontent += "category: \[" + postCategories + "\]\n";
  }
  postcontent += "permalink: \"" + postPermalink + "\"\n";

  postcontent += "---\n\n" // Do not remove – must be present

  postcontent += document.getElementById("post-body").value;


  return postcontent;
}

function postFileName() {
  var postTitle = document.getElementById("post-title").value;
  var filename = postTitle.replace(/([^a-z0-9]+)/gi, '-') + ".md";
  return filename;
}

function postGenerateEmail() {
  var emptyfields = checkEmptyPostFields();
  if (emptyfields != "") {
    alert("You haven't filled in the required fields.\n\nComplete the following information:\n\n" + emptyfields);
  } else {
    var eventcontent = postInfoToMarkdown() // Post content
    var subject = "[Blogpost for website] " + postFileName();

    // Generate the email
    document.location.href = "mailto:info+event@civilservice.lgbt?subject="
    + encodeURIComponent(subject)
    + "&body=" + encodeURIComponent(eventcontent);
  }
}

function postGenerateFile() {
  var emptyfields = checkEmptyPostFields();
  if (emptyfields != "") {
    alert("You haven't filled in the required fields.\n\nComplete the following information:\n\n" + emptyfields);
  } else {
    var eventcontent = postInfoToMarkdown() // Post content
    var filename = postFileName();
    // Create the file and download it
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(postcontent));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }
}









// ========================== //
// SUBMIT AN EVENT
// ========================== //

// The purpose of the functions below is to take form fields and
// turn them into something that can be easily pasted
// straight into a Jekyll markdown file.
//
// These functions are simpler versions of the functions above
// and used only on the /admin/submit/event page


function checkEmptyEventFields() {
  var eventTitle = document.getElementById("event-title").value;
  var eventExcerpt = document.getElementById("event-excerpt").value;
  var eventEventDateYear = document.getElementById("event-event-date-year").value;
  var eventEventDateMonth = document.getElementById("event-event-date-month").value;
  var eventEventDateDay = document.getElementById("event-event-date-day").value;
  var eventEventDateHour = document.getElementById("event-event-date-hour").value;
  var eventEventDateMinute = document.getElementById("event-event-date-minute").value;
  var eventEventLocation = document.getElementById("event-event-location").value;
  var eventEventURL = document.getElementById("event-event-link").value;
  var eventEventEmail = document.getElementById("event-event-email").value;
  var eventEventNoRegister = document.getElementById("event-event-no-register").value;

  var emptyfields = "";

  if (eventTitle == "") {
    emptyfields += "❌ Event title \n";
  }
  if (eventExcerpt == "") {
    emptyfields += "❌ Event description or details \n";
  }
  if (eventEventDateYear == "" || eventEventDateMonth == "" || eventEventDateDay == "") {
    emptyfields += "❌ Event date \n";
  }
  if (eventEventLocation == "") {
    emptyfields += "❌ Event location \n";
  }
  if (eventEventURL == "" && eventEventEmail == "" && eventEventNoRegister == "") {
    emptyfields += "❌ Event registration link, email or no registration message";
  }

  return emptyfields;
}

function eventInfoToMarkdown() {
  var eventTitle = document.getElementById("event-title").value;
  var eventExcerpt = document.getElementById("event-excerpt").value;

  var eventPublishYear = document.getElementById("event-year").value;
  var eventPublishMonth = document.getElementById("event-month").value;
  var eventPublishDay = document.getElementById("event-day").value;

  if (eventPublishYear == "" || eventPublishMonth == "" || eventPublishDay == "") {
    var date = new Date();

    var eventPublishYear = date.getFullYear();
    var eventPublishMonth = ("00" + (date.getMonth() + 1)).slice(-2);
    var eventPublishDay = ("00" + date.getDate()).slice(-2);

    console.info("No date was set so the publish date was set to today's date");
    var eventPublishDate = eventPublishYear + "-" + eventPublishMonth + "-" +  eventPublishDay;
  } else {
    var eventPublishDate = eventPublishYear + "-" + eventPublishMonth + "-" +  eventPublishDay;
  }

  var eventAuthorName = document.getElementById("event-host-name").value;
  var eventCategories = document.getElementById("event-categories").value;
  var eventCategories = eventCategories.toLowerCase();

  var eventEventDateYear = document.getElementById("event-event-date-year").value;
  var eventEventDateMonth = document.getElementById("event-event-date-month").value;
  var eventEventDateDay = document.getElementById("event-event-date-day").value;
  var eventEventDateHour = document.getElementById("event-event-date-hour").value;
  var eventEventDateMinute = document.getElementById("event-event-date-minute").value;
  var eventEventDate = eventEventDateYear + "-" + eventEventDateMonth + "-" +  eventEventDateDay + " " + eventEventDateHour + ":" + eventEventDateMinute + ":00";

  var eventEventRegistrationCloseDateYear = document.getElementById("event-registration-close-date-year").value;
  var eventEventRegistrationCloseDateMonth = document.getElementById("event-registration-close-date-month").value;
  var eventEventRegistrationCloseDateDay = document.getElementById("event-registration-close-date-day").value;
  var eventEventRegistrationCloseDateHour = document.getElementById("event-registration-close-date-hour").value;
  var eventEventRegistrationCloseDateMinute = document.getElementById("event-registration-close-date-minute").value;
  if (eventEventRegistrationCloseDateYear == "" || eventEventRegistrationCloseDateMonth == "" || eventEventRegistrationCloseDateDay == "") {
    var eventEventRegistrationCloseDate = "";
  } else {
    var eventEventRegistrationCloseDate = eventEventRegistrationCloseDateYear + "-" + eventEventRegistrationCloseDateMonth + "-" +  eventEventRegistrationCloseDateDay + " " + eventEventRegistrationCloseDateHour + ":" + eventEventRegistrationCloseDateMinute + ":00";
  }

  var eventEventLocation = document.getElementById("event-event-location").value;
  var eventEventURL = document.getElementById("event-event-link").value;
  var eventEventEmail = document.getElementById("event-event-email").value;
  var eventEventNoRegister = document.getElementById("event-event-no-register").value;

  var eventPermalink = "/event/" + eventEventDateYear + "/" + eventEventDateMonth + "/" + eventEventDateDay + "/" + eventTitle.replace(/([^a-z0-9]+)/gi, '-');

  var eventcontent = "";

  eventcontent += "---\n" // Do not remove – must be present

  eventcontent += "layout: format/event\n";
  eventcontent += "date: " + eventPublishDate + " \# YYYY-MM-DD \n";
  eventcontent += "title: \"" + eventTitle + "\"\n";
  eventcontent += "excerpt: \"" + eventExcerpt + "\"\n";
  if (eventAuthorName != "") {
    eventcontent += "author: \"" + eventAuthorName + "\"\n";
  }
  if (eventCategories != "") {
    eventcontent += "category: \[" + eventCategories + "\]\n";
  }

  eventcontent += "event-date: " + eventEventDate + " \# YYYY-MM-DD hh:mm \n";
  if (eventEventRegistrationCloseDate != "") {
    eventcontent += "registration-close-date: " + eventEventRegistrationCloseDate + " \# YYYY-MM-DD hh:mm \n";
  }
  eventcontent += "location: \"" + eventEventLocation + "\"\n";
  if (eventEventURL != "") {
    eventcontent += "link: \"" + eventEventURL + "\"\n";
  }
  if (eventEventEmail != "") {
    eventcontent += "email: \"" + eventEventEmail + "\"\n";
  }
  if (eventEventNoRegister != "") {
    eventcontent += "no-register: \"" + eventEventNoRegister + "\"\n";
  }

  eventcontent += "permalink: \"" + eventPermalink + "\"\n";


  eventcontent += "---\n\n" // Do not remove – must be present

  eventcontent += document.getElementById("event-body").value;


  return eventcontent;
}

function eventFileName() {
  var eventTitle = document.getElementById("event-title").value;
  var filename = eventTitle.replace(/([^a-z0-9]+)/gi, '-') + ".md";
  return filename;
}

function eventGenerateEmail() {
  var emptyfields = checkEmptyEventFields();
  if (emptyfields != "") {
    alert("You haven't filled in the required fields.\n\nComplete the following information:\n\n" + emptyfields);
  } else {
    var eventcontent = eventInfoToMarkdown() // Post content
    var subject = "[Event for website] " + eventFileName();

    // Generate the email
    document.location.href = "mailto:info+event@civilservice.lgbt?subject="
    + encodeURIComponent(subject)
    + "&body=" + encodeURIComponent(eventcontent);
  }
}

function eventGenerateFile() {
  var emptyfields = checkEmptyEventFields();
  if (emptyfields != "") {
    alert("You haven't filled in the required fields.\n\nComplete the following information:\n\n" + emptyfields);
  } else {
    var eventcontent = eventInfoToMarkdown() // Post content
    var filename = eventFileName();
    // Create the file and download it
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(eventcontent));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }
}
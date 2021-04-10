---
---

function toggleMenu() {
  var menuItems = document.getElementById("menu-items");
  var menuToggle = document.getElementById("menu-toggle");
  menuItems.classList.toggle("closed");
  menuToggle.classList.toggle("open");
}

function getCookie(name) {
  var cookies = document.cookie.split("; ");
  for (var i = 0; i < cookies.length; i++) {
    var parts = cookies[i].split('=');
    var key = parts[0];

    if (key === name) {
      return parts.slice(1).join('=');
    }
  }
}

function setCookie(name, value, days, domain) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  var cookieString = name + "=" + value + expires + "; path=/;";
  if (domain) {
    cookieString = cookieString + " Domain=" + domain + ";";
  }
  document.cookie = cookieString;
}

function removeCookie(name, domain) {
  setCookie(name, "", -1, domain);
}


function deleteCookies(prefix, domain) {
  var cookies = document.cookie.split("; ");
  for (var i = 0; i < cookies.length; i++) {
    var parts = cookies[i].split('=');
    var key = parts[0];

    if (key.indexOf(prefix) === 0) {
      removeCookie(key, domain);
    }
  }
}

function gtag() {
  dataLayer.push(arguments);
}

function startGA(trackingId, domain){
  window['ga-disable-' + trackingId] = false;
  window.dataLayer = window.dataLayer || [];
  gtag("js", new Date());

  gtag("config", trackingId, {
  'cookie_domain': domain
});
}

function stopGA(trackingId, domain) {
  window['ga-disable-' + trackingId] = true;
  deleteCookies("_g", domain);
}


// ========================== //
// CREATE A NEW POST
// ========================== //

// The purpose of the functions below is to take form fields and 
// turn them into something that can be easily pasted
// straight into a Jekyll markdown file – reducing the 
// need to understand how Github works to update the site.
function toggleFieldSets() {
  
  var fieldSetPostCollection = document.getElementById('post-collection');
  var fieldSetPostFormat = document.getElementById('post-format');
  var fieldSetPostTitleAndExcerpt = document.getElementById('post-title-and-excerpt');
  var fieldSetPostCategoriesTopics = document.getElementById('post-categories-topics');
  var fieldSetPostAuthor = document.getElementById('post-author');
  var fieldSetPostDates = document.getElementById('post-dates');
  var fieldSetPostImagesAndVideos = document.getElementById('post-images-and-videos');
  var fieldSetPostEvent = document.getElementById('post-event');
  var fieldSetPostConsultation = document.getElementById('post-consultation');
  var fieldSetPostPermalinksAndRedirects = document.getElementById('post-permalinks-and-redirects');
  var fieldSetPostContent = document.getElementById('post-content');  
  
  var postFormat = document.getElementsByName('post-format');
  for (var i = 0, length = postFormat.length; i < length; i++) {
    if (postFormat[i].checked) {
      // do whatever you want with the checked radio
      postFormat = postFormat[i].value;
      // only one radio can be logically checked, don't check the rest
      break;
    }
  }
  
  fieldSetPostCollection.hidden = false;
  fieldSetPostFormat.hidden = false;
  fieldSetPostTitleAndExcerpt.hidden = false;
  fieldSetPostCategoriesTopics.hidden = false;
  fieldSetPostAuthor.hidden = false;
  fieldSetPostDates.hidden = false;
  fieldSetPostImagesAndVideos.hidden = false;
  fieldSetPostEvent.hidden = false;
  fieldSetPostConsultation.hidden = false;
  fieldSetPostPermalinksAndRedirects.hidden = false;
  fieldSetPostContent.hidden = false;
  
  if (postFormat == "event" || postFormat == "topics" || postFormat == "page" || postFormat == "manual" ) {
    fieldSetPostDates.hidden = true;
  } 
  if (postFormat == "event" || postFormat == "topics" || postFormat == "consultation" ) {
    fieldSetPostImagesAndVideos.hidden = true;
  } 
  if (postFormat == "page" || postFormat == "topics" ) {
    fieldSetPostAuthor.hidden = true;
  } 
  if (postFormat != "event") {
    fieldSetPostEvent.hidden = true;
  } 
  if (postFormat != "consultation") {
    fieldSetPostConsultation.hidden = true;
  }
}

function generateJekyllPost() {
  
  var postFormat = document.getElementsByName('post-format');
  for (var i = 0, length = postFormat.length; i < length; i++) {
    if (postFormat[i].checked) {
      // do whatever you want with the checked radio
      postFormat = postFormat[i].value;
      // only one radio can be logically checked, don't check the rest
      break;
    }
  }
  
  var postTitle = document.getElementById("post-title").value;
  var postExcerpt = document.getElementById("post-excerpt").value;
  
  var postPublishYear = document.getElementById("post-year").value;
  var postPublishMonth = document.getElementById("post-month").value;
  var postPublishDay = document.getElementById("post-day").value;
  
  if (postPublishYear == "" || postPublishMonth == "" || postPublishDay == "") {
    var date = new Date();
    var today =
      date.getFullYear() + "-" + 
      ("00" + (date.getMonth() + 1)).slice(-2) + "-" +
      ("00" + date.getDate()).slice(-2);
    console.info("No date was set so the publish date was set to " + today);
    var postPublishDate = today; 
  } else {
    var postPublishDate = postPublishYear + "-" + postPublishMonth + "-" +  postPublishDay;
  }
  
  var postAuthorName = document.getElementById("post-author-name").value;
  var postAuthorURL = document.getElementById("post-author-url").value;
  var postCategories = document.getElementById("post-categories").value;
  var postImageURL = document.getElementById("post-image").value;
  var postVideoURL = document.getElementById("post-video").value;
  
  var postEventDateYear = document.getElementById("post-event-date-year").value;
  var postEventDateMonth = document.getElementById("post-event-date-month").value;
  var postEventDateDay = document.getElementById("post-event-date-day").value;
  var postEventDateHour = document.getElementById("post-event-date-hour").value;
  var postEventDateMinute = document.getElementById("post-event-date-minute").value;
  var postEventDate = postEventDateYear + "-" + postEventDateMonth + "-" +  postEventDateDay + " " + postEventDateHour + ":" + postEventDateMinute + ":00";
  
  var postEventRegistrationCloseDateYear = document.getElementById("post-registration-close-date-year").value;
  var postEventRegistrationCloseDateMonth = document.getElementById("post-registration-close-date-month").value;
  var postEventRegistrationCloseDateDay = document.getElementById("post-registration-close-date-day").value;
  var postEventRegistrationCloseDateHour = document.getElementById("post-registration-close-date-hour").value;
  var postEventRegistrationCloseDateMinute = document.getElementById("post-registration-close-date-minute").value;
  if (postEventRegistrationCloseDateYear == "" || postEventRegistrationCloseDateMonth == "" || postEventRegistrationCloseDateDay == "") {
    var postEventRegistrationCloseDate = "";
  } else {
    var postEventRegistrationCloseDate = postEventRegistrationCloseDateYear + "-" + postEventRegistrationCloseDateMonth + "-" +  postEventRegistrationCloseDateDay + " " + postEventRegistrationCloseDateHour + ":" + postEventRegistrationCloseDateMinute + ":00";
  }
  
  var postEventLocation = document.getElementById("post-event-location").value;
  var postEventURL = document.getElementById("post-event-link").value;
  var postEventEmail = document.getElementById("post-event-email").value;
  var postEventNoRegister = document.getElementById("post-event-no-register").value;
  
  var postConsultationURL = document.getElementById("post-consultation-link").value;
  var postConsultationEndYear = document.getElementById("post-consultation-end-year").value;
  var postConsultationEndMonth = document.getElementById("post-consultation-end-month").value;
  var postConsultationEndDay = document.getElementById("post-consultation-end-day").value;
  var postConsultationEndDate = postConsultationEndYear + "-" + postConsultationEndMonth + "-" +  postConsultationEndDay;
  
  var postPermalink = document.getElementById("post-permalink").value;
  
  var jekyllpost = "";
  
  jekyllpost += "---\n" // Do not remove – must be present
  
  jekyllpost += "layout: " + postFormat+ "\n";
  jekyllpost += "date: " + postPublishDate + " \# YYYY-MM-DD \n";
  jekyllpost += "title: \"" + postTitle + "\"\n";
  jekyllpost += "excerpt: \"" + postExcerpt + "\"\n";
  if (postAuthorName != "") {
    jekyllpost += "author: \"" + postAuthorName + "\"\n";
  }
  if (postAuthorURL != "") {
    jekyllpost += "author-url: \"" + postAuthorURL + "\"\n";
  }
  if (postCategories != "") {
    jekyllpost += "categories: \[" + postCategories + "\]\n";
  }
  if (postImageURL != "") {
    jekyllpost += "image: \"" + postImageURL + "\"\n";
  }
  if (postVideoURL != "") {
    jekyllpost += "video: \"" + postVideoURL + "\"\n";
  }
  if (postFormat == "event") {
    jekyllpost += "event-date: " + postEventDate + " \# YYYY-MM-DD hh:mm \n";
    if (postEventRegistrationCloseDate != "") {
      jekyllpost += "registration-close-date: " + postEventRegistrationCloseDate + " \# YYYY-MM-DD hh:mm \n";
    }
    jekyllpost += "location: \"" + postEventLocation + "\"\n";
    if (postEventURL != "") {
      jekyllpost += "link: \"" + postEventURL + "\"\n";
    }
    if (postEventEmail != "") {
      jekyllpost += "email: \"" + postEventEmail + "\"\n";
    }
    if (postEventNoRegister != "") {
      jekyllpost += "no-register: \"" + postEventNoRegister + "\"\n";
    }
  }
  if (postFormat == "consultation") {
    jekyllpost += "consultation-link: \"" + postConsultationURL + "\"\n";
    jekyllpost += "end-date: " + postConsultationEndDate + " \# YYYY-MM-DD \n";
  }
  jekyllpost += "permalink: \"" + postPermalink + "\"\n";
      
  jekyllpost += "---\n\n" // Do not remove – must be present
  
  if (postFormat == "publication") {
    jekyllpost += "<!-- Include the following to generate a Table of Contents -->" + "\n";
    jekyllpost += "* Table of contents will generate here" + "\n";
    jekyllpost += "{:toc}" + "\n";
    jekyllpost += "<!-- Include this line to process the Markdown and format the content properly -->" + "\n";
    jekyllpost += "<div id=\"page-content\" markdown=\"1\">" + "\n";
    jekyllpost += "<!-- Don't remove code above -->" + "\n";
    jekyllpost += "\n\n";
  }
  
  jekyllpost += document.getElementById("post-body").value;
  
  if (postFormat == "publication") {
    jekyllpost += "\n\n";
    jekyllpost += "<!-- Include this line to process the Markdown and format the content properly -->" + "\n";
    jekyllpost += "</div>" + "\n";
    jekyllpost += "<!-- Don't remove the line of code above -->" + "\n";
  }
  
  
  
  return jekyllpost;

}

function copyToClipboard(){
    
    var textToCopy = generateJekyllPost();
    navigator.clipboard.writeText(textToCopy);
    
    document.getElementById("post-output").innerText = textToCopy;
    
}

function createNewPost() {
  
  copyToClipboard();

  var postCollection = document.getElementsByName('post-collection');
  for (var i = 0, length = postCollection.length; i < length; i++) {
    if (postCollection[i].checked) {
      // do whatever you want with the checked radio
      postCollection = postCollection[i].value;
      // only one radio can be logically checked, don't check the rest
      break;
    }
  }
  var createPostURL = "{{ site.code-repo }}/new/{{ site.code-repo--branch }}/" + postCollection;
  window.open(
    createPostURL, "_blank");
  
}

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
// ADMIN PAGES
// GENERATE POST CONTENT
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
  var fieldSetPostPermalinkSetup = document.getElementById('post-permalink-setup');
  var fieldSetPostRedirects = document.getElementById('post-redirects');
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
  fieldSetPostPermalinkSetup.hidden = false;
  fieldSetPostContent.hidden = false;

  if (postFormat == "format/event" || postFormat == "format/topics" || postFormat == "format/page" || postFormat == "format/manual" ) {
    fieldSetPostDates.hidden = true;
  }
  if (postFormat == "format/event" || postFormat == "format/topics" || postFormat == "format/consultation" || postFormat == "format/manual" ) {
    fieldSetPostImagesAndVideos.hidden = true;
  }
  if (postFormat == "format/page" || postFormat == "format/topics" ) {
    fieldSetPostAuthor.hidden = true;
  }
  if (postFormat != "format/event") {
    fieldSetPostEvent.hidden = true;
  }
  if (postFormat != "format/consultation") {
    fieldSetPostConsultation.hidden = true;
  }
}

function generateJekyllPostContent() {

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
  var postCategories = postCategories.toLowerCase();
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
  var postRedirectFrom = document.getElementById("post-redirect_from").value;
  var postRedirectTo = document.getElementById("post-redirect_to").value;

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
    jekyllpost += "category: \[" + postCategories + "\]\n";
  }
  if (postImageURL != "") {
    jekyllpost += "image: \"" + postImageURL + "\"\n";
  }
  if (postVideoURL != "") {
    jekyllpost += "video: \"" + postVideoURL + "\"\n";
  }
  if (postFormat == "format/event") {
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
  if (postFormat == "format/consultation") {
    jekyllpost += "consultation-link: \"" + postConsultationURL + "\"\n";
    jekyllpost += "end-date: " + postConsultationEndDate + " \# YYYY-MM-DD \n";
  }
  if (postPermalink != "") {
    jekyllpost += "permalink: \"" + postPermalink + "\"\n";
  }
  if (postRedirectFrom != "") {
    jekyllpost += "redirect_from: \n- " + postRedirectFrom + "\n";
  }
  if (postRedirectTo != "") {
    jekyllpost += "redirect_to: \n- " + postRedirectTo + "\n";
  }

  jekyllpost += "---\n\n" // Do not remove – must be present

  if (postFormat == "format/publication") {
    jekyllpost += "<!-- Include the following to generate a Table of Contents -->" + "\n";
    jekyllpost += "* Table of contents will generate here" + "\n";
    jekyllpost += "{:toc}" + "\n";
    jekyllpost += "<!-- Include this line to process the Markdown and format the content properly -->" + "\n";
    jekyllpost += "<div id=\"page-content\" markdown=\"1\">" + "\n";
    jekyllpost += "<!-- Don't remove code above -->" + "\n";
    jekyllpost += "\n\n";
  }

  jekyllpost += document.getElementById("post-body").value;

  if (postFormat == "format/publication") {
    jekyllpost += "\n\n";
    jekyllpost += "<!-- Include this line to process the Markdown and format the content properly -->" + "\n";
    jekyllpost += "</div>" + "\n";
    jekyllpost += "<!-- Don't remove the line of code above -->" + "\n";
  }



  return jekyllpost;

}

function generateJekyllPostFileName() {

  // Post file names should usually be in the format:
  //   2021-12-31-filename.md
  //
  // Unless they are events, pages, topics or manuals, in which
  // case they should omit the date:
  //   filename.md
  //
  // Instead of dates in the file name, events should be nested in
  // folders reflecting their respective dates; this will be reflected
  // in the permalink structure.

  var postCollection = getCollection();

  if (
    postCollection == "_events" ||
    postCollection == "_topics" ||
    postCollection == "_pages" ||
    postCollection == "_manuals"
  ) {
    // Does not have a post date
    var postDate = "";
  } else {

    var postPublishYear = document.getElementById("post-year").value;
    var postPublishMonth = document.getElementById("post-month").value;
    var postPublishDay = document.getElementById("post-day").value;
    if (postPublishYear == "" || postPublishMonth == "" || postPublishDay == "") {
      var date = new Date();

      var postPublishYear = date.getFullYear();
      var postPublishMonth = ("00" + (date.getMonth() + 1)).slice(-2);
      var postPublishDay = ("00" + date.getDate()).slice(-2);

      console.info("No date was set so the publish date was set to today's date");
    }

    var postDate = postPublishYear + "-" + postPublishMonth + "-" +  postPublishDay+ "-";
  }

  var postTitle = document.getElementById("post-title").value;
  var postTitle = postTitle.toLowerCase();

  if (postTitle != "") {
    var postFilename = postDate + postTitle.replace(/([^a-z0-9]+)/gi, '-') + '.md';
  } else {
    var postFilename = null;
  }

  return postFilename;
}

function generateJekyllPostPermalink() {

  // Post permalinks should usually be in either of these formats:
  //   /collection/2021/12/31/filename
  //   /collection/filename/
  //
  // Permalinks should be prepended by the page layout name unless
  // they are in the _pages collection.

  var postCollection = getCollection();

  if ( postCollection == "_consultations" ) {
    var postCollectionPermalink = "/consultation/";
  } else if ( postCollection == "_events" ) {
    var postCollectionPermalink = "/event/";
  } else if ( postCollection == "_manuals" ) {
    var postCollectionPermalink = "/manual/";
  } else if ( postCollection == "_news" ) {
    var postCollectionPermalink = "/news/";
  } else if ( postCollection == "_notices" ) {
    var postCollectionPermalink = "/notice/";
  } else if ( postCollection == "_pages" ) {
    var postCollectionPermalink = "/";
  } else if ( postCollection == "_publications" ) {
    var postCollectionPermalink = "/publication/";
  } else if ( postCollection == "_topics" ) {
    var postCollectionPermalink = "/topic/";
  } else {
    var postCollectionPermalink = "/";
  }

  if ( postCollection == "_events" ) {
    // If it's an event, it will have a date set by the event start date, not the post date
    var postEventDateYear = document.getElementById("post-event-date-year").value;
    var postEventDateMonth = document.getElementById("post-event-date-month").value;
    var postEventDateDay = document.getElementById("post-event-date-day").value;
    var postDate  = postEventDateYear + "/" + postEventDateMonth + "/" +  postEventDateDay + "/";
    if (postEventDateYear == "" || postEventDateMonth == "" || postEventDateDay == "") {
      alert("ERROR\n\nNo date was set for the event.\n\nAll events require a date.\n\nSet the date in the “Add the event details” section");
    }
  } else if (
    postCollection == "_topics" ||
    postCollection == "_pages" ||
    postCollection == "_manuals"
  ) {
    // Does not have a post date
    var postDate = "";
  } else {
    // All other posts will likely be dated
    var postPublishYear = document.getElementById("post-year").value;
    var postPublishMonth = document.getElementById("post-month").value;
    var postPublishDay = document.getElementById("post-day").value;
    if (postPublishYear == "" || postPublishMonth == "" || postPublishDay == "") {
      var date = new Date();

      var postPublishYear = date.getFullYear();
      var postPublishMonth = ("00" + (date.getMonth() + 1)).slice(-2);
      var postPublishDay = ("00" + date.getDate()).slice(-2);

      console.info("No date was set so the publish date was set to today's date");
    }

    var postDate = postPublishYear + "/" + postPublishMonth + "/" +  postPublishDay+ "/";
  }

  var postTitle = document.getElementById("post-title").value;
  var postTitle = postTitle.toLowerCase();

  if (postTitle != "") {
    var postPermalink = postCollectionPermalink + postDate + postTitle.replace(/([^a-z0-9]+)/gi, '-');
  } else {
    var postPermalink = null;
  }



  return postPermalink;

}

// ========================== //
// ADMIN: PREVIEW
// ========================== //

function updatePostPreview() {
  var headerText = generateJekyllPostFileName();
  var bodyText = generateJekyllPostContent();
  // Show a preview
  updatePostPreviewHeader(headerText);
  // Show a preview
  updatePostPreviewBody(bodyText);

}

function updatePostPreviewHeader(previewtext) {
  // Show a preview
  document.getElementById("post-preview-header").innerText = previewtext;
}

function updatePostPreviewBody(previewtext) {
  // Show a preview
  document.getElementById("post-preview-output").innerText = previewtext;
}

// ========================== //
// ADMIN: GENERATE URL
// ========================== //

function getFormat() {
  var postFormat = document.getElementsByName('post-format');
  for (var i = 0, length = postFormat.length; i < length; i++) {
    if (postFormat[i].checked) {
      // do whatever you want with the checked radio
      postFormat = postFormat[i].value;
      // only one radio can be logically checked, don't check the rest
      break;
    }
  }

  return postFormat;
}

function getCollection() {
  var postCollection = document.getElementsByName('post-collection');
  for (var i = 0, length = postCollection.length; i < length; i++) {
    if (postCollection[i].checked) {
      // do whatever you want with the checked radio
      postCollection = postCollection[i].value;
      // only one radio can be logically checked, don't check the rest
      break;
    }
  }

  return postCollection;
}

// ========================== //
// ADMIN: SHOW OUTPUTS
// ========================== //

function getFileName() {
  var filename = generateJekyllPostFileName();
  var filenameTextField = document.getElementById("post-recommended-filename");
  filenameTextField.value = filename;
  updatePostPreview()
}

function getPermalink() {
  var filename = generateJekyllPostPermalink();
  var filenameTextField = document.getElementById("post-permalink");
  filenameTextField.value = filename;
  updatePostPreview()
}

// ========================== //
// ADMIN: OPEN / FOCUS GITHUB
// ========================== //


function createGitHubPostURL() {
  var postCollection = getCollection();
  var postURL = "{{ site.git-repos | append: site.site-repo }}/new/{{ site.site-repo--branch }}/" + postCollection;
  if (postCollection == "_events") {
    var postEventDateYear = document.getElementById("post-event-date-year").value;
    var postEventDateMonth = document.getElementById("post-event-date-month").value;
    var postEventDateDay = document.getElementById("post-event-date-day").value;
    var postEventDate = "/" + postEventDateYear + "/" + postEventDateMonth + "/" +  postEventDateDay;
    postURL += postEventDate ;
  }
  return postURL;
}

function openGitHub() {
  var postURL = createGitHubPostURL();
  var GitHubWindow = window.GitHub = window.open(postURL, "GitHub");
}

function focusGitHub() {
  var postURL = createGitHubPostURL();
  if (!window.GitHub || window.GitHub.closed) {
      window.GitHub = window.open(postURL, "GitHub");
  }
  window.GitHub.focus();
}

function testPermalink() {
  var postPermalink = document.getElementById("post-permalink").value;
  var postURL = 'https://www.civilservice.lgbt/' + postPermalink;
  var postWindow = window.open(postURL, "Civil Service LGBT+ Network");
}

function createGitHubDirectory(id, repo, rootdir) {

  // URL needs to be in this format:
  // https://github.com/civilservicelgbt/REPO/upload/main/ROOT-DIRECTORY

  var id = id;
  var repo = repo;
  var dir = rootdir;

  var field = document.getElementById(id)
  var fieldvalue = field.value;
  if (fieldvalue == "") {
    var fieldvalue = "/";
  } else {
    var fieldvalue = '/' + field.value;
  }
  var postURL = '{{ site.git-repos }}' + '/' + repo + '/upload/main/' + dir + fieldvalue;
  var GitHubWindow = window.GitHub = window.open(postURL, "GitHub – New file in folder");
}

// ========================== //
// ADMIN: COPY TEXT FUNCS
// ========================== //

function cleanFieldInput(id) {
  var field = document.getElementById(id)
  var fieldvalue = field.value;
  var clean = fieldvalue.replace(/([^a-z0-9]+)/gi, '-');
  var clean = clean.toLowerCase();
  console.log("Input “" + fieldvalue + "” cleaned to “" + clean + "”" )
  field.value = clean;
}

function copyFieldInput(id) {
  var field = document.getElementById(id)
  var fieldvalue = field.value;
  navigator.clipboard.writeText(fieldvalue);
}

function copyURL(url){
  var copiedText = url;
  navigator.clipboard.writeText(copiedText);
}

function copyPostContentToClipboard(){
  var textToCopy = generateJekyllPostContent();
  navigator.clipboard.writeText(textToCopy);
  // Show a preview
  updatePostPreviewBody(textToCopy)
}

function copyFieldContentToClipboard(el){
  /* Get the text field */
  var textToCopy = document.getElementById(el).value;
  if (textToCopy == "") {
    alert("ERROR\n\nCannot copy.\n\nThe text field you are trying to copy is empty.\n\nTry using the “Generate” button first.");
  } else {
    /* Copy the text inside the text field */
    navigator.clipboard.writeText(textToCopy);
  }
}




// ========================== //
// ADMIN PAGES
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
  if (eventEventURL == "" || eventEventEmail == "" || eventEventNoRegister == "") {
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
    var today =
      date.getFullYear() + "-" +
      ("00" + (date.getMonth() + 1)).slice(-2) + "-" +
      ("00" + date.getDate()).slice(-2);
    console.info("No date was set so the publish date was set to " + today);
    var eventPublishDate = today;
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

function generateEventEmail() {
  var emptyfields = checkEmptyEventFields();
  if (emptyfields != "") {
    alert("You haven't filled in the required fields.\n\nComplete the following information:\n\n" + emptyfields);
  } else {
    var eventcontent = eventInfoToMarkdown() // Post content
    var subject = "[Event for website]" + "event name and date";

    // Generate the email
    document.location.href = "mailto:info+event@civilservice.lgbt?subject="
    + encodeURIComponent(subject)
    + "&body=" + encodeURIComponent(eventcontent);
  }
}

function generateEventFile() {
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

// Start file download.
// generateEventFile("hello.md","This is the content of my file :)");
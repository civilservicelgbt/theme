---
title:  						"Event template"
excerpt:	  					"A brief description of the event."

date: 						2000-01-01 00:00:00
registration-close-date: 	1999-12-01 # Optional
location: 					"123 Example Road, Example City, EX1 X23"
link: 						https://www.example.com
email: 						info@example.com

layout: 						event
slug:						/event-template
---

Use the "Event" document template when you want to list an event. Store these posts in the `_events` folder.

Note, unlike our previous website, these events can be listed from anywhere - you don't need to use Eventbrite first (but it helps).

### Filenames

**Important!** Use this format for the filename: `YYYY-MM-DD-title-of-event`.

### Post setup

You will need to include the following information in the post's front matter.

``` liquid
title: "Event template"
excerpt: "A brief description of the event."

date: 2000-01-01 00:00:00
registration-close-date: 1999-12-01 # Optional
location: "123 Example Road, Example City, EX1 X23"
link: https://www.example.com
email: info@example.com

layout: 						event
```

The `date` field is the date the event is happening.

The `registration-close-date` should be **before** the `date`, and should be the date which registrations close. This field is **optional**

If you need to override the slug from the post's URL, add the following information to the post's front matter:

``` liquid
slug: event-template
```
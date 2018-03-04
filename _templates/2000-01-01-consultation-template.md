---
title:  				"Consultation title"
excerpt:	  			"A brief description of the consultation."
date:   				2000-01-01

consultation-link: 	https://www.example.com
end-date: 			2050-01-01

layout: 				consultation
---

## Consultation description

Use the "Consultation" document layout when you want to set up a consultation of some kind. Store these posts in the `_consultations` folder.

### Filenames

**Important!** Use this format for the filename: `YYYY-MM-DD-title-of-consultation`.

### Post setup

In this area, you should include background information about the consultation. Include links to [any relevant documents](https://www.example.com). Use the `consultation-link` variable in the post's front matter for links to surveys or the main consultation document.

You will need to include the following information in the post's front matter.

``` liquid
title: "Consultation title"
excerpt: "A brief description of the consultation."
date: 2000-01-01 00:00:00 +0000

consultation-link: https://www.example.com
end-date: 2050-01-01

layout: consultation
```

If you need to override the slug from the post's URL, add the following information to the post's front matter:

``` liquid
slug: consultation-template
```

By default, the slug will be the same as the file name, without the date information.

## Consultation outcome

When the consultation has closed, you should come back and add a consultation outcome.
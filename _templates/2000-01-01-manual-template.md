---
title:  				"Manual template"
excerpt:	  			"A brief description of the manual."

categories: 			volunteers

layout: 				manual
slug:				/manual-template
---

<!-- Include the following to generate a Table of Contents -->
* Table of contents will generate here
{:toc}
<!-- Don't touch the Table of Contents above -->

<!-- Include this line to process the Markdown and format the content properly -->
<div id="page-content" markdown="1">
<!-- Don't remove the line of code above -->


Use the "Manual" document layout to publish guidance, policy and resources. Store these posts in the `_manuals` folder.

When these posts are printed using modern browsers like Microsoft Edge, Google Chrome or Mozilla Firefox, these manuals automatically print as properly formatted A4 documents.

## File setup 

### Filenames

**Important!** Use this format for the filename: `YYYY-MM-DD-title-of-manual`.

### Post front matter

You will need to include the following information in the post's front matter.

``` liquid
title:  "Manual template"
date:   2000-01-01

layout: manual
```

If you need to override the slug from the post's URL, add the following information to the post's front matter:

``` liquid
slug: manual-template
```

By default, the slug will be the same as the filename, without the date information.

### Table of contents

All manuals should have a Table of Contents. These are generated automatically from level 2 heading titles (i.e. `## Titles`).

You **must** include the following at the beginning of each manual, **after the front matter**:

``` html
<!-- Include the following to generate a Table of Contents -->
* Table of contents will generate here
{:toc}
<!-- Don't touch the Table of Contents above -->

<!-- Include this line to process the Markdown and format the content properly -->
<div id="page-content" markdown="1">
<!-- Don't remove the line of code above -->
```

At the **end** of each post, **after your content** include the following:

```
<!-- Include this line to process the Markdown and format the content properly -->
</div>
<!-- Don't remove the line of code above -->
```

## Manual content

Include your content as you do with any other post, using headings to separate sections. 

When printing, level 2 headings (i.e. `## Titles`) will always start on a new page; all other headings stay in flow of the document.

<!-- Include this line to process the Markdown and format the content properly -->
</div>
<!-- Don't remove the line of code above -->
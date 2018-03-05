---
title:  				"Publication template"
date:   				2000-01-01

layout: 				publication
slug:				/publication-template
---


<!-- Include the following to generate a Table of Contents -->
* Table of contents will generate here
{:toc}
<!-- Don't touch the Table of Contents above -->

<!-- Include this line to process the Markdown and format the content properly -->
<div id="page-content" markdown="1">
<!-- Don't remove the line of code above -->


Use the "Publication" document layout to publish guidance, policy and resources. Store these posts in the `_publications` folder.

When these posts are printed using modern browsers like Microsoft Edge, Google Chrome or Mozilla Firefox, these publications automatically print as properly formatted A4 documents.

## File setup 

### Filenames

**Important!** Use this format for the filename: `YYYY-MM-DD-title-of-publication`.

### Post front matter

You will need to include the following information in the post's front matter.

``` liquid
title:  "Publication template"
date:   2000-01-01

layout: publication
```

If you need to override the slug from the post's URL, add the following information to the post's front matter:

``` liquid
slug: publication-template
```

By default, the slug will be the same as the filename, without the date information.

### Table of contents

All publications should have a Table of Contents. These are generated automatically from level 2 heading titles (i.e. `## Titles`).

You **must** include the following at the beginning of each publication, **after the front matter**:

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

## Publication content

Include your content as you do with any other post, using headings to separate sections. 

When printing, level 2 headings (i.e. `## Titles`) will always start on a new page; all other headings stay in flow of the document.

<!-- Include this line to process the Markdown and format the content properly -->
</div>
<!-- Don't remove the line of code above -->
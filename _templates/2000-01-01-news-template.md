---
title:  		"News post template"
excerpt:  	"A brief excerpt of the post."

image: 		/assets/images/posts/image.png
image-alt:	"Alt text for the featured image."

category: news

layout: 		news
---

Use the "News" document template for blog posts and news articles. Store these posts in the `_posts` folder.

### Filenames

**Important!** Use this format for the filename: `YYYY-MM-DD-title-of-post`.

### Post setup

You will need to include the following information in the post's front matter.

``` liquid
title: "News post template"
excerpt: "A brief excerpt of the post."

category: news

layout: news
```

#### Featured image

News posts can include a featured image. If you want to include a featured image, add the following to the post's front matter:

```
image: /assets/images/posts/image.png
image-alt: "Alt text for the featured image."
```

#### Categories

You should include **at least** one category in every news post. If more than one post exists with the same category, the template will show a "related content" box on each page with similar posts.

Add this to your post:

```
category: news
```

Each category **must be one word only** and they **must be separated by a space**

#### Post slug

If you need to override the slug from the post's URL, add the following information to the post's front matter:

``` liquid
slug: consultation-template
```

By default the slug for news posts is the same as the filename **including** the date.
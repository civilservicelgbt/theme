# CSLGBT+ Theme

This theme is for use by the Civil Service LGBT+ Network on its sites.

## Set up your theme

Before you get started, you'll need to do a bit of set up.

### 1. Set up _config.yml

If you don't already have one, create a `_config.yml` file in the site's root directory.

This theme requires the following information to be added to that file to function:

#### Basic information

- `title:` (string) - Add a title for the site. We use "Civil Service LGBT+ Network". This will show up in the navbar, in bookmarks and social shares, and in the footer of the site.
- `short-title:` (string) - Add a 'short' title that show up in the site's header. e.g. instead of "Civil Service LGBT+ Network", we use "Civil Service LGBT+".
- `author:` (string) - The name of your organisation. e.g. "Civil Service LGBT+ Network".
- `description:` (string) - This is a brief description of the site (or organisation the site is for). It should be up to 160 characters for Search Engine Optimisation.

#### Home page section toggles

There are 4 sections that display on the homepage: news, events, publications and consultations.

By default, they do not appear. You need to manually enable them. To do that add:

- `home-news: true` (boolean) - This shows the latest news posts
- `home-events: true` (boolean) - This shows upcoming events
- `home-publications: true` (boolean) - This shows the latest publications
- `home-consultations: true` (boolean) - This shows recent consulations (both open and closed)

#### Splash area information

- `home-splash-h1: (string)` - This adds a level 1 heading to the home page splash area. Add something like "Hello".
- `home-splash-h2: (string)` - This adds a level 2 heading to the home page splash area. Add something like "We're the Civil Service LGBT+ Network".
- `home-splash-p: (string)` - This adds paragraph text to the home page splash area. Add something like "We're helping to create a more diverse, inclusive and equal place to work for lesbian, gay, bisexual and trans civil servants."
Other settings
A number of other settings also need to be added for things like social media and analytics.

These should be obvious from the template _config.yml included in this theme. (It's in the '_templates' folder)

### 2. Set up menus

There are 3 menus in this theme. Each is controlled through a .csv file in the _data folder.

Blank versions have been included in this theme, but you will need to add them to your site's _data directory.

- `menu.csv` - controls the header menu.
- `membership.csv` - controls the menu in the centre top of the footer. You should use it for important links like membership registration.
- `disclaimer.csv` - controls the menu at the bottom of the footer. Use it for links to 'terms and conditions' style pages.

---

## Installation (for Github pages)

add this line to your Jekyll site's `_config.yml`:

```yaml
remote_theme: cslgbt-theme
```

---

## Installation (for local deployment)

Add this line to your Jekyll site's `Gemfile`:

```ruby
gem "cslgbt-theme"
```

And add this line to your Jekyll site's `_config.yml`:

```yaml
theme: cslgbt-theme
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install cslgbt-theme
    
---

## Usage

This Jekyll theme has been created for use by the Civil Service LGBT+ network. It is available under the Open Government License.

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/civilservicelgbt/cslgbt-theme. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.	
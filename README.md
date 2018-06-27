# sps-website

Website designed for the Northeastern SPS using Jekyll. In order to build the website, you need to install [jekyll](https://jekyllrb.com) on your machine (`gem install bundler jekyll`). 

## Build Instructions
Clone this repo, run `bundle install`, and then run `bundle exec jekyll server` to preview the 
website at http://localhost:4444 (or possibly 
https://localhost:4444/sps/). 

In order to generate a full HTML website from these files, run `jekyll build`. This generates HTML and CSS to be published onto a web server in the _site directory. The contents of this folder can be copied onto the SPS web server for deployment.

## About

The site is primarly built on Jekyll, a static site generating framework that uses the Liquid templating engine. Page structure is handled with the Bootstrap grid system, and styling is written in Sass SCSS (which Jekyll processes automatically). Some icons are powered by FontAwesome.

## Editing

The primary contents of the website can be found in the root directory (ex. index.md, org.md, res-gre.md, ...) as Markdown files. New pages (either HTML (.html) or Markdown (.md)) can be added into the `pages` directory and they will be added to the navigation automatically. Make sure you specify the front matter of each page (between the triple dashes) so that Jekyll can see the file and sort it correctly. Certain tags (e.g. "resources") will also sort the page automatically in site navigation (for example, into a dropdown menu).

The E-Board page is driven by data stored in `/_data/eboard.yml` and is extremely readable. Simply editing this file will automatically restructure the Meet Our Eboard page to change information, add new members, add new positions, and more. Other auto-generated sections (e.g. people and places) are driven similarly and cal also be edited in this way.

## Structure

A lot of work has gone into making this website as DRY as possible by modularizing components and patterns that are commonly used in page construction. The current page structure is built out from layouts that nest inside of each other to create the type of page desired. To begin to understand how this works, we need to learn a little bit about how Jekyll layouts work.

When a file specifies `layout: foo` in its front matter, Jekyll looks for `foo` in the `_layouts` folder and assigns the content of the file to a variable called `content`. The intention for this is that somewhere in the layout, you will call for `content`, and Jekyll will substitute your file in there and return the combined HTML or Markdown. This is extremely useful when you realize that layouts can call for other layouts, which results in their code being placed inside of the `content` of the requested layout. To see how this plays out, take a look at how the code for the `page` layout includes only the relevant markup that makes the page look like a `page`. All of the boilerplate stuff is handled in the layouts that `page` will be placed inside. This allows you to quickly design the parts of the pages that matter instead of typiing out the things we know will be constant between each page every time.

Now that that's explained, we can go into explaining our recommended structure for assembling pages, and the elements contained in each layout.

* The `default` layout should (in 95% of cases) be the layout that *every other layout* sits inside (exceptions include only if a layout requires full page-width elements, which are not possible with this layout, but those should be rare anyway). Default takes care of many things which remain exactly the same between all pages on the website, such as the page head code (CSS, SEO), the navbar, the footer, and the sitewide page margins. Inside the body, it sets up a `main` element (the primary element under which all body content should be) with classes `container` and `page-content`. The latter class is currently not used anywhere, but I decided it might be useful as a semantic reminder at the least. Giving `main` the `container` class allows it to style itself with the site-wide page margins (meaning that you do not need to handle page margins anywhere else but here!).

* The `page` layout is the layout that should be used for article-style (non-blog) pages. Notice that it requests `layout: default` in its front matter, meaning that all of its code will be placed inside of the `main` element in `default`. This means that we are already inside of a Bootstrap container, and so to begin setting up the grid-system for a regular page, we begin with two nested divs: one row class and one column class. Inside the column div, we have an `article` element with class `post` (also currently semantic), and inside of that there is a `header` with class `post-header` and a final div with class `post-content` both semantic. At last, we arrive at the place where the actual content will go. Notice, however, how many points are exposed for styling all the way down the line from the `main` element to the final div. That's flexibility.

* In takeaway, the `default` layout sets you up with a bare margin-set, Bootstrap container to work inside of, while the `page` layout leaves you inside of a div inside of an `article` to write pure text content (all the rest of the styling is taken care of). Yeah, that's what I think I was getting at.

## Who Did This?

This website was originally designed by the 2018-2019 SPS E-Board, led by Webmaster Josh Towner, with some work also done by Nabeel Sherazi. We made this website extremely well-documented in hopes that future E-Boards would be able to easily edit, maintain, and redesign the SPS website should they so desire (and they should!). Hopefully, this documentation will evolve as the website also evolves so that maintaining is always easy and answers are always there :)
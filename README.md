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

The primary contents of the website can be found in the root directory (ex. index.md, org.md, res-gre.md, ...) as Markdown files. New pages (either HTML (.html) or Markdown (.md)) can be added in the root directory of the Jekyll website and they will be added to the navigation automatically. Certain tags (e.g. "resources") will also sort the page automatically in site navigation (for example, into a dropdown menu).

The E-Board page is driven by data stored in `/_data/eboard.yml` and is extremely readable. Simply editing this file will automatically restructure the Meet Our Eboard page to change information, add new members, add new positions, and more.



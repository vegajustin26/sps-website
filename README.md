# sps-website

Website designed for the Northeastern SPS using Jekyll. In order to build the website, you need to install [jekyll](https://jekyllrb.com) on your machine (`gem install bundler jekyll`). 

Clone this repo, and then run `bundle exec jekyll server` to preview the 
website at http://localhost:4444 (or possibly 
https://localhost:4444/sps/new). 

The primary contents of the website can be found in the root directory (ex. index.md, org.md, res-gre.md, ...) as Markdown files. New pages (either HTML (.html) or Markdown (.md)) can be added in the root directory of the jekyll website and they will be added to the navigation automatically. 

In order to generate a full HTML website from these files, run `jekyll build`. This generates HTML and CSS to be published onto a web server in the _site directory. The contents of this folder can be copied onto the SPS web server for deployment. 

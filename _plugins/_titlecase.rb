require 'liquid'
require 'uri'

# Custom plugin to capitalize all words of the input
module TitleCase
  def titlecase(words)
    return words.split(' ').map(&:capitalize).join(' ')
  end
end

Liquid::Template.register_filter(TitleCase)
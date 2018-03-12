require "stringer/version"
module Stringer
    def self.spacify *strings
       strings.join(" ")
    end

    def self.minify text, len
      if len > text.length
         return text
      end
      "#{text[0...len]}..."
   end
end

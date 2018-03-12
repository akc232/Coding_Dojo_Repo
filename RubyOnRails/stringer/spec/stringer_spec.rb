require "spec_helper"

RSpec.describe Stringer do
  it "has a version number" do
    expect(Stringer::VERSION).not_to be nil
  end

  it "concatenates undefined number of strings with a space" do
    expect(Stringer.spacify"Andrew", "Chang", "Says", "Cheers", "Mate").to eq("Andrew Chang Says Cheers Mate")
  end

  context "minifies the string depending on the argument value" do
     it "shortens the string up to the number of characters in the argument and adds '...'" do
       expect(Stringer.minify("Hello, I'm learning how to create a gem", 10)).to eq("Hello, I'm...")
    end
  end
end

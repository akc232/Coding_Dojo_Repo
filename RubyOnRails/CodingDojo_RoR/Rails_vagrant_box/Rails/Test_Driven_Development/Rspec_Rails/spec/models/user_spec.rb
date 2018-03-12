require 'rails_helper'

RSpec.describe User do

   it "should not save if first_name field is blank" do
      user = User.new(
      first_name:"Andrew",
      last_name:"Chang",
      email:"achang@rails.com"
      )
      expect(user).to be_valid
   end
   context "With invalid attributes" do
   it "should not save if first_name field is blank" do
     user = User.new(
           first_name: '',
           last_name: 'Chang',
           email: 'achang@rails.com'
      )
     expect(user).to be_invalid
   end
it "should not save if last_name field is blank" do
   user = User.new(
      first_name:"Andrew",
      last_name:"",
      email:"achang@rails.com"
   )
   expect(user).to be_invalid
end
it "should not save if email exists" do
   User.create(
      first_name:"Andrew",
      last_name:"Chang",
      email:"achang@rails.com"
   )
   user= User.new(
      first_name:"Andrew",
      last_name:"Chang",
      email:"achang@rails.com"
   )
   expect(user).to be_invalid
end
it "should have a vaild email" do
   user = User.new(
      first_name:"Andrew",
      last_name:"Chang",
      email:"achang"
   )
   expect(user).to be_invalid
end
end

end

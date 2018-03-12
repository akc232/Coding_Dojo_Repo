require_relative 'appletree'
RSpec.describe AppleTree do
   before(:each) do
      @tree = AppleTree.new
   end

   it "should have a getter and setter for the Apple Trees age" do
      @tree.age =50
      expect(@tree.age). to eq(50)
   end
   it "should have a getter method for height" do
      expect(@tree.height).to eq(10)
   end
   it "should raise a NoMethodError if height is changed manually." do
      expect{@tree.height = 10}.to raise_error(NoMethodError)
   end
   it "should have a getter for apple_count" do
      expect(@tree.apple_count).to eq(0)
   end
   it "should raise a NoMethodError if someone tries to change the apple count directly" do
      expect{@tree.apple_count = 10}.to raise_error(NoMethodError)
   end
   context "should have a method called year_gone_by" do
      before(:each) do
         @tree.year_gone_by
      end
      it "adds a year to the age" do
         expect(@tree.age).to eq(1)
      end
      it "increases the trees height by 10 percent" do
         expect(@tree.height).to eq(11)
      end
      # test other rules for apple tree here and test the pick_appls method.
   end
end

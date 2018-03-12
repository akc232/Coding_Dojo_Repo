require_relative 'bankaccount'

RSpec.describe BankAccount do
  before(:each) do
    @acc = BankAccount.new
  end

  it "has a getter method for retrieving the checking account balance" do
    expect(@acc.checking).to eq(0)
  end

  it "has a getter method that checks the total account balance"do
     expect(@acc.total).to eq("Checking Balance: 0\nSaving Balance: 0\nTotal Balance: 0")
  end

  context "withdrawing money" do
     it "raises and error if trying to withdraw from account that has no money in the checking account" do
        expect{ @acc.withdrawal("checking", 100) }.to raise_error("Insufficient Funds, you have 0 in this account")
     end
     it "raises and error if trying to withdraw from account that has no money in the savings account" do
        expect{ @acc.withdrawal("savings", 100) }.to raise_error("Insufficient Funds, you have 0 in this account")
     end
  end

  it "raises an error if user tries to retrieve the total number of bank accounts" do
     expect{ @acc.number_of_accounts}.to raise_error(NoMethodError)
  end
  it "raises and error if user tries to set the interest rate" do
     expect{ @acc.interest_rate}.to raise_error(NoMethodError)
  end
end

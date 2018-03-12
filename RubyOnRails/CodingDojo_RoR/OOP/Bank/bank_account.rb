class BankAccount

   attr_reader :account_number, :checking, :savings
   @@bank_accounts = 0
   def initialize
      @account_number = create_account
      @checking = 0
      @savings = 0
      @@bank_accounts +=1
      @interest_rate = 0.01
   end
   def deposit(account, amount)
      if account == "checking"
         @checking += amount
      else
         @savings += amount
      end
   end

   def withdraw(account, amount)
      if account == "checking"
         if @checking - amount < 0
            puts "You do not have enough funds. You have #{@checking} available to be withdrawn."
      else
         @savings -= amount
      end
   else
      if @savings < 0
         puts "You do not have enough funds. You have #{@savings} available to be withdrawn."
      else
         @savings -= amount
      end
   end
end
   def total
      "Accounts total: #{@checking + @savings}"
   end
   def account_info
      "Account number: #{@account_number}\nChecking:#{@checking}\nSavings:#{@savings}\nIntrest rate: #{@interest_rate}, \n#{self.total}"
   end
   private
   def create_account
       Array.new.map {rand(1..9)}.join
   end
end


b1 = BankAccount.new
puts b1.deposit("checking", 100)
puts b1.deposit("savings", 1000)
puts b1.withdraw("checking", 200)
puts b1.account_info

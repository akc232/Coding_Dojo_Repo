class User < ActiveRecord::Base
   validates :first_name, :last_name, :email, presence: true
   validates :first_name, :last_name, length: { minimum: 2}
end

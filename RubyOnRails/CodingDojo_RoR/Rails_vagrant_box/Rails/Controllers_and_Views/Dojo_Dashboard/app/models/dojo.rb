class Dojo < ActiveRecord::Base
   has_many :Applicants
   validates :branch, :street, :city, :state , presence: true
end

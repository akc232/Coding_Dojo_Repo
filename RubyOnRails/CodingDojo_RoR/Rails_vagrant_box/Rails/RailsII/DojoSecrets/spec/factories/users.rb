FactoryGirl.define do
  factory :user do
    name "Andrew"
    email "achang@rails.com"
    password "password"
    password_confirmation "password"
  end
end

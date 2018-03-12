require 'rails_helper'
feature "guest user creates an account" do
  scenario "successfully creates a new user account" do
    visit new_user_path
    fill_in "user_first_name", with: "Andrew"
    fill_in "user_last_name", with: "Chang"
    fill_in "user_email", with: "achang@rails.com"
    click_button "Create User"
    expect(page).to have_content "User successfully created"
  end
  scenario "unsuccessfully creates a new user account" do
    click_button "Create User"
    expect(current_path).to eq(new_user_path)
  end
  scenario "doesn't fill out first name field" do
    fill_in "user_last_name", with: "Chang"
    fill_in "user_email", with: "achang@rails.com"
    click_button "Create User"
    expect(page).to have_content "First name can't be blank"
  end
  scenario "doesn't fill out last name field" do
     fill_in "user_first_name", with:"Andrew"
     fill_in "user_email", with: 'achang@rails.com'
     expect(page).to have_content "Last name cant be blank"
  end
  scenario "doesn't fill out email field" do
     fill_in "user_first_name", with:"Andrew"
     fill_in "user_last_name", with:"Chang"
     expect(page).to have_content "Must fill in Email Address"
  end
end

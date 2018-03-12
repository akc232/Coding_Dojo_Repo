require 'test_helper'

class RpgControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

  test "should get find_gold" do
    get :find_gold
    assert_response :success
  end

end

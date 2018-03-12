require 'test_helper'

class SurveyControllerControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

  test "should get submit" do
    get :submit
    assert_response :success
  end

  test "should get result" do
    get :result
    assert_response :success
  end

end

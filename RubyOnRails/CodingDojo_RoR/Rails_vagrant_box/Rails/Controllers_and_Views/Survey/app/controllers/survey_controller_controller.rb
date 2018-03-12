class SurveyControllerController < ApplicationController
  def index
     session[:submission] ||= 0
     render "index"
  end

  def submit
     session[:submission] += 1
     session[:result] = params[:survey]
     puts "#{params[:survey]}"
     flash[:success] = "You have submitted the form! You have not submitted the form #{session[:submission]} time(s) now."
     redirect_to '/survey/result'
  end

  def result
     @result = session[:result]
     render "result"
  end
end

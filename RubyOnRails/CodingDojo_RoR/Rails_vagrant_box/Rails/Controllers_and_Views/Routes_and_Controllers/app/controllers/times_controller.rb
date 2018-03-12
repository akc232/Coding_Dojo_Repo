class TimesController < ApplicationController
  def index
     session[:count] ||= 0
     session[:count] += 1
     render text: "You have visited this url #{session[:count]} time(s)"

  end

  def restart
     reset_session
     render text: "Session was destroyed!!"

  end
end

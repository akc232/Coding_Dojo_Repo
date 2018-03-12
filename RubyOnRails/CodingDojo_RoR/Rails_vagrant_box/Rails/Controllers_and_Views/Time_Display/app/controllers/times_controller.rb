class TimesController < ApplicationController
  def main
     @date = DateTime.now.to_s(:date)
     @time = Time.now.to_s(:time)
  end
end

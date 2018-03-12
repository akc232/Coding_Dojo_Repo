class RpgController < ApplicationController
  def index
     session[:gold] ||= 0
     session[:activity] ||= []

     @gold = session[:gold]
     @activity = session[:activity]
  end
  
  def find_gold
     if params[:building] == 'farm'
        gold = rand(10..20)
     elsif params[:building] == 'cave'
        gold = rand(5..10)
     elsif params[:building] == 'house'
        gold = rand (2..5)
     elsif params[:building] == 'casino'
        gold = rand (-50..50)
     end

     time = Time.now
     if gold > 0
        session[:activity] << "Earned #{gold} gold from the #{params[:building]}! (#{time.strftime('%Y/%m/%d %l:%M %P')})"
     else gold < 0
        session[:activity] << "You have lost #{gold} gold from the #{params[:building]}! (#{time.strftime('%Y/%m/%d %l:%M %P')})"
     end

     session[:gold] += gold
     redirect_to :root
  end
end

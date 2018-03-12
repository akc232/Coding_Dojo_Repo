class SessionsController < ApplicationController
  def new
     render 'new'
  end

  def login
     @user = User.find(name:params[:user])
     @password = User.find(password:params[:password])
     if @user && @password === true
        
  end

  def destroy

  end
end

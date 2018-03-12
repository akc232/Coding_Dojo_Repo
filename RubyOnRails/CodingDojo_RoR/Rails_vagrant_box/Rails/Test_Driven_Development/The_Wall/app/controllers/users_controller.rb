class UsersController < ApplicationController
  def index
  end
  #need to get sessions to save the user id..
  def login
     @user = User.find_by(name: params[:username])
     if @user
        session[:user_id] = @user.id
        redirect_to messages_path
     else
        @new_user = User.create(name: params[:username])
        @session[:session_id] = @new_user.id
        redirect_to messages_path
     end
  end
  def logout
     reset_session
     redirect_to users_path
  end
end

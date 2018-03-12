class MessagesController < ApplicationController
  def index
     @user = User.find(session[:user_id])
     @messages = Post.includes(:user)
     @comments = Comment.includes(:messages)
  end

  def create
     Post.create(message: params[:message])
  end
end

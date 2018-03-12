class UsersController < ApplicationController
  def index
     @users = User.all
     render layout: 'two_column'
  end
  def create
     @user = User.create(first_name:params[:first], last_name:params[:last], favorite_language:params[:language])

     if @user.save
        redirect_to '/users'
     else
        flash[:errors] = @user.errors.full_messages
        redirect_to :back
     end
  end

end

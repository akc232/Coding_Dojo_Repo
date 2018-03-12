class PostsController < ApplicationController
  def index
     @posts = Post.all
     @users = User.all
     render layout: 'three_column'
  end
  def create

     @posts = Post.create(title:params[:title], content:params[:content], user:User.find(params[:user]))
     if @posts.save
        redirect_to posts_path
     else
        flash[:errors] = posts.errors.full_messages
        redirect_to :back
     end

  end
end

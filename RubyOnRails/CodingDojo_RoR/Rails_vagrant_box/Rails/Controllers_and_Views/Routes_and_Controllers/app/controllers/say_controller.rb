class SayController < ApplicationController
  def index
     render :text => "What do you want me to say?"
  end

  def hello
     render :text => "Saying Hello!!"
  end

  def joe
     render :text => "Hello Joe!"
  end

  def mike
     redirect_to "/say/hello/joe"
  end
end

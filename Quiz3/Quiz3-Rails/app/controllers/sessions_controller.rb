class SessionsController < ApplicationController

  def create
    user = User.find_by_email params[:email]
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      render(json: {id: user.id, status: 200}, status: 200)
    else
      render(json: {message: "I think you messed up. try again.", status: 404}, status: 404)
    end
  end

  def destroy
    session[:user_id] = nil
    render(json: {message: "See Ya Later, Alligator!", status: 200})
  end
end

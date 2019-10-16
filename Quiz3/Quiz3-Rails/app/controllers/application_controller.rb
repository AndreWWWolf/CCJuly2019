class ApplicationController < ActionController::API
  include ActionController::Cookies
  include ActionController::RequestForgeryProtection

  # protect_from_forgery with: :exception

  private

  def current_user
    @current_user ||= User.find_by_id session[:user_id]
  end

  def authenticate_user!
    unless current_user.present?
      render(json: {messsage: "You know you need to be signed in first, right?", status: 403}, status: 403)
    end
  end

end

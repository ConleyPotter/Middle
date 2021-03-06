class Api::SessionsController < ApplicationController
  def create
    # Only requiring users to enter username and password on the back end
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      login(@user)
      render :show
    else
      render json: { errors: "Invalid Credentials" }, status: 401
    end
  end

  def show
    @user = current_user
  end

  def destroy
    if logged_in?
      logout
      render json: {}
    else
      render json: { errors: 404 }
    end
  end
end

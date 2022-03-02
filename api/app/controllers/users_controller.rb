class UsersController < ApplicationController
  def show
  end

  def create
    user = User.new(user_params)
    if user.save!
      render json: user
    end
  end
  private
  def user_params
    params.require(:user).permit(:first_name, :last_name)
  end
end

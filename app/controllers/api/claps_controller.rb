class Api::ClapsController < ApplicationController
  def index
    if params[:likeable_type] == "Article"
      article = Article.find_by(params[:likeable_id])
      if article
        @claps = article.claps
      else
        render json: ['Could not locate the associated article'], status: 400
      end
    end
  end

  def create
    @clap = Clap.new(clap_params)
    @user_who_clapped = User.find_by(params[:user_id])
    if @clap.save
      render :show
    else
      render @clap.errors.full_message, status: 401
    end
  end

  def destroy
    @clap = Clap.find(params[:id])
    if @clap
      @clap.destroy
      render :index
    else
      render json: ['Could not find clap']
    end
  end

  private
  def clap_params
    params.require(:article).permit(:user_id, :likeable_id, :likeable_type)
  end
end

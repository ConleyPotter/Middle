class Api::ClapsController < ApplicationController
  def index
    # how to know that we're coming from an article rather than a comment?
    article = Article.find(params[:article_id])
    # @user_who_clapped = current_user
    if article
      @claps = article.claps
    else
      render json: ['Could not locate the associated article'], status: 400
    end
  end

  def create
    @clap = Clap.new(clap_params)
    @user_who_clapped = User.find(clap_params[:user_id])
    if @clap.save
      render :show
    else
      render @clap.errors.full_message, status: 401
    end
  end

  def destroy
    @clap = Clap.find(params[:id])
    @user_who_clapped = current_user
    if @clap
      @clap.destroy
      render :index
    else
      render json: ['Could not find clap']
    end
  end

  private
  def clap_params
    params.require(:clap).permit(:user_id, :likeable_id, :likeable_type)
  end
end
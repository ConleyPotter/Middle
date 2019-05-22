class Api::ArticlesController < ApplicationController
  def index
    @articles = Article.all
  end

  def show
    @article = selected_article
  end

  def create
    @article = Article.new(article_params)
    if @article.save
      render :show
    else
      render @article.errors.full_messages, status: 401
    end
  end

  def update
    @article = selected_article
    if @article && @article.update_attributes(article_params)
      render :show
    elsif !@article
      render json: ['Could not locate article'], status: 400
    else
      render json: @article.errors.full_messages, status: 401
    end
  end

  def destroy
    @article = selected_article
    if @article
      @article.destroy
      render :index
    else
      render ['Could not find article']
    end
  end

  private
  def selected_article
    Article.find(params[:id])
  end
  def article_params
    params.require(:article).permit(:title, :body, :author_id)
  end
end

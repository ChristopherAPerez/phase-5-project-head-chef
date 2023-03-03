class RecipesController < ApplicationController
    wrap_parameters format: []
    
    def index
        user = User.find_by(id: session[:user_id])
        if user
            recipes = Recipe.all
            render json: recipes, include: ['reviews', 'user']
        else
            render json: { errors: ["Not authorized"] }, status: :unauthorized
        end
    end

    def create
        recipe = Recipe.create(recipe_params)
        if recipe.valid?
            render json: recipe, include: ['reviews', 'user']
        else
            render json: { errors: [ recipe.errors.full_messages ] }, status: :unprocessable_entity
        end
    end

    def update
        recipe = Recipe.find_by(id: params[:id])
        recipe.update(recipe_params)
        if recipe.valid?
            render json: recipe, include: ['reviews', 'user'], status: :accepted
        else
            render json: { errors: [ recipe.errors.full_messages ] }, status: :unprocessable_entity
        end
    end

    def destroy
        unpublish_menu = Menu.find_by(publish: false)
        delete_recipe = Recipe.find_by(id: params[:id])
        if unpublish_menu.recipes.exists?(id: delete_recipe.id)
            render json: { errors: ["Recipe currently exists in your menu!"] }, status: :unauthorized
        else
            delete_recipe.destroy
            head :no_content
        end
    end

    def my_recipes_menus
        user = User.find_by(id: session[:user_id])
        if user
            recipe = user.recipes.find_by(id: params[:id])
            menus = recipe.menus.where(publish: true)
            render json: menus, include: ['user', 'menu_to_recipes']
        else
            render json: { errors: ["Not authorized"] }, status: :unauthorized
        end
    end

    def recipes_search
        recipes = Recipe.search(params[:recipe_name])
        render json: recipes, include: ['reviews', 'user']
    end

    def recipes_filter
        recipes = Recipe.all
        recipes = recipes.by_meal(params[:meal]) if params[:meal].present?
        render json: recipes, include: ['reviews', 'user']
    end

    private

    def recipe_params
        params.permit(:recipe_name, :meal, :description, :calories, :prep_time, :recipe_pic, :user_id, :active, steps: [], ingredients: [])
    end
    
end

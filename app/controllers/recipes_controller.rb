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
        user = User.find_by(id: session[:user_id])
        if user
            recipe = user.recipes.create(recipe_params)
            if recipe.valid?
                render json: recipe, include: ['reviews', 'user']
            else
                render json: { errors: [ recipe.errors.full_messages ] }, status: :unprocessable_entity
            end
        else 
            render json: { errors: ["Not authorized"] }, status: :unauthorized
        end
    end

    def update
        user = User.find_by(id: session[:user_id])
        if user
            recipe = Recipe.find_by(id: params[:id])
            if recipe.user_id == user.id
                recipe.update(recipe_params)
                if recipe.valid?
                    render json: recipe, include: ['reviews', 'user'], status: :accepted
                else
                    render json: { errors: [ recipe.errors.full_messages ] }, status: :unprocessable_entity
                end
            else
                render json: { errors: ["Not authorized"] }, status: :unauthorized
            end
        else 
            render json: { errors: ["Not authorized"] }, status: :unauthorized
        end
    end

    def destroy
        user = User.find_by(id: session[:user_id])
        if user
            menus = Menu.all
            if menus.exists?(publish: false)
                unpublish_menu = Menu.find_by(publish: false)
                delete_recipe = Recipe.find_by(id: params[:id])

                if unpublish_menu.recipes.exists?(id: delete_recipe.id)
                    render json: { errors: ["Recipe currently exists in your menu!"] }, status: :unauthorized
                
                else
                    delete_recipe.destroy
                    head :no_content
                end  
            else
                recipe = Recipe.find_by(id: params[:id])
                recipe.destroy
            end
        else 
            render json: { errors: ["Not authorized"] }, status: :unauthorized
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
        user = User.find_by(id: session[:user_id])

        if user
            recipes = Recipe.search(params[:recipe_name])

            render json: recipes, include: ['reviews', 'user']
        else
            render json: { errors: ["Not authorized"] }, status: :unauthorized
        end
    end

    def recipes_filter
        user = User.find_by(id: session[:user_id])

        if user
            recipes = Recipe.all
            recipes = recipes.by_meal(params[:meal]) if params[:meal].present?

            render json: recipes, include: ['reviews', 'user']
        else
            render json: { errors: ["Not authorized"] }, status: :unauthorized
        end
    end

    private

    def recipe_params
        params.permit(:recipe_name, :meal, :description, :calories, :prep_time, :recipe_pic, :active, steps: [], ingredients: [])
    end
    
end

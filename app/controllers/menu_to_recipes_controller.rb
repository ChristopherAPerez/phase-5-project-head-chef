class MenuToRecipesController < ApplicationController
    wrap_parameters format: []

    def create
        user = User.find_by(id: session[:user_id])

        if user
            menu = Menu.find_by(publish: false)

            if menu && menu.publish == false
                menu_to_recipes = menu.menu_to_recipes

                if menu_to_recipes.length <= 2
                    menu.menu_to_recipes.create(menu_to_recipe_params)
                    render json: menu_to_recipes
                else
                    render json: { error: "Can't have more than 3 meals!" }, status: :unprocessable_entity
                end
            else
                render json: { errors: ["Not found, create a new menu!"] }, status: :not_found
            end
        else
            render json: { errors: ["Not authorized"] }, status: :unauthorized
        end
    end

    private

    def menu_to_recipe_params
        params.permit(:name, :description, :calories, :prep_time, :recipe_id)
    end

end

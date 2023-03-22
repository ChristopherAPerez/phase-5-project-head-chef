class MenusController < ApplicationController
    wrap_parameters format: []

    def create
        user = User.find_by(id: session[:user_id])

        if user
            menus = Menu.where(user_id: user.id)
            menu = menus.find_by(publish: false)

            if menu
                render json: { errors: ["Empty menu already exists!"] }, status: :unauthorized
            
            else
                new_menu = user.menus.create(menu_params)
                
                if new_menu.valid? && new_menu.publish != true
                    render json: new_menu, include: ['recipes']
    
                else
                    render json: { errors: ["Unprocessable Entity"] }, status: :unprocessable_entity
                end
            end
        else
            render json: { errors: ["Not authorized"] }, status: :unauthorized
        end
    end

    def update
        user = User.find_by(id: session[:user_id])

        if user
            menus = Menu.where(user_id: user.id)
            menu = menus.find_by(publish: false)

            if menu && menu.menu_to_recipes.length == 3
                menu.update(menu_params)

                render json: menu, include: ['recipes', 'menu_to_recipes'], status: :accepted
            else
                render json: { errors: ["Incomplete Menu!"] }, status: :unprocessable_entity
            end
        else
            render json: { errors: ["Not authorized"] }, status: :unauthorized
        end
    end

    def menu_history
        user = User.find_by(id: session[:user_id])

        if user
            menus = Menu.where(user_id: user.id).where(publish: true)

            render json: menus, include: ['menu_to_recipes', 'recipes']
        else
            render json: { errors: ["Not authorized"] }, status: :unauthorized
        end
    end

    def unpublish_menu
        user = User.find_by(id: session[:user_id])

        if user
            menus = Menu.where(user_id: user.id)
            menu = menus.find_by(publish: false)

            if menu && menu.publish == false
                render json: menu, include: ['recipes', 'menu_to_recipes']
            else
                render json: { error: "error" }, status: :unprocessable_entity
            end
        else
            render json: { errors: ["Not authorized"] }, status: :unauthorized
        end
    end

    def retrieve_cal_stats
        user = User.find_by(id: session[:user_id])

        if user
            menus = Menu.where(user_id: user.id).where(publish: true).limit(5).order(created_at: :desc)
    
            array = menus.map do |menu|
                    menu.menu_to_recipes
            end
    
            total_cal = array.map do |meal|
                cal = meal.reduce(0) { |sum, element| sum + element.calories }
            end
    
            data = menus.map.with_index do |menu, index|
                {
                        "date" => menu.menu_date,
                        "total" => total_cal[index]
                }
            end
    
            render json: data
        else
            render json: { errors: ["Not authorized"] }, status: :unauthorized
        end
    end

    def retrieve_prep_stats
        user = User.find_by(id: session[:user_id])

        if user
            menus = Menu.where(user_id: user.id).where(publish: true).limit(5).order(created_at: :desc)

            array = menus.map do |menu|
                    menu.menu_to_recipes
            end
    
            total_prep = array.map do |meal|
                cal = meal.reduce(0) { |sum, element| sum + element.prep_time }
            end
    
            data = menus.map.with_index do |menu, index|
                {
                        "date" => menu.menu_date,
                        "total" => total_prep[index]
                }
            end
    
            render json: data
        else
            render json: { errors: ["Not authorized"] }, status: :unauthorized
        end
    end

    def clear_menu
        user = User.find_by(id: session[:user_id])

        if user
            menu = Menu.find_by(publish: false)
            
            if menu && menu.publish == false
                menu_to_recipes = menu.menu_to_recipes
                recipes = menu.recipes
        
                menu_to_recipes.each do |menu_to_recipe|
                    menu_to_recipe.destroy
                end
        
                render json: menu, include: ['menu_to_recipes', 'recipes']
            else
                render json: { errors: ["Not found, create a new menu!"] }, status: :not_found
            end
        else
            render json: { errors: ["Not authorized"] }, status: :unauthorized
        end
    end

    private

    def menu_params
        params.permit(:menu_date, :publish)
    end

end
class SmsController < ApplicationController
    wrap_parameters format: []

    def send_sms
        user = User.find_by(id: session[:user_id])

        if user
            menu = Menu.find_by(publish: false)

            if menu
                number = params[:number]

                if menu.recipes.length == 3
                    recipes = menu.recipes
                    breakfast = recipes.first
                    lunch = recipes.second
                    dinner = recipes.third
        
                    account_sid = ''
                    auth_token = ''
                    @client = Twilio::REST::Client.new(account_sid, auth_token)
                    @client.messages.create(
                    from: '18883505894',
                    to: number,
                    body: "Breakfast
                    #{breakfast.recipe_name}, 
                    #{breakfast.description}, 
        
                    Lunch
                    #{lunch.recipe_name}, 
                    #{lunch.description}, 
                    
                    Dinner
                    #{dinner.recipe_name}, 
                    #{dinner.description}"
                    )
                    
                    render json: { message: 'SMS sent successfully' }
                else
                    render json: { errors: ["Incomplete Menu"] }, status: :unprocessable_entity
                end
            else
                render json: { errors: ["No working menu!"] }, status: :not_found
            end
        else
            render json: { errors: ["Not authorized"] }, status: :unauthorized
        end       
    end

end
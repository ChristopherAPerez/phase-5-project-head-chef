class FriendsController < ApplicationController
    wrap_parameters format: []

    def friend_last_menu
        user = User.find_by(id: session[:user_id])

        if user
            friend = User.find_by(id: params[:id])

            if friend
                menu = friend.menus.where(publish: true).order(id: :desc).first

                if menu
                    render json: menu, include: ['recipes']
                else
                    render json: { errors: ["Friend hasn't published a menu!"] }, status: :unprocessable_entity
                end
            else
                render json: { errors: ["Friend not found!"] }, status: :not_found
            end
        else
            render json: { errors: ["Not authorized"] }, status: :unauthorized
        end
    end

end
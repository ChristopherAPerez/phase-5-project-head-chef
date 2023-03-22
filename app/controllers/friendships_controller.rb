class FriendshipsController < ApplicationController
    wrap_parameters format: []

    def create_friendships
        user = User.find_by(id: session[:user_id])
        if user
            friend = User.find_by(id: params[:id])

            if friend && friend.id != user.id
                friendship = Friendship.new(user_id: user.id, friend_id: friend.id)

                if friendship.save
                    render json: friendship.friend
        
                else
                    render json: { errors: [ friendship.errors.full_messages ] }, status: :unprocessable_entity
                end
            else
                render json: { errors: ["No such friend can exist!"] }, status: :not_found
            end
        else
            render json: { errors: ["Not authorized"] }, status: :unauthorized
        end
    end

end
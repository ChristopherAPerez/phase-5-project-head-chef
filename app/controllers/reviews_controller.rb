class ReviewsController < ApplicationController
    wrap_parameters format: []

    def create
        user = User.find_by(id: session[:user_id])

        if user
            review = user.reviews.create(review_params)

            if review.valid?
                if user.username == review.username

                    render json: review
                else
                    render json: { error: [ "Unprocessable Entity" ] }, status: :unprocessable_entity
                end
            else
                render json: { errors: [ review.errors.full_messages ] }, status: :unprocessable_entity
            end
        else
            render json: { errors: ["Not authorized"] }, status: :unauthorized
        end
    end

    private

    def review_params
        params.permit(:rating, :comment, :recipe_id, :username)
    end

end

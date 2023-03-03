class ReviewsController < ApplicationController
    wrap_parameters format: []

    def create
        review = Review.create(review_params)
        if review.valid?
            render json: review
        else
            render json: { errors: [ review.errors.full_messages ] }, status: :unprocessable_entity
        end
    end

    private

    def review_params
        params.permit(:rating, :comment, :recipe_id, :user_id, :username)
    end

end

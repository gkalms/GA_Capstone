class WelcomeController < ApplicationController
    def index
        render json: {Greetings: 'Elena'}
    end
end
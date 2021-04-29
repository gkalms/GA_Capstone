class BoardsController < ApplicationController
    def index
        render json: Board.all
      end
    
      def create
        board = Board.create(board_type: params[:board_type], board_rate_per_person: params[:board_rate_per_person])
        board_valid = board.valid?
        if board_valid
          render json: { message: 'Succesful creation' }, status: 200
        else
          render json: { message: 'Unsuccesful creation attempt' }, status: 400
        end
      end
    
      def show
        render json: Board.find(params[:id])
      end
    
      def update
        board = Board.find(params[:id])
        board.update(board_type: params[:board_type], board_rate_per_person: params[:board_rate_per_person])
        render json: { message: 'succesful update' }, status: 200
      end
    
      def destroy
        Board.destroy(params[:id])
        render json: { message: 'succesfully deleted' }, status: 200
      end
end

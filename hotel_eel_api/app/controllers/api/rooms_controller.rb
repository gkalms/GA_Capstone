class Api::RoomsController < ApplicationController
  def index
    render json: Room.all
  end

  def create
    room = Room.create(room_rate: params[:room_rate], room_occupancy: params[:room_occupancy],
                       room_type: params[:room_type])
    room_valid = room.valid?
    if room_valid
      render json: { message: 'Succesful creation' }, status: 200
    else
      render json: { message: 'Unsuccesful creation attempt' }, status: 400
    end
  end

  def show
    render json: Room.find(params[:id])
  end

  def update
    room = Room.find(params[:id])
    room.update(room_rate: params[:room_rate], room_occupancy: params[:room_occupancy],
    room_type: params[:room_type])
    render json: { message: 'succesful update' }, status: 200
  end

  def destroy
    Room.destroy(params[:id])
    render json: { message: 'succesfully deleted' }, status: 200
  end

end

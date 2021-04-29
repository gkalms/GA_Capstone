class EnquiriesController < ApplicationController
  def index
    render json: Enquiry.all
  end

  def create
    enquiry = Enquiry.create(
      guest_name: params[:guest_name],
      guest_phone: params[:guest_phone],
      guest_email: params[:guest_email],
      room_type: params[:room_type],
      board_type: params[:board_type],
      number_of_guests: params[:number_of_guests],
      start_date: params[:start_date],
      end_date: params[:end_date]
    )
    enquiry_valid = enquiry.valid?
    if enquiry_valid
      render json: { message: 'Succesful creation' }, status: 200
    else
      render json: { message: 'Unsuccesful creation attempt' }, status: 400
    end
  end

  def show
    render json: Enquiry.find(params[:id])
  end

  def update
    enquiry = Enquiry.find(params[:id])
    enquiry.update(
      guest_name: params[:guest_name],
      guest_phone: params[:guest_phone],
      guest_email: params[:guest_email],
      room_type: params[:room_type],
      board_type: params[:board_type],
      number_of_guests: params[:number_of_guests],
      start_date: params[:start_date],
      end_date: params[:end_date]
    )
    render json: { message: 'succesful update' }, status: 200
  end

  def destroy
    Enquiry.destroy(params[:id])
    render json: { message: 'succesfully deleted' }, status: 200
  end
end

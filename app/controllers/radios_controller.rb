class RadiosController < ApplicationController

def index
    render json: Radio.all, status: :ok
end

def show
    render json: Radio.find(params[:id]), status: :ok
end

def create
    render json: Radio.create!(radio_params), status: :created
end

def update
    radios = Radio.find(params[:id])
    render json: radios.update!(radio_params), status: :ok
end

def destroy
    radios = Radio.find(params[:id])
    radios.destroy
    head :no_content
end

private

def radio_params
    params.permit(:model, :serial_number)
end

end
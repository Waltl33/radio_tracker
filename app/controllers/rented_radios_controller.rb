class RentedRadiosController < ApplicationController
    def index
        render json: RentedRadio.all, status: :ok
    end
    
    def showRented
        render json: RentedRadio.find(params[:id]), status: :ok
    end
    
    def create
        render json: RentedRadio.create!(radio_params), status: :created
    end
    
    def update
        radios = RentedRadio.find(params[:id])
        render json: radios.update!(radio_params), status: :ok
    end
    
    def destroy
        radios = RentedRadio.find(params[:id])
        radios.destroy
        head :no_content
    end
    
    private
    
    def radio_params
        params.permit(:model, :serial_number)
    end
    
end

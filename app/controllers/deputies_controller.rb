class DeputiesController < ApplicationController
   
    def index
        render json:Deputy.all, status: :ok
    end
    
    def show
        render json:Deputy.find(params[:id]), status: :ok
    end
    
    def create
        render json:Deputy.create!(radio_params), status: :created
    end
    
    def update
       deputies =Deputy.find(params[:id])
        render json: deputies.update!(deputy_params), status: :ok
    end
    
    def destroy
       deputies =Deputy.find(params[:id])
       deputies.destroy
        head :no_content
    end
    
    private
    
    def deputy_params
        params.permit(:first_name, :last_name, :identification_number, :resign, :location,)
    end
    
end

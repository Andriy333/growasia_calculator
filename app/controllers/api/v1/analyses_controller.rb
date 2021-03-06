class Api::V1::AnalysesController < ApiController
  before_action :set_analysis, only: [:show, :update]

  # GET /api/v1/analyses/1
  def show
    render json: @analysis
  end

  def update
    render json: @analysis, analysis_params: analysis_params
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_analysis
      @analysis = Analysis.find(params[:id])
    end

    def analysis_params
      params.require(:analysis).permit(:geo_location_id, :area, :yield,
        :yield_unit, :agroforestry_practices, :crop, :tillage, :agrochemical_amount,
        :rice_type, :irrigation_regime, :flooding, :cultivation_time,
        :lime_amount, :dolomite_amount, :annual_cultivation_cycles, :rice_straw_burned,
        fertilizers_attributes: [ :id, :amount, :category, :addition_type, :area, :_destroy ],
        manures_attributes: [ :id, :amount, :category, :addition_type, :area, :_destroy ],
        fuels_attributes: [ :id, :amount, :category, :addition_type, :area, :unit ],
        transportation_fuels_attributes: [ :id, :amount, :category, :addition_type, :area, :unit ],
        irrigation_fuels_attributes: [ :id, :amount, :category, :addition_type, :area, :unit ],
        nutrient_managements_attributes: [ :id, :amount, :category, :addition_type, :area ],
        crop_management_practices: [])
    end
end

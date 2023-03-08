class MembersController < ApplicationController
    def index
        render json: Member.all
      end

    def create
        member = Member.create(member_params)
        render json: member
    end

    private

    def member_params
        params.require(:member).permit(:name, :memberID)
    end

    def update
        member = Member.find(params[:id])
        member.update_attributes(member_params)
        render json: member
      end

    def destroy
        Member.destroy(params[:id])
      end

end

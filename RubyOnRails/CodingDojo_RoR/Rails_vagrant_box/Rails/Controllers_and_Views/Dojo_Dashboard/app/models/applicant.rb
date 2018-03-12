class Applicant < ActiveRecord::Base
  belongs_to :dojo

  def self.cohort student
    self.where("id != ? AND dojo_id = ? AND DATE(created_at) = ?", student.id, student.dojo_id, student.created_at.strftime("%Y-%m-%d"))
  end
end

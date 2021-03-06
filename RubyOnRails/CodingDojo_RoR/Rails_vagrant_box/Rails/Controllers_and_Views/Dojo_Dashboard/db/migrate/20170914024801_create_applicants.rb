class CreateApplicants < ActiveRecord::Migration
  def change
    create_table :applicants do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.references :dojo, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end

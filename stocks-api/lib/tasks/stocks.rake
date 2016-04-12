require 'csv'

namespace :stocks do
  desc "TODO"
  task import: :environment do
    csv_text = File.read('companylist.csv')
    csv = CSV.parse(csv_text, :headers => true)
    csv.each do |row|
      p row
      unless row[-1] == nil
        Stock.create!(row.to_hash)
      end
    end
  end
end

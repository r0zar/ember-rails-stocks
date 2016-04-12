require 'csv'

namespace :stocks do
  desc "TODO"
  task import: :environment do
    csv_text = File.read('companylist.csv')
    csv = CSV.parse(csv_text, :headers => true, :row_sep => ",\r\n")
    csv.each do |row|
      p row
      Stock.create!(row.to_hash)
    end
  end
end

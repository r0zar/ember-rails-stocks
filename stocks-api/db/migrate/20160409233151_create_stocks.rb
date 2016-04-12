class CreateStocks < ActiveRecord::Migration[5.0]
  def change
    create_table :stocks do |t|
      t.string :symbol
      t.string :name
      t.decimal :last_sale
      t.decimal :market_cap
      t.decimal :adr_tso
      t.decimal :ipo_year
      t.string :sector
      t.string :industry
      t.string :summary_quote

      t.timestamps
    end
  end
end

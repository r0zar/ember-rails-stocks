class StockSerializer < ActiveModel::Serializer
  attributes :id, :symbol, :name, :last_sale, :market_cap, :adr_tso, :ipo_year, :sector, :industry, :summary_quote
end

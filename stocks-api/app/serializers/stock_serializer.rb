class StockSerializer < ActiveModel::Serializer
  attributes :id, :symbol, :name, :last_sale, :market_cap
end

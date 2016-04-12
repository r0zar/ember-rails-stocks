require 'test_helper'

class StocksControllerTest < ActionDispatch::IntegrationTest
  setup do
    @stock = stocks(:one)
  end

  test "should get index" do
    get stocks_url
    assert_response :success
  end

  test "should create stock" do
    assert_difference('Stock.count') do
      post stocks_url, params: { stock: { adr_tso: @stock.adr_tso, industry: @stock.industry, ipo_year: @stock.ipo_year, last_sale: @stock.last_sale, market_cap: @stock.market_cap, name: @stock.name, sector: @stock.sector, summary_quote: @stock.summary_quote, symbol: @stock.symbol } }
    end

    assert_response 201
  end

  test "should show stock" do
    get stock_url(@stock)
    assert_response :success
  end

  test "should update stock" do
    patch stock_url(@stock), params: { stock: { adr_tso: @stock.adr_tso, industry: @stock.industry, ipo_year: @stock.ipo_year, last_sale: @stock.last_sale, market_cap: @stock.market_cap, name: @stock.name, sector: @stock.sector, summary_quote: @stock.summary_quote, symbol: @stock.symbol } }
    assert_response 200
  end

  test "should destroy stock" do
    assert_difference('Stock.count', -1) do
      delete stock_url(@stock)
    end

    assert_response 204
  end
end

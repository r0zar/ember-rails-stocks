require 'test_helper'

class InvitationControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get invitation_new_url
    assert_response :success
  end

  test "should get create" do
    get invitation_create_url
    assert_response :success
  end

  test "should get update" do
    get invitation_update_url
    assert_response :success
  end

  test "should get edit" do
    get invitation_edit_url
    assert_response :success
  end

  test "should get destroy" do
    get invitation_destroy_url
    assert_response :success
  end

  test "should get index" do
    get invitation_index_url
    assert_response :success
  end

  test "should get show" do
    get invitation_show_url
    assert_response :success
  end

end

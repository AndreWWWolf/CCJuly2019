require "minitest/autorun"
require "./rectangle.rb"

class RectangleTest < MiniTest::Test

  def test_area
    #Given
    rectangle = Rectangle.new(3,4)
    #When
    area = rectangle.area
    #Then
    assert_equal(12, area)
  end

  def test_perimeter
    #Given
    assert_equal(14, Rectangle.new(3,4).perimeter)
    #When

    #Then
  end

  def test_initialize_raises_error_with_neg_args
    
  end

end

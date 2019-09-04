class CookieJar
    def initialize(capacity = 10)
      @capacity = capacity
      @cookies = []
    end
  
    def add(cookie)
      unless cookie.is_a? Cookie
        raise ArgumentError.new("Must be a cookie")
      end
      if @cookies.length >= @capacity
        puts "No room left for that cookie"
      else
        @cookies << cookie
      end
      self
    end
  
    def take
      @cookies.pop
    end
  
    def details
      puts "This ridiculously named bag has #{@cookies.length} cookies."
      puts "Here they are:"
      puts @cookies.map {|cookie| cookie.details }.join("\n")
    end
  
  
  end
  
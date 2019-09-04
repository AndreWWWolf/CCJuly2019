require_relative "cookie"
require_relative "oreo"
require_relative "cookie_jar"

cb = CookieJar.new(5)

cb.add(Cookie.new(10,20))
  .add(Cookie.new(5,10))
  .add(Cookie.new(5,20))
  .add(Cookie.new(5,15))
  .add(Cookie.new(5,30))

cb.details

cb.add(Cookie.new(5,5))

cb.take
cb.take

cb.details

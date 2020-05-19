# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "cslgbt-theme"
  spec.version       = "0.1.0"
  spec.authors       = ["John Peart"]
  spec.email         = ["info@civilservice.lgbt"]

  spec.summary       = "A theme for use by the Civil Service LGBT+ Network"
  spec.homepage      = "https://github.com/civilservicelgbt/cslgbt-theme"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README)!i) }

  spec.add_runtime_dependency "jekyll", "~> 3.7"

  spec.add_development_dependency "bundler"
  spec.add_development_dependency "rake"
end

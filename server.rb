require 'sinatra'
require 'sinatra/json'
require 'json'
require 'pry'

set :bind, '0.0.0.0'  # bind to all interfaces

get '/' do
	send_file File.expand_path('index.html', settings.public_folder)
end

def load_quote
	JSON.parse(File.read("quotes.json")).sample
end 

def load_education
	JSON.parse(File.read("education.json"))
end 

get '/api/v1/quotes' do
	@quote = load_quote
	content_type :json
	json @quote
end

get '/api/v1/education' do
	@education = load_education
	content_type :json
	json @education
end  

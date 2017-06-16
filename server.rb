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

def load_profex
	JSON.parse(File.read("profex.json"))
end 

def load_projects
	JSON.parse(File.read("projects.json"))
end 

def load_languages
	JSON.parse(File.read("languages.json"))
end

def load_databases
	JSON.parse(File.read("databases.json"))
end 

def load_software
	JSON.parse(File.read("software.json"))
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

get '/api/v1/profex' do
	@profex = load_profex
	content_type :json
	json @profex
end

get '/api/v1/projects' do
	@projects = load_projects
	content_type :json
	json @projects
end   

get '/api/v1/languages' do
	@languages = load_languages
	content_type :json
	json @languages
end  

get '/api/v1/databases' do
	@databases = load_databases
	content_type :json
	json @databases
end  

get '/api/v1/software' do
	@software = load_software
	content_type :json
	json @software
end  

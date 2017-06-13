require 'sinatra'
require 'sinatra/json'
require 'json'
require 'dotenv'
require 'sendgrid-ruby'
Dotenv.load
include SendGrid

get '/' do
  send_file File.expand_path('index.html', settings.public_folder)
end

post '/api/v1/contact' do
  data = JSON.parse(request.body.read)
  content_type :json
  status 200

  from = Email.new(email: data['email'])
  to = Email.new(email: ENV['EMAIL'])
  subject = data['subject']
  content = Content.new(type: 'text/plain', value: data['body'])
  mail = Mail.new(from, subject, to, content)

  sendgrid = SendGrid::API.new(api_key: ENV['SENDGRID_API_KEY'])
  response = sendgrid.client.mail._('send').post(request_body: mail.to_json)

  if response.body.empty?
    parsed_response_body = "success"
  else
    parsed_response_body = JSON.parse(response.body)
  end

  status response.status_code
  json parsed_response_body 
end
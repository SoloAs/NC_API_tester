## DESCRIPTION
Network Control API tester v1.0.0
Tests implemented for phase1 calls

## INSTALLATION
For Debian and Ubuntu based Linux distribs
	sudo apt-get install curl
	curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
	sudo apt-get install -y nodejs

From root directory:
	npm install
	sudo npm run test -- --server='<url/of/tested/API>'
        
	i.e  npm run test -- --server='http://localhost:8081'

## CONTAINS
List of API calls which are covered by tests now: 
	/network-devices
	/network-links
	/endpoints
	/endpoint-links


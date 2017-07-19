## DESCRIPTION
Network Control API tester v1.0.0
Tests implemented for phase1 calls

## INSTALLATION
1. For Debian and Ubuntu based Linux distribs
	sudo apt-get install curl
	curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
	sudo apt-get install -y nodejs
At this point you should have node and npm with approximate versions 5.0.3 and 8.1.4

2. From root directory:
	npm install


## RUN
	sudo npm run test -- --server='<url/of/tested/API>'
i.e          npm run test -- --server='http://localhost:8081'


## CONTAINS
List of API calls which are covered by tests now: 
	/network-devices
	/network-links
	/endpoints
	/endpoint-links


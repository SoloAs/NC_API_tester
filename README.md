## DESCRIPTION
Network Control API tester v1.0.0
Tests implemented for phase 1 calls. Implemented via NodeJS + Mocha&Chai

## INSTALLATION
1. For Debian and Ubuntu based Linux distribs
	sudo apt-get install curl <br />
	curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash - <br />
	sudo apt-get install -y nodejs <br />
At this point you should have node and npm with approximate versions 5.0.3 and 8.1.4

2. From root directory:
	npm install


## RUN
	sudo npm run test -- --server='<url/of/tested/API>' --phase=<phase number>
i.e npm run test -- --server='http://localhost:8081 --phase=1'

(default values of server and phase are http://localhost:8081 and 1)

## CONTAINS
List of API calls which are covered by tests now: 
	/network-devices
	/network-links
	/endpoints
	/endpoint-links


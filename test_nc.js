
var chai = require('chai')
var chaiHttp = require('chai-http')
var _ = require('lodash')
var should = chai.should()
var expect = require('chai').expect
var argv = require('minimist')(process.argv.slice(2))
console.dir(argv)

chai.use(chaiHttp)

var request = chai.request
if (argv.server.substr(argv.server.length - 1) == '/') argv.server = argv.server.substring(0, argv.server.length - 1)
console.log("server: " + argv.server)
if (argv.server) server = argv.server; else server = 'http://localhost:8081/dummies'
chai.config.includeStack = true
chai.config.truncateThreshold = 0
chai.config.showDiff = true

describe('network control API tests', function () {
 /* it('Should return correct endpoint info (/endpoints)', done => {
    request(server).get('/endpoints').end((err, res) => {
      res.should.have.status(200)
      res.should.be.json
      res.body.should.be.a('array')
      _.each(res.body, (value) => {
        value.should.have.property('id')
        value.id.should.be.a('number')
        value.description.should.be.a('string')
        value.should.have.property('description')
        value.should.have.property('chassis-id')
        value.should.have.property('port-id')
        value['port-id'].should.match(/([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})/)  // TODO: verify MAC address pattern with actual Network Controller
      })
      done()
    })
  }) */

  it('Should return correct endpoint info (/endpoints)', done => {
    request(server).get('/endpoints').end((err, res) => {
      expect(res, 'WRONG RESPONSE STATUS').to.have.status(200)
      expect(res, 'RESPONSE IS NOT A JSON').to.be.json
      expect(res.body, 'RESPONSE IS NOT AN ARRAY').to.be.a('array')
      _.each(res.body, (value) => {
        expect(value, 'ENDPOINT INFO SHOULD CONTAIN ID').to.have.property('id')
        // expect(value.id, 'ID VALUE SHOULD BE A NUMBER').to.be.a('number')
        expect(value, 'ENDPOINT INFO SHOULD CONTAIN DESCRIPTION').to.have.property('description')
        expect(value, 'ENDPOINT INFO SHOULD CONTAIN CHASSIS-ID').to.have.property('chassis-id')
        expect(value, 'ENDPOINT INFO SHOULD CONTAIN PORT-ID').to.have.property('port-id')
        expect(value['port-id'], 'PORT ID SHOULD MATCH MAC FORMAT').to.match(/([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})/)
      })
      done()
    })
  }).timeout(10000)

  it('Should return correct endpoint links info (/endpoint-links)', done => {
    request(server).get('/endpoint-links').end((err, res) => {
      expect(res, 'WRONG RESPONSE STATUS').to.have.status(200)
      expect(res, 'RESPONSE IS NOT A JSON').to.be.json
      expect(res.body, 'RESPONSE IS NOT AN ARRAY').to.be.a('array')
      _.each(res.body, (value) => {
        expect(value, 'ENDPOINT LINKS INFO SHOULD CONTAIN NETWORK DEVICE ID').to.have.property('network-device-id')
        // expect(value['network-device-id'], 'NETWORK DEVICE ID SHOULD BE A NUMBER').to.be.a('number')
        expect(value, 'ENDPOINT LINKS INFO SHOULD CONTAIN ENDPOINT ID').to.have.property('endpoint-id')
        // expect(value['endpoint-id'], 'ENDPOINT ID SHOULD BE A NUMBER').to.be.a('number')
        expect(value, 'ENDPOINT LINKS INFO SHOULD CONTAIN NETWORK INTERFACE').to.have.property('network-interface')
        expect(value, 'ENDPOINT LINKS INFO SHOULD CONTAIN ENDPOINT INTERFACE').to.have.property('endpoint-interface')
        expect(value, 'ENDPOINT LINKS INFO SHOULD CONTAIN STATUS').to.have.property('status')
        expect(value, 'ENDPOINT LINKS INFO SHOULD CONTAIN SPEED').to.have.property('speed')
        expect(value.speed, 'ENDPOINT LINK SPEED SHOULD MATCH A FORMAT').to.match(/[0-9]+(M|Mb|Mbps|G|Gb|Gbps){1}/)
      })
      done()
    })
  }).timeout(10000)

  it('Should return correct network links info (/network-links)', done => {
    request(server).get('/network-links').end((err, res) => {
      expect(res, 'WRONG RESPONSE STATUS').to.have.status(200)
      expect(res, 'RESPONSE IS NOT A JSON').to.be.json
      expect(res.body, 'RESPONSE IS NOT AN ARRAY').to.be.a('array')
      _.each(res.body, (value) => {
        expect(value, 'NETWORK LINKS INFO SHOULD CONTAIN NETWORK DEVICE ID').to.have.property('network-device-id')
        // expect(value['network-device-id'], 'NETWORK DEVICE ID SHOULD BE A NUMBER').to.be.a('number')
        expect(value, 'NETWORK LINKS INFO SHOULD CONTAIN PEER NETWORK DEVICE ID').to.have.property('peer-network-device-id')
        // expect(value['peer-network-device-id'], 'PEER NETWORK DEVICE ID SHOULD BE A NUMBER').to.be.a('number')
        expect(value, 'NETWORK LINKS INFO SHOULD CONTAIN NETWORK INTERFACE').to.have.property('network-interface')
        expect(value, 'NETWORK LINKS INFO SHOULD CONTAIN SHOULD CONTAIN PEER NETWORK INTERFACE').to.have.property('peer-network-interface')
        expect(value, 'NETWORK LINKS INFO SHOULD CONTAIN STATUS').to.have.property('status')
        expect(value, 'NETWORK LINKS INFO SHOULD CONTAIN SPEED').to.have.property('speed')
        expect(value.speed, 'NETWORK LINK SPEED SHOULD MATCH A FORMAT').to.match(/[0-9]+(M|Mb|Mbps|G|Gb|Gbps){1}/)
      })
      done()
    })
  }).timeout(10000)

  it('Should return correct network-devices info (/network-devices)', done => {
    request(server).get('/network-devices').end((err, res) => {
      expect(res, 'WRONG RESPONSE STATUS').to.have.status(200)
      expect(res, 'RESPONSE IS NOT A JSON').to.be.json
      expect(res.body, 'RESPONSE IS NOT AN ARRAY').to.be.a('array')
      _.each(res.body, (value) => {
        expect(value, 'NETWORK DEVICE INFO SHOULD CONTAIN ID').to.have.property('id')
        // expect(value.id, 'NETWORK DEVICE ID SHOULD BE A NUMBER').to.be.a('number')
        expect(value, 'NETWORK DEVICE INFO SHOULD CONTAIN NAME').to.have.property('name')
        expect(value, 'NETWORK DEVICE INFO SHOULD CONTAIN SERIAL NUMBER').to.have.property('serial-number')
        expect(value, 'NETWORK DEVICE INFO SHOULD CONTAIN PRODUCT ID').to.have.property('product-id')
        expect(value, 'NETWORK DEVICE INFO SHOULD CONTAIN PRODUCT DESCRIPTION').to.have.property('product-description')
        expect(value, 'NETWORK DEVICE INFO SHOULD CONTAIN VENDOR INFO').to.have.property('vendor')
        expect(value, 'NETWORK DEVICE INFO SHOULD CONTAIN MAC-ADDRESS').to.have.property('mac-address')
        expect(value, 'NETWORK DEVICE INFO SHOULD CONTAIN MANAGEMENT IP').to.have.property('mgmt-ip')
        expect(value['mgmt-ip'], 'MANAGEMENT IP SHOULD MATCH IP FORMAT').to.match(/([0-9]{1,3}.){3}[0-9]{1,3}/)
        expect(value, 'NETWORK DEVICE INFO SHOULD CONTAIN VERSION INFO').to.have.property('version')
        expect(value, 'NETWORK DEVICE INFO SHOULD CONTAIN IMAGE FILE INFO').to.have.property('image-file')
        expect(value, 'NETWORK DEVICE INFO SHOULD CONTAIN BUILD TIME INFO').to.have.property('build-time')
        expect(value, 'NETWORK DEVICE INFO SHOULD CONTAIN UPTIME INFO').to.have.property('uptime')
        expect(value, 'NETWORK DEVICE INFO SHOULD CONTAIN LAST RESET REASON INFO').to.have.property('last-reset-reason')
        expect(value, 'NETWORK DEVICE INFO SHOULD CONTAIN INTERFACES INFO').to.have.property('interfaces')
        expect(value.interfaces, 'NETWORK DEVICE INTERFACES INFO SHOULD BE AN ARRAY').to.be.a('array')
        _.each(value.interfaces, (iValue) => {
          expect(iValue, 'NETWORK DEVICE INTERFACE SHOULD CONTAIN NAME').to.have.property('if-name')
          expect(iValue, 'NETWORK DEVICE INTERFACE SHOULD CONTAIN ADMIN STATUS').to.have.property('admin-status')
          expect(iValue, 'NETWORK DEVICE INTERFACE SHOULD CONTAIN OPERATING STATUS').to.have.property('oper-status')
          expect(iValue, 'NETWORK DEVICE INTERFACE SHOULD CONTAIN DOWN REASON').to.have.property('down-reason')
          expect(iValue, 'NETWORK DEVICE INTERFACE SHOULD CONTAIN BUILT IN MAC-ADDRESS').to.have.property('built-in-mac-address')
          expect(iValue['built-in-mac-address'], 'BUILD-IN MAC-ADDRESS SHOULD MATCH MAC FORMAT').to.match(/([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})/)
          expect(iValue, 'NETWORK DEVICE INTERFACE SHOULD CONTAIN MAC-ADDRESS').to.have.property('mac-address')
          expect(iValue['mac-address'], 'MAC-ADDRESS SHOULD MATCH MAC FORMAT').to.match(/([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})/)
          expect(iValue, 'NETWORK DEVICE INTERFACE SHOULD CONTAIN IP-ADDRESS').to.have.property('ip-address')
          expect(iValue['ip-address'], 'IP-ADDRESS SHOULD MATCH FORMAT').to.match(/([0-9]{1,3}.){3}[0-9]{1,3}/)
          expect(iValue, 'NETWORK DEVICE INTERFACE SHOULD CONTAIN OPERATING SPEED').to.have.property('operating-speed')
          expect(iValue['operating-speed'], 'OPERATING SPEED SHOULD MATCH FORMAT').to.match(/[0-9]+(M|Mb|Mbps|G|Gb|Gbps){1}/)
          expect(iValue, 'NETWORK DEVICE INTERFACE SHOULD CONTAIN MTU').to.have.property('MTU')
          expect(iValue, 'NETWORK DEVICE INTERFACE SHOULD CONTAIN MODE INFO').to.have.property('mode')
        })
      })
      done()
    })
  }).timeout(10000)
})

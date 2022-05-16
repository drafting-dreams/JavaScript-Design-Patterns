type XMLData = {
  type: 'xml'
  data: any
}
type JSONData = {
  type: 'json'
  data: any
}

/**
 * We're creating an stock market monitoring APP.
 * This APP can fetch XMLData from the remote server, and render the XMLData onto screen.
 * Now, we want to add another feature to analyze the data, To analyze the data, we're gonna
 * need a 3rd party Analyzer, which only accepts JSONData.
 *
 * To tackle this, we can create an Adaptor instance to make the APP work with both.
 */
interface StockClientInterface {
  data: XMLData

  featchData: () => { type: 'xml'; data: any }
  renderData: () => void
  analyze: () => void
}

class Analyzer {
  analyze: (data: JSONData) => void
}

class StockClient implements StockClientInterface {
  data: XMLData
  analyzer: Analyzer
  _xmlToJson: (xmlData: XMLData) => JSONData

  featchData() {
    this.data = { type: 'xml', data: null }
    return this.data
  }
  renderData() {
    console.log('render this.data')
  }
  analyze() {
    this.analyzer.analyze(this._xmlToJson(this.data))
  }
}

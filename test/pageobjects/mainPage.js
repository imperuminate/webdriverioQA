const Page = require('./page')

class MainPage extends Page {

    get listExamples() { return $$("ul li") }

    get dynamicButton() { return $('a[href="/dynamic_loading"]') }

    open () {
        return super.open('')
    }

}

module.exports = new MainPage() 
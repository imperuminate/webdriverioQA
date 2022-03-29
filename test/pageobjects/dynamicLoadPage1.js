const Page = require('./page')

class DynamicPage extends Page{

    get startButton() {return $('#start button')}

    get finishText() {return $('#finish h4')}

    open(){
        return super.open('dynamic_loading/1')
    }

}

module.exports = new DynamicPage()
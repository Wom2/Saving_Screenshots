import Page from './page.js';

class DynamicPage extends Page {
    
    get start () {
        return $('button');
    }
    get Hello () {
        return $('//*[@id="finish"]/h4')
    }
    open () {
        return super.open('dynamic_loading/2');
    }
}

export default new DynamicPage();
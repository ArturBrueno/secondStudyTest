class HeaderFragment {
    
    constructor(){
        this.root = $('header.header')
        this.searchInput = this.root.$('.search-form__input[_ngcontent-c8]')
        this.searchButton = this.root.$('.search-form__submit[_ngcontent-c8]')
    }
}
module.exports = {
    HeaderFragment
}


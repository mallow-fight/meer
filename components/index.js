import Button from './Button/index.vue'
import Line from './Liner/index.vue'
import Row from './Row/index.js'
import Col from './Col/index.js'
import Affix from './Affix/index.vue'
import Breadcrumb from './Breadcrumb/index.js'
import Dropdown from './Dropdown/index.js'
function install (Vue) {
    Vue.mixin({
        components: {
            Buttoner: Button, 
            Liner: Line,
            Rower: Row,
            Coler: Col,
            Affixer: Affix,
            Breadcrumber: Breadcrumb,
            Dropdowner: Dropdown
        }
    })
}

export default {install}
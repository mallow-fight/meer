import Button from './Button/index.vue'
import Line from './Liner/index.vue'
import Row from './Row/index.js'
import Col from './Col/index.js'
import Affix from './Affix/index.vue'
import Breadcrumb from './Breadcrumb/index.js'
import Dropdown from './Dropdown/index.vue'
import Pagination from './Pagination/index.vue'
import Autocomplete from './Autocomplete/index.vue'
import Cascader from './Cascader/index.vue'
import Icon from './Icon/index.js'
import Layout from './Layout/index.vue'
import Menu from './Menu/menu.vue'
import MenuButton from './Menu/menu-button.vue'
import MenuGroup from './Menu/menu-group.vue'
import MenuItem from './Menu/menu-item.vue'
import Steps from './Step/index.vue'
import Step from './Step/step.vue'
import Checkbox from './Checkbox/index.vue'
import CheckAllbox from './Checkbox/CheckAllbox.vue'
import DatePicker from './DatePicker/index.vue'
import TimePicker from './DatePicker/TimePicker.vue'
function install (Vue) {
    Vue.mixin({
        components: {
            Buttoner: Button, 
            Liner: Line,
            Rower: Row,
            Coler: Col,
            Affixer: Affix,
            Breadcrumber: Breadcrumb,
            Dropdowner: Dropdown,
            Paginationer: Pagination,
            Autocompleter: Autocomplete,
            Cascader: Cascader,
            Iconer: Icon,
            Layouter: Layout,
            Menuer: Menu,
            'Menuer-button': MenuButton,
            'Menuer-group': MenuGroup,
            'Menuer-item': MenuItem,
            Steps,
            Step,
            Checkbox,
            CheckAllbox,
            DatePicker,
            TimePicker
        }
    })
}

export default {install}
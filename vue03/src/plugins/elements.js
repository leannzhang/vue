import Vue from 'vue'
import {
  Button,
  Form,
  FormItem,
  Message,
  Input,
  Container,
  Header,
  Aside,
  Main,
  Menu,
  Submenu,
  MenuItemGroup,
  MenuItem,
  Breadcrumb,
  BreadcrumbItem,
  Table,
  TableColumn,
  Card,
  Row,
  Col,
  Pagination,
  Tooltip,
  Dialog,
  MessageBox
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(MenuItem)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Card)
Vue.use(Row)
Vue.use(Col)
Vue.use(Pagination)
Vue.use(Tooltip)
Vue.use(Dialog)

// Vue.use(Message) M
Vue.prototype.$message = Message

Vue.prototype.$confirm = MessageBox.confirm

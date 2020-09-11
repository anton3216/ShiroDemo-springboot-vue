<template>
  <div>
    <Table :columns="columns" :data="historyData" context-menu show-context-menu border @on-contextmenu="handleContextMenu">
      <template slot="contextMenu">
        <DropdownItem @click.native="isShow = true">编辑</DropdownItem>
        <DropdownItem @click.native="deleteGoods" style="color: #ed4014">删除</DropdownItem>
      </template>
    </Table>
    <Page show-total show-elevator :total="dataCount" :page-size="pageSize" @on-change="changpage"></Page>
    <Drawer title="编辑角色" @close="updateUser" v-model="isShow" width="720" :mask-closable="false" :styles="styles">
      <Form :model="user">
        <Row :gutter="32">
          <Col span="12">
          <FormItem label="角色名" label-position="top">
            <Input v-model="role.name" placeholder="please enter user name" />
          </FormItem>
          </Col>
        </Row>
        <Row :gutter="32">
          <Col span="12">
          <FormItem label="角色描述" label-position="top">
            <Input v-model="role.desc_" type="password" placeholder="please enter user name" />
          </FormItem>
          </Col>
        </Row>
        <Row :gutter="32">
          <Col span="36">
          <FormItem label="权限" label-position="top">
            <CheckboxGroup v-model="role.userRole">
              <Checkbox label="1">admin</Checkbox>
              <Checkbox label="2">productManager</Checkbox>
              <Checkbox label="3">orderManager</Checkbox>
            </CheckboxGroup>
          </FormItem>
          </Col>
        </Row>
      </Form>
      <div class="demo-drawer-footer">
        <Button style="margin-right: 8px" @click="isShow = false">Cancel</Button>
        <Button type="primary" @click="updateUser">Submit</Button>
      </div>
    </Drawer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isShow: false,
        //分页起始单位
        dataCount: 0,
        //每页显示条数
        pageSize: 10,
        columns: [{
            title: '编号',
            key: 'id'
          },
          {
            title: '角色名',
            key: 'name'
          },
          {
            title: '角色描述',
            key: 'content'
          },
          {
            title: '权限',
            key: 'permissions'
          }
        ],
        historyData: [],
        role:{
          name:'',
          desc_:'',
          userRole:[]
        },
        styles: {
          height: 'calc(100% - 55px)',
          overflow: 'auto',
          paddingBottom: '53px',
          position: 'static'
        },
      }
    },
    created() {
      this.$ajax('http://localhost:8080/queryAllRole').then(
        res => {
          //将整个数组赋值给goodsList
          this.goodsList = res.data;
          console.log(res.data);
          //获得数据总数
          this.dataCount = this.goodsList.length
          //展示第一页
          this.historyData = this.goodsList.slice(0, this.pageSize)
        })
    },
    methods: {
      changpage(index) {
        //根据index(当前页计算起始下标)
        var _start = (index - 1) * this.pageSize
        //计算结束下标
        var _end = index * this.pageSize;
        //进行数组截取,将截取出来的数组 重新赋值给historyData
        this.historyData = this.goodsList.slice(_start, _end);
      },
      handleContextMenu(row) {

      },
      background(type, msg) {
        this.$Message[type]({
          background: true,
          content: msg
        });
      }
    }
  }
</script>

<style>
  .demo-drawer-footer {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    border-top: 1px solid #e8e8e8;
    padding: 10px 16px;
    text-align: right;
    background: #fff;
  }
</style>

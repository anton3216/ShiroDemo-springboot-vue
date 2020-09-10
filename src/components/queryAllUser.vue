<template>
  <div>
    <!-- <Button type="primary" to="/add">添加</Button> -->
    <Table :columns="columns" :data="historyData" border>
    </Table>
    <Page show-total show-elevator :total="dataCount" :page-size="pageSize" @on-change="changpage"></Page>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        //分页起始单位
        dataCount: 0,
        //每页显示条数
        pageSize: 3,
        columns: [{
            title: '编号',
            key: 'id'
          },
          {
            title: '姓名',
            key: 'name'
          },
          {
            title: '密码',
            key: 'password'
          },
          {
            title: '盐',
            key: 'salt'
          },
          {
            title: '角色',
            key: 'roles'
          }
        ],
        historyData: [],
      }
    },
    created() {
      this.$ajax('http://localhost:8080/queryAllUser').then(
        res => {
          //将整个数组赋值给goodsList
          this.goodsList = res.data;
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
      }
    }
  }
</script>

<style>
</style>

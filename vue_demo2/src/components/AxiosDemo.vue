<template>
  <div>
    <h1>Axios</h1>
  </div>
</template>

<script>
//职位搜索列表组件
import { PositionSearch } from "@/api/position";

export default {
  props: {},
  components: {},
  data() {
    return {
      searchData: {
        Keywords: "",
        City: "",
        Position: "",
        CompanyId: "",
        Companyname: "",
        Industry: "",
        JobCategory: "",
        Education: "",
        Salary: "",
        UpdateTime: "",
        Scope: "",
        CompanyStockType: "",

        Offset: 0,
        Limit: 3
      },
      pageSize: 10, //每页显示个数
      total: 8, //一共多少条数据
    };
  },
  computed: {},
  created() {},
  mounted() {
    this.init();
  },
  watch: {},
  methods: {
    init() {
      this.getList(this.searchData);
    },
    //获取所有职位
    /**
     * {data} 查询信息
     */
    getList(data) {
      this.searchData = data;
      data.Limit = this.pageSize;
      PositionSearch(data).then(res => {
        if (res.data.Data) {
          this.list = res.data.Data.Items;
          this.total = Number.parseInt(res.data.Data.Total);
          // Limit: 10
          // Offset: 0
          // PageIndex: 1
          // PageSize: 10
          // Total: 8
        } else {
        }
      });
    }
  }
};
</script>

<style scoped lang="scss">
</style>

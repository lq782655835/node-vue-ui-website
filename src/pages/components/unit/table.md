# Table组件


## 如何使用

```vue
<template>
    <u-table :list="tableData" @click="rowClick" style="max-width: 400px;">
        <template slot-scope="{row, index}">
            <u-table-column label="ID">{{index}}</u-table-column>
            <u-table-column label="Name">{{row.name}}</u-table-column>
            <u-table-column label="Date">
                <u-button size="s" @click.stop="btn(row.date)">日期</u-button>
            </u-table-column>
        </template>
    </u-table>
</template>

<script>
  export default {
    data () {
      return {
        tableData: [
          { 'id': 1, 'name': 'Jesse', 'date': '2016-10-15 13:43:27' },
          { 'id': 2, 'name': 'John', 'date': '2016-12-15 06:00:53' },
          { 'id': 3, 'name': 'Tina', 'date': '2016-04-26 06:26:28' }
        ]
      }
    },
    methods: {
      rowClick (row) {
        alert(row.name + ' row click')
      },
      btn (row) {
        alert(`row ${row.id} click`)
      }
    }
  }
</script>
```
## 属性配置

参数 | 说明 | 类型 | 可选值 | 默认值
--- | --- | --- | --- | ---
list | 数据列表 | Array | - | -
label | Thead表头展示 | String | - | -
`click` | 行点击 | Function | - | null

## 更多
* 改变单元格样式可以自己写
* 表格内组件click事件记得停止冒泡，避免影响到row行点击事件触发

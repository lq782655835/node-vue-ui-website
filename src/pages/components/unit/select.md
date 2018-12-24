# Select

## 如何使用
 ```vue
 <template>
  <div class="demo-block">
    <div class="demo-row">
      <u-select v-model="select.value1" :list="aiselectlist" size="small" class="u-select"/>
      value: {{ select.value1 }}
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        select: { value1: '' },
        aiselectlist: [
          { label: '1', value: '1' },
          { label: '2', value: '2' },
          { label: '3', value: '3' },
          { label: '4', value: '4' },
          { label: '5', value: '5' },
        ]
      }
    }
  }
</script>
 ```

 ## 使用参数

 参数 | 说明 | 类型 | 可选值 | 默认值
--- | --- | --- | --- | ---
list | 单选框数据源 | Array | - | []
value | 当前选中的值 | String/Number | - | -
disabled | 单选框是否禁用 | Boolean | true/false | false

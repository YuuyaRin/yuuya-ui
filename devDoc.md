## 全局颜色变量

### var.css

- #### postcss插件

  - 安装postcss-each插件（postcss），配置postcss.config.cjs
    因为要使用`@each $val in primary, success, info, danger, warning`语法

  - 安装postcss-each-variables插件,定义颜色变量用于@each循环

    ```
    --colors: (
    primary: #409eff,
    success: #67c23a,
    warning: #e6a23c,
    danger: #f56c6c,
    error: #f56c6c,
    info: #909399
    )
    @each $val, $color in var(--colors){

    }
    ```

  - 安装postcss-for插件，循环颜色级别
  - 安装postcss-color-mix插件，根据级别和类型（light,dark），混入颜色；级别控制混入比例，light与dark控制主色与#fff还是#000混入

    ```
    @each $val, $color in var(--colors) {
      --yuuya-color-$(val): $color;
      @for $i from 3 to 9 by 2 {
        --yuuya-color-$(val)-light-$(i): mix(#fff, $(color), .$(i));
      }
      --yuuya-color-$(val)-light-8: mix(#fff, $(color), 0.8);
      --yuuya-color-$(val)-dark-2: mix(#000, $(color), 0.2);
    }
    ```

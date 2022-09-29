# vite 学习

> 不建议在开发时用 `Vite` ，打包时用 `Webpack`，这样会导致别名冲突，环境变量也会出问题，图片以及静态资源都会出现问题！

## 快速开始

安装脚手架

```bash
yarn create vite app
cd app
yarn 
```

## bash 配置打包公共路径

```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue()]
})
```

为防止部署项目时发生资源路径访问错误的隐患，这里配置相对路径来避免发生。

## alias 配置图片地址别名

> ts需要安装 `@type/node` 才能识别到 `node_modules` 文件夹下的模块

```bash
yarn add @types/node
```

在 `vite.config.ts` 文件中，设置别名配置：

```typescript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@comp': resolve(__dirname, 'src/components')
    }
  },
  plugins: [vue()]
})
```

测试配置是否生效：

```vue
// App.vue
<script setup lang="ts">
import HelloWorld from '@comp/HelloWorld.vue'
</script>
<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
</template>
```

网页组件正常加载 ，说明别名配置成功

## 构建生产版本移除log打印

```typescript
// vite.config.ts
export default defineConfig({
  ...
  build: {
    minify: 'terser', // 默认为esbuild
    terserOptions: {
      compress: {
        drop_console: true, // 生产环境移除console
        drop_debugger: true // 生产环境移除debugger
      }
    }
  },
  ...
})
```

## 打包输出文件夹配置

未配置输出文件夹和配置了输出文件夹对比，配置后的结构更加清晰明了

![](https://cdn.sbitx.top/image.png)

```typescript
// vite.config.ts
...
export default defineConfig({
  build: {
    ...
    rollupOptions: {
      output: { // 配置输出文件夹
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
        assetFileNames: '[ext]/[name]-[hash].[ext]'
      }
    }
  },
  ...
})
```

## `ElementPlus` 按需引入

## 配置Vite的局域网访问

```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
...
export default defineConfig({
  ...
  server: {
    host: '0.0.0.0'
  },
  ...
})
```

## mock数据

### 安装

```bash
yarn add -D vite-plugin-mock mockjs
yarn add axios
```

官方地址：https://github.com/vbenjs/vite-plugin-mock

### 配置文件

```typescript
// vite.config.ts
...
// 引入Mock插件
import { viteMockServe } from 'vite-plugin-mock'

export default defineConfig({
  ...
  plugins: [
    vue(),
    ...
    viteMockServe({
      // 数据模拟
      mockPath: 'mock'
    })
  ],
  ...
})
```

在根目录新建 `mock` 文件夹，在其中新建 `index.ts` 文件

```typescript
// index.ts
import { MockMethod } from 'vite-plugin-mock'
import { mock } from 'mockjs'

const info = mock({
  // 'name|10': [() => Random.cname()] // 第一种方法
  'name|10': ['@cname'] // 第二种方法，无区别
})
export default [
  {
    url: '/api/get',
    method: 'get',
    response: ({ query }) => {
      return {
        code: 200,
        info
      }
    }
  }
] as MockMethod[]

```

### 在组件中请求数据

![image-20220502235407222](https://cdn.sbitx.top/image-20220502235407222.png)

```typescript
<script setup lang="ts">
  import axios from "axios";
  async function fn() {
    const {data} = await axios.get('/api/get')
    console.log(data)
  }
  fn()
</script>
```

## 代理跨域

```typescript
export default defineConfig({
  server: {
    proxy: {
      // 字符串简写写法
      '/foo': 'http://localhost:4567',
      // 选项写法
      '/api': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
      // 正则表达式写法
      '^/fallback/.*': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/fallback/, '')
      },
      // 使用 proxy 实例
      '/api': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        configure: (proxy, options) => {
          // proxy 是 'http-proxy' 的实例
        }
      },
      // Proxying websockets or socket.io
      '/socket.io': {
        target: 'ws://localhost:3000',
        ws: true
      }
    }
  }
})
```

## 配置开发环境和生产环境变量

在根目录创建两个文件 `.env.development` (开发环境配置文件）和 `.env.production` (生产环境配置文件）

```typescript
// .env.development
VITE_BASE_API = '/api/get'
```

```typescript
// .env.production
VITE_BASE_API = 'https://api.sbitx.top/dog'
```

在 `App.vue` 中修改请求地址：

```vue
<script setup lang="ts">
import HelloWorld from '@comp/HelloWorld.vue'
import axios from 'axios'
async function fn() {
  const { data } = await axios.get(import.meta.env.VITE_BASE_API as string)
  console.log(data)
}
fn()
</script>
```

## CDN 引入

```bash
yarn add vite-plugin-cdn-import -D
```

修改 `vite.config.ts`  文件

```typescript
...
// 引入CDN插件
import importToCDN, { autoComplete } from 'vite-plugin-cdn-import'
...

export default defineConfig({
  ...
  plugins: [
    ...
    importToCDN({
      modules: [
        {
          name: 'vue',
          var: 'Vue',
          path: 'https://unpkg.com/vue@next'
        },
        {
          name: 'element-plus',
          var: 'ElementPlus',
          path: `https://unpkg.com/element-plus`,
          css: 'https://unpkg.com/element-plus/dist/index.css'
        }
      ]
    })
  ],
})
```

修改 `main.ts` 文件：

```typescript
import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'

createApp(App).use(ElementPlus).mount('#app')
// createApp(App).mount('#app')
```

## GZIP压缩

安装插件:

```bash
yarn add vite-plugin-compression -D
```

配置文件

```typescript
// vite.config.ts
import viteCompression from 'vite-plugin-compression'
export default defineConfig({
  ...
  plugins: [
  ...
  viteCompression(), // GZIP压缩
  ...
  ]
})

```

## 打包图片

### 安装模块

```bash
yarn add vite-plugin-imagemin -D
```

### 修改配置

```typescript
// vite.config.ts
// 引入图片压缩插件
...
import viteImagemin from 'vite-plugin-imagemin'

export default defineConfig({
  plugins: [
    ...
    viteImagemin({
        gifsicle: {
          optimizationLevel: 7,
          interlaced: false
        },
        optipng: {
          optimizationLevel: 7
        },
        mozjpeg: {
          quality: 20
        },
        pngquant: {
          quality: [0.8, 0.9],
          speed: 4
        },
        svgo: {
          plugins: [
            {
              name: 'removeViewBox'
            },
            {
              name: 'removeEmptyAttrs',
              active: false
            }
          ]
        }
    })
  ]
})
```

但不推荐使用图片打包的插件，打包时间太长，建议自行压缩，使用ps或者图压。
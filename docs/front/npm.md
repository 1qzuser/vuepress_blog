# 前端工程化

## nvm

- 推荐使用 `nvm` 管理 `npm`



## npm设置淘宝镜像

1. 检查当前 `npm` 使用的镜像（使用的是官方镜像）

   ```npm
   npm config get registry
   ```

   

![image-20220502215133368](https://cdn.sbitx.top/image-20220502215133368.png)

2. 更换官方镜像为淘宝镜像

   ```node
   npm --registry https://registry.npm.taobao.org install express //临时使用
   npm config set registry https://registry.npm.taobao.org //永久使用
   ```

3. 再次检查就更换成为了淘宝镜像

   ![image-20220502215505049](https://cdn.sbitx.top/image-20220502215505049.png)

### 总结：

```tex
临时使用：npm --registry https://registry.npm.taobao.org install express

永久使用：npm config set registry https://registry.npm.taobao.org

查看npm的镜像地址：npm config get registry

npm默认的镜像地址：https://registry.npmjs.org
```


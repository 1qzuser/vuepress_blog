# 前端工程化

## nvm

- 推荐使用 `nvm` 管理 `npm`
- 蓝奏云：https://coisini.lanzouf.com/iawe902tpwmb
- 下载地址：https://github.com/coreybutler/nvm-windows/releases

### 常用命令

nvm ls ：列出所有已安装的 node 版本

nvm ls-remote ：列出所有远程服务器的版本（官方node version list）

nvm list ：列出所有已安装的 node 版本

nvm list available ：显示所有可下载的版本

nvm install stable ：安装最新版 node

nvm install [node版本号] ：安装指定版本 node

nvm uninstall [node版本号] ：删除已安装的指定版本

nvm use [node版本号] ：切换到指定版本 node

nvm current ：当前 node 版本

nvm alias [别名] [node版本号] ：给不同的版本号添加别名

nvm unalias [别名] ：删除已定义的别名

nvm alias default [node版本号] ：设置默认版本

## npm设置淘宝镜像

1. 检查当前 `npm` 使用的镜像（使用的是官方镜像）

   ```npm
   npm config get registry
   ```

2. 更换官方镜像为淘宝镜像

   ```node
   npm --registry https://registry.npm.taobao.org install express //临时使用
   npm config set registry https://registry.npm.taobao.org //永久使用
   ```

3. 再次检查就更换成为了淘宝镜像

### 总结：

```tex
临时使用：npm --registry https://registry.npm.taobao.org install express

永久使用：npm config set registry https://registry.npm.taobao.org

查看npm的镜像地址：npm config get registry

npm默认的镜像地址：https://registry.npmjs.org
```


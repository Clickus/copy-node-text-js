## 复制html节点值 至剪贴板 （Clipboard）

### 导如方法
```
import {copyNodeText} from 'copy-node-text-js'
```

#### 获取节点值通过id

```
copyNodeText("#nodeId")
```


#### 获取节点值通过class

##### "|" 为分隔符;默认为“,”;可为空
```
copyNodeText(".nodeclass", "|")
```



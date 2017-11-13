## 像素border的实现

1.问题一：相对地址没太明白，因为地址总是报找不到。

```
eg:
//错误代码
import '../common/stylus/index.styl';
//正确代码
import './common/stylus/index.styl';//同级则用一个点号，上级的同级则用两个点号
//主要还是搞清楚层级关系，不然很容易报错。
```


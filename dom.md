## 获取dom元素
* document.getElementById()
* document.getElementByTagName()
* document.getElementsByClassName() // 返回NodeList（类数组），表示指定类名的元素集合
* document.getElementsByName()
* document.querySelector(".class") // CSS选择符模式
* document.querySelectorAll(".class")[i] // 结果为一个类数组
* 得到的类数组可以通过Array.from()转换为数组

## 增加样式
Ele.style.width
Ele.className='aaa'  // 设置元素的class为aaa ，如果元素上原本有class则会覆盖
Ele.classList.add("aaa") // 给Ele新增aaa
Ele.className += " aaa"  // 给Ele新增aaa

## 操作属性
```
Ele.setAttribute("data-id", 1);
Ele.setAttribute("data-id");
Ele.remove("data-id");
```
## 面向dom元素的增删改查
```
// 新建dom
const p = document.createElement("p");

// 删除dom
Ele.remove(); // 删除ELe
Ele.removeChild(clildEle) // 删除ELe中的子元素 childEle
  
// 克隆dom
const box = document.getElementsByClassName("box")[0];
const p = document.createElement("p");
p.innerText = "欢迎关注码不停息微信公众号";
const p2 = p.cloneNode(true); // 复制一个p  参数true标识深度复制，如果p里面有子节点也复制过来
box.appendChild(p);
box.appendChild(p2);

// 插入节点
Ele.appendChild(ele) 在Ele的最后插入ele
Ele.insertBefore(newele,ele) // 在Ele元素中的 ele元素前插入 newele

// 删除节点
EleParent.removeChild(ele) // 删除EleParent中的ele元素
```
## 查找dom
parentNode()
nextSibling()指定节点的下一个节点
perviousSibling()指定节点的上一个节点
firstChild()
firstElementChild()
lastChild()

```
<body>
    <div id="box">
      <p>文件</p>
      <p>文件</p>
    </div>
    <script>
      const box = document.getElementById("box");
      console.log(box.firstChild.nodeType); // 3 文本
      console.log(box.firstElementChild.nodeType); // 1 元素
    </script>
  </body>
```






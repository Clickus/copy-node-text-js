  /**
  * 根据类名查找元素，解决浏览器兼容问题
  * @param className 待查找的类名
  * @return 返回查找到的元素集合
  */
  function _getEleByClass(className) {
　　if (document.getElementsByClassName) {
  　　return document.getElementsByClassName(className);
    }
    /* 不支持使用 getElementsByClassName() 方法，解决兼容 */
    // 定义保存结果的数组
　　var result = [];
    // 根据标签名查找所有元素
　　var elements = document.getElementsByTagName("*");
    // 遍历每个元素
　　for (var i = 0, len = elements.length; i < len; i++) {
    // 当前遍历到元素的所有类名
      var classNames = elements[i].className.split(" ");
    // 遍历当前元素的类名
    　for (var j = 0, l = classNames.length; j < l; j++) {
    // 判断当前遍历到的类名是否与待查找元素的类名一致
    　  if (classNames[j] === className) {
    // 一致，则说明当前遍历到的元素是待查找出元素其中之一
    　　  result.push(elements[i]);
    　　　break;
    　　}
    　}
    }
    // 返回查找到的结果
　　return result;
  }

  /**
   * @param {*} id或者class 
   * @return 返回元素集合
   */
  function _getElementNode(name){
    var ele = null
    if (name.indexOf('#')>=0) {
      ele = document.getElementById(name.substring(1))
    }
    if (name.indexOf('.')>=0) {
      ele = _getEleByClass(name.substring(1))
    }
    return ele
  }
  
  /**
   * @param {*} ele 元素集合
   * @param {*} separator 分隔符
   * @return 返回元素节点值
   */
  function _getElementNodeText(ele, separator){
    var result = ''
    if (ele.length>=1) {
      var temp = []
      var sText = ''
      for (var index = 0, ilen = ele.length; index < ilen; index++) {
        sText = ele[index].innerText
        if (sText) {
          temp.push(sText)
        }
      }
      result = temp.join(separator||',')
    } else {
      result = ele.innerText
    }
    return result
  }

  /**
   * @param {*} name id 或 class
   * @param {*} separator 分隔符
   * @return 返回text
   */
  function _copyNodeText(name, separator){
    var ele = _getElementNode(name)
    if (!ele) {
      throw new Error('未查询到节点')
    }
    var text = _getElementNodeText(ele, separator)
    var textarea = document.createElement('textarea');
    textarea.style.position = 'absolute';
    textarea.style.left = '-9999px';
    textarea.style.top = '-9999px';
    textarea.style.opacity = 0;
    textarea.style.zIndex = 0;
    textarea.style.position = 'absolute';
    document.body.appendChild(textarea);
    textarea.value= text || '';
    textarea.select();
    document.execCommand("Copy"); 
    document.body.removeChild(textarea);
    return text || '';
  }
  
  if('object' === typeof exports) {
    exports.copyNodeText = _copyNodeText;
  }
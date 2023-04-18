export default class Compile {
    constructor(el, vue) {
        //vue实例
        this.$vue = vue;
        //挂载点
        this.$el = document.querySelector(el);
        //如果用户传入了挂载点
        if (this.$el) {
            //调用函数,让节点变为fragment,类似于mustache中的
            // tokens.实际上用的是AST
            let $fragment = this.node2Fragment(this.$el);
            //编译
            this.compile($fragment)
        }
    }
    node2Fragment(el) {
        var fragment = document.createDocumentFragment();
        // console.log(fragment);
        var child;
        //让所有DOM节点,都进入fragment
        while (child = el.firstChild) {
            fragment.appendChild(child)
        }
        return fragment;
    }
    compile(el) {
        //得到子元素
        var childNodes = el.childNodes;
        var self = this;
        childNodes.forEach(node => {
            if (node.nodeType == 1) {
                self.compileElement(node);
            } else if (node.nodeType == 3) {
                var text = node.textContent;
            }
        });
    }
    compileElement(node) {
        //这里的方便之处在于不是将HTML结构看做字符串,而是真正的属性列表
        var nodeAttrs = node.attributes;
        // 类数组对象变为数组
        [].slice.call(nodeAttrs).forEach(attr => {
            // 这里就分析指令
            var attrName = attr.name;
            var value = attr.value;
            //指令都是v-开头的
            var dir = attrName.substring(2);

            //看看是否是指令
            if (attrName.indexOf('v-') == 0) {
                //v-开头就是指令
                if (dir == 'model') {

                } else if (dir == 'if') {

                }
            }
        });
    }
    compileText() {

    }
}
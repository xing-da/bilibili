// let str:String = '代';
// console.log(str);
// 虚拟dom 简单版
class Dom {
    //创建节点的方法
    createElement(el) {
        return document.createElement(el);
    }
    // 填充文本的方法
    setText(el, text) {
        el.textContent = text;
    }
    // 渲染函数
    render(data) {
        let root = this.createElement(data.tag);
        if (data.children && Array.isArray(data.children)) {
            data.children.forEach(item => {
                let child = this.render(item);
                root.appendChild(child);
            });
        }
        else {
            this.setText(root, data.text);
        }
        return root;
    }
}
class Vue extends Dom {
    constructor(options) {
        super();
        this.options = options;
        this.init();
    }
    init() {
        let data = {
            tag: "div",
            children: [
                {
                    tag: 'section',
                    text: '我是子节点1'
                },
                {
                    tag: 'section',
                    text: '我是子节点2'
                },
            ]
        };
        let app = typeof this.options.el == 'string' ? document.querySelector(this.options.el) : this.options.el;
        app.appendChild(this.render(data));
    }
}
new Vue({
    el: "#app",
});

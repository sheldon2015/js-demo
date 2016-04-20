# keywords:  history管理和前进、后退、 使用场景
##利用window.hash   和 hashchange事件

##history.pushState()和history.replaceState()类似，history.replaceState()不会新生成历史记录，
而是将当前历史记录替换掉以及1个事件：window.onpopstate
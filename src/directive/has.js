export default{
    inserted(el,bindings,vnode){
        let boolean = bindings.value;
         !boolean &&el.parentNode.removeChild(el);
        

    }
}
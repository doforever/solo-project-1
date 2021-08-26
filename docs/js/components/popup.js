import{select,classNames}from"../settings.js";class Popup{constructor(){this.getBackground(),this.initGlobalActions(),this.dataObject=null,this.template=null}getBackground(){this.dom={},this.dom.background=document.querySelector(select.popup.background)}render(){let e=document.createElement("div");this.template&&(e.innerHTML=this.template(this.dataObject).trim()),this.dom.element=e.firstChild,this.dom.element&&this.dom.background.appendChild(this.dom.element)}getElements(){}initGlobalActions(){document.addEventListener("keyup",e=>{"Escape"===e.key&&this.dom.element&&this.close()}),this.dom.background.addEventListener("click",()=>{this.dom.element&&this.close()})}initActions(){this.dom.element.addEventListener("click",e=>{e.stopPropagation(),e.target.classList.contains(classNames.popup.buttonClose)&&(this.hideBackground(),this.close())})}show(){this.dom.element.classList.add(classNames.popup.visible)}open(){this.render(),this.getElements(),this.initActions(),this.show()}close(){this.dom.element.remove()}hideBackground(){this.dom.background.classList.remove(classNames.popup.backgroundVisible)}}export default Popup;
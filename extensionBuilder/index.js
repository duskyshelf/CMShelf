var $eysq1$reactjsxruntime = require("react/jsx-runtime");
var $eysq1$react = require("react");
var $eysq1$reactdom = require("react-dom");
var $eysq1$reactrte = require("react-rte");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}








const $89818b3da78acbbc$var$RichEditor = ({ value: value, onChange: onChange })=>/*#__PURE__*/ (0, $eysq1$reactjsxruntime.jsx)((0, ($parcel$interopDefault($eysq1$reactrte))), {
        value: value,
        onChange: onChange
    });
var $89818b3da78acbbc$export$2e2bcd8739ae039 = $89818b3da78acbbc$var$RichEditor;





const $bef11da60ed95e9f$var$submitContent = (contentId, value)=>{
    const content = value.toString("html");
    const body = JSON.stringify({
        id: contentId,
        content: content
    });
    console.log("body", body);
    fetch("http://localhost:3100/update", {
        headers: {
            "Content-Type": "application/json"
        },
        method: "post",
        body: body
    });
};
const $bef11da60ed95e9f$var$SubmitButton = ({ value: value, contentId: contentId })=>{
    return /*#__PURE__*/ (0, $eysq1$reactjsxruntime.jsx)("button", {
        type: "button",
        onClick: ()=>$bef11da60ed95e9f$var$submitContent(contentId, value),
        children: "submit"
    });
};
var $bef11da60ed95e9f$export$2e2bcd8739ae039 = $bef11da60ed95e9f$var$SubmitButton;


class $2bd1ec3fc693104f$var$App extends (0, $eysq1$react.Component) {
    constructor(props){
        super(props);
        this.state = {
            content: (0, ($parcel$interopDefault($eysq1$reactrte))).createValueFromString(props.content, "html"),
            id: props.id
        };
        this.onChange = this.onChange.bind(this);
    }
    onChange(content) {
        this.setState({
            content: content
        });
    }
    render() {
        return /*#__PURE__*/ (0, $eysq1$reactjsxruntime.jsxs)("div", {
            children: [
                /*#__PURE__*/ (0, $eysq1$reactjsxruntime.jsx)((0, $89818b3da78acbbc$export$2e2bcd8739ae039), {
                    value: this.state.content,
                    onChange: this.onChange
                }),
                /*#__PURE__*/ (0, $eysq1$reactjsxruntime.jsx)((0, $bef11da60ed95e9f$export$2e2bcd8739ae039), {
                    value: this.state.content,
                    contentId: this.state.id
                })
            ]
        });
    }
}
const $2bd1ec3fc693104f$var$elements = document.querySelectorAll(".App-intro");
$2bd1ec3fc693104f$var$elements.forEach((element)=>{
    const content = element.innerHTML;
    const id = element.getAttribute("cmsid");
    $eysq1$reactdom.render(/*#__PURE__*/ (0, $eysq1$reactjsxruntime.jsx)($2bd1ec3fc693104f$var$App, {
        content: content,
        id: id
    }), element);
});


//# sourceMappingURL=index.js.map

webpackJsonp([11],{55:function(n,t){n.exports="\x3c!-- <p align=\"center\"><img src=\"https://github.com/Tencent/omi/raw/master/assets/omi-logo2019.svg?sanitize=true\" alt=\"omi\" width=\"300\"/></p>\n<h2 align=\"center\">Omi - \u4e0b\u4e00\u4ee3\u524d\u7aef\u6846\u67b6\uff0c\u53bb\u4e07\u7269\u7cdf\u7c95\uff0c\u5408\u7cbe\u534e\u4e3a\u4e00\u70b9\u70b9 JS</h2>\n<p align=\"center\"><b>\u57fa\u4e8e Web Components \u5e76\u652f\u6301 IE8+(omio) \u548c \u5c0f\u7a0b\u5e8f(omip)</b></p>\n --\x3e\n\n## Omi \u662f\u4ec0\u4e48\uff1f\n\nOmi (\u8bfb\u97f3 /\u02c8om\u026a/\uff0c\u7c7b\u4f3c\u4e8e \u6b27\u7c73) \u662f\u4e0b\u4e00\u4ee3\u524d\u7aef\u6846\u67b6\uff0c\u57fa\u4e8e Web Components \u8bbe\u8ba1\uff0c\u652f\u6301 PC Web\u3001\u79fb\u52a8 H5 \u548c\u5c0f\u7a0b\u5e8f\u5f00\u53d1(One framework. Mobile & desktop & mini program)\u3002\n\n\n<em> Omi looks really neat!<br> </em>\n\u3000\u3000\u3000\u3000\u2014 [Jason Miller (Creator of Preact)](https://twitter.com/_developit/)\n\n<em> I really like the trend towards \"frameworks\" that:<br><br>\"export default class WeElement extends HTMLElement {..}\"<br> <br>This one, Omi, is from Tencent.</em>       \n\u3000\u3000\u3000\u3000\u2014 [Dion Almaer](https://twitter.com/dalmaer/)\n\n## \u4e00\u4e2a HTML \u5b8c\u5168\u4e0a\u624b\n\n\u4e0b\u9762\u8fd9\u4e2a\u9875\u9762\u4e0d\u9700\u8981\u4efb\u4f55\u6784\u5efa\u5de5\u5177\u5c31\u53ef\u4ee5\u6267\u884c:\n\n```html\n<script src=\"https://unpkg.com/omi\"><\/script>\n<script>\n  const { define, WeElement, h, render } = Omi\n\n  define('my-counter', class extends WeElement {\n    install() {\n      this.data.count = 1\n      this.sub = this.sub.bind(this)\n      this.add = this.add.bind(this)\n    }\n\n    sub() {\n      this.data.count--\n      this.update()\n    }\n\n    add() {\n      this.data.count++\n      this.update()\n    }\n\n    render() {\n      return h(\n        'div',\n        null,\n        h(\n          'button',\n          { onClick: this.sub },\n          '-'\n        ),\n        h(\n          'span',\n          null,\n          this.data.count\n        ),\n        h(\n          'button',\n          { onClick: this.add },\n          '+'\n        )\n      )\n    }\n  })\n\n  render(h('my-counter'), 'body')\n<\/script>\n```\n\n\u901a\u8fc7\u4e0a\u9762\u811a\u672c\u7684\u6267\u884c\uff0c\u4f60\u5df2\u7ecf\u5b9a\u4e49\u597d\u4e86\u4e00\u4e2a\u81ea\u5b9a\u4e49\u6807\u7b7e\uff0c\u53ef\u4ee5\u4e0d\u4f7f\u7528 render \u65b9\u6cd5\uff0c\u76f4\u63a5\u4f7f\u7528 `my-counter` \u6807\u7b7e\uff1a\n\n```jsx\n<body>\n  <my-counter></my-counter>\n</body>\n```\n\n* [\u70b9\u51fb\u8fd9\u91cc\u770b\u6267\u884c\u7ed3\u679c](https://tencent.github.io/omi/assets/omi.html)\n\n\u4e0a\u9762\u4f7f\u7528\u7684\u662f hyperscript \u7684\u65b9\u5f0f\u6765\u4e66\u5199 HTML \u7ed3\u6784\uff0c\u7528 ES5 \u4e66\u5199 JS \uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 JSX \u548c ES2015+ \u6765\u66ff\u4ee3\u5b83\u4eec\u3002\n\n\n```jsx {8-11}\nimport { render, WeElement, define } from 'omi'\n\ndefine('my-counter', class extends WeElement {\n  data = {\n    count: 1\n  }\n\n  static css = `\n    span{\n        color: red;\n    }`\n\n  sub = () => {\n    this.data.count--\n    this.update()\n  }\n\n  add = () => {\n    this.data.count++\n    this.update()\n  }\n\n  render() {\n    return (\n      <div>\n        <button onClick={this.sub}>-</button>\n        <span>{this.data.count}</span>\n        <button onClick={this.add}>+</button>\n      </div>\n    )\n  }\n})\n\nrender(<my-counter />, 'body')\n```\n\n\u770b\u4e0a\u9762\u9ad8\u4eae\u7684\u90e8\u5206\uff0c\u53ef\u4ee5\u7ed9\u7ec4\u4ef6\u52a0\u6837\u5f0f\uff0c\u6bd4\u5982\u4e0a\u9762\u7684 span \u7684\u4f5c\u7528\u57df\u4ec5\u4ec5\u5728\u7ec4\u4ef6\u5185\u90e8\uff0c\u4e0d\u4f1a\u6c61\u67d3\u522b\u7684\u7ec4\u4ef6\u3002\u5230\u73b0\u5728\u4f60\u5df2\u7ecf\u6210\u529f\u5165\u95e8 Omi \u4e86\uff01\u4f60\u5b66\u4f1a\u4e86:\n\n* \u4e3a\u7ec4\u4ef6\u6dfb\u52a0**\u7ed3\u6784**\uff0c\u5982\u4e0a\u9762\u4f7f\u7528 JSX \u4e66\u5199\u7ed3\u6784\n* \u4e3a\u7ec4\u4ef6\u6dfb\u52a0**\u884c\u4e3a**\uff0c\u5982\u4e0a\u9762\u7684 `onClick` \u7ed1\u5b9a\u4e8b\u4ef6\n* \u4e3a\u7ec4\u4ef6\u6dfb\u52a0**\u6837\u5f0f**\uff0c\u5982\u4e0a\u9762\u7684 `static css`\n* \u6e32\u67d3\u7ec4\u4ef6\u5230 body\uff0c\u5f53\u7136\u4e5f\u53ef\u4ee5\u628a\u7ec4\u4ef6\u6e32\u67d3\u5230\u4efb\u610f\u5176\u4ed6\u7ec4\u4ef6\n\n\u606d\u559c\u4f60\uff01"}});
//# sourceMappingURL=11.8e1bb513.chunk.js.map
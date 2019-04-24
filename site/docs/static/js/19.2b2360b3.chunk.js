webpackJsonp([19],{47:function(n,e){n.exports="\n## Props\n\nTransfer data to sub elements through props, such as:\n\n```jsx\nimport { WeElement, define, render } from 'omi'\n\ndefine('my-element', class extends WeElement {\n  render(props) {\n    return (\n      <h1>Hello, {props.name}!</h1>\n    )\n  }\n})\n```\n\nUsing element:\n\n```jsx\n<my-element name=\"world\"></my-first-element>\n```\n\nYou can also pass any type of data to props:\n\n```jsx\ndefine('my-element', class extends WeElement {\n  render(props) {\n    return (\n      <h1>Hello, {props.myObj.name}!</h1>\n    )\n  }\n})\n```\n\nUsing element:\n\n```jsx\n<my-first-element myObj={{ name: 'world' }}></my-first-element>\n```\n\nYou can set the default value by the static default Props property:\n\n```jsx\ndefine('my-first-element', class extends WeElement {\n  static defaultProps = {\n\t\tname: 'Omi',\n\t\tmyAge: 18\n\t}\n\n  render(props) {\n    return (\n      <h1>Hello, {props.name}! Age {props.myAge}</h1>\n    )\n  }\n})\n```"}});
//# sourceMappingURL=19.2b2360b3.chunk.js.map
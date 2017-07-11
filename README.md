[![Build status](https://travis-ci.org/arodic/io-value.svg?branch=master)](https://travis-ci.org/arodic/io-value)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://beta.webcomponents.org/element/arodic/io-value)


## &lt;io-value&gt;

`io-value` is an ultra-lightweight editor for primitive data types (string, number, boolean). It wraps a simple inline-block element with minimal styling and very few listeners. A shared `input` element is attached while editing actions are performed.

Example:

<!---
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="io-value.html">
    <style>
    io-value {
      display: block;
      margin: 1px;
      border: 1px solid #eee;
    }
    </style>
    <div id="container">
      <next-code-block></next-code-block>
    </div>
  </template>
</custom-element-demo>
```
-->
```html
<io-value type="string" value="hello"></io-value>
<io-value type="number" value="1337"></io-value>
<io-value type="boolean" value="true"></io-value>
```

Preview:

![io-value preview]( https://raw.githubusercontent.com/arodic/io-value/master/preview.png "io-value preview")

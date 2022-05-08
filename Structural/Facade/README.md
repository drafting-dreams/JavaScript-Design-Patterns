The **Facade Pattern** provides a simpler abstracted interface a larger (potentially more complex) body of code.

Facades can be frequently found across the jQuery library and provide developers easy access to implementations for handling DOM manipulation, animation and of particular interest, cross-browser Ajax.

The following are facades for jQuery's `$.ajax()`

```js
$.get(url, data, callback, dataType)
$.post(url, data, callback, dataType)
$.getJSON(url, data, callback)
$.getScript(url, callback)
```

These are translated behind the scenes to:

```js
// $.get()
$.ajax({
  url: url,
  data: data,
  dataType: dataType,
}).done(callback)

// $.post()
$.ajax({
  type: 'POST',
  url: url,
  data: data,
  dataType: dataType,
}).done(callback)

// $.getJSON()
$.ajax({
  url: url,
  dataType: 'json',
  data: data,
}).done(callback)

// $.getScript()
$.ajax({
  url: url,
  dataType: 'script',
}).done(callback)
```

We can say that Facade Pattern is the design philosophy of jQuery. At that time, Web development was very unfriendly. Because different browsers have their own standards, **for business reasons**. Developers struggled adapting code to each browsers.

The appearance of jQuery saved developers from this hell by providing a unified interface for many DOM APIs across different browsers in the marketplace.

What's even more interesting is that the above facades are actually facades in their own right, hiding a great deal of complexity behind the scenes.

This is because the `jQuery.ajax()` implementation in jQuery core is a non-trivial piece of code to say the least. At minimum it normalizes the cross-browser differences between XHR (XMLHttpRequest) and makes it trivial for us to perform common HTTP actions (e.g get, post etc), work with Deferreds and so on.

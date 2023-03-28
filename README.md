## Bilibili URL Clean

Bilibili uses the [history.replaceState](https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState) API to add additional tracking parameters to it's pages, bypassing extensions like uBlock Origin. This extension watches for this change, and injects a script to remove this parameter.
var pug = require('pug')

var content = '.text-red-200(@clicky="event -> otherFunc(event)") die hond'

html = pug.render(content)

html = html.replace(/&amp;/g, '&')
// &quot; is ", but it appears only inside attributes - and html attributes already use " for enclosing
html = html.replace(/&quot;/g, "'")
html = html.replace(/&gt;/g, '>')
html = html.replace(/&lt;/g, '<')
html = html.replace(/v-else="v-else"/g, 'v-else')

console.log(html)

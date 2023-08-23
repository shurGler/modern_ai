(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{488:function(e,t,n){"use strict";n.r(t);var s=n(11),r=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("head",[t("script",{attrs:{defer:"defer",src:"https://embed.trydyno.com/embedder.js"}}),e._v(" "),t("link",{attrs:{href:"https://embed.trydyno.com/embedder.css",rel:"stylesheet"}})]),e._v(" "),t("p",[e._v("在代码生成场景里，有一个小技巧，上面提到的案例，其 prompt 还可以继续优化，在 prompt 最后，增加一个代码的引导，告知 AI 我已经将条件描述完了，你可以写代码了。")]),e._v(" "),t("p",[e._v("Better：")]),e._v(" "),t("div",{staticClass:"language-other line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Create a MySQL query for all students in the Computer Science Department:\nTable departments, columns = [DepartmentId, DepartmentName]\nTable students, columns = [DepartmentId, StudentId, StudentName]\nSELECT\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br")])]),t("p",[e._v("在 prompt 的最后增加 SELECT 可以很好地提示 AI 可以写 SQL 代码了。")]),e._v(" "),t("p",[e._v("同样的道理，如果你想让 AI 写 Python 代码，那 import 会是比较好的提示。但需要注意，这个只是告知 AI 可以写代码了，并不能告知 AI 写何种代码，你仍然需要在 prompt 里增加提示，告知 AI 要生成何种语言的代码。")]),e._v(" "),t("p",[e._v("在吴恩达的 ChatGPT Prompt Engineering "),t("a",{attrs:{href:"https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/",target:"_blank",rel:"noopener noreferrer"}},[e._v("课程"),t("OutboundLink")],1),e._v("中，也提到这个技巧，只是在课程中，引导词并不是放在最后，而是在 prompt 里直接说明，让 AI 生成一个 JSON 格式的内容。课程中的例子是这样的（注意这个是 python 代码）：")]),e._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[e._v("prompt "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string-interpolation"}},[t("span",{pre:!0,attrs:{class:"token string"}},[e._v('f"""\nGenerate a list of three made-up book titles along \\\nwith their authors and genres.\nProvide them in JSON format with the following keys:\nbook_id, title, author, genre.\n"""')])]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br")])]),t("p",[e._v("我简单解释下，其关键是在 prompt 里跟 AI 说明，需要 AI 按照 JSON 格式输出内容。")])])}),[],!1,null,null,null);t.default=r.exports}}]);
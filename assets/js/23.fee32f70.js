(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{481:function(s,n,e){"use strict";e.r(n);var a=e(11),t=Object(a.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("head",[n("script",{attrs:{defer:"defer",src:"https://embed.trydyno.com/embedder.js"}}),s._v(" "),n("link",{attrs:{href:"https://embed.trydyno.com/embedder.css",rel:"stylesheet"}})]),s._v(" "),n("p",[s._v("Self-Consistency 自洽是对 Chain of Thought 的一个补充，它能让模型生成多个思维链，然后取最多数答案的作为最终结果。")]),s._v(" "),n("p",[s._v("按照 Xuezhi Wang 等人在 "),n("a",{attrs:{href:"https://arxiv.org/pdf/2203.11171.pdf",target:"_blank",rel:"noopener noreferrer"}},[s._v("2022 年发表的论文"),n("OutboundLink")],1),s._v(" 表明。当我们只用一个逻辑链进行优化时，模型依然有可能会算错，所以 XueZhi Wang 等人提出了一种新的方法，让模型进行多次运算，然后选取最多的答案作为最终结果：")]),s._v(" "),n("p",[s._v("就我目前使用下来，在 ChatGPT 上，其自洽性非常高，暂时没有遇到过出现多种答案的情况。查阅多份资料，我发现这个自洽性可能更多的用于评估模型的优劣，好的模型一般自洽性会比较高。")]),s._v(" "),n("p",[n("strong",[s._v("在此案例中，考虑如下多步推理问题：")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("Consider a multi-step reasoning problem like the following:\n\nQuestion: If a store has 10 apples and 8 oranges, and it sells 6 apples and 4 oranges, how many fruits are left in the store?\n\nInstead of directly answering the question, the chain-of-thought prompting would require the language model to produce a series of short sentences that mimic a human's reasoning process:\n\nThe store has 10 apples.\nThe store has 8 oranges.\n6 apples are sold.\n4 oranges are sold.\nThere are 10 - 6 = 4 apples left.\nThere are 8 - 4 = 4 oranges left.\nThe store now has 4 apples + 4 oranges = 8 fruits.\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("p",[s._v("Using self-consistency, the language model generates multiple reasoning paths:")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("Reasoning Path A:\n\nThe store has 10 apples.\nThe store has 8 oranges.\n6 apples are sold.\n4 oranges are sold.\nThere are 10 - 6 = 4 apples left.\nThere are 8 - 4 = 4 oranges left.\nThe store now has 4 apples + 4 oranges = 8 fruits.\nReasoning Path B:\n\nThe store initially has 10 apples and 8 oranges.\nIt sells 6 apples, so there are 10 - 6 = 4 apples left.\nIt sells 4 oranges, so there are 8 - 4 = 4 oranges left.\nThe store now has 4 apples + 4 oranges = 8 fruits.\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("p",[s._v("翻译过来则为：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("问题：如果一家商店有 10 个苹果和 8 个橙子，此时店里卖出了 6 个苹果和 4 个橙子，那么店里还剩下多少水果？\n\n思维链提示（chain-of-thought prompting）不是直接回答问题，而是要求语言模型生成一系列模仿人类推理过程的短句：\n\n商店有 10 个苹果。\n店里有 8 个橙子。\n卖了 6 个苹果。\n卖了 4 个橙子。\n还剩下 10 - 6 = 4 个苹果。\n剩下 8 - 4 = 4 个橙子。\n商店现在有 4 个苹果 + 4 个橙子 = 8 个水果。\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("p",[s._v("使用 Self-consistency，语言模型生成多个推理路径：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("推理路径A：\n\n商店有 10 个苹果。\n店里有 8 个橙子。\n卖了 6 个苹果。\n卖了 4 个橙子。\n还剩下 10 - 6 = 4 个苹果。\n剩下 8 - 4 = 4 个橙子。\n商店现在有 4 个苹果 + 4 个橙子 = 8 个水果。\n\n推理路径 B：\n\n商店最初有 10 个苹果和 8 个橙子。\n商店卖了 6 个苹果，所以还剩下 10 - 6 = 4 个苹果。\n商店卖了 4 个橙子，所以还剩下 8 - 4 = 4 个橙子。\n商店现在有 4 个苹果 + 4 个橙子 = 8 个水果。\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])]),n("p",[s._v("Self-consistency 从生成的多个推理路径中选择最一致的答案。在这个例子中，推理路径 A 和 B 都得出相同的答案（8 个水果）。可以看到这种做法增加了模型对最终答案正确的信心。")])])}),[],!1,null,null,null);n.default=t.exports}}]);
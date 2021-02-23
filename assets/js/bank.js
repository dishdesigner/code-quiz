let quizQuestions = [
    {
        question: "What is the HTML tag that contains JavaScript code?",
        answers: ["<script>", "<javascript>", "<scriptcode>", "<js>"] // answers[0] is always correct
    },
    {
        question: "How do we access this element in JS? <p id=\'name\'>Content</p>",
        answers: [
            "document.querySelector(\'#name\')",
            "document.getElementbyID(id=\'name\')",
            "document.querySelectorAll(p > id=\'name\')",
            "document.getElement(\'name\')",
        ]
    },
    {
        question: "What is the output of this Javascript code?\na = 8 + \"8\";\nconsole.log(a);",
        answers: ["88", "16", "runtime error: mismatched types", "undefined"]
    },
    {
        question: "Which is not a reserved JavaScript word?",
        answers: ["program", "interface", "throws", "short"]
    },
    {
        question: "What is the output of this Javascript code?\n\"30\" > 30 ? false : true",
        answers: ["true", "false", "30", "\"30\""]
    },
    {
        question: "Which statement is truthy?",
        answers: ["33 == \"33\"", "33 = \"33\"", "33 === \"33\"", "33 != \"33\""]
    },
    {
        question: "What operators cause Javascript to run a function?",
        answers: ["()", "--", "++", "{}"]
    },
    {
        question: "What company originally created Javascript?",
        answers: ["Netscape", "Oracle", "Sun Microsystems", "Microsoft"]
    },
    {
        question: "How long did it take Brendan Eich to create the first version of Javascript?",
        answers: ["10 days", "4 hours", "8 months", "2 years"]
    },
    {
        question: "Which word describes a function calling itself?",
        answers: ["recursion", "recall", "rerun", "closure"]
    },
];
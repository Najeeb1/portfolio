// Sample article data
const articles = [
    {
        id: 1,
        title: "Function Calling",
        author: "Najeebullah Hussaini",
        date: "April 2, 2025",
        category: "LLM",
        image: "../../images/functioncall.png",
        excerpt: "This article explores OpenAI's introduction of function calling in language models—a transformative feature that enables models like GPT-4 to interact with external tools through structured API calls. It marks a significant step toward building intelligent, modular agents capable of real-world reasoning and execution.",
        content: `
            <h2>Function Calling – Enabling Language Models to Interface with APIs</h2>
    
            <p><strong>OpenAI’s report</strong> introduces a novel mechanism whereby large language models (LLMs), such as GPT-4, can invoke external tools or APIs in a structured and controllable manner. This capability allows LLMs to transition from passive responders to active agents capable of interfacing with dynamic software environments.</p>
    
            <h3>Motivation and Objectives</h3>
            <p>The central motivation is to enable modular reasoning. Instead of returning only natural language, models can now return structured outputs, such as JSON, representing API calls. This allows LLMs to solve more complex tasks through tool use, improving reliability and extensibility.</p>
    
            <h3>Methodology</h3>
            <p>Functionality is enabled through OpenAPI-style definitions. The model is exposed to these schemas and learns to decide whether to invoke a function, which one to use, and with what parameters. The model generates a JSON output to trigger the function, with actual execution handled externally for safety and control.</p>
    
            <h3>Training and Generalization</h3>
            <p>Through supervised fine-tuning (SFT), the model learns to map natural language queries to function calls. Remarkably, it generalizes to unseen functions if they are properly described at runtime. The model can also chain multiple tool invocations for complex reasoning workflows.</p>
    
            <h3>Applications</h3>
                <ul>
                    <li>Information Retrieval (e.g., real-time weather or stock data)</li>
                    <li>Conversational Agents and Virtual Assistants</li>
                    <li>Software Engineering Tools (e.g., running or testing code)</li>
                    <li>Enterprise Automation through API integrations</li>
                </ul>
    
    
            <h3>Conclusion</h3>
            <p>This approach represents a shift from text generation to interactive, modular reasoning. Function calling enables safer, more powerful LLM applications by linking natural language with structured action in external systems.
            <br>
            Interesting? <a href = 'https://arxiv.org/abs/2312.04511'> Read the paper </a>
            </p>
        `
    }
   
];